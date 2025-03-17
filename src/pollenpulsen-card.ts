import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { HomeAssistant } from "custom-card-helpers";
import { Chart, DoughnutController, ArcElement } from "chart.js";
import { PollenPulsenCardConfig, PollenData } from "./types";
import { styles } from "./styles";

// Register required Chart.js components
Chart.register(DoughnutController, ArcElement);

@customElement("pollenpulsen-card")
export class PollenPulsenCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) private config!: PollenPulsenCardConfig;

  static styles = styles;

  // Define chart colors based on pollen levels
  private static readonly CHART_COLORS = {
    1: '#FFF4B3', // Low
    2: '#FFE066', // Low-Medium
    3: '#FFB84D', // Medium
    4: '#FF9933', // Medium-High
    5: '#FF6B6B', // High
    default: '#CCCCCC' // For levels 6-8 (inactive)
  } as const;

  static getConfigElement() {
    return document.createElement("pollenpulsen-card-editor");
  }

  setConfig(config: PollenPulsenCardConfig) {
    if (!config.entity) {
      throw new Error("Please define an entity");
    }
    this.config = config;
  }

  // Filter active pollen types based on configuration
  private _filterPollenData(pollenData: PollenData[]): PollenData[] {
    return pollenData.filter((pollen: PollenData) => 
      pollen.level <= 5 || this.config.show_inactive
    );
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const stateObj = this.hass.states[this.config.entity];
    if (!stateObj) {
      return html`
        <ha-card>
          <div class="pollen-card">
            Entity not found: ${this.config.entity}
          </div>
        </ha-card>
      `;
    }

    const pollenLevels = stateObj.attributes.pollen_levels || [];
    const forecast = stateObj.attributes.forecast?.text || "";

    return html`
      <ha-card>
        <div class="pollen-card">
          ${this.config.show_title ? html`
            <h2>${stateObj.attributes.friendly_name || "Pollen Forecast"}</h2>
          ` : ""}
          
          ${this.config.show_forecast && forecast ? html`
            <div class="forecast">${forecast}</div>
          ` : ""}

          <div class="pollen-list">
            ${this._filterPollenData(pollenLevels)
              .map((pollen: PollenData) => this._renderPollenItem(pollen))}
          </div>
        </div>
      </ha-card>
    `;
  }

  private _renderPollenItem(pollen: PollenData) {
    return html`
      <div class="pollen-item">
        <div class="chart-container" id="chart-${pollen.type}"></div>
        <div class="pollen-info">
          <div class="pollen-name">${pollen.type}</div>
          <div class="pollen-description">${pollen.description}</div>
        </div>
      </div>
    `;
  }

  protected updated() {
    // Update all charts after rendering
    const stateObj = this.hass.states[this.config.entity];
    if (stateObj?.attributes.pollen_levels) {
      this._filterPollenData(stateObj.attributes.pollen_levels)
        .forEach((pollen: PollenData) => this._updateChart(pollen));
    }
  }

  private _updateChart(pollen: PollenData) {
    const container = this.shadowRoot?.querySelector(`#chart-${pollen.type}`);
    if (!container) return;

    // Create chart using Chart.js
    new Chart(container as HTMLCanvasElement, {
      type: 'doughnut',
      data: this._getChartData(pollen.level),
      options: {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  private _getChartData(level: number) {
    return {
      datasets: [{
        data: [level, 5 - level],
        backgroundColor: [
          PollenPulsenCard.CHART_COLORS[level as keyof typeof PollenPulsenCard.CHART_COLORS] || 
          PollenPulsenCard.CHART_COLORS.default,
          '#F0F0F0'
        ],
        borderWidth: 0
      }]
    };
  }
}
