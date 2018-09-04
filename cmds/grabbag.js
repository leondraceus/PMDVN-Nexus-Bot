// JavaScript source code
module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var roll = Math.floor(Math.random() * 180) +1;

    if (roll == 29 || roll == 11 || roll == 19 || roll == 90 || roll == 25 || roll == 6 || roll == 27 || roll == 60 || roll == 9 || roll == 98 || roll == 86 || roll == 4 || roll == 58 || roll == 72 || roll == 85 || roll == 23 || roll == 95 || roll == 96 || roll == 71 || roll == 111 || roll == 112 || roll == 113 || roll == 114 || roll == 115 || roll == 116 || roll == 117 || roll == 118 || roll == 119 || roll == 120 || roll == 121 || roll == 122 || roll == 123 || roll == 124 || roll == 125 || roll == 126 || roll == 127 || roll == 128 || roll == 129 || roll == 130)
        message.reply("trong Grab Bag có 1 Stardust, chúc mừng!");

    else if (roll == 2 || roll == 12 || roll == 48 || roll == 14 || roll == 97 || roll == 55 || roll == 17 || roll == 83 || roll == 26 || roll == 35 || roll == 175 || roll == 176 || roll == 177)
        message.reply("trong Grab Bag có 3 Stardust, chúc mừng!");

    else if (roll == 3 || roll == 20 || roll == 81 || roll == 22)
        message.reply("trong Grab Bag có 5 Stardust, chúc mừng!");

    else if (roll == 87 || roll == 24)
        message.reply("trong Grab Bag có 10 Stardust, chúc mừng!");

    else if (roll == 5)
        message.reply("trong Grab Bag có Friend Bow, chúc mừng!");

    else if (roll == 93 || roll == 28)
        message.reply("trong Grab Bag có Event Policy, chúc mừng!");

    else if (roll == 1)
        message.reply("trong Grab Bag có Miracle Chest, chúc mừng!");

    else if (roll == 101 || roll == 102 || roll == 103 || roll == 104 || roll == 105 || roll == 106 || roll == 107 || roll == 108 || roll == 109 || roll == 110 || roll == 131 || roll == 132 || roll == 133 || roll == 134 || roll == 135 || roll == 136 || roll == 137 || roll == 138 || roll == 139 || roll == 140 || roll == 141 || roll == 142 || roll == 143 || roll == 144 || roll == 145 || roll == 146 || roll == 147 || roll == 148 || roll == 149 || roll == 150 || roll == 179 || roll == 180)
        message.reply("trong Grab Bag có 1 Wooden Stick, chúc mừng!");    
        
    else if (roll == 82 || roll == 31 || roll == 78 || roll == 33 || roll == 34 || roll == 94 || roll == 36 || roll == 76 || roll == 38 || roll == 39)
        message.reply("trong Grab Bag có 3 Wooden Stick, chúc mừng!");

    else if (roll == 64 || roll == 41 || roll == 42|| roll == 43 || roll == 67)
        message.reply("trong Grab Bag có 5 Wooden Stick, chúc mừng!");
        
    else if (roll == 7 || roll == 46 || roll == 47 || roll == 77 || roll == 49 || roll == 50 || roll == 51 || roll == 52 || roll == 88 || roll == 84)
        message.reply("trong Grab Bag có 2 Red/Blue/Green/Yellow Paper, chúc mừng!\n```Chọn 1 loại trong số các loại Papers trên.```");

    else if (roll == 16 || roll == 61 || roll == 57 || roll == 91 || roll == 59 || roll == 151 || roll == 152 || roll == 153 || roll == 154 || roll == 155 || roll == 156 || roll == 157 || roll == 158 || roll == 159 || roll == 160)
        message.reply("trong Grab Bag có 1 Sturdy Vine, chúc mừng!");

    else if (roll == 8 || roll == 56 || roll == 62 || roll == 168 || roll == 169 || roll == 170)
        message.reply("trong Grab Bag có 3 Sturdy Vine, chúc mừng!");

    else if (roll == 63 || roll == 40|| roll == 65|| roll == 66|| roll == 44 || roll == 166 || roll == 167 || roll == 178)
        message.reply("trong Grab Bag có 1 Colorful Flowers, chúc mừng!");

    else if (roll == 68 || roll == 99|| roll == 70|| roll == 15|| roll == 92|| roll == 73|| roll == 74|| roll == 75|| roll == 37|| roll == 13 || roll == 171 || roll == 172 || roll == 173 || roll == 174)
        message.reply("trong Grab Bag có 1 Luminous Gem, chúc mừng!");

    else if (roll == 32 || roll == 79 || roll == 161 || roll == 162 || roll == 163 || roll == 164 || roll == 165)
        message.reply("trong Grab Bag có 1 Sparkling Dust, chúc mừng!");

    else if (roll == 80 || roll == 21)
        message.reply("trong Grab Bag có 1 Clear Paper, chúc mừng!");

    else if (roll == 30)
        message.reply("trong Grab Bag có 1 Prism, chúc mừng!");

    else if (roll == 18 || roll == 54)
        message.reply("trong Grab Bag có 1 Sun Ribbon, chúc mừng!");

    else if (roll == 53 || roll == 89)
        message.reply("trong Grab Bag có 1 Lunar Ribbon, chúc mừng!");

    else if (roll == 45)
        message.reply("trong Grab Bag có 1 Oval Stone, chúc mừng!");

    else if (roll == 10)
        message.reply("trong Grab Bag có 1 Crescent Emblem, chúc mừng!");

    else if (roll == 69)
        message.reply("trong Grab Bag có 1 Tricky Box, chúc mừng!");
}

module.exports.help = {
    name: "grabbag"
}
