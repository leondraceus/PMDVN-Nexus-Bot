module.exports.run = (pw, message, args) => {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var roll = Math.floor(Math.random() * 3) +1;

    if (roll == 1)
    message.channel.sendMessage(' ***LET`S PARTYYYYYYYYYY!!!!!!!!!!***\n(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ) ');
    else if (roll == 2)
    message.channel.sendMessage(' ***LET`S PARTYYYYYYYYYY!!!!!!!!!!***\n┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻ ');
    else if (roll == 3)
    message.channel.sendMessage(' ***LET`S PARTYYYYYYYYYY!!!!!!!!!!***\n🎊🎊🎊🎉( ﾟヮﾟ)🎉🎊🎊🎊 ');
}

module.exports.help = {
    name: "party"
}