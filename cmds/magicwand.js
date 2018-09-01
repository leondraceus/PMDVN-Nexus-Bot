// JavaScript source code
module.exports.run = async (pw, message, args) => {
    var roll = Math.floor(Math.random() * 10) +1;

    if (roll == 1)
        message.reply("bạn đã nhận được 1 Spooky Token!");
    else if (roll != 1)
    message.reply("bạn đã nhận được " + roll + " Spooky Tokens!");
}

module.exports.help = {
    name: "magicwand"
}