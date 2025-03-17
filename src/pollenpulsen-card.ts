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
      show_charts: config.show_charts ?? true,
      show_inactive: config.show_inactive ?? false
    };
  }

  private getPollenData(): PollenData | null {
    const stateObj = this.hass.states[this.config.entity];
    if (!stateObj) return null;

    return {
      region: stateObj.attributes.region || 'Okänd region',
      forecast: stateObj.attributes.forecast || 'Ingen prognos tillgänglig'
    };
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const pollenData = this.getPollenData();
    if (!pollenData) {
      return html`
        <div class="card-content">
          Entity not found: ${this.config.entity}
        </div>
      `;
    }

    return html`
      <ha-card>
        ${this.config.show_title ? html`
          <div class="card-header">
            Pollenprognos ${pollenData.region}
          </div>
        ` : ''}
        ${this.config.show_forecast ? html`
          <div class="card-content">
            ${pollenData.forecast}
          </div>
        ` : ''}
      </ha-card>
    `;
  }
}
