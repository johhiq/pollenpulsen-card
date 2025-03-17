import { css } from "lit";

export const styles = css`
  :host {
    display: block;
  }
  
  ha-card {
    height: 100%;
  }
  
  .card-content {
    padding: 0 16px 16px;
  }
  
  .card-header {
    padding: 16px;
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .forecast {
    padding: 0 0 16px 0;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    margin-bottom: 16px;
  }
  
  .forecast-period {
    font-size: 0.9em;
    color: var(--secondary-text-color);
    margin-top: 8px;
  }
  
  .pollen-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
  }
  
  .pollen-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 8px;
    border-radius: 4px;
    background: var(--card-background-color, #fff);
  }
  
  .pollen-name {
    font-weight: bold;
    margin-bottom: 4px;
  }
  
  .pollen-level {
    font-size: 0.9em;
    margin-bottom: 4px;
  }
  
  .pollen-description {
    font-size: 0.9em;
    color: var(--secondary-text-color);
    margin-bottom: 8px;
  }
  
  .pollen-indicator {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    margin-top: 8px;
  }
`;
