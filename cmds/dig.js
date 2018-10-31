module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var treasure = Math.floor(Math.random() * 300) +1;

    if (treasure == 279 || treasure == 14 || treasure == 210 || treasure == 167 || treasure == 140 || treasure == 156 || treasure == 214 || treasure == 38 || treasure == 128)
    message.reply("bạn đào được 1 Gold Bar.");
    else if (treasure == 120 || treasure == 100 || treasure == 26 || treasure == 233 || treasure == 216 || treasure == 91)
    message.reply("bạn đào được 2 Gold Bar.");
    else if (treasure == 107 || treasure == 30 || treasure == 204 || treasure == 67)
    message.reply("bạn đào được 3 Gold Bar.");
    else if (treasure == 60 || treasure == 263)
    message.reply("bạn đào được 5 Gold Bar.");
    else if (treasure == 213 || treasure == 261 || treasure == 118 || treasure == 11 || treasure == 151)
    message.reply("bạn đào được Fire Stone.");
    else if (treasure == 130 || treasure == 272 || treasure == 110 || treasure == 70 || treasure == 190)
    message.reply("bạn đào được Thunder Stone.");
    else if (treasure == 36 || treasure == 202 || treasure == 46 || treasure == 221 || treasure == 191)
    message.reply("bạn đào được Water Stone.");
    else if (treasure == 101 || treasure == 294 || treasure == 266)
    message.reply("bạn đào được Sun Stone.");
    else if (treasure == 187 || treasure == 142 || treasure == 124)
    message.reply("bạn đào được Moon Stone.");
    else if (treasure == 71 || treasure == 144 || treasure == 296)
    message.reply("bạn đào được Oval Stone.");
    else if (treasure == 43 || treasure == 106)
    message.reply("bạn đào được Shiny Stone.");
    else if (treasure == 197 || treasure == 247)
    message.reply("bạn đào được Mossy Rock.");
    else if (treasure == 224 || treasure == 112)
    message.reply("bạn đào được Frozen Rock.");
    else if (treasure == 34 || treasure == 278)
    message.reply("bạn đào được Coronet Rock.");
    else if (treasure == 102 || treasure == 116 || treasure == 283 || treasure == 280 || treasure == 18)
    message.reply("bạn đào được Link Cable.");
    else if (treasure == 79 || treasure == 126)
    message.reply("bạn đào được Electirizer.");
    else if (treasure == 103 || treasure == 245)
    message.reply("bạn đào được Magmarizer.");
    else if (treasure == 5 || treasure == 77)
    message.reply("bạn đào được Dome Fossil.");
    else if (treasure == 80 || treasure == 148)
    message.reply("bạn đào được Claw Fossil.");
    else if (treasure == 121 || treasure == 52)
    message.reply("bạn đào được Root Fossil.");
    else if (treasure == 229 || treasure == 27)
    message.reply("bạn đào được Skull Fossil.");
    else if (treasure == 198 || treasure == 1)
    message.reply("bạn đào được Armor Fossil.");
    else if (treasure == 21 || treasure == 7)
    message.reply("bạn đào được Cover Fossil.");
    else if (treasure == 90 || treasure == 277)
    message.reply("bạn đào được Plume Fossil.");
    else if (treasure == 55 || treasure == 115)
    message.reply("bạn đào được Jaw Fossil.");
    else if (treasure == 17 || treasure == 252)
    message.reply("bạn đào được Sail Fossil.");
    else if (treasure == 123)
    message.reply("bạn đào được Old Amber.");
    else if (treasure == 160)
    message.reply("bạn đào được Odd Keystone.");
    else if (treasure == 6 || treasure == 241 || treasure == 145 || treasure == 24 || treasure == 61)
    message.reply("bạn đào được Crystal Token.");
    else if (treasure == 15 || treasure == 172 || treasure == 22 || treasure == 111)
    message.reply("bạn đào được Nugget.");
    else if (treasure == 192 || treasure == 149 || treasure == 39)
    message.reply("bạn đào được Big Nugget.");
    else if (treasure == 134 || treasure == 203)
    message.reply("bạn đào được Star Piece.");
    else if (treasure == 45)
    message.reply("bạn đào được Comet Shard.");
    else if (treasure == 285 || treasure == 132 || treasure == 240 || treasure == 96 || treasure == 250)
    message.reply("bạn đào được Relic Copper.");
    else if (treasure == 76 || treasure == 179 || treasure == 164)
    message.reply("bạn đào được Relic Silver.");
    else if (treasure == 268 || treasure == 84 || treasure == 234)
    message.reply("bạn đào được Relic Gold.");
    else if (treasure == 274 || treasure == 119)
    message.reply("bạn đào được Relic Band.");
    else if (treasure == 251 || treasure == 59)
    message.reply("bạn đào được Relic Vase.");
    else if (treasure == 35)
    message.reply("bạn đào được Relic Statue.");
    else if (treasure == 157)
    message.reply("bạn đào được Relic Crown.");
    else
    message.reply("bạn không đào được gì cả.");

}
module.exports.help = {
    name: "dig"
}