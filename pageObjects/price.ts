import { ElementFinder, element, by } from "protractor";

export class Price{
    checkout:ElementFinder;
    
    constructor(){
        this.checkout=element(by.partialLinkText("Checkout"));
    }

    findPrice(){
        element.all(by.tagName("tr")).each(function(item){
            item.element(by.css("td strong")).getText().then(function(text){
                var result=text.split(" ");
                var y=result[1];
                console.log(y);
            })
        })
    }

    findTotal(){
        element.all(by.tagName("tr")).each(function(item1){
            item1.element(by.css("td h3 strong")).getText().then(function(text1){
                var result1=text1.split(" ");
                var z=result1[1];
                console.log(z);
            })
        })
    }
}