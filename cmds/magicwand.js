// JavaScript source code
module.exports.run = async (pw, message, args) => {
    var roll = Math.floor(Math.random() * 5) +1;

    if (roll == 1)
        message.reply("bạn đã nhận được 1 Spooky Token! :magicalwand:");

    else if (roll == 0)
        message.reply("Tiếc quá ! Bạn không nhận được gì cả !");

    else 
    message.reply("bạn đã nhận được " + roll + " Spooky Tokens! :magicalwand:");
}

module.exports.help = {
    name: "magicwand"
}