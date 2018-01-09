const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("```Bạn không đủ quyền hành để thực hiện việc này!```");

    var toJail = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toJail) return message.channel.sendMessage("```Hãy Mention một ai đó!```");

    var role = message.guild.roles.find(r => r.name === "Eaten");
    if(!role) {
        try {
            role = await message.guild.createRole({
                name:"Eaten",
                color:"##923200",
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

    if(toJail.roles.has(role.id)) return message.channel.sendMessage("```Pokémon này hiện đã bị ăn!```");

    await toJail.addRole(role);
    message.channel.sendMessage(message.author.username + " đã ăn " + arg[0] + " !!! ");
}

module.exports.help = {
    name: "eat"
}