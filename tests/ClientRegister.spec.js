const {test, expect} = require("@playwright/test");

const credentials = {
  userEmailId: "aashikahamed.m@gmail.com",
  userPassword: "Abcde@12345"
};
const productsDetails = {
    productName: "ADIDAS ORIGINAL",
}

test ('Registration_Orginal',async({page})=>
{
    const registerButton = page.locator(".login-wrapper-footer-text");
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await registerButton.click();

    console.log(await page.title());
    await expect(page).toHaveTitle("Let's Shop");

    //Declaration of variables for registration

    const firstName = page.locator('#firstName');
    const secondName = page.locator('#lastName');
    const emailId = page.locator('#userEmail');
    const phoneNumber = page.locator('#userMobile');
    const occupationDropdown = page.locator("[formcontrolname='occupation']");
    const maleRadio = page.locator("[value='Male']");
    const femaleRadio = page.locator("[value='Female']");
    const password = page.locator("#userPassword");
    const confirmPassword = page.locator("#confirmPassword");
    const checkBox = page.locator("[type='checkbox']");
    const register = page.locator("[value='Register']");
    const loginButton = page.locator(".text-reset");
    //declaration of login page
    const login = page.locator("#login");

    //Varidation
    await firstName.fill("Aashik");
    await secondName.fill("ahamed");
    await emailId.fill(credentials.userEmailId);
    await phoneNumber.fill("9791585808");
    await occupationDropdown.selectOption("Student");
    await maleRadio.click();
    await password.fill(credentials.userPassword);
    await confirmPassword.fill(credentials.userPassword);
    await checkBox.check();
    await register.click();

    await loginButton.click();   
    
}
)
test ('Login_Original', async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const emailId = page.locator('#userEmail');
    const password = page.locator("#userPassword");
    const login = page.locator("#login");

    await emailId.fill(credentials.userEmailId);
    await password.fill(credentials.userPassword);
    await login.click();

    await page.waitForLoadState("networkidle");


    await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");

   const totalProducts = page.locator(".card-body");
   totalProducts.first().waitFor();
   const productCount = await totalProducts.count();

   for(let i=0;i<productCount;++i)
   {
    if(await totalProducts.nth(i).locator("b").textContent() === productsDetails.productName)
    {
        await totalProducts.nth(i).locator("text= Add To Cart").click();
        break;
    }
   }
   
   await page.locator("[routerlink*='cart']").click();
   await page.locator("div li").first().waitFor();
   const bool = page.locator("h3:has-text('Adidas - Original')").isVisible();
   //console.log(bool);
   expect(bool).toBeTruthy;

   await page.locator("text=Checkout").click();

   //await page.locator('input:near(text="CVV Code ")').fill("244");

    //await page.locator('[name="coupon"]').fill("rahulshettyacademy");
    //await page.locator("[type='submit']").click();

    //Country Dynamic drop down selection
    await page.locator("[placeholder*='Country']").pressSequentially("ind");

    //await page.getByPlaceholder('Select Country').pressSequentially("ind");
    const countryDropdown = page.locator("ta-results");
    //await countryDropdown.waitFor();
    const countryButton = countryDropdown.locator("button");
    const countryCount = await countryButton.count();
    for (let i=0;i<countryCount;++i)
    {
        const countryName = await countryButton.nth(i).textContent();
        console.log(countryName);
        if(countryName === " India")
        {
            await countryButton.nth(i).click();
            break;
        }
    }
}
)





