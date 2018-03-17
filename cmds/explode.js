module.exports.run = (pw, message, args) => {
    message.channel.sendMessage(message.author.username + ' đã nổ tung! https://i.imgur.com/OxWPqhz.gif');
    console.log(`${message.author.username}#${message.author.discriminator} exploded!`);
}

module.exports.help = {
    name: "explode"
}