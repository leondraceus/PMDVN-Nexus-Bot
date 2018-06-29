const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    // NATURIA //
    if(args[0]==="G002"| args[0]==="g002"){
        var G002 = new Discord.RichEmbed()
            .setTitle(`- NATURIA -`).setColor(`#FF69B4`).setURL(`https://pmdv-nexus.wikia.com/wiki/Naturia`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/f5/Guild_Leader_Badge.png/revision/latest?cb=20180616005707`)
            .addField(`Rank`,`Starter`)
            .addField(`Ngày thành lập`,`20/6/2018`)
            .addField(`Hội trưởng`,`Torterra (ME563)`)
            .addField(`Guild Base Theme`,`N/A`)
            .addField(`Số lượng thành viên tối đa`,`5`);
        var ACG002 = new Discord.RichEmbed().setColor(`#FF69B4`)
            .setTitle(`- THÀNH VIÊN CỦA GUILD -`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/0/05/Torterra.png/revision/latest/scale-to-width-down/80?cb=20171128145511`)
            .addField(`Torterra (ME563)`,`Cấp bậc: Hội trưởng`)
            .addField(`Serperior (ME868)`,`Cấp bậc: Thành viên`)
            .addField(`Sceptile (ME855)`,`Cấp bậc: Thành viên`)
            .addField(`Lilligant (ME571)`,`Cấp bậc: Thành viên`)
            .addField(`Decidueye (ME330)`,`Cấp bậc: Thành viên`);

        message.channel.sendEmbed(G002);
        message.channel.sendEmbed(ACG002);
    }
}

module.exports.help = {
    name: "guild"
}
