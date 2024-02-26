# Visitor Counter App

This is a simple web application that displays visitor counts for the current and last month. It uses React for the frontend and communicates with a server to fetch and update visitor counts.

## Getting Started

Follow these steps to run the Visitor Counter app locally.

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- Git (optional)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/CodeGrow-Pro/visitor-counter-frontend.git
   ```
   Or download and extract the ZIP file.

2. **Navigate to the Project Directory:**
   ```bash
   cd visitor-counter-app
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

### Running the App

1. **Start the React App:**
   ```bash
   npm start
   ```
   This command will start the development server and open the app in your default web browser.

2. **Open the App in Your Browser:**
   Open your web browser and go to [http://localhost:3000](http://localhost:3000).

3. **View the Visitor Counter:**
   The app should display the Visitor Counter with counts for the current and last month. If not, ensure that the server is running and accessible.

## Server Configuration

The app assumes that a server is available for fetching and updating visitor counts. Make sure to configure the server endpoints in the `VisitorCounter.js` file where API calls are made.