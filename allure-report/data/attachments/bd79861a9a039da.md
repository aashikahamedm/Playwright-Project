# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> @Web - Verify whether user sees error message upon incorrect credentials
- Location: tests\Login.spec.js:11:1

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('[style*=\'block\']')

```

# Test source

```ts
  1  | const {test, expect} = require("@playwright/test");
  2  | 
  3  | test('@Web - Browser Based Test - Facebook Login Test',async({browser})=>
  4  | {
  5  |     const context = await browser.newContext();
  6  |     const page = await context.newPage();
  7  |     await page.goto("https://www.facebook.com/");
  8  |     console.log(await page.title());
  9  |     await expect(page).toHaveTitle("Facebook");
  10 | });
  11 | test('@Web - Verify whether user sees error message upon incorrect credentials',async({page})=>
  12 | {
  13 |     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  14 |     console.log(await page.title());
  15 |     await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  16 | 
  17 |     const UserName = page.locator("#username");
  18 |     const Password = page.locator("[type='password']");
  19 |     const SubmitButton = page.locator("#signInBtn");
  20 |     const ErrorMessage = page.locator("[style*='block']");
  21 | 
  22 |     await UserName.fill("aashik1910");
  23 |     await Password.fill("Abcde@12345");
  24 |     await page.locator("#signInBtn").click();
  25 | 
> 26 |     console.log(await ErrorMessage.textContent());
     |                                    ^ Error: locator.textContent: Target page, context or browser has been closed
  27 |     await expect(ErrorMessage).toContainText("Incorrect");
  28 | 
  29 |     await UserName.clear();
  30 |     await UserName.fill("rahulshettyacademy");
  31 |     await SubmitButton.click();
  32 | });
  33 | 
```