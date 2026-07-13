

<div align="center">
  <h1>📱 Minimalist QR Code Generator</h1>
  <p>A sleek, client-side web application that instantly generates high-quality QR codes from any valid URL or text.</p>
  
  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
</div>

<br />

Sample screenshot of the website:
<img width="1918" height="970" alt="image" src="https://github.com/user-attachments/assets/19808181-5235-4534-8a80-86dbaa0f9184" />

##  Overview

This project is a lightweight, frontend-only application designed to convert URLs and text strings into scannable QR codes instantly. It completely bypasses the need for backend APIs by leveraging native browser capabilities and the `qrious` JavaScript library for rapid, client-side canvas rendering. 

##  Built With

*   **HTML5 & CSS3:** Utilizing custom CSS variables, flexbox, and modern UI principles (soft shadows, translucent backgrounds, borderless inputs) to create a minimalist, floating-card aesthetic.
*   **Vanilla JavaScript (ES6+):** For DOM manipulation, state management, and event handling.
*   **[QRious](https://github.com/neocotic/qrious):** A pure JavaScript library used to compute the QR matrix and draw it directly onto an HTML5 `<canvas>`.

---

##  Technical Implementation & Use of `qrious`

This project heavily utilizes the `qrious` library to handle the complex mathematics of QR encoding. Here is how it is implemented under the hood:

### 1. Client-Side `<canvas>` Rendering
Instead of generating an image (`<img>`) via a third-party server API, `qrious` calculates the data matrix locally and paints it onto an HTML5 `<canvas>`. This ensures zero latency, offline capability, and complete data privacy for the user.

### 2. Optimized Instance Management
To prevent memory leaks and visual artifacts, the application utilizes a **single-instance pattern**:
*   The `QRious` object is instantiated only once upon page load.
*   When a user clicks "Generate", the app simply updates the `qr.value` property. 
*   `qrious` automatically detects this state change and redraws the canvas in place, rather than stacking new generator instances on top of each other.

### 3. Preventing Canvas Artifacts (Moiré Patterns)
A major technical hurdle in canvas-based QR generation is anti-aliasing blur (often resulting in unrecognizable "static"). This project solves this by strictly enforcing 1:1 pixel mapping:
*   The internal `size` configuration in the JavaScript `qrious` setup exactly matches the fixed CSS `width` and `height` (200x200px).
*   CSS `padding` is entirely stripped from the `<canvas>` element to ensure the drawing area is not artificially compressed by the browser's rendering engine.

---

## 🚀 Getting Started

Since this is a static frontend project, no package managers (like npm) or build tools are required. 

### Prerequisites
*   A modern web browser.

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Bhojrajsahu07/QRCodeGenerator.git
