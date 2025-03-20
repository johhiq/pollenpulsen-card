import { CARD_TYPE, CARD_SHOW_FORECAST, CARD_SHOW_INACTIVE } from './const';

/**
 * Configuration options for the Pollenpulsen card
 */
export interface PollenPulsenCardConfig {
  type: string;
  name: string;
  entity: string;
  show_header?: boolean;      // Toggle headline
  show_forecast?: boolean;    // Toggle forecast text
  show_period?: boolean;      // Toggle period display
  show_charts?: boolean;      // Toggle charts/graphs
  show_all_charts?: boolean;  // Show all pollen types in charts (including level 0)
  show_pollen_icon?: boolean; // Toggle pollen icon in charts
  show_inactive_summary?: boolean; // Show list of inactive pollen types
}

/**
 * Forecast information from the sensor
 */
export interface PollenForecast {
  text: string;
  startDate: string;
  endDate: string;
}

/**
 * Information about a specific pollen type and its level
 */
export interface PollenLevelInfo {
  type: string;
  level: number;
  description: string;
}

/**
 * Complete pollen data structure from the sensor
 */
export interface PollenData {
  region: string;
  forecast: PollenForecast;
  pollenLevels: PollenLevelInfo[];
}

/**
 * Valid pollen level values (0-7 where 0 means no values)
 */
export type PollenLevelValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

/**
 * Configuration for how to display a specific pollen type
 */
export interface PollenTypeConfig {
  name: string;
  icon?: string;
  show: boolean;
}

/**
 * Default configuration values, using constants from const.ts
 */
export const DEFAULT_CONFIG: PollenPulsenCardConfig = {
  type: CARD_TYPE,
  name: 'PollenPulsen',
  entity: '',
  show_header: true,
  show_forecast: true,
  show_period: true,
  show_charts: true,
  show_all_charts: false,
  show_pollen_icon: true,
  show_inactive_summary: false,
};
