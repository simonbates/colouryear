# Colour Year Hex Clock

This repository contains the source code for the [Colour Year Hex Clock](https://colouryear.page/) website, a clock that displays the progress of the year in hex colour codes.

The clock starts at `#000000` at midnight December 31 UTC and counts up to `#FFFFFF` at the end of the year. It displays the current hex code and sets the page background colour to the corresponding colour. The clock measures the progress of the year in 16,777,216 colours and will increment approximately every 1.9 seconds (year / 16,777,216).

The current hex colour code is displayed in either black or white, whichever provides the highest contrast using the [Web Content Accessibility Guidelines (WCAG) 2.1 luminance calculation](https://www.w3.org/WAI/WCAG21/Techniques/general/G17).

## Running Locally

### Prerequisites

- Node.js

### Install Dependencies

    > npm install

### Run

    > npx eleventy --serve

Open http://localhost:8080/

## License

MIT

## Dependencies

Colour Year Hex Clock uses these awesome open source projects and libraries:

| Dependency | License |
| :--------- | :------ |
| [github.com/11ty/eleventy](https://github.com/11ty/eleventy) | MIT License |
| [github.com/googlefonts/spacemono](https://github.com/googlefonts/spacemono) | SIL Open Font License 1.1 |
| [github.com/standard-things/esm](https://github.com/standard-things/esm) | MIT License |
| [github.com/substack/tape](https://github.com/substack/tape) | MIT License |
