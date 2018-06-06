const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var embed = new Discord.RichEmbed()
    .setColor(`#556a74`)
    .setDescription(args[0] +` đã bị hoá đá!`);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("```Tuổi lone gì mà đòi hóa đá Pokémon khác ! Thứ kém sang !```");

    var toVoid = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toVoid) return message.channel.sendMessage("```Hãy chọn nạn nhân của bạn!```");

    var role = message.guild.roles.find(r => r.name === "Petrified");
    if(!role) {
        try {
            role = await message.guild.createRole({
                name:"Petrified",
                color:"#556a74",
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

    if(toVoid.roles.has(role.id)) return message.channel.sendMessage("```Pokémon này hiện đã bị hoá đá!```");

    await toVoid.addRole(role);
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "stare"
}