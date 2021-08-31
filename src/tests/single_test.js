const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function test(){
 
    var searchString = "The Witcher";

    try {

        let driver = await new Builder().forBrowser("chrome").build();


        await driver.get("http://localhost:3000");
            

        await driver.findElement(By.className("form-control")).sendKeys(searchString);


        await driver.findElement(By.className("btn-g2a")).click();


        var title = await driver.getTitle();


        console.log('Title is:',title);


        await driver.quit();

        console.log("Teste concluido");

    } catch (e) {

        console.log("Teste concluido");

    }

}

test();