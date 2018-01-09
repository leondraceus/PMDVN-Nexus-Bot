const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var embed = new Discord.RichEmbed()
        .setTitle(`Magnezone`).setColor(`#d7342a`)
        .setDescription(args[0] +` đã được đưa vào Jail!`);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("```Bạn không đủ quyền hành để thực hiện việc này!```");

    var toJail = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toJail) return message.channel.sendMessage("```Mention người cần Jail!```");

    var role = message.guild.roles.find(r => r.name === "Jailed");
    if(!role) {
        try {
            role = await message.guild.createRole({
                name:"Jailed",
                color:"#d7342a",
                permissions: []
            });

            message.guild.channels.forEach(async (channel,id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch(e) {
            console.log(e.stack);
        }
    }

    if(toJail.roles.has(role.id)) return message.channel.sendMessage("```Pokémon này hiện đang bị giam giữ!```");

    await toJail.addRole(role);
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "jail"
}