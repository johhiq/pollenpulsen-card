import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PollenPulsenCardConfig } from "./types";
import { HomeAssistant } from "custom-card-helpers";

@customElement("pollenpulsen-card-editor")
export class PollenPulsenCardEditor extends LitElement {
  @property({ attribute: false }) private _config!: PollenPulsenCardConfig;
  @property({ attribute: false }) public hass!: HomeAssistant;

  setConfig(config: PollenPulsenCardConfig) {
    this._config = config;
  }

  render() {
    if (!this._config) {
      return html``;
    }

    return html`
      <div class="card-config">
        <ha-entity-picker
          .label="Entity"
          .hass=${this.hass}
          .value=${this._config.entity}
          .configValue=${"entity"}
          @value-changed=${this._valueChanged}
          allow-custom-entity
        ></ha-entity-picker>
      </div>
    `;
  }

  private _valueChanged(ev: CustomEvent) {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target as any;
    const configValue = target.configValue as keyof PollenPulsenCardConfig;
    if (this._config[configValue] === target.value) {
      return;
    }
    if (configValue) {
      this._config = {
        ...this._config,
        [configValue]: target.value,
      };
    }
    const event = new CustomEvent("config-changed", {
      detail: { config: this._config },
    });
    this.dispatchEvent(event);
  }
}
