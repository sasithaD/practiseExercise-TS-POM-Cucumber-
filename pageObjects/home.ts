import { ElementFinder, element, by } from "protractor";

export class Home{
    nameBox:ElementFinder;
    emailBox:ElementFinder;
    passwordBox:ElementFinder;
    checkBox:ElementFinder;
    genderBox:ElementFinder;
    radio:ElementFinder;
    submit:ElementFinder;
    successMsg:ElementFinder;

    constructor(){
        this.nameBox=element(by.name("name"));
        this.emailBox=element(by.css("input[name='email']"));
        this.passwordBox=element(by.id("exampleInputPassword1"));
        this.checkBox=element(by.css("input[type='checkbox']"));
        this.genderBox=element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Male"));
        this.radio=element.all(by.name("inlineRadioOptions")).first();
        this.submit=element(by.buttonText("Submit"));
        this.successMsg=element(by.css("div[class*='success ']"));
    }
}