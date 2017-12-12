const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var embed = new Discord.RichEmbed()
        .setTitle(`Kecleon Shop`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
        .setDescription(`Xin chào! Xin chào! Chào mừng đến với cửa hàng Kecleon. Bạn có thể mua những vật phẩm ở đây bằng <:poke:379535433467428867>`)
        .addField(`Customization Items`,`.view custom`)
        .addField(`Collectible Dolls`,`.view doll`)
        .addField(`Collectible Items`,`.view collect`)
        .addField(`Misc.`,`.view misc`)
        .setFooter(`Mua sắm tại: http://bit.ly/2i7YOOn`);
   
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "shop"
}