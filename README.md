# Puppeteer Script for Acquiring the final passcode

This script is written using Puppeteer, a Node.js library for controlling headless Chrome or Chromium, to automate interactions with a web page and scrape data.

## Objective

The objective of this script is to perform the following tasks:

1. Navigate to a [challenge.longshotsystems.co.uk](https://challenge.longshotsystems.co.uk/go).
2. Extract numerical data from the page.
3. Input the extracted numbers and name into form fields and submit the form.
4. Capture console messages from the subsequent page.
5. Close the browser after completing the tasks.

## Getting Started

To run this script, you'll need Node.js and npm installed on your machine. Follow these steps to get started:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/seth-me-up/challenge_longshotsystem.git
2. Navigate to the project directory:

    ```bash
   cd your-repo
3. Install the required dependencies (Puppeteer):

    ```bash
   npm install puppeteer
4. Run the script:

    ```bash
   node index.js
5. Final passcode will be outputted in the console as stringified JSON:

    ```bash
   node index.js