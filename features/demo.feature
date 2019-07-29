Feature: validation of protoCommerce website

@homePage
Scenario: validation of home page of the website
Given you will landed on the homepage
When you will fill the input feilds
And you will click the submit button 
Then  you will display a success messege

@shoppingPage
Scenario: validation of shopping page of the website
Given you will click the shop link
When you add two items into cart
Then no: of checkout items will be two

@pricingPage
Scenario: validation of pricing page of the website
Given you will click the checkout button
When you find the price of each phone
Then you find the total price