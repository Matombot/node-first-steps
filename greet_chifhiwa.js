const chalk = require("chalk")// external module
const greet = require("./greet")//internal module
const figlet = require("figlet");//external module
//console.log(greet("chifhiwa"))
//using chalk in the statement
const styledMessage = chalk.bgYellow.white(greet("chifhiwa"));
console.log(styledMessage)
const message = greet("Chifhiwa");
 //using both chalk and fliglet in one statement
figlet(message, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    const styledMessage = chalk.bold.bgRedBright.blackBright(data);
    console.log(styledMessage)
});