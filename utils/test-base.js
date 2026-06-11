const base = require('@playwright/test');


exports.customtest = base.test.extend(
{
testDataForOrder :    {
    username : "aashikahamed.m@gmail.com",
    password : "Abcde@12345",
    productName:"ADIDAS ORIGINAL"
    
    }

}

)




