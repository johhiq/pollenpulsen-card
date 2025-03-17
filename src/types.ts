/**
 * Configuration options for the Pollenpulsen card
 */
export interface PollenPulsenCardConfig {
  type: string;
  entity: string;
  show_title?: boolean;
  show_forecast?: boolean;
  show_forecast_period?: boolean;
  show_charts?: boolean;
  show_inactive?: boolean;
}

/**
 * Forecast information
 */
export interface PollenForecast {
  text: string;
  startDate: string;
  endDate: string;
}

/**
 * Information about a specific pollen type
 */
export interface PollenLevelInfo {
  type: string;
  level: number;
  description: string;
}

/**
 * Complete pollen data structure
 */
export interface PollenData {
  region: string;
  forecast: PollenForecast;
  pollenLevels: PollenLevelInfo[];
}

/**
 * Possible pollen level values
 */
export type PollenLevelValue = 1 | 2 | 3 | 4 | 5;

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

/**
 * Default configuration values
 */
export const DEFAULT_CONFIG: Partial<PollenPulsenCardConfig> = {
  show_title: true,
  show_forecast: true,
  show_forecast_period: true,
  show_charts: true,
  show_inactive: false,
};
