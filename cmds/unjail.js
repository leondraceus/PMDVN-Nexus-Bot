const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var embed = new Discord.RichEmbed()
        .setAuthor(`Magnezone`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/5c/Magnezone1.png/revision/latest/scale-to-width-down/100?cb=20180109090806`)
        .setColor(`#d7342a`)
        .setDescription(args[0] +` đã được tự do!`);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("```Bạn không đủ quyền hành để thực hiện việc này!```");

    var toUnjail = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toUnjail) return message.channel.sendMessage("```Mention người cần Jail!```");

    var role = message.guild.roles.find(r => r.name === "Jailed");

    if(!toUnjail.roles.has(role.id)) return message.channel.sendMessage("```Pokémon này hiện không bị giam giữ!```");

    await toUnjail.removeRole(role);
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "unjail"
}