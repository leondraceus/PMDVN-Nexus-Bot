module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var roll = Math.floor(Math.random() * 100) +1;
    var sf = Math.floor(Math.random() * 21) +10;
    if (roll == 86 || roll == 80)
    message.reply("bạn nhận được 1 Articuno Doll!");
    else if (roll == 53 || roll == 63 || roll == 51 || roll == 70 || roll == 23 || roll == 62 || roll == 64)
    message.reply("bạn nhận được 1 Snover Doll!");
    else if (roll == 96 || roll == 24 || roll == 39 || roll == 55 || roll == 50 || roll == 92 || roll == 99)
    message.reply("bạn nhận được 1 Cubchoo Doll!");
    else if (roll == 100 || roll == 20 || roll == 94 || roll == 66 || roll == 75 || roll == 79 || roll == 83)
    message.reply("bạn nhận được 1 Deerling Doll! *(Form tuỳ chọn)*");
    else if (roll == 17 || roll == 36 || roll == 28 || roll == 6 || roll == 29 || roll == 88 || roll == 1)
    message.reply("bạn nhận được 1 Delibird Doll!");
    else if (roll == 49 || roll == 52 || roll == 16 || roll == 97)
    message.reply("bạn nhận được 1 Glaceon Doll!");
    else if (roll == 3 || roll == 81 || roll == 89 || roll == 41 || roll == 58 || roll == 33)
    message.reply("bạn nhận được 1 Frozen Apple!");
    else if (roll == 43 || roll == 34 || roll == 47 || roll == 8 || roll == 22 || roll == 60 || roll == 59 || roll == 15 || roll == 56 || roll == 35)
    message.reply("bạn nhận được 1 Deli-Ticket!");
    else if (roll == 45)
    message.reply("bạn nhận được 1 Shiny Charm!");
    else if (roll == 54)
    message.reply("bạn nhận được 1 Transform Capsule!");
    else if (roll == 84 || roll == 38  || roll == 11 || roll == 82 || roll == 13 || roll == 95 || roll == 4 || roll == 31 || roll == 78 || roll == 42 || roll == 67 || roll == 7 || roll == 98 || roll == 85)
    message.reply("bạn nhận được " + sf + " <:snowflake1:388938310602457089>");
    else
    message.reply("bạn không nhận được gì cả, tiếc quá ~");
}

module.exports.help = {
    name: "delibird"
}