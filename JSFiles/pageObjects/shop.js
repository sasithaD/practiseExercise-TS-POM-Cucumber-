"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Shop {
    constructor() {
        this.shopLink = protractor_1.element(protractor_1.by.linkText("Shop"));
        this.checkoutText = protractor_1.element(protractor_1.by.className("nav-link btn btn-primary"));
    }
    selectItem(product) {
        protractor_1.element.all(protractor_1.by.tagName("app-card")).each(function (item) {
            item.element(protractor_1.by.tagName("h4")).element(protractor_1.by.tagName("a")).getText().then(function (text) {
                if (text == product) {
                    item.element(protractor_1.by.tagName("button")).click();
                }
            });
        });
        console.log(product + " is selected");
    }
}
exports.Shop = Shop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL3Nob3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxJQUFJO0lBSWI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBQ0QsVUFBVSxDQUFDLE9BQU87UUFDZCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7Z0JBQ2hGLElBQUcsSUFBSSxJQUFFLE9BQU8sRUFBQztvQkFDYixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDOUM7WUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUUsY0FBYyxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNKO0FBbEJELG9CQWtCQyJ9