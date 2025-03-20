import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, hasConfigOrEntityChanged, LovelaceCard } from 'custom-card-helpers';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import {
  CARD_NAME,
  CARD_VERSION,
  CARD_TYPE,
  CARD_DEFAULT_CONFIG,
  POLLEN_COLORS,
  SVG_SEGMENT_PATH,
  CHART_CONFIG,
  POLLEN_DISPLAY_NAMES
} from './const';
import { styles } from './styles';
import { 
  PollenPulsenCardConfig, 
  PollenData, 
  PollenLevelInfo,
  PollenLevelValue 
} from './types';
import { POLLEN_ICONS } from './pollenIcons';

// Card initialization logging
console.info(
  `%c  ${CARD_NAME.toUpperCase()}  \n%c  Version ${CARD_VERSION}  `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

@customElement(CARD_NAME)
export class PollenPulsenCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) private config!: PollenPulsenCardConfig;
  @state() private _error?: string;

  static styles = styles;

  /**
   * Returns default configuration for the card
   */
  public static getStubConfig(): object {
    return CARD_DEFAULT_CONFIG;
  }

  /**
   * Validates and sets the card configuration
   */
  setConfig(config: PollenPulsenCardConfig): void {
    if (!config.entity) {
      throw new Error('Please define an entity');
    }

    if (!config.entity.startsWith('sensor.')) {
      throw new Error('Entity must be a sensor');
    }

    this.config = {
      ...CARD_DEFAULT_CONFIG,
      ...config,
    };
  }

  /**
   * Extracts and processes pollen data from the sensor
   */
  private getPollenData(): PollenData | null {
    if (!this.hass || !this.config) return null;
    
    const stateObj = this.hass.states[this.config.entity];
    if (!stateObj) return null;

    // Extract region name
    const region = stateObj.attributes.region || this.extractRegionFromEntity();
    
    // Extract forecast information
    const forecast = {
      text: stateObj.attributes.forecast?.text || 'No forecast available',
      startDate: stateObj.attributes.forecast?.start_date || '',
      endDate: stateObj.attributes.forecast?.end_date || ''
    };
    
    // Process pollen levels
    const pollenLevels = this.processPollenLevels(stateObj.attributes.pollen_levels);

    return { region, forecast, pollenLevels };
  }

  /**
   * Extracts region name from entity ID if not provided in attributes
   */
  private extractRegionFromEntity(): string {
    if (!this.config.entity) return 'Unknown region';
    
    const entityParts = this.config.entity.split('_');
    if (entityParts.length <= 1) return 'Unknown region';
    
    const regionFromEntity = entityParts[1];
    return regionFromEntity.charAt(0).toUpperCase() + regionFromEntity.slice(1);
  }

  /**
   * Processes raw pollen levels data into structured format
   */
  private processPollenLevels(rawLevels: any[]): PollenLevelInfo[] {
    if (!Array.isArray(rawLevels)) return [];

    return rawLevels.map(pollen => ({
      type: pollen.type,
      level: parseInt(pollen.level) || 0,
      description: pollen.description || ''
    }));
  }

  private getChartsToDisplay(pollenLevels: PollenLevelInfo[]): PollenLevelInfo[] {
    if (!this.config.show_charts) return [];
    
    return this.config.show_all_charts
      ? pollenLevels
      : pollenLevels.filter(pollen => pollen.level > 0);
  }

  private getInactivePollenList(pollenLevels: PollenLevelInfo[]): PollenLevelInfo[] {
    if (!this.config.show_inactive_summary) return [];
    
    return pollenLevels.filter(pollen => pollen.level === 0);
  }

  /**
   * Converts numeric level to descriptive text
   */
  private getLevelText(level: PollenLevelValue): string {
    const levelTexts = {
      0: "Inga halter",
      1: "Låga",
      2: "Låga till måttliga",
      3: "Måttliga",
      4: "Måttliga till höga",
      5: "Höga",
      6: "Höga till mycket höga",
      7: "Mycket höga"
    };
    return levelTexts[level] || "Okänd nivå";
  }

  /**
   * Renders a donut chart showing pollen levels
   */
  private renderDonutChart(pollen: PollenLevelInfo): TemplateResult {
    const level = pollen.level as PollenLevelValue;
    
    return html`
      <div class="pollen-chart">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="${CHART_CONFIG.SIZE}" 
          height="${CHART_CONFIG.SIZE}"
          viewBox="0 0 ${CHART_CONFIG.SIZE} ${CHART_CONFIG.SIZE}"
        >
          <path d="${SVG_SEGMENT_PATH}" 
                fill="${level >= 1 ? POLLEN_COLORS.LEVEL_1 : POLLEN_COLORS.INACTIVE}" />
          <path d="${SVG_SEGMENT_PATH}" 
                fill="${level >= 2 ? POLLEN_COLORS.LEVEL_2 : POLLEN_COLORS.INACTIVE}" 
                transform="rotate(60, ${CHART_CONFIG.CENTER}, ${CHART_CONFIG.CENTER})" />
          <path d="${SVG_SEGMENT_PATH}" 
                fill="${level >= 3 ? POLLEN_COLORS.LEVEL_3 : POLLEN_COLORS.INACTIVE}" 
                transform="rotate(120, ${CHART_CONFIG.CENTER}, ${CHART_CONFIG.CENTER})" />
          <path d="${SVG_SEGMENT_PATH}" 
                fill="${level >= 4 ? POLLEN_COLORS.LEVEL_4 : POLLEN_COLORS.INACTIVE}" 
                transform="rotate(180, ${CHART_CONFIG.CENTER}, ${CHART_CONFIG.CENTER})" />
          <path d="${SVG_SEGMENT_PATH}" 
                fill="${level >= 5 ? POLLEN_COLORS.LEVEL_5 : POLLEN_COLORS.INACTIVE}" 
                transform="rotate(240, ${CHART_CONFIG.CENTER}, ${CHART_CONFIG.CENTER})" />
          <path d="${SVG_SEGMENT_PATH}" 
                fill="${level >= 6 ? POLLEN_COLORS.LEVEL_6 : POLLEN_COLORS.INACTIVE}" 
                transform="rotate(300, ${CHART_CONFIG.CENTER}, ${CHART_CONFIG.CENTER})" />

          ${this.config.show_pollen_icon ? html`
            <svg 
              x="35"
              y="35"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path 
                d="${POLLEN_ICONS[pollen.type]}"
                fill="${level >= 1 ? POLLEN_COLORS[`LEVEL_${level}` as keyof typeof POLLEN_COLORS] : POLLEN_COLORS.INACTIVE}"
              />
            </svg>
          ` : ''}
        </svg>
        <div class="pollen-type">
          ${POLLEN_DISPLAY_NAMES[pollen.type] || pollen.type}
        </div>
        <div class="pollen-level">${this.getLevelText(level)}</div>
      </div>
    `;
  }

  /**
   * Determines if the card should update
   */
  protected shouldUpdate(changedProps: Map<string, unknown>): boolean {
    if (this._error) return true;
    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  /**
   * Renders the card
   */
  protected render(): TemplateResult {
    if (!this.config || !this.hass) {
      return this._showWarning('Invalid configuration');
    }

    const pollenData = this.getPollenData();
    if (!pollenData) {
      return html`<ha-card>No data available</ha-card>`;
    }

    const chartsToDisplay = this.getChartsToDisplay(pollenData.pollenLevels);
    const inactivePollenList = this.getInactivePollenList(pollenData.pollenLevels);

    return html`
      <ha-card>
        <div class="card-content">
          ${this.config.show_header ? html`
            <div class="pollen-header">
              <div class="region-name">Pollenprognos ${pollenData.region}</div>
            </div>
          ` : ''}

          ${this.config.show_forecast ? html`
            <div class="forecast-section">
              <div class="forecast-text">${pollenData.forecast.text}</div>
              ${this.config.show_period && pollenData.forecast.startDate && pollenData.forecast.endDate ? html`
                <div class="forecast-period">
                  ${pollenData.forecast.startDate} - ${pollenData.forecast.endDate}
                </div>
              ` : ''}
            </div>
          ` : ''}

          ${this.config.show_charts ? html`
            <div class="pollen-charts">
              ${chartsToDisplay.map(pollen => 
                this.renderDonutChart(pollen)
              )}
            </div>
          ` : ''}

          ${this.config.show_inactive_summary && inactivePollenList.length > 0 ? html`
            <div class="inactive-pollen">
              <div class="inactive-header">Inga pollenhalter rapporterade för:</div>
              <div class="inactive-list">
                ${inactivePollenList.map(pollen => html`
                  <div class="inactive-item">
                    <svg 
                      viewBox="0 0 50 50" 
                      width="20"
                      height="20"
                    >
                      <path 
                        d="${POLLEN_ICONS[pollen.type]}"
                        fill="${POLLEN_COLORS.INACTIVE_ICON}"
                      />
                    </svg>
                    <span>${POLLEN_DISPLAY_NAMES[pollen.type] || pollen.type}</span>
                  </div>
                `)}
              </div>
            </div>
          ` : ''}
        </div>
      </ha-card>
    `;
  }

  public getCardSize(): number {
    return 3;
  }

  private _showWarning(warning: string): TemplateResult {
    return html`
      <ha-card>
        <div class="warning">${warning}</div>
      </ha-card>
    `;
  }
}