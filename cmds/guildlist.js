const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {

    // E-Gang //
    if(args[0]==="G001"| args[0]==="g001"){
        var G001 = new Discord.RichEmbed()
            .setTitle(`- E-GANG -`).setColor(`#FF69B4`).setURL(`https://pmdv-nexus.wikia.com/wiki/E-Gang`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/f5/Guild_Leader_Badge.png/revision/latest?cb=20180616005707`)
            .addField(`Rank`,`Starter`)
            .addField(`Ngày thành lập`,`15/6/2018`)
            .addField(`Hội trưởng`,`Espeon (ME906)`)
            .addField(`Guild Base Theme`,`N/A`)
            .addField(`Số lượng thành viên tối đa`,`5`);
        var ACG001 = new Discord.RichEmbed().setColor(`#FF69B4`)
            .setTitle(`- THÀNH VIÊN CỦA GUILD -`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/ef/Espeon.png/revision/latest/scale-to-width-down/80?cb=20160918160608`)
            .addField(`Espeon (ME906)`,`Cấp bậc: Hội trưởng`)
            .addField(`Jolteon (ME684)`,`Cấp bậc: Thành viên`)
            .addField(`Flareon (ME008)`,`Cấp bậc: Thành viên`)
            .addField(`Vaporeon (ME014)`,`Cấp bậc: Thành viên`)
            .addField(`Jirachi (ME394)`,`Cấp bậc: Thành viên`)
            .setFooter(`Guild được thành lập dành cho những bạn yêu thích và đã là một trong các Eeveelutions.);

        message.channel.sendEmbed(G001);
        message.channel.sendEmbed(ACG001);
    }

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
