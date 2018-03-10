const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var embed = new Discord.RichEmbed()
    .setColor(`#ff2525`)
    .setDescription(args[0] +` đã banh xác!`);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("```Tuổi gì đòi dùng, tiếc quá ~```");

    var toNothing = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toNothing) return message.channel.sendMessage("```Hãy Mention một ai đó!```");

    var role = message.guild.roles.find(r => r.name === "Exploded");
    if(!role) {
        try {
            role = await message.guild.createRole({
                name:"Exploded",
                color:"#ff2525",
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

    if(toNothing.roles.has(role.id)) return message.channel.sendMessage("```Pokémon này đã thài rồi, tiếc quá```");

    await toNothing.addRole(role);
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "present"
}