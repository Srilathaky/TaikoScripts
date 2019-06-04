const { openBrowser, goto, click, closeBrowser, hover, near, checkBox, $, dragAndDrop, into } = require('taiko');
const assert = require("assert");
async () => {
    try {
        await openBrowser();
        await goto("http://automationpractice.com/index.php");
        await hover('WOMEN');
        await click('Evening Dresses');
        await click(checkBox(near("S (1)")));
        await click("Pink (1)");
        //await dragAndDrop($("//a[@class='ui-slider-handle ui-state-default ui-corner-all']"),{up:10,down:10,left:10,right:100});
        await dragAndDrop($("//a[@class='ui-slider-handle ui-state-default ui-corner-all']"),{right:100});
        await hover("Printed Dress");
       await click($("a#color_43.color_pick"));
      // await clear($("#quantity_wanted"));
      await clear(inputField(below('Quantity')))
       //await write('2',into($("#quantity_wanted")));
      await write('2',into(inputField(below('Quantity'))))
       await click($("i.icon-plus"));
       await comboBox(below('Size')).select('M')
        await click("Add To Cart");
        await click($("//span[@title='Close window']"));
        await click("Cart");
       var x= await  evaluate(inputField(below('Qty')), (element) => element.getAttribute('value'));
        console.log(x);
        assert.equal(37,Object.values(x));
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
}();
