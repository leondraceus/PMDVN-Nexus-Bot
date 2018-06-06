module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
}
var roll = Math.floor(Math.random() * 100) +1;

if (roll == 1 || roll == 2 || roll == 3 || roll == 4)
    message.channel.sendMessage("Haunter1 đi 1 bước, Haunter2 đi 1 bước, Haunter3 đi 1 bước, Haunter4 đi 1 bước, Haunter5 đi 1 bước");

else if (roll == 5 || roll == 6 || roll == 7 || roll == 8)
    message.channel.sendMessage("Haunter1 đi 2 bước, Haunter2 đi 2 bước, Haunter3 đi 2 bước, Haunter4 đi 2 bước, Haunter5 đi 2 bước");

else if (roll == 9 || roll == 10 || roll == 11 || roll == 12)
    message.channel.sendMessage("Haunter1 đi 3 bước, Haunter2 đi 3 bước, Haunter3 đi 3 bước, Haunter4 đi 3 bước, Haunter5 đi 3 bước");

else if (roll == 13 || roll == 14 || roll == 15 || roll == 16)
    message.channel.sendMessage("Haunter1 đi 1 bước, Haunter2 đi 1 bước, Haunter3 đi 1 bước, Haunter4 đi 1 bước");

else if (roll == 17 || roll == 18 || roll == 19 || roll == 20)
    message.channel.sendMessage("Haunter1 đi 2 bước, Haunter2 đi 2 bước, Haunter3 đi 2 bước, Haunter4 đi 2 bước");

else if (roll == 21 || roll == 22 || roll == 23 || roll == 24)
    message.channel.sendMessage("Haunter1 đi 3 bước, Haunter2 đi 3 bước, Haunter3 đi 3 bước, Haunter4 đi 3 bước");

else if (roll == 25 || roll == 26 || roll == 27 || roll == 28)
    message.channel.sendMessage("Haunter1 đi 3 bước, Haunter2 đi 3 bước, Haunter3 đi 3 bước");

else if (roll == 29 || roll == 30 || roll == 31 || roll == 32)
    message.channel.sendMessage("Haunter1 đi 2 bước, Haunter2 đi 2 bước, Haunter3 đi 2 bước");

else if (roll == 33 || roll == 34 || roll == 35 || roll == 36)
    message.channel.sendMessage("Haunter1 đi 1 bước, Haunter2 đi 1 bước, Haunter3 đi 1 bước");

else if (roll == 37 || roll == 38 || roll == 39 || roll == 40)
    message.channel.sendMessage("Haunter3 đi 3 bước, Haunter4 đi 3 bước, Haunter5 đi 3 bước");

else if (roll == 40 || roll == 41 || roll == 42 || roll == 43)
    message.channel.sendMessage("Haunter3 đi 2 bước, Haunter4 đi 2 bước, Haunter5 đi 2 bước");

else if (roll == 44 || roll == 45 || roll == 46 || roll == 47)
    message.channel.sendMessage("Haunter3 đi 1 bước, Haunter4 đi 1 bước, Haunter5 đi 1 bước");

else if (roll == 48 || roll == 49 || roll == 50 || roll == 51)
    message.channel.sendMessage("Haunter1 đi 3 bước, Haunter3 đi 3 bước, Haunter5 đi 3 bước");

else if (roll == 52 || roll == 53 || roll == 54 || roll == 55)
    message.channel.sendMessage("Haunter1 đi 2 bước, Haunter3 đi 2 bước, Haunter5 đi 2 bước, Haunter4 đi 3 bước");

else if (roll == 56 || roll == 57 || roll == 58 || roll == 59)
    message.channel.sendMessage("Haunter2 đi 3 bước, Haunter4 đi 3 bước, Haunter1 đi 3 bước");

else if (roll == 60 || roll == 61 || roll == 62 || roll == 63)
    message.channel.sendMessage("Haunter2 đi 3 bước, Haunter3 đi 3 bước, Haunter5 đi 3 bước");

else if (roll == 64 || roll == 65 || roll == 66 || roll == 67)
    message.channel.sendMessage("Haunter1 đi 3 bước, Haunter2 đi 3 bước, Haunter5 đi 3 bước");

else if (roll == 68 || roll == 69 || roll == 70 || roll == 71)
    message.channel.sendMessage("Haunter1 đi 2 bước, Haunter3 đi 2 bước, Haunter5 đi 2 bước");

else if (roll == 72 || roll == 73 || roll == 74 || roll == 75)
    message.channel.sendMessage("Haunter2 đi 1 bước, Haunter3 đi 1 bước, Haunter5 đi 1 bước");

else if (roll == 76 || roll == 77 || roll == 78 || roll == 79)
    message.channel.sendMessage("Haunter1 đi 3 bước, Haunter2 đi 3 bước, Haunter5 đi 3 bước");

else if (roll == 81 || roll == 82 || roll == 83 || roll == 84)
    message.channel.sendMessage("Haunter1 đi 3 bước, Haunter2 đi 3 bước");

else if (roll == 85 || roll == 86 || roll == 87 || roll == 88)
    message.channel.sendMessage("Haunter1 đi 3 bước, Haunter3 đi 2 bước");

else if (roll == 89 || roll == 90 || roll == 91 || roll == 92)
    message.channel.sendMessage("Haunter3 đi 3 bước, Haunter4 đi 3 bước");

else if (roll == 93 || roll == 94 || roll == 95 || roll == 96)
    message.channel.sendMessage("Haunter4 đi 3 bước, Haunter5 đi 3 bước");

else if (roll == 97 || roll == 98 || roll == 99 || roll == 100)
    message.channel.sendMessage("Haunter3 đi 2 bước, Haunter5 đi 2 bước");

}

module.exports.help = {
    name: "hauntermove"
}
