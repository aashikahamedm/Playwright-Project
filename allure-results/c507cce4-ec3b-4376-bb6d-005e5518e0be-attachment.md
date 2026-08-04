# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MoreValidations.spec.js >> @Web - visual validation
- Location: tests\MoreValidations.spec.js:38:1

# Error details

```
Error: expect(Buffer).toMatchSnapshot(expected) failed

  5842 pixels (ratio 0.01 of all image pixels) are different.

  Snapshot: landing.png

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - link "Free Access to InterviewQues/ResumeAssistance/Material" [ref=e3] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/documents-request
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e4] [cursor=pointer]:
      - /url: https://techsmarthire.com/
  - generic [ref=e5]:
    - heading [level=3] [ref=e6]:
      - img [ref=e8]
    - generic [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e16]: "Username:"
        - textbox "Username:" [ref=e17]
      - generic [ref=e18]:
        - generic [ref=e19]: "Password:"
        - textbox "Password:" [ref=e20]
      - generic [ref=e22]:
        - generic [ref=e23] [cursor=pointer]:
          - text: Admin
          - radio "Admin" [checked] [ref=e24]
        - generic [ref=e26] [cursor=pointer]:
          - text: User
          - radio "User" [ref=e27]
      - combobox [ref=e30]:
        - option "Student" [selected]
        - option "Teacher"
        - option "Consultant"
      - generic [ref=e31]:
        - generic [ref=e32]:
          - checkbox "I Agree to the terms and conditions" [ref=e34]
          - generic [ref=e35]:
            - text: I Agree to the
            - link "terms and conditions" [ref=e36] [cursor=pointer]:
              - /url: "#"
        - button "Sign In" [ref=e37] [cursor=pointer]
      - paragraph [ref=e39]:
        - text: (username is
        - generic [ref=e40]: rahulshettyacademy
        - text: and Password is
        - generic [ref=e41]: Learning@830$3mK2
        - text: )
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
  30 |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
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
> 42 |     expect(await page.screenshot()).toMatchSnapshot('landing.png');
     |                                     ^ Error: expect(Buffer).toMatchSnapshot(expected) failed
  43 | 
  44 | })
  45 | 
  46 | 
  47 | 
  48 | 
  49 | 
  50 | 
```