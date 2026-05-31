document.addEventListener('DOMContentLoaded', () => {
    const scrollerInner = document.querySelector('.scroller-inner');
    
    if (!scrollerInner) return;

    // Clone all the cards inside the scroller to create a seamless infinite loop
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        // Add an attribute just to denote it's a clone (optional)
        duplicatedItem.setAttribute('aria-hidden', true);
        scrollerInner.appendChild(duplicatedItem);
    });
});
