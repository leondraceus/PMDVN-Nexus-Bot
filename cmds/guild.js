const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var embed = new Discord.RichEmbed().setColor(`#FF69B4`)
        .setTitle(`- GUILD CLUB -`).setURL(`https://pmdv-nexus.wikia.com/wiki/Guild_Club`)
        .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/f1/Wigglytuff.png/revision/latest/scale-to-width-down/56?cb=20180303141617`)
        .setDescription(`Chào mừng đến với Câu lạc bộ Hội nhóm (Guild Club). Đây là nơi để bạn có thể thành lập 1 Guild cho riêng mình và cùng với những Pokémon khác xây dựng nó.`)
        .addField(`E-Gang`,`.guild G001`)
        .addField(`Naturia`,`.guild G002`)
        .addField(`Wish Dream`,`.guild G003`)
        .addField(`Gracidea`,`.guild G004`)
        .setFooter(`Xem danh sách tất cả các guild: https://pmdv-nexus.wikia.com/wiki/Category:Guild`);
   
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "guildclub"
}