# IMDb Play Button: One-Click Streaming from Any IMDb Page

> A lightweight Chrome extension that adds a Play button to IMDb movie and show pages, taking you straight to the matching title on playimdb.com. Manifest V3, no tracking, no account, under 50 KB.

[![Chrome Extension](https://img.shields.io/badge/Chrome_Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-success?style=for-the-badge)](manifest.json)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](content.js)

![IMDb Play Button on an IMDb page](https://github.com/user-attachments/assets/1e153850-2e1e-4209-ac87-bf94d155577b)

## What it does

You find a film on IMDb, read the reviews, decide to watch it, and then have to go searching for it somewhere else. This extension removes that step. It injects a Play button into the top-right of any IMDb title page that links directly to the matching page on playimdb.com.

## Features

- **One click**: no copying titles, no second search
- **Automatic**: the button appears on every IMDb title page, no configuration
- **Manifest V3**: built on the current Chrome extension platform
- **Private**: no analytics, no accounts, no data leaves your browser
- **Tiny**: a content script, a popup and icons, nothing else

## Installation

The extension is not on the Chrome Web Store, so load it unpacked:

1. Download or clone this repository.
   ```bash
   git clone https://github.com/AnubhavChaturvedi-GitHub/IMDBPLAY.git
   ```
2. Open Chrome and go to `chrome://extensions/`
3. Turn on **Developer mode** using the toggle in the top right.
4. Click **Load unpacked**.
5. Select the folder you just cloned.

The extension icon appears in your toolbar.

## Usage

Visit any IMDb title page, for example a movie or series page, and click the **Play** button in the top-right corner. You land on the corresponding page on playimdb.com.

## Project structure

| File | Purpose |
|---|---|
| `manifest.json` | Extension manifest, permissions and content script registration |
| `content.js` | Injected into IMDb pages, builds and places the Play button |
| `popup.html` | Toolbar popup markup |
| `popup.js` | Popup behaviour |
| `icon*.png` | Extension icons at 16, 48, 128 and 256 pixels |

## Compatibility

Works in Chrome, Edge, Brave and any other Chromium-based browser that supports Manifest V3.

## Contributing

Issues and pull requests are welcome.

## License

See the repository license file.

## Author

**Anubhav Chaturvedi**, founder of [NetHyTech](https://www.youtube.com/@NetHyTech), a developer community of 30,000+ members.

[![YouTube](https://img.shields.io/badge/YouTube-NetHyTech-FF0000?style=flat-square&logo=youtube&logoColor=white)](https://www.youtube.com/@NetHyTech)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anubhav-chaturvedi-/)

If this project saved you time, a star on the repo helps other people find it.
