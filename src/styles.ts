import { css, unsafeCSS } from "lit";
import { POLLEN_COLORS, CHART_CONFIG } from './const';

export const styles = css`
  /**
   * Root styles and CSS variables
   */
  :host {
    display: block;
    --chart-size: ${CHART_CONFIG.SIZE}px;
    --chart-gap: 16px;
    /* Colors from constants */
    --chart-color-1: ${unsafeCSS(POLLEN_COLORS.LEVEL_1)};
    --chart-color-2: ${unsafeCSS(POLLEN_COLORS.LEVEL_2)};
    --chart-color-3: ${unsafeCSS(POLLEN_COLORS.LEVEL_3)};
    --chart-color-4: ${unsafeCSS(POLLEN_COLORS.LEVEL_4)};
    --chart-color-5: ${unsafeCSS(POLLEN_COLORS.LEVEL_5)};
    --chart-color-6: ${unsafeCSS(POLLEN_COLORS.LEVEL_6)};
    --chart-color-inactive: ${unsafeCSS(POLLEN_COLORS.INACTIVE)};
  }

  /**
   * Card structure
   */
  ha-card {
    height: 100%;
  }

  .card-content {
    padding: 16px;
  }

  /**
   * Header and forecast section
   */
  .pollen-header {
    text-align: left;
    margin-bottom: 16px;
  }

  .region-name {
    font-size: 1.5em;
    font-weight: 500;
  }

  .forecast-section {
    margin-bottom: 16px;
    text-align: left;
  }

  .forecast-text {
    margin-bottom: 8px;
  }

  .forecast-period {
    font-size: 0.7em;
    opacity: 0.8;
  }

  /**
   * Charts grid layout
   */
  .pollen-charts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 16px;
    width: 100%;
  }

  /**
   * Individual chart styling
   */
  .pollen-chart {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100px;
    max-width: 150px;
    width: 100%;
    margin: 0 auto;
  }

  .pollen-chart svg {
    width: var(--chart-size);
    height: var(--chart-size);
    display: block;
  }

  /* SVG elements */
  .pollen-chart path {
    transition: fill 0.3s ease;
  }

  /* Chart labels */
  .pollen-type {
    font-size: 16px;
    font-weight: 500;
    margin-top: 4px;
    text-align: center;
  }

  .pollen-level {
    font-size: 14px;
    opacity: 0.8;
    margin-top: 2px;
    text-align: center;
  }

  /* SVG element */
  svg {
    display: block;
    width: 100px;
    height: 100px;
    margin-bottom: 4px;
  }

  /**
   * Responsive design
   */
  @media (max-width: 400px) {
    :host {
      --chart-size: 80px;
      --chart-gap: 12px;
    }
  }

  /**
   * Theme compatibility
   */
  :host([dark]) {
    --chart-color-inactive: #2f2f2f;
  }

  /**
   * Error states
   */
  .warning {
    padding: 16px;
    color: var(--error-color, red);
  }

  .inactive-pollen {
    margin-top: 16px;
  }

  .inactive-header {
    margin-bottom: 8px;
  }

  .inactive-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 16px;
  }

  .inactive-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inactive-item svg {
    width: 30px;
    height: 30px;
  }

  .inactive-item span {
    margin-top: 4px;
    font-size: 0.9em;
    text-align: center;
  }
`;
