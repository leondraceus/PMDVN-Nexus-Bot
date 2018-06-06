const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var embed = new Discord.RichEmbed()
    .setColor(`#923200`)
    .setDescription(args[0] +` đã bị ăn!`);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("```Tuổi lone gì mà đòi ăn ! Nhịn đi !```");

    var toBelly = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toBelly) return message.channel.sendMessage("```Hãy Mention bữa tối của bạn!```");

    var role = message.guild.roles.find(r => r.name === "Eaten");
    if(!role) {
        try {
            role = await message.guild.createRole({
                name:"Eaten",
                color:"#923200",
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

    if(toBelly.roles.has(role.id)) return message.channel.sendMessage("```Pokémon này hiện đã bị ăn!```");

    await toBelly.addRole(role);
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "eat"
}