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
            .addField(`Số lượng thành viên tối đa`,`5`)
            .setFooter(`Guild được thành lập dành cho những bạn yêu thích và đã là một trong các Eeveelutions.`);
        var ACG001 = new Discord.RichEmbed().setColor(`#FF69B4`)
            .setTitle(`- THÀNH VIÊN CỦA GUILD -`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/ef/Espeon.png/revision/latest/scale-to-width-down/80?cb=20160918160608`)
            .addField(`Espeon (ME906)`,`Cấp bậc: Hội trưởng`)
            .addField(`Jolteon (ME684)`,`Cấp bậc: Thành viên`)
            .addField(`Flareon (ME008)`,`Cấp bậc: Thành viên`)
            .addField(`Vaporeon (ME014)`,`Cấp bậc: Thành viên`)
            .addField(`Jirachi (ME394)`,`Cấp bậc: Thành viên`);

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

    // Wish Dream  //
    if(args[0]==="G003"| args[0]==="g003"){
        var G003 = new Discord.RichEmbed()
            .setTitle(`- WISH DREAM -`).setColor(`#FF69B4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Wish_Dream`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/f5/Guild_Leader_Badge.png/revision/latest?cb=20180616005707`)
            .addField(`Rank`,`Starter`)
            .addField(`Ngày thành lập`,`18/7/2018`)
            .addField(`Hội trưởng`,`Leafeon (ME401)`)
            .addField(`Guild Base Theme`,`N/A`)
            .addField(`Số lượng thành viên tối đa`,`5`);
        var ACG003 = new Discord.RichEmbed().setColor(`#FF69B4`)
            .setTitle(`- THÀNH VIÊN CỦA GUILD -`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/91/Leafeon.png/revision/latest/scale-to-width-down/80?cb=20171029143458`)
            .addField(`Leafeon (ME401)`,`Cấp bậc: Hội trưởng`)
            .addField(`Alolan Meowth (ME725)`,`Cấp bậc: Thành viên`)
            .addField(`Dedenne (ME072)`,`Cấp bậc: Thành viên`)
            .addField(`Trevenant (ME303)`,`Cấp bậc: Thành viên`)
            .addField(`Chandelure (ME819)`,`Cấp bậc: Thành viên`);

        message.channel.sendEmbed(G003);
        message.channel.sendEmbed(ACG003);
    }

    // Gracidea  //
    if(args[0]==="G004"| args[0]==="g004"){
        var G004 = new Discord.RichEmbed()
            .setTitle(`- GRACIDEA -`).setColor(`#FF69B4`).setURL(`https://pmdv-nexus.wikia.com/wiki/Gracidea`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/f5/Guild_Leader_Badge.png/revision/latest?cb=20180616005707`)
            .addField(`Rank`,`Starter`)
            .addField(`Ngày thành lập`,`21/7/2018`)
            .addField(`Hội trưởng`,`Shaymin (ME044)`)
            .addField(`Guild Base Theme`,`N/A`)
            .addField(`Số lượng thành viên tối đa`,`5`);
        var ACG004 = new Discord.RichEmbed().setColor(`#FF69B4`)
            .setTitle(`- THÀNH VIÊN CỦA GUILD -`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/b7/Shaymin_%28sky%29.png/revision/latest/scale-to-width-down/100?cb=20170617033642`)
            .addField(`Shaymin (ME044))`,`Cấp bậc: Hội trưởng`)
            .addField(`Brionne (ME062)`,`Cấp bậc: Thành viên`)
            .addField(`Rockruff (ME121)`,`Cấp bậc: Thành viên`);

        message.channel.sendEmbed(G004);
        message.channel.sendEmbed(ACG004);
    }
}

module.exports.help = {
    name: "guild"
}
