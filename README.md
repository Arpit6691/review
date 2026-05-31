# Premium Testimonial Section

A visually stunning, dark-themed testimonial section built with pure HTML, CSS, and JavaScript. Inspired by modern SaaS landing pages.

## ✨ Features

- **Infinite Scrolling:** Smooth, continuous horizontal scrolling of testimonial cards.
- **Glassmorphism Design:** Beautiful semi-transparent cards with a dark mode aesthetic (`rgba(255,255,255,0.03)`).
- **Responsive Layout:** Adapts perfectly to mobile and tablet screens.
- **Micro-interactions:** Cards feature a soft lift and dynamic glowing shadow on hover.
- **Zero Dependencies:** Built entirely with Vanilla CSS and JavaScript. No external libraries required (other than the Inter font).

## 📂 Project Structure

- `index.html`: The semantic layout and markup, including placeholder avatars and text.
- `style.css`: Contains all styling, custom properties, responsive queries, and the auto-scroll keyframe animations.
- `script.js`: A lightweight script that duplicates the testimonial cards dynamically to achieve the seamless infinite scrolling effect.

## 🚀 How to Run

Since this is a static frontend project, you don't need any complex build tools.

1. **Directly in Browser:** Double-click the `index.html` file to view it in your default web browser.
2. **VS Code Live Server:** Right-click `index.html` and select "Open with Live Server" to get automatic hot-reloading as you make changes.

## 🛠️ Customization

To modify the testimonials, open `index.html` and edit the content within the `<div class="scroller-inner">`. If you add or remove cards, the `script.js` will automatically duplicate whatever content is present to maintain the infinite scroll effect.
