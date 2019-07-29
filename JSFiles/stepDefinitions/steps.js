"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const home_1 = require("../pageObjects/home");
const shop_1 = require("../pageObjects/shop");
const price_1 = require("../pageObjects/price");
const protractor_1 = require("protractor");
let hm = new home_1.Home();
cucumber_1.Given('you will landed on the homepage', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get("https://qaclickacademy.github.io/protocommerce/");
}));
cucumber_1.When('you will fill the input feilds', () => __awaiter(this, void 0, void 0, function* () {
    yield hm.nameBox.sendKeys("sastha dilshan");
    yield hm.emailBox.sendKeys("hbsasithadilshan@gmail.com");
    yield hm.passwordBox.sendKeys("gwhgty134356");
    yield hm.checkBox.click();
    yield hm.genderBox.click();
    yield hm.radio.click();
}));
cucumber_1.When('you will click the submit button', () => __awaiter(this, void 0, void 0, function* () {
    yield hm.submit.click();
}));
cucumber_1.Then('you will display a success messege', () => __awaiter(this, void 0, void 0, function* () {
    yield hm.successMsg.getText().then(function (text) {
        console.log(text);
    });
}));
let shp = new shop_1.Shop();
cucumber_1.Given('you will click the shop link', () => __awaiter(this, void 0, void 0, function* () {
    yield shp.shopLink.click();
}));
cucumber_1.When('you add two items into cart', () => __awaiter(this, void 0, void 0, function* () {
    yield shp.selectItem("iphone X");
    yield protractor_1.browser.sleep(3000);
    yield shp.selectItem("Samsung Note 8");
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Then('no: of checkout items will be two', () => __awaiter(this, void 0, void 0, function* () {
    yield shp.checkoutText.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
        var result = text.split(" ");
        var x = result[2];
        yield console.log(x);
    }));
}));
let prc = new price_1.Price();
cucumber_1.Given('you will click the checkout button', () => __awaiter(this, void 0, void 0, function* () {
    yield prc.checkout.click();
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.When('you find the price of each phone', () => __awaiter(this, void 0, void 0, function* () {
    yield prc.findPrice();
}));
cucumber_1.Then('you find the total price', () => __awaiter(this, void 0, void 0, function* () {
    yield prc.findTotal();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUF5QztBQUN6Qyw4Q0FBeUM7QUFDekMsOENBQXlDO0FBQ3pDLGdEQUEyQztBQUMzQywyQ0FBcUM7QUFJckMsSUFBSSxFQUFFLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUVwQixnQkFBSyxDQUFDLGlDQUFpQyxFQUFFLEdBQU8sRUFBRTtJQUM5QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7QUFDekUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxHQUFPLEVBQUU7SUFDNUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUN6RCxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQixNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzNCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsa0NBQWtDLEVBQUUsR0FBTyxFQUFFO0lBQzlDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM1QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG9DQUFvQyxFQUFFLEdBQU8sRUFBRTtJQUNoRCxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUtILElBQUksR0FBRyxHQUFFLElBQUksV0FBSSxFQUFFLENBQUM7QUFFcEIsZ0JBQUssQ0FBQyw4QkFBOEIsRUFBRSxHQUFPLEVBQUU7SUFDM0MsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNkJBQTZCLEVBQUUsR0FBTyxFQUFFO0lBQ3pDLE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxtQ0FBbUMsRUFBRSxHQUFPLEVBQUU7SUFDL0MsTUFBTSxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFNLElBQUksRUFBQyxFQUFFO1FBQy9DLElBQUksTUFBTSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQztBQU1ILElBQUksR0FBRyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7QUFFdEIsZ0JBQUssQ0FBQyxvQ0FBb0MsRUFBRSxHQUFPLEVBQUU7SUFDakQsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxrQ0FBa0MsRUFBRSxHQUFPLEVBQUU7SUFDOUMsTUFBTSxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDMUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywwQkFBMEIsRUFBRSxHQUFPLEVBQUU7SUFDdEMsTUFBTSxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDMUIsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9