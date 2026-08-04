# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebAPIPart2.spec.js >> @API - Validate Blank Orders
- Location: tests\WebAPIPart2.spec.js:14:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button[routerlink*=\'myorders\']')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e7]: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e15]: 
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e17]: 
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e19]: 
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e21]: 
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading "Practice Website for Rahul Shetty Academy Students" [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e28]:
      - paragraph [ref=e29]:
        - generic [ref=e30]: Register to sign in with your personal account
      - generic [ref=e31]:
        - heading "Log in" [level=1] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Email
            - textbox "email@example.com" [ref=e36]
          - generic [ref=e37]:
            - generic [ref=e38]: Password
            - textbox "enter your passsword" [ref=e39]
          - button "Login" [ref=e40] [cursor=pointer]
        - link "Forgot password?" [ref=e41] [cursor=pointer]:
          - /url: "#/auth/password-new"
        - paragraph [ref=e42] [cursor=pointer]: Don't have an account? Register here
  - generic [ref=e43]:
    - heading "Why People Choose Us?" [level=1] [ref=e46]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e50]: 
        - generic [ref=e51]:
          - heading "3546540" [level=1]
          - paragraph [ref=e52]: Successfull Orders
      - generic [ref=e53]:
        - generic [ref=e55]: 
        - generic [ref=e56]:
          - heading "37653" [level=1]
          - paragraph [ref=e57]: Customers
      - generic [ref=e58]:
        - generic [ref=e60]: 
        - generic [ref=e61]:
          - heading "3243" [level=1]
          - paragraph [ref=e62]: Sellers
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e66]: 
        - generic [ref=e67]:
          - heading "4500+" [level=1]
          - paragraph [ref=e68]: Daily Orders
      - generic [ref=e69]:
        - generic [ref=e71]: 
        - generic [ref=e72]:
          - heading "500+" [level=1]
          - paragraph [ref=e73]: Daily New Customer Joining
```

# Test source

```ts
  1  | const { test, expect, request } = require('@playwright/test');
  2  | const { API_Utils } = require('../utils/API_Utils');
  3  | const loginPayLoad = { userEmail: "aashikahamed.m@gmail.com", userPassword: "Abcde@12345" };
  4  | const orderPayLoad = { orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
  5  | const fakePayLoadOrders = { data: [], message: "No Orders" };
  6  | 
  7  | let response;
  8  | test.beforeAll(async () => {
  9  |   const apiContext = await request.newContext();
  10 |   const apiUtils = new API_Utils(apiContext, loginPayLoad);
  11 |   response = await apiUtils.createOrder(orderPayLoad);
  12 | })
  13 | //create order is success
  14 | test('@API - Validate Blank Orders', async ({ page }) => {
  15 |   page.addInitScript(value => {
  16 |     window.localStorage.setItem('token', value);
  17 |   }, response.token);
  18 | 
  19 |   await page.goto("https://rahulshettyacademy.com/client");
  20 |   await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
  21 |     async route => {
  22 |       const response = await page.request.fetch(route.request());
  23 |       let body = JSON.stringify(fakePayLoadOrders);
  24 |       route.fulfill(
  25 |         {
  26 |           response,
  27 |           body, 
  28 | 
  29 |         });
  30 |       //intercepting response -APi response-> { playwright fakeresponse}->browser->render data on front end
  31 |     });
  32 | 
> 33 |   await page.locator("button[routerlink*='myorders']").click();
     |                                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  34 |   await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
  35 | 
  36 |   console.log(await page.locator(".mt-4").textContent());
  37 | 
  38 | 
  39 | 
  40 | });
  41 | 
  42 | 
```