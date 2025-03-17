import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { HomeAssistant } from "custom-card-helpers";
import { Chart, DoughnutController, ArcElement } from "chart.js";
import { PollenPulsenCardConfig } from "./types";

Chart.register(DoughnutController, ArcElement);

@customElement("pollenpulsen-card")
export class PollenPulsenCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) private config!: PollenPulsenCardConfig;

  static getConfigElement() {
    return document.createElement("pollenpulsen-card-editor");
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card-content {
        padding: 16px;
      }
    `;
  }

  setConfig(config: PollenPulsenCardConfig) {
    if (!config.entity) {
      throw new Error("Please define an entity");
    }
    this.config = config;
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const stateObj = this.hass.states[this.config.entity];
    if (!stateObj) {
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
        <div class="card-content">
          <h2>${stateObj.attributes.friendly_name || ""}</h2>
        </div>
      </ha-card>
    `;
  }
}
