module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
}
var roll = Math.floor(Math.random() * 60) +1;

if (roll == 1 || roll == 13 || roll == 15 || roll == 36 || roll == 59)
    message.channel.sendMessage("Số 1");

else if (roll == 2 || roll == 14 || roll == 35|| roll == 37 || roll == 58)
    message.channel.sendMessage("Số 2");

else if (roll == 3 || roll == 15 || roll == 34|| roll == 38 || roll == 57)
    message.channel.sendMessage("Số 3");

else if (roll == 4 || roll == 16 || roll == 33 || roll == 39 || roll == 56)
    message.channel.sendMessage("Số 4");

else if (roll == 5 || roll == 17 || roll == 32|| roll == 40 || roll == 55)
    message.channel.sendMessage("Số 5");

else if (roll == 6 || roll == 18 || roll == 31|| roll == 41 || roll == 54)
    message.channel.sendMessage("Số 6");

else if (roll == 7 || roll == 19 || roll == 30|| roll == 42 || roll == 53)
    message.channel.sendMessage("Số 7");

else if (roll == 8 || roll == 20 || roll == 29 || roll == 43 || roll == 52)
    message.channel.sendMessage("Số 8");

else if (roll == 9 || roll == 21 || roll == 28|| roll == 44 || roll == 51)
    message.channel.sendMessage("Số 9");

else if (roll == 10 || roll == 22 || roll == 27|| roll == 45 || roll == 50)
    message.channel.sendMessage("Số 10");

else if (roll == 11 || roll == 23 || roll == 26|| roll == 46 || roll == 49)
    message.channel.sendMessage("Số 11");

else if (roll == 12 || roll == 24 || roll == 25|| roll == 47 || roll == 48)
    message.channel.sendMessage("Số 12");

}

module.exports.help = {
    name: "tod"
}

