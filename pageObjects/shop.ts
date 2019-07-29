import { ElementFinder, element, by } from "protractor";

export class Shop{
    shopLink:ElementFinder;
    checkoutText:ElementFinder;

    constructor(){
        this.shopLink=element(by.linkText("Shop"));
        this.checkoutText=element(by.className("nav-link btn btn-primary"));
    }
    selectItem(product) {
        element.all(by.tagName("app-card")).each(function(item){
            item.element(by.tagName("h4")).element(by.tagName("a")).getText().then(function(text){
                if(text==product){
                    item.element(by.tagName("button")).click();
                }
            })
        })
        console.log(product +" is selected");
    }
}