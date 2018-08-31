// JavaScript source code
module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var roll = Math.floor(Math.random() * 100) +1;

    if (roll == 29 || roll == 11 || roll == 19 || roll == 90 || roll == 25 || roll == 6 || roll == 27 || roll == 60 || roll == 9 || roll == 98)
        message.reply("bạn đã quay trúng 1 Stardust, chúc mừng!");

    else if (roll == 2 || roll == 12 || roll == 48 || roll == 14 || roll == 97 || roll == 55 || roll == 17 || roll == 83)
        message.reply("bạn đã quay trúng 3 Stardust, chúc mừng!");

    else if (roll == 3 || roll == 20 || roll == 81 || roll == 22)
        message.reply("bạn đã quay trúng 5 Stardust, chúc mừng!");

    else if (roll == 87 || roll == 24)
        message.reply("bạn đã quay trúng 10 Stardust, chúc mừng!");

    else if (roll == 5 || roll == 26)
        message.reply("bạn đã quay trúng Friend Bow, chúc mừng!");

    else if (roll == 93 || roll == 28)
        message.reply("bạn đã quay trúng Event Policy, chúc mừng!");

    else if (roll == 1)
        message.reply("bạn đã quay trúng Miracle Chest, chúc mừng!");
        
    else if (roll == 82 || roll == 31 || roll == 78 || roll == 33 || roll == 34 || roll == 94 || roll == 36 || roll == 76 || roll == 38 || roll == 39)
        message.reply("bạn đã quay trúng 5 Wooden Stick, chúc mừng!");

    else if (roll == 64 || roll == 41 || roll == 42|| roll == 43 || roll == 67)
        message.reply("bạn đã quay trúng 10 Wooden Stick, chúc mừng!");
        
    else if (roll == 7 || roll == 46 || roll == 47 || roll == 77 || roll == 49 || roll == 50 || roll == 51 || roll == 52 || roll == 88 || roll == 84)
        message.reply("bạn đã quay trúng 2 Red/Blue/Green/Yellow Paper, chúc mừng!\n```Chọn 1 loại trong số các loại Papers trên.```");

    else if (roll == 16 || roll == 61 || roll == 57 || roll == 91 || roll == 59)
        message.reply("bạn đã quay trúng 1 Sturdy Vine, chúc mừng!");

    else if (roll == 8 || roll == 56 || roll == 62)
        message.reply("bạn đã quay trúng 3 Sturdy Vine, chúc mừng!");

    else if (roll == 63 || roll == 40|| roll == 65|| roll == 66|| roll == 44)
        message.reply("bạn đã quay trúng 1 Colorful Flowers, chúc mừng!");

    else if (roll == 68 || roll == 99|| roll == 70|| roll == 15|| roll == 92|| roll == 73|| roll == 74|| roll == 75|| roll == 37|| roll == 13)
        message.reply("bạn đã quay trúng 1 Luminous Gem, chúc mừng!");

    else if (roll == 32 || roll == 79)
        message.reply("bạn đã quay trúng 1 Sparkling Dust, chúc mừng!");

    else if (roll == 80 || roll == 21)
        message.reply("bạn đã quay trúng 1 Clear Paper, chúc mừng!");

    else if (roll == 30)
        message.reply("bạn đã quay trúng 1 Prism, chúc mừng!");

    else if (roll == 18 || roll == 54 || roll == 85 || roll == 86 || roll == 4)
        message.reply("bạn đã quay trúng 1 Sun Ribbon, chúc mừng!");

    else if (roll == 53 || roll == 89 || roll == 23 || roll == 58 || roll == 72)
        message.reply("bạn đã quay trúng 1 Lunar Ribbon, chúc mừng!");

    else if (roll == 45 || roll == 35 || roll == 95 || roll == 96 || roll == 71)
        message.reply("bạn đã quay trúng 1 Oval Stone, chúc mừng!");

    else if (roll == 10)
        message.reply("bạn đã quay trúng 1 Crescent Emblem, chúc mừng!");

    else if (roll == 69)
        message.reply("bạn đã quay trúng 1 Tricky Box, chúc mừng!");
}

module.exports.help = {
    name: "grabbag"
}
