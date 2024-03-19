const puppeteer = require('puppeteer');

(async () => {
  const finalPassCode = [];
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto('https://challenge.longshotsystems.co.uk/go');

  // Get the numbers
  const textContent = await page.evaluate(() => {
    return document.querySelector('.number-panel').textContent.trim().replace(/\s+/g, '');
  });

  // Type in the number and name then click Submit
  await page.$eval('#answer', (element, text) => {
    element.value = text;
  }, textContent);
  await page.$eval("#name", element => element.value = "Seth")
  await page.$eval(".answer-panel button", buttonElement => buttonElement.click());

  // Wait for the next page after submission
  await page.waitForNavigation()
  // let currentUrl = await page.url();
  // console.log('2nd page url:', currentUrl);
  await page.waitForNavigation()

  // Enable console messages on the page
  page.on('console', async (msg) => {
    // console.log('Console message:', msg.text());
    finalPassCode.push(msg.text())
  });

  // currentUrl = await page.url();
  // console.log('3rd page url:', currentUrl);
  // Sleep before closing the browser
  await page.evaluate(() => {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  });
  
  await browser.close();

  console.log(JSON.stringify(finalPassCode));
})();