module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
}
var roll = Math.floor(Math.random() * 12) +1;

if (roll == 1)
    message.channel.sendMessage("Số 1");

else if (roll == 2)
    message.channel.sendMessage("Số 2");

else if (roll == 3)
    message.channel.sendMessage("Số 3");

else if (roll == 4)
    message.channel.sendMessage("Số 4");

else if (roll == 5)
    message.channel.sendMessage("Số 5");

else if (roll == 6)
    message.channel.sendMessage("Số 6");

else if (roll == 7)
    message.channel.sendMessage("Số 7");

else if (roll == 8)
    message.channel.sendMessage("Số 8");

else if (roll == 9)
    message.channel.sendMessage("Số 9");

else if (roll == 10)
    message.channel.sendMessage("Số 10");

else if (roll == 11)
    message.channel.sendMessage("Số 11");

else if (roll == 12)
    message.channel.sendMessage("Số 12");

}

module.exports.help = {
    name: "tod"
}

