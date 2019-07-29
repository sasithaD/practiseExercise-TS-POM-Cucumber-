import {Config, browser} from "protractor";
import { async } from "q";

export let config:Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/demo.feature'],

    cucumberOpts: {
        onPrepare: async()=>{
            await browser.manage().window().maximize();
        },

        onComplete:async()=>{
            await console.log("All the tests are done successfully");
        },

        //tags:"@calculatorTesting",
        require: [
          './stepDefinitions/*.js' // accepts a glob
        ]


    }
  
    
}    