import { css } from "lit";

export const styles = css`
  :host {
    display: block;
  }
  
  ha-card {
    height: 100%;
  }
  
  .card-content {
    padding: 16px;
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
`;
