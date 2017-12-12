const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    // Customization Items //
    if(args[0]==="custom"){
        var customize = new Discord.RichEmbed()
            .setTitle(`- Customization Items -`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
            .addField(`Animated Images (1200 <:poke:379535433467428867>)`,`Một vật phẩm có thể giúp cho người dùng thêm ảnh .gif vào trang thông tin của mình.`)
            .addField(`Profile Customization (1000 <:poke:379535433467428867>)`,`Một vật phẩm có thể giúp cho người dùng chỉnh sửa, thay đổi giao diện trang thông tin của mình theo sở thích. **(Chỉ dùng được 1 lần)**`)
            .addField(`Shiny Charm (1500 <:poke:379535433467428867>)`,`Một vật phẩm có thể giúp cho người dùng thay đổi Avatar thành Avatar Shiny Pokémon.`)
            .addField(`Transform Capsule (2500 <:poke:379535433467428867>)`,`Một vật phẩm có thể giúp cho người dùng biến hoá thành Pokémon khác. **(Chỉ dùng được 1 lần)**`)
            .addField(`Inventory Enlarger 1 (1500 <:poke:379535433467428867>)`,`Một vật phẩm có thể nâng cấp kho đồ của người dùng lên mức chứa là 25 vật phẩm.`)
            .addField(`Inventory Enlarger 2 (1800 <:poke:379535433467428867>)`,`Một vật phẩm có thể nâng cấp kho đồ của người dùng lên mức chứa là 35 vật phẩm.`)
            .addField(`Inventory Enlarger 3 (2100 <:poke:379535433467428867>)`,`Một vật phẩm có thể nâng cấp kho đồ của người dùng lên mức chứa là 45 vật phẩm.`)
            .addField(`Inventory Enlarger 4 (2400 <:poke:379535433467428867>)`,`Một vật phẩm có thể nâng cấp kho đồ của người dùng lên mức chứa là 55 vật phẩm.`)
            .addField(`Inventory Enlarger MAX (3200 <:poke:379535433467428867>)`,`Một vật phẩm có thể nâng cấp kho đồ của người dùng lên mức chứa là 70 vật phẩm.`);

        message.channel.sendEmbed(customize);
    }

    // Collectible Dolls //
    if(args[0]==="doll"){
        var doll = new Discord.RichEmbed()
            .setTitle(`- Collectible Dolls -`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
            .addField(`Bulbasaur Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Bulbasaur.`)
            .addField(`Charmander Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Charmander.`)
            .addField(`Squirtle Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Squirtle.`)
            .addField(`Pikachu Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Pikachu.`)
            .addField(`Chikorita Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Chikorita.`)
            .addField(`Cyndaquil Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Cyndaquil.`)
            .addField(`Totodile Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Totodile.`)
            .addField(`Pichu Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Pichu.`)
            .addField(`Treecko Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Treecko.`)
            .addField(`Torchic Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Torchic.`)
            .addField(`Mudkip Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Mudkip.`)
            .addField(`Plusle Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Plusle.`)
            .addField(`Minun Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Minun.`)

        message.channel.sendEmbed(doll);
    }

    // Collectible Items //
    if(args[0]==="collect"){
        var collect = new Discord.RichEmbed()
            .setTitle(`- Collectible Items -`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
            .addField(`Tiny Mushroom (150 <:poke:379535433467428867>)`,`Một chiếc nấm nhỏ và hiếm, có thể dùng để chế biến thức ăn.`)
            .addField(`Big Mushroom (350 <:poke:379535433467428867>)`,`Một chiếc nấm to và hiếm, có thể dùng để chế biến thức ăn.`)
            .addField(`Heart Scale (500 <:poke:379535433467428867>)`,`Một miếng vảy hình trái tim tuyệt đẹp và rất quý hiếm. Nó phát sáng nhẹ với đủ 7 màu sắc của cầu vồng.`)
            .addField(`Golden Apple (1500 <:poke:379535433467428867>)`,`Một quả táo đặc biệt có ánh hào quang vàng kim chói lọi. Nó quý hiếm và đẹp đến nỗi không nỡ ăn được!`)
            .addField(`Red Balloon (200 <:poke:379535433467428867>)`,`Một quả bóng bay màu đỏ.`)
            .addField(`Blue Balloon (200 <:poke:379535433467428867>)`,`Một quả bóng bay màu lam.`)
            .addField(`Green Balloon (200 <:poke:379535433467428867>)`,`Một quả bóng bay màu lục.`)
            .addField(`Yellow Balloon (200 <:poke:379535433467428867>)`,`Một quả bóng bay màu vàng.`)

        message.channel.sendEmbed(collect);
    }

    // Misc. //
    if(args[0]==="misc"){
        var misc = new Discord.RichEmbed()
            .setTitle(`- Misc. -`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
            .addField(`Salt (50 <:poke:379535433467428867>)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)

        message.channel.sendEmbed(misc);
    }
}

module.exports.help = {
    name: "view"
}