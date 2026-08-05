# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPOM.spec.js >> @Web - Validate Login and order placement
- Location: tests\ClientAppPOM.spec.js:38:2

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div li').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - generic [ref=e26]:
      - heading "My Cart" [level=1] [ref=e27]
      - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e30]
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test');
  2  | class CartPage
  3  | {
  4  |     
  5  | constructor(page)
  6  | {
  7  |     this.page = page;
  8  |     this.cartProducts = page.locator("div li").first();
  9  |     this.productsText = page.locator(".card-body b");
  10 |     this.cart =  page.locator("[routerlink*='cart']");
  11 |     this.orders = page.locator("button[routerlink*='myorders']");
  12 |     this.checkout = page.locator("text=Checkout");
  13 | 
  14 | }
  15 | 
  16 | async VerifyProductIsDisplayed(productName)
  17 | {
  18 |    
> 19 |     await this.cartProducts.waitFor();
     |                             ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  20 |     const bool =await this.getProductLocator(productName).isVisible();
  21 |     expect(bool).toBeTruthy();
  22 | 
  23 | }
  24 | 
  25 | async Checkout()
  26 | {
  27 |     await this.checkout.click();
  28 | }
  29 | 
  30 |  getProductLocator(productName)
  31 | {
  32 |     return  this.page.locator("h3:has-text('"+productName+"')");
  33 | }
  34 | 
  35 | }
  36 | module.exports = {CartPage};
```