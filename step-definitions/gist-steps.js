
//const expect = require('chai').expect;
//var assert = require('assert');
var webdriver=require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;
var imagePath;


module.exports = function () {
 this.Given(/^Go to gist websites$/, function () {
        return driver.get('https://gist.github.com/discover');

       });

  this.When(/^User input$/, function (dataTable) {
    var strEmail=dataTable.raw()[0][1];
    var strPassword=dataTable.raw()[1][1];

        driver.findElement(By.xpath("//a[@class='HeaderMenu-link no-underline mr-3']")).click();
        driver.findElement(By.name("login")).sendKeys(strEmail);
        driver.findElement(By.name("password")).sendKeys(strPassword);
        driver.findElement(By.xpath("//input[@name='commit']")).click();
        });

   this.Then(/^User at gist page$/, function () {
        driver.get('https://gist.github.com/');
   });

   this.Then(/^Fill$/, function (dataTable) {
     var strDescription=dataTable.raw()[0][1];
     var strFilename=dataTable.raw()[1][1];
     var strBody=dataTable.raw()[2][1];


          driver.findElement(By.name("gist[description]")).sendKeys(strDescription);
          driver.findElement(By.name("gist[contents][][name]")).sendKeys(strFilename);
          driver.findElement(By.xpath("//pre[contains(@class,'CodeMirror-line')]")).click();
          driver.findElement(By.xpath("//pre[contains(@class,'CodeMirror-line')]")).sendKeys(strBody);
        });

   this.Then(/^User Click Create Public gist button$/, function () {

          driver.findElement(By.xpath("//button[contains(text(),'Create public gist')]")).click();

        });


   this.Then(/^User Click Edit button$/, function () {
		driver.findElement(By.className("btn btn-sm")).click();

        });

   this.Then(/^Fill Edit$/, function (dataTable) {
     var strEditDesc=dataTable.raw()[0][1];
     var strEditBody=dataTable.raw()[1][1];


          driver.findElement(By.name("gist[description]")).sendKeys(strEditDesc);
          driver.findElement(By.xpath("//pre[contains(@class,'CodeMirror-line')]")).click();
          driver.findElement(By.xpath("//pre[contains(@class,'CodeMirror-line')]")).sendKeys(strEditBody);
          driver.findElement(By.className("btn btn-primary")).click();
        });

   this.Then(/^User Click Delete button$/, function () {
	    driver.findElement(By.xpath("//*[@id=\"gist-pjax-container\"]/div[1]/div/div[1]/ul/li[2]/form/button")).click();
        });

   this.Then(/^User confirm delete$/, function () {
        driver.switchTo().alert().accept();
        });


   this.Given(/^User see all gist$/, function () {
        driver.findElement(By.className("Header-link name")).click();
        driver.findElement(By.xpath("//a[contains(text(),'Your gists')]")).click();;
       	});
};