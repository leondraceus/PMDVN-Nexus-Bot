const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var roll = Math.floor(Math.random() * 1000) +1;
    var HP = 150000;
    if(HP=150000){
        var RemainingHP = 150000-roll;
        const HP = RemainingHP;
    }
    if(HP<150000){
        var RemainingHP = HP-roll;
        const HP = RemainingHP;
    }
    var embed = new Discord.RichEmbed()
        .setAuthor("Aegislash","https://vignette.wikia.nocookie.net/pokemon/images/9/9c/AegislashSpriteBlade_XY.gif")
        .setDescription(`Aegislash: Chúc các Guild giành chiến thắng và nhận nhiều phần thưởng hấp dẫn nhé!`)
        .setTitle(`**__COLOSSEUM__**`)
        .addField(`Battler:`,`${message.author.username}#${message.author.discriminator}`)
        .addField(`Damage:`,roll)
        .addField(`BOSS:`,`Mega Mewtwo Y (HP: ${RemainingHP}/${HP})`)
        .setColor(`#85CC6D`)
        .setImage(`https://vignette.wikia.nocookie.net/pokemon/images/b/b6/Mewtwo_Mega_Y_XY_Shiny.gif`);
   
    message.channel.send(embed);
    console.log(`${message.author.username}#${message.author.discriminator} is in a battle!`);
}

module.exports.help = {
    name: "battle"
}