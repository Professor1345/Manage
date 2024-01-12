# Manage Website

Welcome to the Manage Website project! This repository contains the code for a sophisticated and interactive website designed to streamline team management. The website utilizes HTML, CSS with Tailwind CSS, and JavaScript to deliver a seamless and engaging user experience.

## Website Link

[Manage Website](https://mannage.vercel.app/) <!-- Replace with the actual link when deployed -->

## Table of Contents

- [Overview](#overview)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
- [Challenges](#challenges)
- [Built with](#built-with)
- [Author](#author)
- [Getting Started](#getting-started)
- [Acknowledgments](#acknowledgments)

## Overview

### HTML

The HTML code (`index.html`) serves as the foundation for the Manage Website, defining the structure and content. Key sections include:

- **General Structure**: Contains the necessary meta tags, links to external stylesheets, and JavaScript files.

- **Header**: Incorporates a responsive navigation bar, logo, and mobile navigation buttons.

- **Main Sections**: Divided into multiple boxes such as the second box, third box, fourth box, and fifth box, each serving a specific purpose.

- **Footer**: Displays relevant information, navigation links, and a subscription input.

### CSS

The CSS code (`styles.css`) enhances the visual appeal of the website, providing styling and responsiveness. Highlights include:

- **General Styling**: Applies styling to the overall layout, including padding and background images.

- **Box Styling**: Defines specific styles for each section, such as the second box, third box, fourth box, and fifth box.

- **Testimonials Styling**: Custom styling for the testimonials section.

- **Footer Styling**: Styles the footer, including social media links, navigation, and subscription input.

### JavaScript

The JavaScript code (`code.js`) adds interactivity to the website, focusing on mobile navigation, slide transitions, and form validation. Key features include:

- **Mobile Navigation**: Implements functions (`openButton` and `closeButton`) for smooth toggling of the mobile navigation.

- **Slide Transitions**: Dynamically changes the content based on user interaction in different sections.

- **Form Validation**: Ensures valid email input in the subscription form.

## Challenges

Developing the Manage Website presented several challenges:

- **Responsive Design**: Ensuring a consistent and visually appealing layout across various devices.

- **Slide Transitions**: Overcoming the sliding issues in the image and text slideshow. It took the grace of God in resolving it.

- **Hover Effects**: Resolving hover issues, especially with provided SVG images.

- **Flexbox Usage**: Addressing miscalculations in flexbox usage and resolving minor padding and margin issues.

- **Background SVG**: Setting SVG for background is very much different from nromal Image. `Object-position` helped in addressing the issue of overflow and movement.

- **Form Validation**: I had to write and re-write the codes, but I later got it with the use of try, throw, catch, and finally in JS. Likewise uesd Regexto check the type 'email'.

- **Background Color With Opacity in Mobile Resolution Navbar**: I tried to use `::before` and `::after`, but didn't work, just keep stacking up above the content itself and I learnt that using `position: absolute` or `position: fixed` for the content and also for the `::before` and `::after` will always return the `::before` and `::after` to be at the top, even if uses `z-index` in all ways.

- **Third Box Transitioning**: Transitioning from Desktop to Mobile was very challenging in the subheader of the thirdbox. Issue with the numbers and also the subheader background from margin in Desktop to no-right margin (i.e background width reaching the right-end screen) in Mobile.  

## Built with

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript

## Author

- **Website**: [Hammed Bello](http://hammedbello.netlify.app/)
- **Twitter**: [@JavaNotScript](https://twitter.com/JavaNotScript)

## Getting Started

1. Clone this repository to your local machine.
2. Open 'index.html' in your preferred web browser to explore the Manage Website.

## Acknowledgments

- The [Tailwind CSS](https://tailwindcss.com/) framework greatly contributed to the responsive and stylish design.

Feel free to explore the code, modify it as needed, and contribute to the enhancement of the Manage Website!
