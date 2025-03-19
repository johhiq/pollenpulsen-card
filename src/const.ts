/**
 * Card metadata and version information
 */
export const CARD_VERSION = '1.0.0';
export const CARD_NAME = 'pollenpulsen-card';
export const CARD_DESCRIPTION = 'A card showing pollen forecasts';
export const CARD_TYPE = 'custom:pollenpulsen-card';

/**
 * Default display options
 */
export const CARD_SHOW_FORECAST = true;
export const CARD_SHOW_INACTIVE = false;

/**
 * Color scale for pollen levels (light yellow to dark red)
 */
export const POLLEN_COLORS = {
    LEVEL_1: '#fef0c0',
    LEVEL_2: '#fee9a5',
    LEVEL_3: '#feac56',
    LEVEL_4: '#fd8e3c',
    LEVEL_5: '#e95c30',
    LEVEL_6: '#d43d28',
    INACTIVE: '#eee'
} as const;

/**
 * Default configuration for the card
 */
export const CARD_DEFAULT_CONFIG = {
    type: CARD_TYPE,
    name: 'Pollen',
    show_header: true,
    show_forecast: true,
    show_period: true,
    show_charts: true,
    show_inactive: false,
} as const;

/**
 * SVG path data for donut chart segments
 * Starts at 3 degrees instead of 0 to create perfect vertical gaps
 */
export const SVG_SEGMENT_PATH = "M 50 16.1 A 35 35 0 0 1 78.3 30.3 L 66.2 38.7 A 20 20 0 0 0 50 30.6 Z";

/**
 * Chart dimensions and layout
 */
export const CHART_CONFIG = {
    SIZE: 100,
    CENTER: 50,
    OUTER_RADIUS: 35,
    INNER_RADIUS: 20,
    SEGMENT_ANGLE: 60,
} as const;