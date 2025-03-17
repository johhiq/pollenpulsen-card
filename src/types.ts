export interface PollenPulsenCardConfig {
  entity: string;
  show_title?: boolean;
  show_forecast?: boolean;
  show_charts?: boolean;
  show_inactive?: boolean;
}

export interface PollenData {
  type: string;
  type_id: number;
  level: number;
  description: string;
}

export type PollenLevel = 1 | 2 | 3 | 4 | 5;

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

export const DEFAULT_CONFIG: Partial<PollenPulsenCardConfig> = {
  show_title: true,
  show_forecast: true,
  show_charts: true,
  show_inactive: false,
};
