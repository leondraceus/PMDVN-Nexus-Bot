module.exports.run = (pw, message, args) => {
    message.channel.sendMessage(' ***LET`S PARTYYYYYYYYYY!!!!!!!!!!***\n(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)\n┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻\n🎊🎊🎊🎉( ﾟヮﾟ)🎉🎊🎊🎊 ');
    console.log(`${message.author.username}#${message.author.discriminator} party!!!`);
}

module.exports.help = {
    name: "party"
}