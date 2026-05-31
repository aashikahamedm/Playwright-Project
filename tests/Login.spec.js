const {test, expect} = require("@playwright/test");

test('Browser Based Test_Trail',async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.facebook.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Facebook - log in or sign up")
});
test('Page Based Test_Trail',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

    const UserName = page.locator("#username");
    const Password = page.locator("[type='password']");
    const SubmitButton = page.locator("#signInBtn");
    const ErrorMessage = page.locator("[style*='block']");


    await UserName.fill("rahulshetty");
    await Password.fill("learning");
    await page.locator("#signInBtn").click();

    console.log(await ErrorMessage.textContent());
    await expect(ErrorMessage).toContainText("Incorrect");

    await UserName.clear();
    await UserName.fill("rahulshettyacademy");
    await SubmitButton.click();
});
