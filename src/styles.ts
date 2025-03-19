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
    margin-bottom: 16px;
  }

  .region-name {
    font-size: 18px;
    font-weight: 500;
  }

  .forecast-section {
    margin-bottom: 16px;
  }

  .forecast-text {
    margin-bottom: 8px;
  }

  .forecast-period {
    font-size: 14px;
    opacity: 0.8;
  }

  /**
   * Charts grid layout
   */
  .pollen-charts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: var(--chart-gap);
    justify-items: center;
  }

  /**
   * Individual chart styling
   */
  .pollen-chart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: var(--chart-size);
    height: 120px;
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
    margin-top: 0px;
    text-align: center;
    width: 100%;
  }

  .pollen-level {
    font-size: 14px;
    opacity: 0.8;
    margin-top: 2px;
    text-align: center;
    width: 100%;
  }

  /* SVG element */
  svg {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
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
`;
