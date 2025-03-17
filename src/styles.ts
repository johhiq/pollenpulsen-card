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
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }
  
  .pollen-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
    padding: 16px;
  }
  
  .pollen-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .chart-container {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }

  .pollen-card {
    padding: 16px;
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
  
  .pollen-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }
  
  .pollen-item {
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 4px;
    background: var(--card-background-color, #fff);
  }
  
  .pollen-info {
    flex: 1;
    margin-right: 16px;
  }
  
  .pollen-name {
    font-weight: bold;
    margin-bottom: 4px;
  }
  
  .pollen-level {
    font-size: 0.9em;
    color: var(--secondary-text-color);
  }
  
  .chart-container {
    width: 60px;
    height: 60px;
  }
`;
