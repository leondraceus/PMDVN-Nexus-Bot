module.exports.run = async (pw, message, args) => {
    var roll = Math.floor(Math.random() * 8) +1;
    message.reply("di chuyển " + roll + " bước!");
}

module.exports.help = {
    name: "move"
}