import {Given,When,Then} from "cucumber";
import {Home} from "../pageObjects/home";
import {Shop} from "../pageObjects/shop";
import {Price} from "../pageObjects/price";
import { browser } from "protractor";
import { async } from "q";


let hm = new Home();

Given('you will landed on the homepage', async()=> {
    await browser.get("https://qaclickacademy.github.io/protocommerce/");
});

When('you will fill the input feilds', async()=> {
    await hm.nameBox.sendKeys("sastha dilshan");
    await hm.emailBox.sendKeys("hbsasithadilshan@gmail.com");
    await hm.passwordBox.sendKeys("gwhgty134356");
    await hm.checkBox.click();
    await hm.genderBox.click();
    await hm.radio.click();
});

When('you will click the submit button', async()=> {
    await hm.submit.click();
});

Then('you will display a success messege', async()=> {
    await hm.successMsg.getText().then(function(text){
        console.log(text);
    })
});




let shp =new Shop();

Given('you will click the shop link', async()=> {
    await shp.shopLink.click();
});

When('you add two items into cart', async()=> {
    await shp.selectItem("iphone X");
    await browser.sleep(3000);
    await shp.selectItem("Samsung Note 8");
    await browser.sleep(3000);
});

Then('no: of checkout items will be two', async()=> {
    await shp.checkoutText.getText().then(async(text)=>{
        var result=text.split(" ");
        var x=result[2];
        await console.log(x);
    })
});





let prc = new Price();

Given('you will click the checkout button', async()=> {
    await prc.checkout.click();
    await browser.sleep(3000);
});

When('you find the price of each phone', async()=> {
    await prc.findPrice();
});

Then('you find the total price', async()=> {
    await prc.findTotal();
});