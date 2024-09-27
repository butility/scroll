# Butility Scroll Library

## Overview

The `@butility/scroll` library provides a set of utilities for handling various scrolling and animation effects in the browser, including scrolling to elements, smooth scrolling, visibility checks, and animations like fading and sliding. It simplifies interactions with the DOM by offering easy-to-use functions for common scroll-based behaviors.

## Features

- Smooth scrolling to specific elements or positions.
- Animations for fading in/out, sliding up/down elements.
- Utility functions for checking element visibility and scroll positions.
- Scroll disabling and enabling for controlled user experience.
- Customizable easing function for smooth animations.

## Installation

To install the package, you can use npm or CDN:

```sh
npm install @butility/scroll
```

```html
<!-- To use all the functions and methods -->
<script src="https://unpkg.com/@butility/scroll@latest/scroll.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/scroll@latest/scroll.js" type="module"></script>
```

## Usage Example

```javascript
import { smoothScrollToElement, fadeIn, disableScroll } from '@butility/scroll';

// Smooth scroll to an element with a duration of 500ms
smoothScrollToElement(document.querySelector('#target-element'), 500);

// Fade in an element over 1 second
fadeIn(document.querySelector('.fade-in-element'), 1000, () => {
    console.log('Element is now visible');
});

// Disable scrolling
disableScroll();
```

## Functions

### Animations

- **`animateHeight(element, startHeight, endHeight, duration, callback)`**
  Animates the height of an element from `startHeight` to `endHeight` over a specified `duration`.

- **`animateOpacity(element, startOpacity, endOpacity, duration, callback)`**
  Animates the opacity of an element between specified values.

- **`fadeIn(element, duration, callback)`**
  Gradually fades in an element over the specified duration.

- **`fadeOut(element, duration, callback)`**
  Gradually fades out an element over the specified duration.

- **`slideDown(element, duration, callback)`**
  Slides down an element, revealing its content.

- **`slideUp(element, duration, callback)`**
  Slides up an element, hiding its content.

- **`slideToggle(element, duration, callback)`**
  Toggles the visibility of an element by sliding it up or down.

### Scroll Utilities

- **`disableScroll()`**
  Disables scrolling on the page.

- **`enableScroll()`**
  Re-enables scrolling on the page if previously disabled.

- **`getDocumentScrollLeft()`**
  Returns the number of pixels the document is scrolled horizontally.

- **`getDocumentScrollTop()`**
  Returns the number of pixels the document is scrolled vertically.

- **`getViewportScrollLeft()`**
  Returns the number of pixels the viewport is scrolled horizontally.

- **`getViewportScrollTop()`**
  Returns the number of pixels the viewport is scrolled vertically.

- **`getFullHeight(element)`**
  Returns the full height of the element including any hidden or overflow content.

- **`getScrollPosition(element)`**
  Returns the current scroll position of the given element.

- **`isElementVisible(element)`**
  Checks if the element is visible within the current viewport.

### Scrolling

- **`scrollToBottom(duration)`**
  Smoothly scrolls to the bottom of the page.

- **`scrollToElement(element)`**
  Scrolls the page to the specified element.

- **`scrollToPosition(element, position)`**
  Scrolls the specified element to a specific position.

- **`scrollToTop(duration)`**
  Smoothly scrolls to the top of the page.

- **`smoothScrollToElement(element, duration)`**
  Smoothly scrolls to the specified element within a given duration.

- **`smoothScrollToPosition(targetPosition, duration)`**
  Smoothly scrolls the page to a specific vertical position.

- **`smoothScrollToTop(duration)`**
  Smoothly scrolls the page to the top within a given duration.

### Easing Function

- **`easeInOutQuad(t, b, c, d)`**
  Provides an ease-in-out quadratic timing function for smooth animations. This can be used with animations like scrolling and sliding.

### Advanced

- **`toggleClassOnScroll(element, className, offset)`**
  Toggles a class on an element when scrolling reaches a certain offset.

## Contributing

Feel free to contribute by submitting issues or pull requests to improve this library.

## License

This project is licensed under the [MIT License](LICENSE.md).