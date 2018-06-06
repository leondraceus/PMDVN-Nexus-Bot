const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    // Customization Items //
    if(args[0]==="custom"){
        var customize = new Discord.RichEmbed()
            .setTitle(`- Customization Items -`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
            .addField(`Animated Images (1200 <:poke:379535433467428867>)`,`Một vật phẩm có thể giúp cho người dùng thêm ảnh .gif vào trang thông tin của mình.`)
            .addField(`Shiny Charm (1500 <:poke:379535433467428867>)`,`Một vật phẩm có thể giúp cho người dùng thay đổi Avatar thành Avatar Shiny Pokémon.`)
            .addField(`Transform Capsule (2500 <:poke:379535433467428867>)`,`Một vật phẩm có thể giúp cho người dùng biến hoá thành Pokémon khác. **(Chỉ dùng được 1 lần)**`)
            .addField(`Inventory Enlarger 1 (1500 <:poke:379535433467428867>)`,`Một vật phẩm có thể nâng cấp kho đồ của người dùng lên mức chứa là 30 vật phẩm.`)
            .addField(`Inventory Enlarger 2 (1800 <:poke:379535433467428867>)`,`Một vật phẩm có thể nâng cấp kho đồ của người dùng lên mức chứa là 45 vật phẩm.`)
            .addField(`Inventory Enlarger 3 (2100 <:poke:379535433467428867>)`,`Một vật phẩm có thể nâng cấp kho đồ của người dùng lên mức chứa là 60 vật phẩm.`)
            .addField(`Inventory Enlarger 4 (2400 <:poke:379535433467428867>)`,`Một vật phẩm có thể nâng cấp kho đồ của người dùng lên mức chứa là 75 vật phẩm.`)
            .addField(`Inventory Enlarger MAX (3200 <:poke:379535433467428867>)`,`Một vật phẩm có thể nâng cấp kho đồ của người dùng lên mức chứa là 100 vật phẩm.`);

        message.channel.sendEmbed(customize);
    }

    // Collectible Dolls //
    if(args[0]==="doll"){
        var doll = new Discord.RichEmbed()
            .setTitle(`- Collectible Dolls -`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
            .addField(`Gen 1 Starters & Electric Rodent Set`,`.view pack001`)
            .addField(`Gen 2 Starters & Electric Rodent Set`,`.view pack002`)
            .addField(`Gen 3 Starters & Electric Rodent Set`,`.view pack003`)
            .addField(`Gen 4 Starters & Electric Rodent Set`,`.view pack004`)
            .addField(`Gen 5 Starters & Electric Rodent Set`,`.view pack005`)
            .addField(`Gen 6 Starters & Electric Rodent Set`,`.view pack006`)
            .addField(`Gen 7 Starters & Electric Rodent Set`,`.view pack007`)
            .addField(`Other`,`.view packother`);

        message.channel.sendEmbed(doll);
    }
    
    if(args[0]==="pack001"){
        var pack001 = new Discord.RichEmbed()
            .setTitle(`- Collectible Dolls -`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
            .addField(`Bulbasaur Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Bulbasaur.`)
            .addField(`Charmander Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Charmander.`)
            .addField(`Squirtle Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Squirtle.`)
            .addField(`Pikachu Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Pikachu.`);

        message.channel.sendEmbed(pack001);
    }

    if(args[0]==="pack002"){
        var pack002 = new Discord.RichEmbed()
            .setTitle(`- Collectible Dolls -`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
            .addField(`Chikorita Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Chikorita.`)
            .addField(`Cyndaquil Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Cyndaquil.`)
            .addField(`Totodile Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Totodile.`)
            .addField(`Pichu Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Pichu.`);

        message.channel.sendEmbed(pack002);
    }

    if(args[0]==="pack003"){
        var pack003 = new Discord.RichEmbed()
            .setTitle(`- Collectible Dolls -`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
            .addField(`Treecko Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Treecko.`)
            .addField(`Torchic Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Torchic.`)
            .addField(`Mudkip Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Mudkip.`)
            .addField(`Plusle Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Plusle.`)
            .addField(`Minun Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Minun.`);

        message.channel.sendEmbed(pack003);
    } 

    if(args[0]==="pack004"){
        var pack004 = new Discord.RichEmbed()
            .setTitle(`- Collectible Dolls -`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
            .addField(`Turtwig Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Turtwig.`)
            .addField(`Chimchar Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Chimchar.`)
            .addField(`Piplup Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Piplup.`)
            .addField(`Pachirisu Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Pachirisu.`);

        message.channel.sendEmbed(pack004);
    } 

    if(args[0]==="pack005"){
        var pack005 = new Discord.RichEmbed()
            .setTitle(`- Collectible Dolls -`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
            .addField(`Snivy Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Snivy.`)
            .addField(`Tepig Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Tepig.`)
            .addField(`Oshawott Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Oshawott.`)
            .addField(`Emolga Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Emolga.`);

        message.channel.sendEmbed(pack005);
    } 

    if(args[0]==="pack006"){
        var pack006 = new Discord.RichEmbed()
            .setTitle(`- Collectible Dolls -`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
            .addField(`Chespin Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Chespin.`)
            .addField(`Fennekin Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Fennekin.`)
            .addField(`Froakie Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Froakie.`)
            .addField(`Dedenne Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Dedenne.`);

        message.channel.sendEmbed(pack006);
    }

    if(args[0]==="pack007"){
        var pack007 = new Discord.RichEmbed()
            .setTitle(`- Collectible Dolls -`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
            .addField(`Rowlet Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Rowlet.`)
            .addField(`Litten Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Litten.`)
            .addField(`Popplio Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Popplio.`)
            .addField(`Togedemaru Doll (350 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Togedemaru.`);

        message.channel.sendEmbed(pack007);
    }

    if(args[0]==="packother"){
        var packother = new Discord.RichEmbed()
            .setTitle(`- Collectible Dolls -`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
            .addField(`Eevee Doll (500 <:poke:379535433467428867>)`,`Một con búp bê hình Pokémon Eevee.`);

        message.channel.sendEmbed(packother);
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
            .addField(`Lum Berry (150 <:poke:379535433467428867>)`,`Một loại Berry có khả năng chữa lành mọi trạng thái bất lợi khi ăn vào.`)

        message.channel.sendEmbed(collect);
    }

    // Banners //
    if(args[0]==="banner"){
        var banner = new Discord.RichEmbed()
            .setTitle(`- Banners -`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
            .addField(`Spring Deerling Banner (700 <:poke:379535433467428867>)`,`Preview: <https://goo.gl/apNPN2>`)
            .addField(`Summer Deerling Banner (700 <:poke:379535433467428867>)`,`Preview: <https://goo.gl/iWBXLh>`)
            .addField(`Fall Deerling Banner (700 <:poke:379535433467428867>)`,`Preview: <https://goo.gl/k8jCBm>`)
            .addField(`Winter Deerling Banner (700 <:poke:379535433467428867>)`,`Preview: <https://goo.gl/4GoUDy>`);

        message.channel.sendEmbed(banner);
    }

    // Misc. //
    if(args[0]==="misc"){
        var misc = new Discord.RichEmbed()
            .setTitle(`- Misc. -`).setColor(`#7FFFD4`).setURL(`http://pmdv-nexus.wikia.com/wiki/Kecleon's_Shop`).setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/59/Kecleon1.png/revision/latest/scale-to-width-down/56?cb=20170620115423`)
            .addField(`Salt (25 <:poke:379535433467428867>)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Corsola Twig (50 <:poke:379535433467428867>)`,`Một nhánh sừng của Pokémon Corsola, được dùng để ném gây sát thương.`)

        message.channel.sendEmbed(misc);
    }
}

module.exports.help = {
    name: "view"
}