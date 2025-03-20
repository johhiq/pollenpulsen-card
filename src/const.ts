import { PollenPulsenCardConfig } from './types';

/**
 * Constants for the Pollenpulsen Card
 */

/**
 * Card metadata
 */
export const CARD_VERSION = '1.0.0';
export const CARD_NAME = 'pollenpulsen-card';
export const CARD_DESCRIPTION = 'A card showing pollen forecasts';
export const CARD_TYPE = 'pollenpulsen-card';

/**
 * Default display options
 */
export const CARD_SHOW_FORECAST = true;
export const CARD_SHOW_INACTIVE = false;

/**
 * Color scale for pollen levels
 * - INACTIVE: Used for segments with no pollen
 * - INACTIVE_ICON: Used for icons in the inactive pollen list
 * - LEVEL_1: Light yellow - Low levels
 * - LEVEL_2: Yellow - Low to moderate levels
 * - LEVEL_3: Light orange - Moderate levels
 * - LEVEL_4: Orange - Moderate to high levels
 * - LEVEL_5: Red - High levels
 * - LEVEL_6: Dark red - High to very high levels
 * - LEVEL_7: Dark red - Very high levels
 */
export const POLLEN_COLORS = {
    INACTIVE: '#eee',
    INACTIVE_ICON: '#999',
    LEVEL_1: '#fef0c0',
    LEVEL_2: '#fee9a5',
    LEVEL_3: '#feac56',
    LEVEL_4: '#fd8e3c',
    LEVEL_5: '#e95c30',
    LEVEL_6: '#e95c30',
    LEVEL_7: '#e95c30'
} as const;

/**
 * Default configuration for the card
 */
export const CARD_DEFAULT_CONFIG = {
    type: CARD_TYPE,
    name: 'Pollen',
    entity: '',
    show_header: true,
    show_forecast: true,
    show_period: true,
    show_charts: true,
    show_all_charts: false,
    show_pollen_icon: true,
    show_inactive_summary: false,
} as const;

/**
 * SVG path data for donut chart segments
 * Starts at 3 degrees instead of 0 to create perfect vertical gaps
 */
export const SVG_SEGMENT_PATH = "M 50 16.1 A 35 35 0 0 1 78.3 30.3 L 66.2 38.7 A 20 20 0 0 0 50 30.6 Z";

/**
 * Chart dimensions and layout configuration
 */
export const CHART_CONFIG = {
    SIZE: 100,          // Overall chart size in pixels
    CENTER: 50,         // Center point for rotation
    OUTER_RADIUS: 35,   // Outer radius of the donut
    INNER_RADIUS: 20,   // Inner radius of the donut
    SEGMENT_ANGLE: 60,  // Angle of each segment (360/6)
    ICON: {
        SIZE: 30,       // Size of the pollen icon
        X: 35,          // X position of the icon
        Y: 35           // Y position of the icon
    }
} as const;

/**
 * Display name mappings for pollen types
 * Maps API names to user-friendly display names
 */
export const POLLEN_DISPLAY_NAMES: { [key: string]: string } = {
    'Malörtsambrosia': 'Ambrosia',
    'Sälg och viden': 'Sälg/Vide'
};