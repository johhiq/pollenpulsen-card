import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { PollenPulsenCardConfig, PollenData } from "./types";
import { styles } from "./styles";

@customElement('pollenpulsen-card')
export class PollenPulsenCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property() private config!: PollenPulsenCardConfig;

  static styles = styles;

  setConfig(config: PollenPulsenCardConfig) {
    if (!config.entity) {
      throw new Error('Please define an entity');
    }
    this.config = {
      type: config.type,
      entity: config.entity,
      show_title: config.show_title ?? true,
      show_forecast: config.show_forecast ?? true,
      show_forecast_period: config.show_forecast_period ?? true,
      show_charts: config.show_charts ?? true,
      show_inactive: config.show_inactive ?? false
    };
  }

  private getPollenData(): PollenData | null {
    if (!this.hass || !this.config) {
      return null;
    }
    
    const stateObj = this.hass.states[this.config.entity];
    if (!stateObj) {
      return null;
    }

    // Hämta region från attributen - använd faktiskt regionnamn
    const region = stateObj.attributes.region || 'Okänd region';
    
    // Hämta forecast från attributen
    let forecastText = 'Ingen prognos tillgänglig';
    if (stateObj.attributes.forecast && stateObj.attributes.forecast.text) {
      forecastText = stateObj.attributes.forecast.text;
    }
    
    // Hämta datum för prognosen
    let startDate = '';
    let endDate = '';
    if (stateObj.attributes.forecast) {
      startDate = stateObj.attributes.forecast.start_date || '';
      endDate = stateObj.attributes.forecast.end_date || '';
    }
    
    // Hämta pollennivåer
    const pollenLevels: any[] = [];
    if (stateObj.attributes.pollen_levels && Array.isArray(stateObj.attributes.pollen_levels)) {
      stateObj.attributes.pollen_levels.forEach((pollen: any) => {
        // Visa endast aktiva pollen om show_inactive är false
        if (pollen.type && (this.config.show_inactive || parseInt(pollen.level) > 0)) {
          pollenLevels.push({
            type: pollen.type,
            level: parseInt(pollen.level),
            description: pollen.description || ''
          });
        }
      });
    }

    return {
      region,
      forecast: {
        text: forecastText,
        startDate,
        endDate
      },
      pollenLevels
    };
  }

  private getLevelColor(level: number): string {
    if (level === 0) return 'var(--success-color, green)';
    if (level <= 2) return 'var(--warning-color, #f9b42d)';
    if (level <= 4) return 'var(--warning-color, orange)';
    return 'var(--error-color, red)';
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const pollenData = this.getPollenData();
    if (!pollenData) {
      return html`
        <ha-card>
          <div class="card-content">
            Entity not found: ${this.config.entity}
          </div>
        </ha-card>
      `;
    }

    return html`
      <ha-card>
        ${this.config.show_title ? html`
          <div class="card-header">
            Pollenprognos ${pollenData.region}
          </div>
        ` : ''}
        
        <div class="card-content">
          ${this.config.show_forecast ? html`
            <div class="forecast">
              ${pollenData.forecast.text}
              ${this.config.show_forecast_period && pollenData.forecast.startDate && pollenData.forecast.endDate ? html`
                <div class="forecast-period">
                  Period: ${pollenData.forecast.startDate} - ${pollenData.forecast.endDate}
                </div>
              ` : ''}
            </div>
          ` : ''}
          
          <div class="pollen-grid">
            ${pollenData.pollenLevels.map(pollen => html`
              <div class="pollen-item">
                <div class="pollen-name">${pollen.type}</div>
                <div class="pollen-level">Nivå: ${pollen.level}</div>
                <div class="pollen-description">${pollen.description}</div>
                ${this.config.show_charts ? html`
                  <div class="pollen-indicator" 
                       style="background-color: ${this.getLevelColor(pollen.level)}">
                    ${pollen.level}
                  </div>
                ` : ''}
              </div>
            `)}
          </div>
        </div>
      </ha-card>
    `;
  }
}
