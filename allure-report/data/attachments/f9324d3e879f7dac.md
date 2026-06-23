# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MoreValidations.spec.js >> @Web - Screenshot & Visual comparision Validation
- Location: tests\MoreValidations.spec.js:28:1

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://rahulshettyacademy.com/AutomationPractice/", waiting until "load"

```

# Test source

```ts
  1  |    const {test,expect} = require('@playwright/test')
  2  | 
  3  | //test.describe.configure({mode:'parallel'});
  4  | //test.describe.configure({mode:'serial'});
  5  | 
  6  | test("@Web - Alert validation",async({page})=>
  7  | {
  8  |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  9  | 
  10 |     // await page.goto("http://google.com");
  11 |     // await page.goBack();
  12 |     // await page.goForward();
  13 |     await expect(page.locator("#displayed-text")).toBeVisible();
  14 |     await page.locator("#hide-textbox").click();
  15 |     await expect(page.locator("#displayed-text")).toBeHidden();
  16 |    // await page.pause();
  17 |     page.on('dialog',dialog => dialog.accept());
  18 |     await page.locator("#confirmbtn").click();
  19 |     await page.locator("#mousehover").hover();
  20 |     const framesPage = page.frameLocator("#courses-iframe");
  21 |     await framesPage.locator("li a[href*='lifetime-access']:visible").click();
  22 |      const textCheck =await framesPage.locator(".text h2").textContent();
  23 |     console.log(textCheck.split(" ")[1]);
  24 | 
  25 | 
  26 | })
  27 | 
  28 | test("@Web - Screenshot & Visual comparision Validation",async({page})=>
  29 | {
> 30 |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  31 |     await expect(page.locator("#displayed-text")).toBeVisible();
  32 |     await page.locator('#displayed-text').screenshot({path:'partialScreenshot.png'});
  33 |     await page.locator("#hide-textbox").click();
  34 |     await page.screenshot({path: 'screenshot.png'});
  35 |     await expect(page.locator("#displayed-text")).toBeHidden();
  36 | });
  37 | //screenshot -store -> screenshot -> 
  38 | test("@Web - visual validation",async({page})=>
  39 | {
  40 |     //make payment -when you 0 balance
  41 |       await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  42 |     expect(await page.screenshot()).toMatchSnapshot('landing.png');
  43 | 
  44 | })
  45 | 
  46 | 
  47 | 
  48 | 
  49 | 
  50 | 
```