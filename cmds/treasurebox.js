module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
}
var roll = Math.floor(Math.random() * 100) +1;

if (roll == 5 || roll == 10 || roll == 15 || roll == 20 || roll == 25 || roll == 30 || roll == 35 || roll == 40 || roll == 45 || roll == 50 || roll == 55 || roll == 60 || roll == 65 || roll == 70 || roll == 75 || roll == 80 || roll == 85 || roll == 90 || roll == 95 || roll == 100 || roll == 4 || roll == 6 || roll == 14 || roll == 19 || roll == 24)
    message.channel.sendMessage("Bạn đã nhận được 100 <:poke:379535433467428867> từ hòm kho báu ! Chúc mừng");

else if (roll == 4 || roll == 8 || roll == 12|| roll == 16 || roll == 28|| roll == 32 || roll == 36 || roll == 44 || roll == 48 || roll == 52 || roll == 56 || roll == 64 || roll == 68 || roll == 72 || roll == 76 || roll == 84 || roll == 88 || roll == 92 || roll == 96 || roll == 2)
    message.channel.sendMessage("Bạn đã nhận được 150 <:poke:379535433467428867> từ hòm kho báu ! Chúc mừng");

else if (roll == 1 || roll == 3 || roll == 7|| roll == 9 || roll == 11|| roll == 13 || roll == 17|| roll == 21 || roll == 23 || roll == 27 || roll == 29 || roll == 31 || roll == 33 || roll == 37 || roll == 39)
    message.channel.sendMessage("Bạn đã nhận được 200 <:poke:379535433467428867> từ hòm kho báu ! Chúc mừng");

else if (roll == 41 || roll == 43 || roll == 47 || roll == 49 || roll == 51 || roll == 53 || roll == 57|| roll == 59 || roll == 61 || roll == 63 || roll == 67 || roll == 69 || roll == 71 || roll == 73 || roll == 77)
    message.channel.sendMessage("Bạn đã nhận được 250 <:poke:379535433467428867> từ hòm kho báu ! Chúc mừng");

else if (roll == 79 || roll == 81 || roll == 83|| roll == 87 || roll == 89|| roll == 91 || roll == 93|| roll == 97 || roll == 99|| roll == 18)
    message.channel.sendMessage("Bạn đã nhận được 300 <:poke:379535433467428867> từ hòm kho báu ! Chúc mừng");

else if (roll == 22 || roll == 26 || roll == 34|| roll == 38 || roll == 54|| roll == 42 || roll == 46)
    message.channel.sendMessage("Bạn đã nhận được 325 <:poke:379535433467428867> từ hòm kho báu ! Chúc mừng");

else if (roll == 54 || roll == 58 || roll == 62|| roll == 66 || roll == 74)
    message.channel.sendMessage("Bạn đã nhận được 350 <:poke:379535433467428867> từ hòm kho báu ! Chúc mừng");

else if (roll == 78 || roll == 82 || roll == 86)
    message.channel.sendMessage("Bạn đã nhận được 400 <:poke:379535433467428867> từ hòm kho báu ! Chúc mừng");

}

module.exports.help = {
    name: "treasurebox"
}

