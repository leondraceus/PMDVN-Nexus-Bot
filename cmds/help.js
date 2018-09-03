const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var embed = new Discord.RichEmbed()
        .setThumbnail(`https://vignette4.wikia.nocookie.net/pmdv-nexus/images/8/89/Wiki-wordmark.png/revision/latest?cb=20170613014107`)
        .setTitle(`**__PMDVN-NEXUS__**`)
        .setDescription(`__Pokémon Mystery Dungeon Vietnam Bot__`)
        .addField(`.bite | .slap | .smash | .poke | .hug | 
.kiss | .lick | .intensify | .trigger | .explode`,`Các cmd giải trí.`)
        .setColor(`#a366ff`);
   
    message.channel.sendEmbed(embed);
    console.log(`${message.author.username}#${message.author.discriminator} sent help!`);
}

module.exports.help = {
    name: "help"
}