const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function test(){
 
    var searchString = "The Witcher";

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

     //To fetch http://google.com from the browser with our code.
     await driver.get("http://localhost:3000");
         
     //To send a search query by passing the value in searchString.
     await driver.findElement(By.className("form-control")).sendKeys(searchString);

     await driver.findElement(By.className("btn-g2a")).click();

     //Verify the page title and print it
     var title = await driver.getTitle();
     console.log('Title is:',title);

     //It is always a safe practice to quit the browser after execution
     await driver.quit();

}

test()