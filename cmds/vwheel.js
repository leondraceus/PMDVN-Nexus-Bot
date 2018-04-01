module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var roll = Math.floor(Math.random() * 100) +1;

    if (roll == 1 || roll == 2 || roll == 3 || roll == 4 || roll == 5 || roll == 6 || roll == 7 || roll == 8 || roll == 9 || roll == 10 || roll == 11 || roll == 12 || roll == 13 || roll == 14 || roll == 15 || roll == 16 || roll == 17 || roll == 18 || roll == 19 || roll == 20 || roll == 21 || roll == 22 || roll == 23 || roll == 24 || roll == 25)
    message.reply("bạn đã quay trúng 10 <:poke:379535433467428867>, chúc mừng!");

    else if (roll == 21 || roll == 22 || roll == 23 || roll == 24 || roll == 25 || roll == 26 || roll == 27 || roll == 28 || roll == 29 || roll == 30 || roll == 31 || roll == 32 || roll == 33 || roll == 34 || roll == 35)
    message.reply("bạn đã quay trúng 50 <:poke:379535433467428867>, chúc mừng!");

    else if (roll == 36 || roll == 37 || roll == 38 || roll == 39 || roll == 40 || roll == 41 || roll == 42 || roll == 43 || roll == 44 || roll == 45)
    message.reply("bạn đã quay trúng 100 <:poke:379535433467428867>, chúc mừng!");

    else if (roll == 46 || roll == 47 || roll == 48 || roll == 49 || roll == 50)
    message.reply("bạn đã quay trúng 200 <:poke:379535433467428867>, chúc mừng!");

    else if (roll == 51 || roll == 52)
    message.reply("bạn đã quay trúng 500 <:poke:379535433467428867>, chúc mừng!");

    else if (roll == 53 || roll == 54 || roll == 55 || roll == 56 || roll == 57 || roll == 58 || roll == 59 || roll == 60 || roll == 61 || roll == 62 || roll == 63 || roll == 64 || roll == 65 || roll == 66 || roll == 67)
    message.reply("bạn đã quay trúng Salt/Corsola Twig (Tùy chọn), chúc mừng!");

    else if (roll == 68 || roll == 69 || roll == 70 || roll == 71 || roll == 72 || roll == 73 || roll == 74 || roll == 75 || roll == 76 || roll == 77)
    message.reply("bạn đã quay trúng Cookie, chúc mừng!");

    else if (roll == 78 || roll == 79 || roll == 80 || roll == 81 || roll == 82)
    message.reply("bạn đã quay trúng Energy Juice, chúc mừng!");

    else if (roll == 83)
    message.reply("bạn đã quay trúng Sweet Donut, chúc mừng!");

    else if (roll == 84 || roll == 85 || roll == 86 || roll == 87 || roll == 88)
    message.reply("bạn đã quay trúng Heart Scale, chúc mừng!");

    else if (roll == 89 || roll == 90 || roll == 91)
    message.reply("bạn đã quay trúng Lucky Wheel Banner, chúc mừng!");

    else if (roll == 92 || roll == 93 || roll == 94)
    message.reply("bạn đã quay trúng Victory Bell, chúc mừng!");

    else if (roll == 95 || roll == 96 || roll == 97)
    message.reply("bạn đã quay trúng Admin Doll (Tùy chọn Pokémon), chúc mừng!");

    else if (roll == 98 || roll == 99)
    message.reply("bạn đã quay trúng Victini Doll, chúc mừng!");

    else if (roll == 100)
    message.reply("bạn đã quay trúng Gold Ditto Doll, chúc mừng!");
}

module.exports.help = {
    name: "vwheel"
}