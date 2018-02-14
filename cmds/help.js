const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var embed = new Discord.RichEmbed()
        .setThumbnail(`https://vignette4.wikia.nocookie.net/pmdv-nexus/images/8/89/Wiki-wordmark.png/revision/latest?cb=20170613014107`)
        .setTitle(`**__PMDVN-NEXUS__**`)
        .setDescription(`__Pokémon Mystery Dungeon Vietnam Bot__`)
        .addField(`1. THÔNG TIN CÁ NHÂN`,`---------------`)
        .addField(`.info <member code/pokemon>`,`Xem thông tin cơ bản`)
        .addField(`.inv <member code/pokemon>`,`Xem tiền và Items trong vỏ đồ`)
        .addField(`.skill <member code/pokemon>`,`Xem Pokémon Skill`)
        .addField(`2. TIỆN ÍCH`,`---------------`)
        .addField(`.shop`,`Xem các mặt hàng trên Kecleon's Shop.`)
        .addField(`3. GIẢI TRÍ`,`---------------`)
        .addField(`.bite @mention`,`\u200B`,inline = true)
        .addField(`.slap @mention`,`\u200B`,inline = true)
        .addField(`.smash @mention`,`\u200B`,inline = true)
        .addField(`.poke @mention`,`\u200B`,inline = true)
        .addField(`.hug @mention`,`\u200B`,inline = true)
        .addField(`.kiss @mention`,`\u200B`,inline = true)
        .addField(`.lick @mention`,`\u200B`,inline = true)
        .addField(`.intensify`,`\u200B`,inline = true)
        .addField(`.trigger`,`\u200B`,inline = true)
        .setColor(`#a366ff`);
   
    message.channel.sendEmbed(embed);
    console.log(`${message.author.username}#${message.author.discriminator} sent help!`);
}

module.exports.help = {
    name: "help"
}