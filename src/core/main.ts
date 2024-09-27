export function fadeIn(
    element: HTMLElement,
    duration: number,
    callback: Function,
): void {
    const startOpacity = 0;
    const endOpacity = 1;
    animateOpacity(element, startOpacity, endOpacity, duration, callback);
}

export function fadeOut(
    element: HTMLElement,
    duration: number,
    callback: Function,
): void {
    const startOpacity = 1;
    const endOpacity = 0;
    animateOpacity(element, startOpacity, endOpacity, duration, callback);
}

export function slideDown(
    element: HTMLElement,
    duration: number,
    callback: Function,
): void {
    animateHeight(element, 0, getFullHeight(element), duration, callback);
}

export function slideUp(
    element: HTMLElement,
    duration: number,
    callback: Function,
): void {
    animateHeight(element, getFullHeight(element), 0, duration, callback);
}

export function slideToggle(
    element: HTMLElement,
    duration: number,
    callback: Function,
): void {
    if (isElementVisible(element)) {
        slideUp(element, duration, callback);
    } else {
        slideDown(element, duration, callback);
    }
}

export function toggleClassOnScroll(
    element: HTMLElement,
    className: string,
    offset: number,
): void {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY || window.pageYOffset;
        if (scrollPosition > offset) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    });
}

export function smoothScrollToTop(duration: number): void {
    const start = window.pageYOffset || document.documentElement.scrollTop;
    const change = -start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = (): void => {
        currentTime += increment;
        const val = easeInOutQuad(currentTime, start, change, duration);
        window.scrollTo(0, val);
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };

    animateScroll();
}

export function animateOpacity(
    element: HTMLElement,
    startOpacity: number,
    endOpacity: number,
    duration: number,
    callback: Function,
): void {
    const startTime = performance.now();
    const animate = (timestamp: number): void => {
        const elapsed = timestamp - startTime;
        const progress = elapsed / duration;
        const opacity = easeInOutQuad(
            progress,
            startOpacity,
            endOpacity - startOpacity,
            1,
        );
        element.style.opacity = opacity.toString();
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else if (callback) {
            callback();
        }
    };
    requestAnimationFrame(animate);
}

export function animateHeight(
    element: HTMLElement,
    startHeight: number,
    endHeight: number,
    duration: number,
    callback: Function,
): void {
    const startTime = performance.now();
    const animate = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = elapsed / duration;
        const height = easeInOutQuad(
            progress,
            startHeight,
            endHeight - startHeight,
            1,
        );
        element.style.height = height + 'px';

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.style.height = ''; // Reset height to allow content to flow
            if (callback) {
                callback();
            }
        }
    };
    requestAnimationFrame(animate);
}

export function getFullHeight(element: HTMLElement): number {
    const style = getComputedStyle(element);
    const height = element.offsetHeight;
    const borderTop = parseFloat(style.borderTopWidth);
    const borderBottom = parseFloat(style.borderBottomWidth);
    const paddingTop = parseFloat(style.paddingTop);
    const paddingBottom = parseFloat(style.paddingBottom);
    return height + borderTop + borderBottom + paddingTop + paddingBottom;
}

export function isElementVisible(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

export function easeInOutQuad(
    t: number,
    b: number,
    c: number,
    d: number,
): number {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
}

export function smoothScrollToPosition(
    targetPosition: number,
    duration: number,
): void {
    const start = window.pageYOffset || document.documentElement.scrollTop;
    const change = targetPosition - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = (): void => {
        currentTime += increment;
        const val = easeInOutQuad(currentTime, start, change, duration);
        window.scrollTo(0, val);
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };

    animateScroll();
}

export function smoothScrollToElement(
    element: HTMLElement,
    duration: number,
): void {
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    smoothScrollToPosition(elementTop, duration);
}

export function scrollToElement(element: HTMLElement): void {
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: elementTop,
        behavior: 'auto',
    });
}

export function scrollToTop(duration: number): void {
    smoothScrollToPosition(0, duration);
}

export function scrollToBottom(duration: number): void {
    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
    );
    const scrollPosition = documentHeight - window.innerHeight;
    smoothScrollToPosition(scrollPosition, duration);
}

export function scrollToPosition(element: HTMLElement, position: number): void {
    element.scrollTop = position;
}

export function getScrollPosition(element: HTMLElement): number {
    return element.scrollTop;
}

export function disableScroll(): void {
    document.body.style.overflow = 'hidden';
}

export function enableScroll(): void {
    document.body.style.overflow = '';
}

export function getViewportScrollTop(): number {
    return window.scrollY || window.pageYOffset;
}

export function getViewportScrollLeft(): number {
    return window.scrollX || window.pageXOffset;
}

export function getDocumentScrollTop(): number {
    return document.documentElement.scrollTop || document.body.scrollTop;
}

export function getDocumentScrollLeft(): number {
    return document.documentElement.scrollLeft || document.body.scrollLeft;
}
