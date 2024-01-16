<h1 align="center">
    🚀 Pick Users Component - Zepto Frontend Developer Assignment
</h1>


<p align="center">
Crafted with <span style="color: #8b0000;">&hearts;</span> by Kushagra Gupta
</p>

<h2 align="center">Built using: </h2>
<p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
</p>

## View Demo on the Deployed Site 🚀

<p>Click https://zepto-frontend-task.netlify.app/ to view the deployed site</p>
<img width="1436" alt="Screenshot 2024-01-16 at 6 27 04 PM" src="https://github.com/KG-1510/zepto-frontend-task/assets/60519359/e2f70d20-ecc9-418d-841b-39c26bbb9b41">

## 👨‍💻 Features

:white_check_mark: Users can get data of any of the predefined SQL queries either by using SQL Editor or Sidebar Menu.\
:white_check_mark: Users can sort data directly by clicking the Table Headers title.\
:white_check_mark: Users can search for a particular data among many records using the search bar.\
:white_check_mark: Users can download the output window table as CSV, with just a single click.

## ⚙️ NPM Modules Used

- `"react-ace": "^10.1.0",` - To make the code editor
- `"react-csv-to-table": "^0.0.4",` - To show the output as a simple CSV table
- `"react-dom": "^18.2.0",` - To interact with React's virtual DOM
- `"react-icons": "^4.4.0",` - To have an icon library
- `"react-router-dom": "^6.3.0",` - To implement routing features provided by React.js
- `"react-toastify": "^9.0.5",` - To show the toast notifications for a success or error event
- `"react-csv": "^2.2.2",` - To export the output window table as CSV

## ⏱ Page Load Time

The Webapp loads in about 0.4 s to 0.6s. This is calculated by using Google Lighthouse tool in Chromium based browsers. 
*NOTE: The Lighthouse Audits scores are decreased because of preinstalled browser extensions that are non-removable in my system.*

<img width="1440" alt="Screenshot 2024-01-16 at 6 29 03 PM" src="https://github.com/KG-1510/zepto-frontend-task/assets/60519359/b264e6f0-d93b-4f28-8ec7-685cf31f643a">


## 🪜 Steps I took to optimize the page load time

- Used `.webp` assets instead of `.png` or `.jpeg` to minmizing loading time.
- Used SVG icons wherever possible as they are lighter than image type icons.
- Used PurgeCSS to tree-shake unused styles and optimize my final build size.
- Used Lighthouse DevTools Extension to find the performance issues and fix them using their actionable suggestion.
- Used netlify that has world-class CDN technology that reduces waiting time even further.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
