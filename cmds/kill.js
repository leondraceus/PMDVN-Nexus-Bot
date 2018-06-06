const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var embed = new Discord.RichEmbed()
    .setColor(`#676666`)
    .setDescription(args[0] +` đã bị xử tử sml!`);

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("```Xóe ! Có cái lone ý, chỉ có tư sản mới được ức hiếp dân nghèo thôi !```");

var toHeaven = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!toHeaven) return message.channel.sendMessage("```Hãy Mention nạn nhân của bạn!```");

var role = message.guild.roles.find(r => r.name === "Died");
if(!role) {
    try {
        role = await message.guild.createRole({
            name:"Heaven",
            color:"#676666",
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

if(toHeaven.roles.has(role.id)) return message.channel.sendMessage("```Pokémon này hiện đã die cmnr!```");

await toHeaven.addRole(role);
message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "kill"
}
