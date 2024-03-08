# CURRENCY CONVERTER APP

## Demonstration Link:
https://currency-converter-app-with-api-rumeysa-gelgis-projects.vercel.app/

## Description:
Currency Converter is a simple and efficient tool for instant currency conversions and real-time exchange rate updates.

## Features:
-	Up-to-the-minute updates on exchange rates
- 160+ currency options available
- Responsive and mobile-friendly for all devices
- Single-page application
- Server-side rendering

## Tech Stack:
-	**Next.js:** a JavaScript framework for building full-stack web applications with React
- **Tailwind CSS:** a utility-first CSS framework with predefined classes for responsive and visually appealing designs
- **Axios:** a promise-based HTTP library for making API requests and fetching data
- Powered by **<a href="https://rapidapi.com/principalapis/api/currency-conversion-and-exchange-rates/" target="_blank">Currency Conversion and Exchange Rates API</a>** on **<a href="https://rapidapi.com/hub" target="_blank">RapidAPI Hub</a>**

## How to Run:
Download the project and unzip it. 

On your code editor, go inside the project's root directory and open `pages/index.js`.

Find `convertCurrency` function and change `url` from `"https://currency-converter-app-with-api-rumeysa-gelgis-projects.vercel.app/api/convert"` to `“https://localhost:3000/api/convert"`.

Scroll down to the bottom of `index.js` and find `getServerSideProps` function. Change `"https://currency-converter-app-with-api-rumeysa-gelgis-projects.vercel.app/api/symbol"` to `“https://localhost:3000/api/symbol”`.

Open your terminal and navigate to the root.

Install dependencies with `npm install`.

Create `.env.local` file.

Go to <a href="https://rapidapi.com/hub" target="_blank">RapidAPI Hub</a> on your browser and create or sign in to an account. Go to <a href="https://rapidapi.com/principalapis/api/currency-conversion-and-exchange-rates/" target="_blank">Currency Conversion and Exchange Rates API</a> and subscribe to it for free. Now you will have a `x-rapidapi-key`.

Go back to `.env.local` file on your editor and paste `NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY`. Replace `YOUR-RAPIDAPI-KEY` with your own API key.

Run the app with `npm run dev` and open https://localhost:3000

## Files:
<ins>***components***</ins> : Stores reusable React components.

- ***input.js*** : Handles user input elements.

- ***layout.js*** : Container for the overall structure of the application.
  
- ***seo.js*** : Stores HTML head and meta tags.

<ins>***pages***</ins> : Crucial directory to organize React components to define application functionality.

- ***_app.js*** : Exports a custom App component to define global behavior.

- ***index.js*** : Main entry point for the application.

- ***api/convert.js*** : API endpoint for converting currencies.

- ***api/symbol.js*** : API endpoint for getting three letter currency symbols.

<ins>***tailwind.config.js***</ins> : Stores Tailwind CSS configurations.
