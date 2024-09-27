# Butility Style Utils

@butility/style provides utilities to manage web fonts, CSS styles, and color manipulations for web development. It includes tools for managing themes, applying dynamic styles, and handling color operations.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
    - [Theme Management](#theme-management)
    - [Font Management](#font-management)
    - [CSS Style Management](#css-style-management)
    - [Color Utilities](#color-utilities)
3. [API Reference](#api-reference)
    - [ThemeManager](#thememanager)
    - [Font Utilities](#font-utilities)
    - [CSS Utilities](#css-utilities)
    - [Color Utilities](#color-utilities)

## Installation

To install the package, you can use npm or CDN:

```sh
npm install @butility/style
```

```html
<!-- To use all the functions and methods -->
<script src="https://unpkg.com/@butility/style@latest/style.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/style@latest/style.js"></script>
<!-- To use Color utils -->
<script src="https://unpkg.com/@butility/style@latest/color.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/style@latest/color.js"></script>
<!-- To use CSS utils -->
<script src="https://unpkg.com/@butility/style@latest/css.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/style@latest/css.js"></script>
<!-- To use Font Utils -->
<script src="https://unpkg.com/@butility/style@latest/font.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/style@latest/font.js"></script>
<!-- To use state utils -->
<script src="https://unpkg.com/@butility/style@latest/state.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/style@latest/state.js"></script>
<!-- To use theme utils -->
<script src="https://unpkg.com/@butility/style@latest/theme.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/style@latest/theme.js"></script>
```

## Usage

### Theme Management

You can manage multiple themes for your web app using the `ThemeManager` class.

```js
import { ThemeManager } from '@butility/style';
import { button, body } from '@butility/dom/html'; // Used for example only; you can install it.

// Define your themes
const themes = {
    light: {
        background: '#ffffff',
        color: '#000000',
        // Add more properties as needed
    },
    dark: {
        background: '#000000',
        color: '#ffffff',
        // Add more properties as needed
    },
};

// Instantiate ThemeManager with the defined themes
const themeManager = new ThemeManager(themes);

// Function to toggle between light and dark themes
function toggleTheme() {
    const currentTheme = themeManager.getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    themeManager.setTheme(newTheme);
}

// Initial setup to apply the current theme
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = themeManager.getCurrentTheme();
    if (currentTheme) {
        themeManager.setTheme(currentTheme);
    } else {
        themeManager.setTheme('light');
    }
});

// Example of a button to toggle themes
const toggleButton = button('Toggle Theme');
toggleButton.onclick = toggleTheme;
body(toggleButton);
```


### Font Management

Use the `Font` module to load web fonts dynamically, either synchronously or asynchronously.

#### Load Web Font

```js
import { loadWebFont, loadWebFontAsync } from '@butility/style/font';

// Loading a Google Font using loadWebFont 
loadWebFont({
    family: 'Roboto',
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    elements: ['body', 'h1', 'p'], // Apply to body, h1, and p tags
    fallbackFonts: ['Arial', 'sans-serif'],
    display: 'swap',
    lazyLoad: false,  // Load immediately, if true, then unless the specified elementis in view the font won't load
    preload: true,    // Preload for better performance
});

// Asynchronously loading a Google Font
loadWebFontAsync({
    family: 'Open Sans',
    weight: '600',
    style: 'normal',
    subsets: ['latin'],
    elements: ['body', 'h1'],
    fallbackFonts: ['Verdana', 'sans-serif'],
    display: 'swap',
    lazyLoad: true,   // Load font lazily when elements are visible
    preload: true,    // Preload the font for better performance
    timeout: 3000,    // Set a 3-second timeout
    onLoadSuccess: () => {
        console.log('Font successfully loaded!');
    },
    onLoadError: (error) => {
        console.error('Error loading font:', error);
    },
    observerOptions: { threshold: 0.5 }, // Load font when 50% of the element is visible
})
    .then(() => {
        console.log('Font is applied to the elements.');
    })
    .catch((error) => {
        console.error('Font loading failed:', error);
    });
```

### CSS Style Management

Manipulate styles dynamically in your web application.

```js
import { addStyles, getAllStyles, removeStylesByProps } from '@butility/style';

// Add styles to elements
addStyles(document.body, { backgroundColor: '#f0f0f0', color: '#333' });

// Get all styles of an element
const styles = getAllStyles(document.body);

// Remove specific styles from an element
removeStylesByProps(document.body, 'backgroundColor', 'color');
```

### Color Utilities

Perform various color manipulations such as generating gradients or converting between color formats.

```js
import { lightenColor, hexToRgb, generateColorGradient } from '@butility/style';

// Lighten a color
const lighterColor = lightenColor('#ff0000', 10);

// Convert HEX to RGB
const rgbColor = hexToRgb('#ff0000');

// Generate a color gradient
const gradient = generateColorGradient('#ff0000', '#00ff00', 5);
```

## API Reference

### ThemeManager

A utility for managing themes in a web application.

#### Methods:

- **createTheme(name: string, theme: object):** Creates a new theme.
- **setTheme(name: string):** Sets the current theme by name.
- **getCurrentTheme(): string | null:** Returns the current theme.
- **loadThemeFromStorage(): void (private)**: Loads the theme from local storage.
- **detectSystemTheme(): void (private)**: Detects the system theme (light/dark) and applies it.
- **watchSystemTheme(): void (private)**: Watches for system theme changes and updates the theme accordingly.

### Font Utilities

#### `loadWebFont(options: FontOptions): void`

Synchronously loads a web font.

##### Options:

- `family`: The font family to load (e.g., `'Roboto'`).
- `weight`: (Optional) Font weight, defaults to `'400'`.
- `style`: (Optional) Font style, defaults to `'normal'`.
- `elements`: (Optional) Elements to apply the font to (default: `['body']`).
- `fallbackFonts`: (Optional) Array of fallback fonts.
- `preload`: (Optional) Whether to preload the font.
- `lazyLoad`: (Optional) Lazy load the font using IntersectionObserver.

#### `loadWebFontAsync(options: FontOptions): Promise<void>`

Asynchronously loads a web font. Includes callbacks for success and error handling.

##### Additional Options:

- `onLoadSuccess`: (Optional) Callback when the font is loaded successfully.
- `onLoadError`: (Optional) Callback when the font fails to load.
- `timeout`: (Optional) Timeout in milliseconds for loading the font.

### CSS Utilities

#### `addStyles(elements: HTMLElement | HTMLElement[], styles: CSSStyleDeclaration): void`

Dynamically adds CSS styles to the specified elements.

#### `getAllStyles(element: HTMLElement): CSSStyleDeclaration`

Retrieves all styles applied to a specified element.

#### `removeStylesByProps(element: HTMLElement, ...properties: string[]): void`

Removes specified CSS properties from an element.

#### `resetStyles(element: HTMLElement, styles: CSSStyleDeclaration): void`

Resets an element's styles to a given state.

#### `load(url: string): StyleResult`

Loads external CSS and returns its style object.

#### `loadAsync(url: string): Promise<StyleResult>`

Asynchronously loads external CSS.

### Color Utilities

#### `calculateLuminance(color: string): number`

Calculates the luminance of a given color.

#### `colorBrightness(color: string): number`

Determines the brightness level of a color.

#### `colorContrast(color1: string, color2: string): number`

Calculates the contrast between two colors.

#### `darkenColor(color: string, percentage: number): string`

Darkens a color by a given percentage.

#### `lightenColor(color: string, percentage: number): string`

Lightens a color by a given percentage.

#### `generateColorGradient(startColor: string, endColor: string, steps: number): string[]`

Generates a gradient between two colors over a given number of steps.

#### `generateRandomColor(): string`

Generates a random color.

#### `hexToRgb(hex: string): { r: number, g: number, b: number }`

Converts a hex color code to its RGB components.

#### `rgbToHex(r: number, g: number, b: number): string`

Converts RGB values to a hex color code.

## License

MIT License. See [LICENSE](LICENSE) for details.

