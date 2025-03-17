# Pollenpulsen Card

A custom Lovelace card for Home Assistant that displays pollen forecasts using the Pollenpulsen integration.

## Installation

### HACS (Recommended)
1. Open HACS
2. Click on "Frontend"
3. Click the "+ Explore & Download repositories" button
4. Search for "Pollenpulsen Card"
5. Click "Download"

### Manual Installation
1. Download the `pollenpulsen-card.js` file from the latest release
2. Upload it to your Home Assistant instance
3. Add the reference to the card in your `ui-lovelace.yaml`:

```yaml
resources:
  - url: /local/pollenpulsen-card.js
    type: module
```

## Usage

```yaml
type: custom:pollenpulsen-card
entity: sensor.pollenprognos_stockholm
show_inactive: true
show_forecast: true
```

## Options

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| entity | string | **Required** | The entity_id of your Pollenpulsen sensor |
| show_inactive | boolean | true | Show inactive pollen types |
| show_forecast | boolean | true | Show forecast text |

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Watch for changes
npm run watch
```

## License

MIT License
