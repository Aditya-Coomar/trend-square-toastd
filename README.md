<h1 align="center"> TrendSquare Application - Developer Documentation </h1> 

## Table of Contents
1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Viewing the Project](#viewing-the-project)
     - [Local Development](#local-development)
     - [Note](#note)
     - [Live Deployment](#live-deployment)
2. [Site Preview](#site-preview)
   - [Home Page](#home-page)
3. [Overview](#overview)
4. [Technologies and Frameworks Used](#technologies-and-frameworks-used)
5. [Thought Process Behind the Design](#thought-process-behind-the-design)
   - [Purpose](#purpose)
   - [User-Centric Features](#user-centric-features)
6. [Key Design and Development Choices](#key-design-and-development-choices)
   - [1. Dark Theme](#1-dark-theme)
   - [2. Two-Panel Layout](#2-two-panel-layout)
     - [Homepage](#homepage)
     - [Product Page](#product-page)
   - [3. Typography and Icons](#3-typography-and-icons)
   - [4. Navigation and CTAs](#4-navigation-and-ctas)
   - [5. Responsive Design](#5-responsive-design)
   - [6. Content Organization](#6-content-organization)
     - [Homepage](#homepage-1)
     - [Product Page](#product-page-1)


<!-- GETTING STARTED -->
## Getting Started
### Prerequisites
- npm
  ```sh
  npm install npm@latest -g
  ```
### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/Aditya-Coomar/trend-square-toastd.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the server
   ```sh
   npm run dev
   ```
### Viewing the Project
#### Local Development
After starting the development server:
1. Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```
2. The project will be running in development mode with hot-reload enabled, meaning any changes you make to the code will automatically update in the browser.
### Note
- Make sure port 3000 is available on your system for local development
- If the project runs on a different port, you'll see the correct URL in your terminal after running `npm run dev`
- For the best experience, use modern browsers like Chrome, Firefox, or Edge
#### Live Deployment
You can view the live version of the project at:
```
https://trend-square-toastd.vercel.app
```

## Site Preview

### Home Page
#### The home page displays a grid of trending products with video previews and interaction metrics.
![image](https://github.com/user-attachments/assets/25a67406-2666-4a8a-8711-847f9809d08f)


## Overview
The TrendSquare application is a dynamic platform designed to showcase the latest trends in fashion, beauty, and lifestyle. This documentation outlines the thought process, design choices, and functionality decisions made during development to ensure a seamless and engaging user experience.

## Technologies and Frameworks Used

- **HTML5, CSS3, TypeScript**: For the core structure and interactive elements.
- **NextJS**: Component-based architecture to enable a dynamic and modular UI.
- **Shadcn UI**: UI library for consistent UI design of elements.
- **Google Fonts and Icons**: Icon and Font Library.
- **Tailwind CSS**: For scalable and maintainable styling.


## Thought Process Behind the Design

### Purpose
The goal of TrendSquare is to:
- Provide users with an interactive and visually rich experience.
- Facilitate product discovery, personalization, and e-commerce functionality.
- Utilize modern design principles to ensure clarity, usability, and responsiveness.

### User-Centric Features
1. **Engagement**: Features like "Upvotes," "Loved by You," and "Add to Wishlist" enable users to interact with products and create a personalized catalog.
2. **Exploration**: The split-screen design with categories and video previews ensures users can quickly navigate and explore trending products.
3. **Purchase Readiness**: Detailed product pages with clear CTAs ("Add to Cart," "Buy Product") simplify the buying process.



## Key Design and Development Choices

### 1. Dark Theme
- **Purpose**: Enhances visual contrast, focuses attention on images/videos, and evokes a sense of luxury.
- **Implementation**: Used a dark color palette with accent highlights for buttons and icons to ensure readability and clarity.

### 2. Two-Panel Layout
#### Homepage:
- **Left Panel**: Displays categories with icons for easy navigation.
- **Right Panel**: Features video previews of products for visual storytelling.

#### Product Page:
- **Left Panel**: High-resolution product images displayed in a grid format.
- **Right Panel**: Comprehensive product details, engagement metrics, and CTAs.

### 3. Typography and Icons
- **Typography**:
  - Clean, sans-serif fonts chosen for readability on various screen sizes.
  - Font sizes and weights adjusted for hierarchy and emphasis (e.g., product names vs. descriptions).
- **Icons**:
  - Universal symbols like hearts, share icons, and cart icons improve usability and align with user expectations.

### 4. Navigation and CTAs
- **Prominent Buttons and Links**:
  - "Add to Wishlist," "Buy Product," and "Add to Cart" encourage user action.
  - "Visit Product Page" for more details enables deeper exploration.
- **Logical Content Flow**: Ensures users can easily locate what they need without unnecessary distractions.

### 5. Responsive Design
- **Mobile First**: Layouts and features designed with mobile users in mind and scaled for larger screens.
- **Flexbox/Grid**: CSS Grid and Flexbox used to implement adaptive layouts and maintain consistency across devices.

### 6. Content Organization
#### Homepage:
- Focused on visual engagement with categories and video previews.
- Subtle hover effects and animations guide user interactions.

#### Product Page:
- Organized with clear separation between visual content (images) and textual information (product details).
- Price, reviews, and upvotes displayed prominently for quick decision-making.


