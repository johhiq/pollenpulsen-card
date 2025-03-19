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
3. Add the reference to the card in your `configuration.yaml`:

```yaml
lovelace:
  resources:
    - url: /local/pollenpulsen-card.js
      type: module
```

## Usage

Example configuration:
```yaml
type: custom:pollenpulsen-card
entity: sensor.pollenprognos_stockholm
name: "Pollen Stockholm"
show_header: true
show_forecast: true
show_period: true
show_charts: true
show_inactive: false
```

## Configuration Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | string | **Required** | Entity ID of your Pollenpulsen sensor |
| name | string | "Pollen" | Title of the card |
| show_header | boolean | true | Show card header/headline |
| show_forecast | boolean | true | Show forecast text |
| show_period | boolean | true | Show forecast period |
| show_charts | boolean | true | Show pollen charts |
| show_inactive | boolean | false | Show inactive pollen types |


## Features

- Visual representation of pollen levels with color-coded segments
- Support for both light and dark themes
- Responsive design that adapts to screen size
- Animated transitions between pollen levels
- Clear display of forecast text and dates

## Pollen Levels

The card displays pollen levels according to the following scale:

- Level 0: No pollen
- Level 1: Low levels
- Level 2: Low-moderate levels
- Level 3: Moderate levels
- Level 4: Moderate-high levels
- Level 5: High levels
- Level 6: Very high levels

Each level is represented by a distinct color in the donut chart segments:
- Level 1: Light yellow (#fef0c0)
- Level 2: Yellow (#fee9a5)
- Level 3: Light orange (#feac56)
- Level 4: Orange (#fd8e3c)
- Level 5: Dark orange (#e95c30)
- Level 6: Red (#d43d28)
- Inactive: Gray (#eee)

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Development with automatic rebuild
npm run watch
```

## Troubleshooting

If the card isn't displaying correctly:
1. Verify that the entity is properly configured
2. Check that the sensor is returning data
3. Clear your browser cache
4. Perform a full reload of the Home Assistant UI (Ctrl+F5)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
