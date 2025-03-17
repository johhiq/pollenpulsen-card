export interface PollenPulsenCardConfig {
  type: string;
  entity: string;
  show_inactive?: boolean;
  show_forecast?: boolean;
  pollen_types?: PollenTypeConfig[];
  custom_colors?: ColorConfig;
}

export interface PollenTypeConfig {
  name: string;
  icon?: string;
  show: boolean;
}

export interface ColorConfig {
  none: string;
  low: string;
  medium: string;
  high: string;
}
