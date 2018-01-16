//module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var roll = Math.floor(Math.random() * 100) +1;
    if (roll == 1 || roll == 2 || roll == 3 || roll == 4 || roll == 5 || roll == 6 || roll == 7 || roll == 8 || roll == 9 || roll == 10 || roll == 11 || roll == 12 || roll == 13 || roll == 14 || roll == 15 || roll == 16 || roll == 17 || roll == 18 || roll == 19 || roll == 20 || roll == 21 || roll == 22 || roll == 23 || roll == 24 || roll == 25)
    message.reply("bạn đã quay trúng 30 <:poke:379535433467428867>, chúc mừng! <:laugh1:374121408759988224>");
    else if (roll == 26 || roll == 27 || roll == 28 || roll == 29 || roll == 30 || roll == 31 || roll == 32 || roll == 33 || roll == 34 || roll == 35 || roll == 36 || roll == 37 || roll == 38 || roll == 39 || roll == 40 || roll == 41 || roll == 42 || roll == 43 || roll == 44 || roll == 45)
    message.reply("bạn đã quay trúng 50 <:poke:379535433467428867>, chúc mừng! <:laugh1:374121408759988224>");
    else if (roll == 46 || roll == 47 || roll == 48 || roll == 49 || roll == 50 || roll == 51 || roll == 52 || roll == 53 || roll == 54 || roll == 55 || roll == 56 || roll == 57 || roll == 58 || roll == 59 || roll == 60)
    message.reply("bạn đã quay trúng 100 <:poke:379535433467428867>, chúc mừng! <:laugh1:374121408759988224>");
    else if (roll == 61 || roll == 62 || roll == 63 || roll == 64 || roll == 65)
    message.reply("bạn đã quay trúng 200 <:poke:379535433467428867>, chúc mừng! <:laugh1:374121408759988224>");
    else if (roll == 66 || roll == 67 || roll == 68 || roll == 69)
    message.reply("bạn đã quay trúng 500 <:poke:379535433467428867>, chúc mừng! <:laugh1:374121408759988224>");
    else if (roll == 70)
    message.reply("bạn đã quay trúng 1000 <:poke:379535433467428867>, chúc mừng! <:laugh1:374121408759988224>");
    else if (roll == 71 || roll == 72 || roll == 73 || roll == 74 || roll == 75)
    message.reply("bạn đã quay trúng Kecleon Discount Ticket (10%), chúc mừng! <:laugh1:374121408759988224>");
    else if (roll == 76 || roll == 77 || roll == 78)
    message.reply("bạn đã quay trúng Kecleon Discount Ticket (20%), chúc mừng! <:laugh1:374121408759988224>");
    else if (roll == 79 || roll == 80)
    message.reply("bạn đã quay trúng Kecleon Discount Ticket (30%), chúc mừng! <:laugh1:374121408759988224>");
    else if (roll == 81 || roll == 82 || roll == 83 || roll == 84 || roll == 85)
    message.reply("bạn đã quay trúng Amulet Coin, chúc mừng! <:laugh1:374121408759988224>");
    else if (roll == 86 || roll == 87 || roll == 88 || roll == 89 || roll == 90)
    message.reply("bạn đã quay trúng Fire Gem, chúc mừng! <:laugh1:374121408759988224>");
    else if (roll == 91 || roll == 92 || roll == 93)
    message.reply("bạn đã quay trúng Flame Orb, chúc mừng! <:laugh1:374121408759988224>");
    else if (roll == 94 || roll == 95 || roll == 96)
    message.reply("bạn đã quay trúng Victory Badge, chúc mừng! <:laugh1:374121408759988224>");
    else if (roll == 97 || roll == 98)
    message.reply("bạn đã quay trúng Admin Doll (Tùy chọn Pokémon), chúc mừng! <:laugh1:374121408759988224>");
    else if (roll == 99 || roll == 100)
    message.reply("bạn đã quay trúng Victini Doll, chúc mừng! <:laugh1:374121408759988224>");
}

module.exports.help = {
    name: "spin"
}