const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    
////////////////   ADMIN   ////////////////
    /// Shaymin (AD001) ///
    if(args[0]==="AD001"| args[0]==="ad001" | args[0]==="Ad001"){
        var AD001 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/kt7G3Br.gif`)
            .setAuthor(`Shaymin/Mã Tiến An`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/1/18/Shaymin_%28land%292.png/revision/latest/scale-to-width-down/100?cb=20160815090806`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Shaymin Doll`,`Một con búp bê hình Pokémon Shaymin.`);
            
        message.channel.sendEmbed(AD001);
    }

    else if(args[0]==="Shaymin" | args[0]==="shaymin"){
        message.channel.sendMessage(`**Hiện tại có 2 Shaymin**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv AD001** | **.inv ME044**`)
    }

    /// Mew (AD002) ///
    if(args[0]==="AD002"| args[0]==="ad002" | args[0]==="Ad002"){
        var AD002 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/nM0UZzS.gif`)
            .setAuthor(`Mew/Pikarry Phạm`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a4/Mew_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20170616124144`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`800`,inline = true)
            .addField(`Shiny Charm`,`Một vật phẩm có thể giúp cho người dùng thay đổi Avatar thành Avatar Shiny Pokémon.`)
            .addField(`Mew Doll`,`Một con búp bê hình Pokémon Mew.`);
            
        message.channel.sendEmbed(AD002);
    }

    else if(args[0]==="Mew" | args[0]==="mew"){
        message.channel.sendMessage(`**Hiện tại có 2 Mew**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv AD002** | **(Mew/Huỳnh Long - đang cập nhật)**`)
    }

    /// Zekrom (AD003) ///
    if(args[0]==="AD003"| args[0]==="ad003" | args[0]==="Ad003" | args[0]==="Zekrom" | args[0]==="zekrom"){
        var AD003 = new Discord.RichEmbed().setColor(`#EA2FC0`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/qcWppUj.gif`)
            .setAuthor(`Zekrom/Cao Minh Trí`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/68/Zekrom.png/revision/latest?cb=20160814002800`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/b1/Grand_Administrator_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`∞`,inline = true)
            .addField(`Zekrom Doll`,`Một con búp bê hình Pokémon Zekrom.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Gold Ditto Doll`,`Một con búp bê hình Pokémon Ditto màu vàng kim cực kì quý hiếm và đặc biệt. Nó có thể biến đổi thành bất cứ búp bê hình Pokémon nào khác tuỳ theo ý chủ sở hữu.`)
            .addField(`Togedemaru Doll`,`Một con búp bê hình Pokémon Togedemaru.`)
            .addField(`Rowlet Doll`,`Một con búp bê hình Pokémon Rowlet.`);
            
        message.channel.sendEmbed(AD003);
    }

//    else if(args[0]==="Zekrom" | args[0]==="zekrom"){
//        message.channel.sendMessage(`**Hiện tại có 2 Zekrom**
//Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv AD003** | **?**`)
//   }

    /// Marshadow (AD004) ///
    if(args[0]==="AD004"| args[0]==="ad004" | args[0]==="Ad004" | args[0]==="Marshadow" | args[0]==="marshadow"){
        var AD004 = new Discord.RichEmbed().setColor(`#2CE0C0`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/OGTVkzI.gif`)
            .setAuthor(`Marshadow/レイズ トム・`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/dd/Marshadow.png/revision/latest/scale-to-width-down/100?cb=20170616131445`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/51/Organizer_Logo.png/revision/latest?cb=20170613044004`)
            .addField(`Poké:`,`∞`,inline = true)
            .addField(`Marshadow Doll`,`Một con búp bê hình Pokémon Marshadow.`);
            
        message.channel.sendEmbed(AD004);
    }

//    else if(args[0]==="Marshadow" | args[0]==="marshadow"){
//        message.channel.sendMessage(`**Hiện tại có 2 Marshadow**
//Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv AD004** | **?**`)
//   }

    /// Solgaleo (AD005) ///
    if(args[0]==="AD005"| args[0]==="ad005" | args[0]==="Ad005"){
        var AD005 = new Discord.RichEmbed().setColor(`#E7462B`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/TtoFdTO.gif`)
            .setAuthor(`Solgaleo/Lê Gia Long`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a2/Solgaleo.png/revision/latest/scale-to-width-down/100?cb=20170616133607`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/9e/Developer_Logo.png/revision/latest?cb=20170613044000`)
            .addField(`Poké:`,`∞`,inline = true)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Marshadow Doll`,`Một con búp bê hình Pokémon Marshadow.`)
            .addField(`Yveltal Doll`,`Một con búp bê hình Pokémon Yveltal.`)
            .addField(`Solgaleo Doll`,`Một con búp bê hình Pokémon Solgaleo.`)
            .addField(`Zekrom Doll`,`Một con búp bê hình Pokémon Zekrom.`);
            
        message.channel.sendEmbed(AD005);
    }

    else if(args[0]==="Solgaleo" | args[0]==="solgaleo"){
        message.channel.sendMessage(`**Hiện tại có 2 Solgaleo**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv AD005** | **.inv ME191**`)
   }

    /// Yveltal (AD006) ///
    if(args[0]==="AD006"| args[0]==="ad006" | args[0]==="Ad006" | args[0]==="Yveltal" | args[0]==="yveltal"){
        var AD006 = new Discord.RichEmbed().setColor(`#2CE0C0`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/ogbvJhH.gif`)
            .setAuthor(`Yveltal/Nguyễn Nhật`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/b6/Yveltal.png/revision/latest/scale-to-width-down/100?cb=20160821130113`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/51/Organizer_Logo.png/revision/latest?cb=20170613044004`)
            .addField(`Poké:`,`∞`,inline = true)
            .addField(`Yveltal Doll`,`Một con búp bê hình Pokémon Yveltal.`)
            .addField(`Salt (x69)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Rainbow Wing`,`Một chiếc lông vũ bảy sắc cầu vồng lấp lánh.`)
            .addField(`Shaymin Doll`,`Một con búp bê hình Pokémon Shaymin.`)
            .addField(`Cyndaquil Doll`,`Một con búp bê hình Pokémon Cyndaquil.`)
            .setFooter(`Trang sau (.inv AD006--2)`);
            
        message.channel.sendEmbed(AD006);
    }

    if(args[0]==="AD006--2"| args[0]==="ad006--2" | args[0]==="Ad006--2"){
        var AD006 = new Discord.RichEmbed().setColor(`#2CE0C0`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/ogbvJhH.gif`)
            .setAuthor(`Yveltal/Nguyễn Nhật`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/b6/Yveltal.png/revision/latest/scale-to-width-down/100?cb=20160821130113`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/51/Organizer_Logo.png/revision/latest?cb=20170613044004`)
            .addField(`Poké:`,`∞`,inline = true)
            .addField(`Fennekin Doll`,`Một con búp bê hình Pokémon Fennekin.`)
            .addField(`Growlithe Doll`,`Một con búp bê hình Pokémon Growlithe.`)
            .setFooter(`Trang trước (.inv AD006)`);
            
        message.channel.sendEmbed(AD006);
    }

//    else if(args[0]==="Yveltal" | args[0]==="yveltal"){
//        message.channel.sendMessage(`**Hiện tại có 2 Yveltal**
//Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv AD006** | **?**`)
//   }

    /// Altaria (AD007) ///
    if(args[0]==="AD007"| args[0]==="ad007" | args[0]==="Ad007" | args[0]==="MegaAltaria" | args[0]==="Megaaltaria" | args[0]==="megaaltaria"){
        var AD007 = new Discord.RichEmbed().setColor(`#2CE0C0`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/uIFZZbL.gif`)
            .setAuthor(`Mega Altaria/Nguyễn Mạnh Kha`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/73/Megaaltaria.png/revision/latest/scale-to-width-down/100?cb=20160822063724`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/51/Organizer_Logo.png/revision/latest?cb=20170613044004`)
            .addField(`Poké:`,`∞`,inline = true)
            .addField(`Mega Altaria Doll`,`Một con búp bê hình Pokémon Altaria trong dạng Mega.`);
            
        message.channel.sendEmbed(AD007);
    }
    
    /// Gible (AD008) ///
    if(args[0]==="AD008"| args[0]==="ad008" | args[0]==="Ad008" | args[0]==="Gible" | args[0]==="gible"){
        var AD008 = new Discord.RichEmbed().setColor(`#E7462B`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/xadjdAw.gif`)
            .setAuthor(`Gible/Leon Draceus`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/37/Gible.png/revision/latest/scale-to-width-down/100?cb=20160827072330`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/9e/Developer_Logo.png/revision/latest?cb=20170613044000`)
            .addField(`Poké:`,`∞`,inline = true)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Bulbasaur Doll`,`Một con búp bê hình Pokémon Bulbasaur.`)
            .addField(`Salt (x69)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Rainbow Wing`,`Một chiếc lông vũ bảy sắc cầu vồng lấp lánh.`)
            .addField(`Blue Balloon`,`Một quả bóng bay màu lam.`)
            .setFooter(`Trang sau (.inv AD008--2)`);
            
        message.channel.sendEmbed(AD008);
    }

    if(args[0]==="AD008--2"| args[0]==="ad008--2" | args[0]==="Ad008--2"){
        var AD008 = new Discord.RichEmbed().setColor(`#E7462B`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/xadjdAw.gif`)
            .setAuthor(`Gible/Leon Draceus`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/37/Gible.png/revision/latest/scale-to-width-down/100?cb=20160827072330`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/9e/Developer_Logo.png/revision/latest?cb=20170613044000`)
            .addField(`Poké:`,`∞`,inline = true)
            .addField(`Piplup Doll`,`Một con búp bê hình Pokémon Piplup.`)
            .addField(`Victini Doll`,`Một con búp bê hình Pokémon Victini.`)
            .setFooter(`Trang trước (.inv AD008)`);
            
        message.channel.sendEmbed(AD008);
    }

////////////////   CONTRIBUTOR   ////////////////

    /// Shaymin (ME044) ///
    if(args[0]==="ME044"| args[0]==="me044" | args[0]==="Me044"){
        var ME044 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Shaymin/Inverno Luna`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/b7/Shaymin_%28sky%29.png/revision/latest/scale-to-width-down/100?cb=20170617033642`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`463`,inline = true)
            .addField(`Shaymin Doll`,`Một con búp bê hình Pokémon Shaymin.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Salt (x1000)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Snivy Doll`,`Một con búp bê hình Pokémon Snivy.`)
            .addField(`Marshadow Doll`,`Một con búp bê hình Pokémon Marshadow.`)
            .addField(`Popplio Doll`,`Một con búp bê hình Pokémon Popplio.`);
            
        message.channel.sendEmbed(ME044);
    }

    /// Pikachu (ME061) ///
    if(args[0]==="ME061"| args[0]==="me061" | args[0]==="Me061" | args[0]==="Pikachu" | args[0]==="pikachu"){
        var ME061 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/t6NyAQq.gif`)
            .setAuthor(`Pikachu/Nguyễn Song Hoàng Huy`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/32/Pikachu2.png/revision/latest/scale-to-width-down/100?cb=20160911055810`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`255`,inline = true)
            .addField(`Snowflake:`,`15`,inline = true)
            .addField(`Choco-Heart:`,`20`,inline = true)
            .addField(`Salt (x1000)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Corsola Twig (x2)`,`Một nhánh sừng của Pokémon Corsola, được dùng để ném gây sát thương.`)
            .addField(`Pikachu Doll`,`Một con búp bê hình Pokémon Pikachu.`);
            
        message.channel.sendEmbed(ME061);
    }

    /// Mega Rayquaza (ME642) ///
    if(args[0]==="ME642"| args[0]==="me642" | args[0]==="Me642"){
        var ME642 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ (1/2) -`).setImage(`https://i.imgur.com/vUvhNLf.gif`)
            .setAuthor (`Mega Rayquaza/Huy Ninh`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/5e/Megarayquaza_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20180120142214`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`2095`,inline = true)
            .addField(`Shiny Charm`,`Một vật phẩm có thể giúp cho người dùng thay đổi Avatar thành Avatar Shiny Pokémon.`)
            .addField(`Lovely Note (x2)`,`Một bức thư có bìa ngoài được trang trí hường phấn lãng mạn, được dùng để gửi đi những lời chúc đến người mình yêu thương nhất.`)
            .addField(`Heart Balloon (x2) `,`Một quả bóng bay hình trái tim.`)
            .addField(`Rose Thorn (x3)`,`Một nhánh gai hoa hồng không có giá trị đặc biệt gì, chỉ để sưu tầm. Đầu của nó rất nhọn và sẽ rất đau nếu chạm vào đó.`)
            .addField(`Snover Doll`,`Một con búp bê hình Pokémon Snover.`)
            .setFooter(`Trang sau (.inv ME642--2)`);
        
        message.channel.sendEmbed(ME642);
    }

    if(args[0]==="ME642--2"| args[0]==="me642--2" | args[0]==="Me642"){
        var ME642 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ (2/2) -`).setImage(`https://i.imgur.com/vUvhNLf.gif`)
                .setAuthor (`Mega Rayquaza/Huy Ninh`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/5e/Megarayquaza_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20180120142214`)
                .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
                .addField(`Poké:`,`2095`,inline = true)
                .addField(`Happiny Doll`,`Một con búp bê hình Pokémon Happiny.`)
                .addField(`Meowth Doll`,`Một con búp bê hình Pokémon Meowth.`)
                .addField(`Deerling Doll (Spring)`,`Một con búp bê hình Pokémon Deerling (Spring Form).`)
                .addField(`Woobat Doll`,`Một con búp bê hình Pokémon Woobat.`)
                .addField(`Corsola Twig (x1)`,`Một nhánh sừng của Pokémon Corsola, được dùng để ném gây sát thương.`)
                .setFooter(`Trang trước (.inv ME642)`);
        
        message.channel.sendEmbed(ME642);
    }

    // Alolan Vulpix (ME786) ///
    if(args[0]==="ME786"| args[0]==="Me786" | args[0]==="me786" | args[0]==="Alolanvulpix" | args[0]==="alolanvulpix"){
        var ME786 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Alolan Vulpix/Ka Lê Quốc Bảo`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/c/c5/Vulpix_%28alolan%29.png/revision/latest/scale-to-width-down/100?cb=20170910131902`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Gracidea`,`Một loài hoa thường được dùng để bày tỏ lòng biết ơn vào những dịp lễ đặc biệt.`)
            
        message.channel.sendEmbed(ME786);
    }
    
    /// Leafeon (ME401) ///
    if(args[0]==="ME401"| args[0]==="me401" | args[0]==="Me401"){
        var ME401 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ (1/2) -`)
            .setAuthor(`Leafeon/Decina Denele`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/91/Leafeon.png/revision/latest/scale-to-width-down/100?cb=20171029143458`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`1394`,inline = true)
            .addField(`Spooky Token:`,`35`,inline = true)
            .addField(`Snowflake:`,`13`,inline = true)
            .addField(`Choco-Heart:`,`17`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Salt (x16)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Bulbasaur Doll`,`Một con búp bê hình Pokémon Bulbasaur.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Frozen Wand`,`Một chiếc gậy làm từ băng ẩn chứa một sức mạnh bí ẩn có khả năng tạo ra Snowflake.`)
            .setFooter(`Trang sau (.inv ME401--2)`);
            
        message.channel.sendEmbed(ME401);
    }

    if(args[0]==="ME401--2"| args[0]==="me401--2" | args[0]==="Me401--2"){
        var ME401 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ (2/2) -`)
            .setAuthor(`Leafeon/Decina Denele`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/91/Leafeon.png/revision/latest/scale-to-width-down/100?cb=20171029143458`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`1394`,inline = true)
            .addField(`Spooky Token:`,`35`,inline = true)
            .addField(`Snowflake:`,`13`,inline = true)
            .addField(`Choco-Heart:`,`17`,inline = true)
            .addField(`Jirachi Doll`,`Một con búp bê hình Pokémon Jirachi.`)
            .addField(`Delibird Doll`,`Một con búp bê hình Pokémon Delibird.`)
            .addField(`Corsola Twig (x1)`,`Một nhánh sừng của Pokémon Corsola, được dùng để ném gây sát thương.`)
            .addField(`Rose Thorn (x10)`,`Một nhánh gai hoa hồng không có giá trị đặc biệt gì, chỉ để sưu tầm. Đầu của nó rất nhọn và sẽ rất đau nếu chạm vào đó.`)
            .setFooter(`Trang trước (.inv ME401)`);
            
        message.channel.sendEmbed(ME401);
    }
    
    /// Primarina (ME563) ///
    if(args[0]==="ME563"| args[0]==="me563" | args[0]==="Me563" | args[0]==="Primarina" | args[0]==="primarina"){
        var ME563 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ (Size 1 | 1/4) -`).setImage(`https://i.imgur.com/W1CMwcD.gif`)
            .setAuthor(`Primarina/Chương Lê`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/1/14/Primarina.png/revision/latest/scale-to-width-down/100?cb=20180108143722`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`424`,inline = true)
            .addField(`Choco-Heart:`,`19`,inline = true)
            .addField(`Mimikyu Doll`,`Một con búp bê hình Pokémon Mimikyu.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Chikorita Doll`,`Một con búp bê hình Pokémon Chikorita.`)
            .addField(`Mega Altaria Doll`,`Một con búp bê hình Pokémon Mega Altaria.`)
            .setFooter(`Trang sau (.inv ME563--2)`);
            
        message.channel.sendEmbed(ME563);
    }
    
    if(args[0]==="ME563--2"| args[0]==="me563--2" | args[0]==="Me563--2"){
        var ME563 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ (Size 1 | 2/4) -`).setImage(`https://i.imgur.com/W1CMwcD.gif`)
            .setAuthor(`Primarina/Chương Lê`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/1/14/Primarina.png/revision/latest/scale-to-width-down/100?cb=20180108143722`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`424`,inline = true)
            .addField(`Choco-Heart:`,`19`,inline = true)
            .addField(`Frozen Wand`,`Một chiếc gậy làm từ băng ẩn chứa một sức mạnh bí ẩn có khả năng tạo ra Snowflake.`)
            .addField(`Turtwig Doll`,`Một con búp bê hình Pokémon Turtwig.`)
            .addField(`Piplup Doll`,`Một con búp bê hình Pokémon Piplup.`)
            .addField(`Pachirisu Doll`,`Một con búp bê hình Pokémon Pachirisu.`)
            .addField(`Oshawott Doll`,`Một con búp bê hình Pokémon Oshawott.`)
            .setFooter(`Trang trước (.inv ME563) | Trang sau (.inv ME563--3)`);
            
        message.channel.sendEmbed(ME563);
    }

    if(args[0]==="ME563--3"| args[0]==="me563--3" | args[0]==="Me563--3"){
        var ME563 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ (Size 1 | 3/4) -`).setImage(`https://i.imgur.com/W1CMwcD.gif`)
            .setAuthor(`Primarina/Chương Lê`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/1/14/Primarina.png/revision/latest/scale-to-width-down/100?cb=20180108143722`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`424`,inline = true)
            .addField(`Choco-Heart:`,`19`,inline = true)
            .addField(`Emolga Doll`,`Một con búp bê hình Pokémon Emolga.`)
            .addField(`Green Balloon`,`Một quả bóng bay màu xanh lá.`)
            .addField(`Lum Berry`,`Một loại Berry có khả năng chữa lành mọi trạng thái bất lợi khi ăn vào.`)
            .addField(`Corsola Twig (x2)`,`Một nhánh sừng của Pokémon Corsola, được dùng để ném gây sát thương.`)
            .addField(`Miracle Seed`,`Một hạt giống càng tràn sức sống.`)
            .setFooter(`Trang trước (.inv ME563--2) | Trang sau (.inv ME563--4)`);
            
        message.channel.sendEmbed(ME563);
    }

    if(args[0]==="ME563--4"| args[0]==="me563--4" | args[0]==="Me563--4"){
        var ME563 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ (Size 1 | 4/4) -`).setImage(`https://i.imgur.com/W1CMwcD.gif`)
            .setAuthor(`Primarina/Chương Lê`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/1/14/Primarina.png/revision/latest/scale-to-width-down/100?cb=20180108143722`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`424`,inline = true)
            .addField(`Choco-Heart:`,`19`,inline = true)
            .addField(`Lucky Note (x1)`,`Một bức thư màu vàng rực rỡ, được dùng để gửi lời chúc phúc và cầu mong cho những điều tốt đẹp và may mắn xảy đến với người nhận.`)
            .addField(`Popplio Doll`,`Một con búp bê hình Pokémon Popplio.`)
            .setFooter(`Trang trước (.inv ME563--3)`);
            
        message.channel.sendEmbed(ME563);
    }

    /// Spinda (ME329) ///
    if(args[0]==="ME329"| args[0]==="me329" | args[0]==="Me329" | args[0]==="Spinda" | args[0]==="spinda"){
        var ME329 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ (1/2) -`)
            .setAuthor(`Spinda/Bihaicau Neko`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/3b/Spinda.png/revision/latest/scale-to-width-down/100?cb=20160904162441`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`2060`,inline = true)
            .addField(`Spooky Token:`,`67`,inline = true)
            .addField(`Choco-Heart:`,`1`,inline = true)
            .addField(`Gracidea`,`Một loài hoa thường được dùng để bày tỏ lòng biết ơn vào những dịp lễ đặc biệt.`)
            .addField(`Zekrom Doll`,`Một con búp bê hình Pokémon Zekrom.`)
            .addField(`Shaymin Doll`,`Một con búp bê hình Pokémon Shaymin.`)
            .addField(`Tiny Mushroom`,`Một chiếc nấm nhỏ và hiếm, có thể dùng để chế biến thức ăn.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .setFooter(`Trang sau (.inv ME329--2)`);
            
        message.channel.sendEmbed(ME329);
    }
    
    if(args[0]==="ME329--2"| args[0]==="me329--2" | args[0]==="Me329--2"){
        var ME329 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ (2/2) -`)
            .setAuthor(`Spinda/Bihaicau Neko`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/3b/Spinda.png/revision/latest/scale-to-width-down/100?cb=20160904162441`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`2060`,inline = true)
            .addField(`Spooky Token:`,`67`,inline = true)
            .addField(`Choco-Heart:`,`1`,inline = true)
            .addField(`Frozen Apple`,`Một quả táo được ướp lạnh hoàn toàn rất hiếm và đặc biệt. Ăn quả táo này vào sẽ có cảm giác buốt lạnh toàn thân.`)
            .addField(`Deerling Doll (Autumn)`,`Một con búp bê hình Pokémon Deerling (Autumn Form).`)
            .addField(`Plusle Doll`,`Một con búp bê hình Pokémon Plusle.`)
            .addField(`Salt (x1)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Yveltal Doll`,`Một con búp bê hình Pokémon Yveltal.`)
            .setFooter(`Trang trước (.inv ME329)`);
            
        message.channel.sendEmbed(ME329);
    }

    // Corsola (ME595) ///
    if(args[0]==="ME595"| args[0]==="Me595" | args[0]==="me595" | args[0]==="Corsola" | args[0]==="corsola"){
        var ME595 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Corsola/Oo Mốc`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/6a/Corsola.png/revision/latest/scale-to-width-down/100?cb=20160905044456`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`760`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME595);
    }

    /// Meloetta (ME983) ///
    if(args[0]==="ME983"| args[0]==="me983" | args[0]==="Me983"){
        var ME983 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Meloetta/Robin Nico`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/61/Meloetta_%28aria%29_1.png/revision/latest/scale-to-width-down/100?cb=20160820011552`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`3990`,inline = true)
            .addField(`Snowflake:`,`27`,inline = true)
            .addField(`Choco-Heart:`,`69`,inline = true)
            .addField(`Gracidea`,`Một loài hoa thường được dùng để bày tỏ lòng biết ơn vào những dịp lễ đặc biệt.`)
            .addField(`Poké Doll`,`Một con búp bê hình Clefairy thường được dùng làm mồi nhử để đánh lạc hướng.`)
            .addField(`Heart Scale (x1)`,`Một miếng vảy hình trái tim tuyệt đẹp và rất quý hiếm. Nó phát sáng nhẹ với đủ 7 màu sắc của cầu vồng.`)
            .addField(`Cleffa Doll`,`Một con búp bê hình Pokémon Cleffa.`)
            .addField(`Meowth Doll`,`Một con búp bê hình Pokémon Meowth.`);
            
        message.channel.sendEmbed(ME983);
    }

    /// Keldeo (ME674) ///
    if(args[0]==="ME674"| args[0]==="me674" | args[0]==="Me674" | args[0]==="Keldeo" | args[0]==="keldeo"){
        var ME674 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Keldeo/ペリエ リッチー`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a5/Keldeo_%28resolute%29.png/revision/latest/scale-to-width-down/100?cb=20170618235442`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`430`,inline = true)
            .addField(`Choco-Heart:`,`13`,inline = true)
            .addField(`Cherrim Doll`,`Một con búp bê hình Pokémon Cherrim.`)
            .addField(`Nugget`,`Một cục vàng nguyên chất sáng bóng. Nó có thể được bán lại với giá cao ở cửa hàng.`)
            .addField(`Litten Doll`,`Một con búp bê hình Pokémon Litten.`)
            .addField(`Bulbasaur Doll`,`Một con búp bê hình Pokémon Bulbasaur.`);
            
        message.channel.sendEmbed(ME674);
    }

////////////////   MEMBER   ////////////////

    /// Electivire (ME004) ///
    if(args[0]==="ME004"| args[0]==="me004" | args[0]==="Me004" | args[0]==="Electivire" | args[0]==="electivire"){
        var ME004 = new Discord.RichEmbed().setColor(`#3A77E6`)
        .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Electivire/Trần Sage Kabuto Minato`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/ee/Electivire.png/revision/latest/scale-to-width-down/100?cb=20170618085511`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME004);
    }
    
    /// Turtwig (ME007) ///
    if(args[0]==="ME007"| args[0]==="me007" | args[0]==="Me007" | args[0]==="Turtwig" | args[0]==="turtwig"){
        var ME007 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Turtwig/Nguyễn Ngọc Hiếu`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/e6/Turtwig3.png/revision/latest/scale-to-width-down/100?cb=20160821143622`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`160`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME007);
    }
    
    /// Victini (ME509) ///
    if(args[0]==="ME509"| args[0]==="me509" | args[0]==="Me509"){
        var ME509 = new Discord.RichEmbed().setColor(`#F08120`)
            .setTitle(`- KHO ĐỒ (Size 2 | 1/7) -`).setImage(`https://i.imgur.com/3e6Q9vx.gif`)
            .setAuthor(`Victini/Đỗ Khắc Hiệp`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`645`,inline = true)
            .addField(`Snowflake:`,`1`,inline = true)
            .addField(`Choco-Heart:`,`1`,inline = true)
            .addField(`Sea Dew`,`Một loại nước đặc biệt được lấy từ loài Pokémon Phione sống sâu dưới đại dương. Nó có tác dụng chữa bệnh và làm giảm cơn sốt cho Pokémon.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Salt (x4)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Golden Apple`,`Một quả táo đặc biệt có ánh hào quang vàng kim chói lọi. Nó quý hiếm và đẹp đến nỗi không nỡ ăn được!`)
            .addField(`Heart Scale`,`Một miếng vảy hình trái tim tuyệt đẹp và rất quý hiếm. Nó phát sáng nhẹ với đủ 7 màu sắc của cầu vồng.`)
            .setFooter(`Trang sau (.inv ME509--2)`);
            
        message.channel.sendEmbed(ME509);
    }
    
    if(args[0]==="ME509--2"| args[0]==="me509--2" | args[0]==="Me509--2"){
        var ME509 = new Discord.RichEmbed().setColor(`#F08120`)
            .setTitle(`- KHO ĐỒ (Size 2 | 2/7) -`).setImage(`https://i.imgur.com/3e6Q9vx.gif`)
            .setAuthor(`Victini/Đỗ Khắc Hiệp`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`645`,inline = true)
            .addField(`Snowflake:`,`1`,inline = true)
            .addField(`Choco-Heart:`,`1`,inline = true)         
            .addField(`Rainbow Wing`,`Một chiếc lông vũ bảy sắc cầu vồng lấp lánh.`)
            .addField(`Red Balloon`,`Một quả bóng bay màu đỏ.`)
            .addField(`Shiny Charm`,`Một vật phẩm có thể giúp cho người dùng thay đổi Avatar thành Avatar Shiny Pokémon.`)
            .addField(`Frozen Wand`,`Một chiếc gậy làm từ băng ẩn chứa một sức mạnh bí ẩn có khả năng tạo ra Snowflake.`)
            .addField(`Gible Fang`,`Một chiếc răng của Pokémon Gible.`)
            .setFooter(`Trang trước (.inv ME509) | Trang sau (.inv ME509--3)`);
            
        message.channel.sendEmbed(ME509);
    }
    
    if(args[0]==="ME509--3"| args[0]==="me509--3" | args[0]==="Me509--3"){
        var ME509 = new Discord.RichEmbed().setColor(`#F08120`)
            .setTitle(`- KHO ĐỒ (Size 2 | 3/7) -`).setImage(`https://i.imgur.com/3e6Q9vx.gif`)
            .setAuthor(`Victini/Đỗ Khắc Hiệp`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`645`,inline = true)
            .addField(`Snowflake:`,`1`,inline = true)
            .addField(`Choco-Heart:`,`1`,inline = true)
            .addField(`Never-Melt Ice`,`Một cục băng có thể bật lại sức nóng, khiến cho nó không thể bị tan ra.`)
            .addField(`Vanillite Cone (x1)`,`Một cây kem cực kì ngon được thiết kế giống với Pokémon Vanillite.`)
            .addField(`Ice Diamond`,`Một viên kim cương lấp lánh có lớp băng phủ bên ngoài.`)
            .addField(`Frozen Apple`,`Một quả táo được ướp lạnh hoàn toàn rất hiếm và đặc biệt. Ăn quả táo này vào sẽ có cảm giác buốt lạnh toàn thân.`)
            .addField(`Green Balloon`,`Một quả bóng bay màu xanh lá.`)
            .setFooter(`Trang trước (.inv ME509--2) | Trang sau (.inv ME509--4)`);
            
        message.channel.sendEmbed(ME509);
    }
    
    if(args[0]==="ME509--4"| args[0]==="me509--4" | args[0]==="Me509--4"){
        var ME509 = new Discord.RichEmbed().setColor(`#F08120`)
            .setTitle(`- KHO ĐỒ (Size 2 | 4/7) -`).setImage(`https://i.imgur.com/3e6Q9vx.gif`)
            .setAuthor(`Victini/Đỗ Khắc Hiệp`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`645`,inline = true)
            .addField(`Snowflake:`,`1`,inline = true)
            .addField(`Choco-Heart:`,`1`,inline = true)
            .addField(`Blue Balloon`,`Một quả bóng bay màu xanh xanh dương.`)
            .addField(`Yellow Balloon`,`Một quả bóng bay màu xanh vàng.`)
            .addField(`Rose Incense`,`Một hộp hương có mùi thơm ngào ngạt của hoa.`)
            .addField(`Corsola Twig (x1)`,`Một nhánh sừng của Pokémon Corsola, được dùng để ném gây sát thương.`)
            .addField(`Miracle Seed`,`Một hạt giống càng tràn sức sống.`)
            .setFooter(`Trang trước (.inv ME509--3) | Trang sau (.inv ME509--5)`);
            
        message.channel.sendEmbed(ME509);
    }
    
    if(args[0]==="ME509--5"| args[0]==="me509--5" | args[0]==="Me509--5"){
        var ME509 = new Discord.RichEmbed().setColor(`#F08120`)
            .setTitle(`- KHO ĐỒ (Size 2 | 5/7) -`).setImage(`https://i.imgur.com/3e6Q9vx.gif`)
            .setAuthor(`Victini/Đỗ Khắc Hiệp`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`645`,inline = true)
            .addField(`Snowflake:`,`1`,inline = true)
            .addField(`Choco-Heart:`,`1`,inline = true)
            .addField(`Big Root`,`Một chiếc rễ to có khả năng tăng lượng HP khi sử dụng những chiêu thức hút HP.`)
            .addField(`Lum Berry`,`Một loại Berry có khả năng chữa lành mọi trạng thái bất lợi khi ăn vào.`)
            .addField(`Zekrom Doll`,`Một con búp bê hình Pokémon Zekrom.`)
            .addField(`Heart Balloon`,`Một quả bóng bay hình trái tim.`)
            .addField(`Plain Seed (x1)`,`Một hạt giống hết sức bình thường. Khi ăn vào thì cũng không có gì đặc biệt xảy ra cả.`)
            .setFooter(`Trang trước (.inv ME509--4) | Trang sau (.inv ME509--6)`);
            
        message.channel.sendEmbed(ME509);
    }
    
    if(args[0]==="ME509--6"| args[0]==="me509--6" | args[0]==="Me509--6"){
        var ME509 = new Discord.RichEmbed().setColor(`#F08120`)
            .setTitle(`- KHO ĐỒ (Size 2 | 6/7) -`).setImage(`https://i.imgur.com/3e6Q9vx.gif`)
            .setAuthor(`Victini/Đỗ Khắc Hiệp`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`645`,inline = true)
            .addField(`Snowflake:`,`1`,inline = true)
            .addField(`Choco-Heart:`,`1`,inline = true)
            .addField(`Victini Doll`,`Một con búp bê hình Pokémon Victini.`)
            .addField(`Lovely Note (x1)`,`Một bức thư có bìa ngoài được trang trí hường phấn lãng mạn, được dùng để gửi đi những lời chúc đến người mình yêu thương nhất.`)
            .addField(`Lucky Note (x1)`,`Một bức thư màu vàng rực rỡ, được dùng để gửi lời chúc phúc và cầu mong cho những điều tốt đẹp và may mắn xảy đến với người nhận.`)
            .addField(`Destiny Knot`,`Một cuộn chỉ màu đỏ dài, mảnh và không có gì đặc biệt khi nhìn qua. Tuy nhiên, có thể nó sẽ đem lại một điều gì đó đặc biệt nếu bạn được người mình yêu thương nhất hồi đáp.`)
            .addField(`Harmony Box`,`Một chiếc hộp chơi nhạc có thể phát ra tiếng nhạc nghe rất trong và hài hòa.`)
            .setFooter(`Trang trước (.inv ME509--5) | Trang sau (.inv ME509--7)`);
            
        message.channel.sendEmbed(ME509);
    }

    if(args[0]==="ME509--7"| args[0]==="me509--7" | args[0]==="Me509--7"){
        var ME509 = new Discord.RichEmbed().setColor(`#F08120`)
            .setTitle(`- KHO ĐỒ (Size 2 | 7/7) -`).setImage(`https://i.imgur.com/3e6Q9vx.gif`)
            .setAuthor(`Victini/Đỗ Khắc Hiệp`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`645`,inline = true)
            .addField(`Snowflake:`,`1`,inline = true)
            .addField(`Choco-Heart:`,`1`,inline = true)
            .addField(`Luck Incense`,`Một hộp hương ánh vàng có cảm giác đem lại sự may mắn và phát tài.`)
            .addField(`Pure Dewdrop`,`Một lọ chứa đựng nước sương thuần khiết thu được vào buổi sáng sớm. Uống nó vào sẽ làm cơ thể cảm thấy khoan khoái và thoải mái.`)
            .addField(`Tiny Mushroom`,`Một chiếc nấm nhỏ và hiếm, có thể dùng để chế biến thức ăn.`)
            .addField(`Big Mushroom`,`Một chiếc nấm to và hiếm, có thể dùng để chế biến thức ăn.`)
            .setFooter(`Trang trước (.inv ME509--6)`);
            
        message.channel.sendEmbed(ME509);
    }

    /// Victini (ME264) ///
    if(args[0]==="ME264"| args[0]==="me264" | args[0]==="Me264"){
        var ME264 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/3) -`)
            .setAuthor(`Victini/Vickyu Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`202`,inline = true)
            .addField(`Mimikyu Doll`,`Một con búp bê hình Pokémon Mimikyu.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Heart Scale (x2)`,`Một miếng vảy hình trái tim tuyệt đẹp và rất quý hiếm. Nó phát sáng nhẹ với đủ 7 màu sắc của cầu vồng.`)
            .addField(`Golden Apple`,`Một quả táo đặc biệt có ánh hào quang vàng kim chói lọi. Nó quý hiếm và đẹp đến nỗi không nỡ ăn được!`)
            .addField(`Plusle Doll`,`Một con búp bê hình Pokémon Plusle.`)
            .setFooter(`Trang sau (.inv ME264--2)`);
            
        message.channel.sendEmbed(ME264);
    }

    
    if(args[0]==="ME264--2"| args[0]==="me264--2" | args[0]==="Me264--2"){
        var ME264 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (2/3) -`)
            .setAuthor(`Victini/Vickyu Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`202`,inline = true)
            .addField(`Minun Doll`,`Một con búp bê hình Pokémon Minun.`)
            .addField(`Delibird Doll`,`Một con búp bê hình Pokémon Delibird.`)
            .addField(`Snover Doll`,`Một con búp bê hình Pokémon Snover.`)
            .addField(`Never-Melt Ice`,`Một cục băng có thể bật lại sức nóng, khiến cho nó không thể bị tan ra.`)
            .addField(`Miracle Seed`,`Một hạt giống càng tràn sức sống.`)
            .setFooter(`Trang trước (.inv ME264) | Trang sau (.inv ME264--3)`);
            
        message.channel.sendEmbed(ME264);
    }

    if(args[0]==="ME264--3"| args[0]==="me264--3" | args[0]==="Me264--3"){
        var ME264 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (3/3) -`)
            .setAuthor(`Victini/Vickyu Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`202`,inline = true)
            .addField(`Big Root`,`Một chiếc rễ to có khả năng tăng lượng HP khi sử dụng những chiêu thức hút HP.`)
            .addField(`Rose Incense`,`Một hộp hương có mùi thơm ngào ngạt của hoa.`)
            .addField(`Corsola Twig (x1)`,`Một nhánh sừng của Pokémon Corsola, được dùng để ném gây sát thương.`)
            .addField(`Shiny Charm`,`Một vật phẩm có thể giúp cho người dùng thay đổi Avatar thành Avatar Shiny Pokémon.`)
            .addField(`Lum Berry`,`Một loại Berry có khả năng chữa lành mọi trạng thái bất lợi khi ăn vào.`)
            .setFooter(`Trang trước (.inv ME264--2)`);
            
        message.channel.sendEmbed(ME264);
    }
    
    else if(args[0]==="Victini" | args[0]==="victini"){
        message.channel.sendMessage(`**Hiện tại có 2 Victini**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME509** | **.inv ME264**`)
    }
    
    /// Fennekin (ME185) ///
    if(args[0]==="ME185"| args[0]==="me185" | args[0]==="Me185" | args[0]==="Fennekin" | args[0]==="fennekin"){
        var ME185 = new Discord.RichEmbed().setColor(`#CD90BF`)
            .setTitle(`- KHO ĐỒ (1/2) -`).setImage(`https://i.imgur.com/T47qRfC.gif`)
            .setAuthor(`Fennekin/Quang Phú`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/e1/Fennekin1.png/revision/latest/scale-to-width-down/100?cb=20170617053156`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`5597`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Treecko Doll`,`Một con búp bê hình Pokémon Treecko.`)
            .addField(`Torchic Doll`,`Một con búp bê hình Pokémon Torchic.`)
            .addField(`Mudkip Doll`,`Một con búp bê hình Pokémon Mudkip.`)
            .addField(`Jirachi Doll`,`Một con búp bê hình Pokémon Jirachi.`)
            .setFooter(`Trang sau (.inv ME185--2)`);
            
        message.channel.sendEmbed(ME185);
    }

    if(args[0]==="ME185--2"| args[0]==="me185--2" | args[0]==="Me185--2"){
        var ME185 = new Discord.RichEmbed().setColor(`#CD90BF`)
            .setTitle(`- KHO ĐỒ (2/2) -`).setImage(`https://i.imgur.com/T47qRfC.gif`)
            .setAuthor(`Fennekin/Quang Phú`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/e1/Fennekin1.png/revision/latest/scale-to-width-down/100?cb=20170617053156`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`5597`,inline = true)
            .addField(`Cherrim Doll`,`Một con búp bê hình Pokémon Cherrim.`)
            .addField(`Blissey Doll`,`Một con búp bê hình Pokémon Blissey.`)
            .setFooter(`Trang trước (.inv ME185)`);
            
        message.channel.sendEmbed(ME185);
    }
    
    /// Bisharp (ME392) ///
    if(args[0]==="ME392"| args[0]==="me392" | args[0]==="Me392" | args[0]==="Bisharp" | args[0]==="bisharp"){
        var ME392 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 1 | 1/4) -`)
            .setAuthor(`Bisharp/Rayen Sylvia`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/3c/Bisharp.png/revision/latest/scale-to-width-down/100?cb=20160821125340`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1046`,inline = true)
            .addField(`Snowflake:`,`11`,inline = true)
            .addField(`Mimikyu Doll`,`Một con búp bê hình Pokémon Mimikyu.`)
            .addField(`Ominous Orb`,`Một quả cầu chứa đựng năng lượng hắc ám. Nó đem đến một cảm giác khá rùng rợn và sợ hãi.`)
            .addField(`Reaper Cloth`,`Một mảnh vải được nhuộm trong nguồn năng lượng linh hồn cực kì kinh khủng.`)
            .addField(`Mask of Deception`,`Một chiếc mặt nạ kì lạ có khả năng giúp cho người dùng cải trang để đánh lừa thị giác của kẻ khác.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .setFooter(`Trang sau (.inv ME392--2)`);
            
        message.channel.sendEmbed(ME392);
    }

    if(args[0]==="ME392--2"| args[0]==="Me392--2" | args[0]==="me392--2"){
        var ME392 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 1 | 2/4) -`)
            .setAuthor(`Bisharp/Rayen Sylvia`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/3c/Bisharp.png/revision/latest/scale-to-width-down/100?cb=20160821125340`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`946`,inline = true)
            .addField(`Snowflake:`,`11`,inline = true)
            .addField(`Bulbasaur Doll`,`Một con búp bê hình Pokémon Bulbasaur.`)
            .addField(`Charmander Doll`,`Một con búp bê hình Pokémon Charmander.`)
            .addField(`Squirtle Doll`,`Một con búp bê hình Pokémon Squirtle.`)
            .addField(`Salt (x88)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Plusle Doll`,`Một con búp bê hình Pokémon Plusle.`)
            .setFooter(`Trang trước (.inv ME392) | Trang sau (.inv ME392--3)`);
            
        message.channel.sendEmbed(ME392);
    }

    if(args[0]==="ME392--3"| args[0]==="Me392--3" | args[0]==="me392--3"){
        var ME392 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 1 | 3/4) -`)
            .setAuthor(`Bisharp/Rayen Sylvia`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/3c/Bisharp.png/revision/latest/scale-to-width-down/100?cb=20160821125340`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`946`,inline = true)
            .addField(`Snowflake:`,`11`,inline = true)
            .addField(`Minun Doll`,`Một con búp bê hình Pokémon Minun.`)
            .addField(`Heart Scale`,`Một miếng vảy hình trái tim tuyệt đẹp và rất quý hiếm. Nó phát sáng nhẹ với đủ 7 màu sắc của cầu vồng.`)
            .addField(`Deerling Doll (Spring)`,`Một con búp bê hình Pokémon Deerling Doll (Spring Form).`)
            .addField(`Deerling Doll (Summer)`,`Một con búp bê hình Pokémon Deerling Doll (Summer Form).`)
            .addField(`Deerling Doll (Autumn)`,`Một con búp bê hình Pokémon Deerling Doll (Autumn Form).`)
            .setFooter(`Trang trước (.inv ME392--2) | Trang sau (.inv ME392--4)`);
            
        message.channel.sendEmbed(ME392);
    }

    if(args[0]==="ME392--4"| args[0]==="Me392--4" | args[0]==="me392--4"){
        var ME392 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 1 | 4/4) -`)
            .setAuthor(`Bisharp/Rayen Sylvia`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/3c/Bisharp.png/revision/latest/scale-to-width-down/100?cb=20160821125340`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`946`,inline = true)
            .addField(`Snowflake:`,`11`,inline = true)
            .addField(`Deerling Doll (Winter)`,`Một con búp bê hình Pokémon Deerling Doll (Winter Form).`)
            .addField(`Vanillite Cone (x6)`,`Một cây kem cực kì ngon được thiết kế giống với Pokémon Vanillite.`)
            .setFooter(`Trang trước (.inv ME392--3)`);
            
        message.channel.sendEmbed(ME392);
    }

    /// Hawlucha (ME028) ///
    if(args[0]==="ME028"| args[0]==="me028" | args[0]==="Me028"){
        var ME028 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Hawlucha/Nguyễn Tấn Phát`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/8/82/Hawlucha.png/revision/latest/scale-to-width-down/100?cb=20160817081722`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`850`,inline = true)
            .addField(`Spooky Token:`,`106`,inline = true)
            .addField(`Gracidea`,`Một loài hoa thường được dùng để bày tỏ lòng biết ơn vào những dịp lễ đặc biệt.`)
            .addField(`Mimikyu Doll`,`Một con búp bê hình Pokémon Mimikyu.`)
            .addField(`Heart Scale`,`Một miếng vảy hình trái tim tuyệt đẹp và rất quý hiếm. Nó phát sáng nhẹ với đủ 7 màu sắc của cầu vồng.`);
            
        message.channel.sendEmbed(ME028);
    }

    /// Hawlucha (ME320) ///
    if(args[0]==="ME320"| args[0]==="me320" | args[0]==="Me320"){
        var ME320 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Hawlucha/Đinh Hoàng Việt`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/8/82/Hawlucha.png/revision/latest/scale-to-width-down/100?cb=20160817081722`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Snowflake:`,`4`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME320);
    }

    else if(args[0]==="Hawlucha" | args[0]==="hawlucha"){
        message.channel.sendMessage(`**Hiện tại có 2 Hawlucha**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME028** | **.inv ME320**`)
    }

    /// Lilligant (ME571) ///
    if(args[0]==="ME571"| args[0]==="me571" | args[0]==="Me571" | args[0]==="Lilligant" | args[0]==="lilligant"){
        var ME571 = new Discord.RichEmbed().setColor(`#FDFD9C`)
            .setTitle(`- KHO ĐỒ (1/3) -`).setImage(`https://i.imgur.com/kT71Iwl.gif`)
            .setAuthor(`Lilligant/Lein Cương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/9e/Lilligant_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20171029142911`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1567`,inline = true)
            .addField(`Choco-Heart:`,`17`,inline = true)
            .addField(`Shiny Charm`,`Một vật phẩm có thể giúp cho người dùng thay đổi Avatar thành Avatar Shiny Pokémon.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Marshadow Doll`,`Một con búp bê hình Pokémon Marshadow.`)
            .addField(`Deerling Doll (Spring)`,`Một con búp bê hình Pokémon Deerling Doll (Spring Form).`)
            .addField(`Vanillite Cone (x2)`,`Một cây kem cực kì ngon được thiết kế giống với Pokémon Vanillite.`)
            .setFooter(`Trang sau (.inv ME571--2)`);

        message.channel.sendEmbed(ME571);
    }
    
    if(args[0]==="ME571--2"| args[0]==="me571--2" | args[0]==="Me571--2"){
        var ME571 = new Discord.RichEmbed().setColor(`#FDFD9C`)
            .setTitle(`- KHO ĐỒ (2/3) -`).setImage(`https://i.imgur.com/kT71Iwl.gif`)
            .setAuthor(`Lilligant/Lein Cương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/9e/Lilligant_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20171029142911`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1567`,inline = true)
            .addField(`Choco-Heart:`,`17`,inline = true)
            .addField(`Deerling Doll (Summer)`,`Một con búp bê hình Pokémon Deerling (Summer Form).`)
            .addField(`Deerling Doll (Autumn)`,`Một con búp bê hình Pokémon Deerling (Autumn Form).`)
            .addField(`Deerling Doll (Winter)`,`Một con búp bê hình Pokémon Deerling (Winter Form).`)
            .addField(`Cubchoo Doll`,`Một con búp bê hình Pokémon Cubchoo.`)
            .addField(`Plain Seed (x10)`,`Một hạt giống hết sức bình thường. Khi ăn vào thì cũng không có gì đặc biệt xảy ra cả.`)
            .setFooter(`Trang trước (.inv ME571) | Trang sau (.inv ME571--3)`);
            
        message.channel.sendEmbed(ME571);
    }
    
    if(args[0]==="ME571--3"| args[0]==="me571--2" | args[0]==="Me571--3"){
        var ME571 = new Discord.RichEmbed().setColor(`#FDFD9C`)
            .setTitle(`- KHO ĐỒ (3/3) -`).setImage(`https://i.imgur.com/kT71Iwl.gif`)
            .setAuthor(`Lilligant/Lein Cương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/9e/Lilligant_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20171029142911`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1567`,inline = true)
            .addField(`Choco-Heart:`,`17`,inline = true)
            .addField(`Lucky Note (x2)`,`Một bức thư màu vàng rực rỡ, được dùng để gửi lời chúc phúc và cầu mong cho những điều tốt đẹp và may mắn xảy đến với người nhận.`)
            .addField(`Cherrim Doll`,`Một con búp bê hình Pokémon Cherrim.`)
            .setFooter(`Trang trước (.inv ME571--2)`);
            
        message.channel.sendEmbed(ME571);
    }

    /// Mega Rayquaza (ME697) ///
    if(args[0]==="ME697"| args[0]==="me697" | args[0]==="Me697"){
        var ME697 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mega Rayquaza/Lưu Mạnh Hà`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/4/44/Megarayquaza.png/revision/latest/scale-to-width-down/100?cb=20160816075307`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

        message.channel.sendEmbed(ME697);
    }

    else if(args[0]==="MegaRayquaza" | args[0]==="Megarayquaza" | args[0]==="megarayquaza"){
        message.channel.sendMessage(`**Hiện tại có 2 Mega Rayquaza**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME642** | **.inv ME697**`)
    }

    /// Suicune (ME818) ///
    if(args[0]==="ME818"| args[0]==="me818" | args[0]==="Me818" | args[0]==="Suicune" | args[0]==="suicune"){
        var ME818 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Suicune/Syu Nub`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/c/c3/Suicune.png/revision/latest/scale-to-width-down/100?cb=20160827153416`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`2367`,inline = true)
            .addField(`Spooky Token:`,`144`,inline = true)
            .addField(`Sea Pendant`,`Một chiếc mặt dây chuyền ánh lên màu xanh của biển. Nó chứa đựng một năng lượng kì lạ nào đó.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Salt (x1000)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Victory Bell`,`Một chiếc chuông phát ra âm thanh, đem lại động lực để vươn tới vinh quang.`);
        
        message.channel.sendEmbed(ME818);
    }

    // Mimikyu (ME319) ///
    if(args[0]==="ME319"| args[0]==="me319" | args[0]==="Me319"){
        var ME319 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mimikyu/Nagisa Shiota`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/ab/Mimikyu1.png/revision/latest/scale-to-width-down/100?cb=20170617060854`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

        message.channel.sendEmbed(ME319);
    }

    // Mimikyu (ME982) ///
    if(args[0]==="ME982"| args[0]==="me982" | args[0]==="Me982"){
        var ME982 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mimikyu/Thanh Phạm`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/ab/Mimikyu1.png/revision/latest/scale-to-width-down/100?cb=20170617060854`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`750`,inline = true)
            .addField(`Snowflake:`,`20`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME982);
    }

    // Mimikyu (ME304) ///
    if(args[0]==="ME304"| args[0]==="me304" | args[0]==="Me304"){
        var ME304 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mimikyu/Hậu Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/ab/Mimikyu1.png/revision/latest/scale-to-width-down/100?cb=20170617060854`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

        message.channel.sendEmbed(ME304);
    }

    // Mimikyu (ME338) ///
    if(args[0]==="ME338"| args[0]==="me304" | args[0]==="Me304"){
        var ME338 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mimikyu/Le Tran`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/ab/Mimikyu1.png/revision/latest/scale-to-width-down/100?cb=20170617060854`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

        message.channel.sendEmbed(ME338);
    }

    else if(args[0]==="Mimikyu" | args[0]==="mimikyu"){
        message.channel.sendMessage(`**Hiện tại có 4 Mimikyu**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME304** | **.inv ME319** | **.inv ME338** | **.inv ME982**`)
    }

    // Rockruff (ME008) ///
    if(args[0]==="ME008"| args[0]==="me008" | args[0]==="Me008"| args[0]==="Rockruff" | args[0]==="rockruff"){
        var ME008 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/2) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/2/26/744.gif`)
            .setAuthor (`Rockruff/Drack Mon`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/1/13/Rockruff.png/revision/latest/scale-to-width-down/100?cb=20170617061838`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`533`,inline = true)
            .addField(`Snowflake:`,`6`,inline = true)
            .addField(`Choco-Heart:`,`15`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Mudkip Doll`,`Một con búp bê hình Pokémon Mudkip.`)
            .addField(`Pikachu Doll`,`Một con búp bê hình Pokémon Pikachu.`)
            .addField(`Plusle Doll`,`Một con búp bê hình Pokémon Plusle.`)
            .addField(`Minun Doll`,`Một con búp bê hình Pokémon Minun.`)
            .setFooter(`Trang sau (.inv ME008--2)`);

        message.channel.sendEmbed(ME008);
    }
    
    if(args[0]==="ME008--2"| args[0]==="me008--2" | args[0]==="Me008--2"){
        var ME008 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (2/2) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/2/26/744.gif`)
            .setAuthor (`Rockruff/Drack Mon`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/1/13/Rockruff.png/revision/latest/scale-to-width-down/100?cb=20170617061838`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`533`,inline = true)
            .addField(`Snowflake:`,`6`,inline = true)
            .addField(`Choco-Heart:`,`15`,inline = true)
            .addField(`Mega Altaria Doll`,`Một con búp bê hình Pokémon Mega Altaria.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Rockruff Doll`,`Một con búp bê hình Pokémon Rockruff.`)
            .addField(`Heart Scale (x1)`,`Một miếng vảy hình trái tim tuyệt đẹp và rất quý hiếm. Nó phát sáng nhẹ với đủ 7 màu sắc của cầu vồng.`)
            .setFooter(`Trang trước (.inv ME008)`);

        message.channel.sendEmbed(ME008);
    }

    // Rhyperior (ME427) ///
    if(args[0]==="ME427"| args[0]==="me427" | args[0]==="Me427"| args[0]==="Rhyperior" | args[0]==="rhyperior"){
        var ME427 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Rhyperior/Mai Thái Hoàng`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/f1/Rhyperior.png/revision/latest/scale-to-width-down/100?cb=20160908073142`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`324`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Squirtle Doll`,`Một con búp bê hình Pokémon Squirtle.`)
            .addField(`Totodile Doll`,`Một con búp bê hình Pokémon Totodile.`)
            .addField(`Salt (x1)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`);

        message.channel.sendEmbed(ME427);
    }

    // Silvally (ME411) ///
    if(args[0]==="ME411"| args[0]==="me411" | args[0]==="Me411" | args[0]==="Silvally" | args[0]==="silvally"){
        var ME411 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Silvally/Bờ Lách`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/3b/Silvally.png/revision/latest/scale-to-width-down/100?cb=20171230061609`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1900`,inline = true)
            .addField(`Snowflake:`,`10`,inline = true)
            .addField(`Choco-Heart:`,`10`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Salt (x50)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Yveltal Doll`,`Một con búp bê hình Pokémon Yveltal.`)
            .addField(`Totodile Doll`,`Một con búp bê hình Pokémon Totodile.`)
            .addField(`Cyndaquil Doll`,`Một con búp bê hình Pokémon Cyndaquil.`)
            .addField(`Chespin Doll`,`Một con búp bê hình Pokémon Chespin.`)
            .addField(`Corsola Twig (x1)`,`Một nhánh sừng của Pokémon Corsola, được dùng để ném gây sát thương.`);

        message.channel.sendEmbed(ME411);
    }

    // Sharpedo (ME524) ///
    if(args[0]==="ME524"| args[0]==="Me524" | args[0]==="me524"){
        var ME524 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Sharpedo/Vũ Ân Mỹ`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fc/Sharpedo1.png/revision/latest/scale-to-width-down/100?cb=20171119024849`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1620`,inline = true)
            .addField(`Snowflake:`,`10`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Salt (x69)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`);

        message.channel.sendEmbed(ME524);
    }

    // Mudkip (ME725) ///
    if(args[0]==="ME725"| args[0]==="Me725" | args[0]==="me725"){
        var ME725 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/2) -`)
            .setAuthor (`Mudkip/Thanh Ngọc`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/54/Mudkip2.png/revision/latest/scale-to-width-down/100?cb=20161008084148`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1629`,inline = true)
            .addField(`Snowflake:`,`31`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Bulbasaur Doll`,`Một con búp bê hình Pokémon Bulbasaur.`)
            .addField(`Salt (x1000)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Plusle Doll`,`Một con búp bê hình Pokémon Plusle.`)
            .addField(`Minun Doll`,`Một con búp bê hình Pokémon Minun.`)
            .setFooter(`Trang sau (.inv ME725--2)`);

        message.channel.sendEmbed(ME725);
    }

    if(args[0]==="ME725--2"| args[0]==="Me725--2" | args[0]==="me725--2"){
        var ME725 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (2/2) -`)
            .setAuthor (`Mudkip/Thanh Ngọc`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/54/Mudkip2.png/revision/latest/scale-to-width-down/100?cb=20161008084148`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1629`,inline = true)
            .addField(`Snowflake:`,`31`,inline = true)
            .addField(`Mudkip Doll`,`Một con búp bê hình Pokémon Mudkip.`)
            .addField(`Pikachu Doll`,`Một con búp bê hình Pokémon Pikachu.`)
            .addField(`Litten Doll`,`Một con búp bê hình Pokémon Litten.`)
            .setFooter(`Trang trước (.inv ME725)`);

        message.channel.sendEmbed(ME725);
    }

    // Mudkip (ME459) ///
    if(args[0]==="ME459"| args[0]==="Me459" | args[0]==="me459"){
        var ME459 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mudkip/Nguyễn An`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/ae/Mudkip.png/revision/latest/scale-to-width-down/100?cb=20160905044511`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`500`,inline = true)
            .addField(`Mega Altaria Doll`,`Một con búp bê hình Pokémon Mega Altaria.`)
            .addField(`Solgaleo Doll`,`Một con búp bê hình Pokémon Solgaleo.`);

        message.channel.sendEmbed(ME459);
    }

    /// Mudkip (ME684) ///
    if(args[0]==="ME684"| args[0]==="me684" | args[0]==="Me684"){
        var ME684 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Mudkip/Tùng Neko`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/54/Mudkip2.png/revision/latest/scale-to-width-down/100?cb=20161008084148`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`445`,inline = true)
            .addField(`Choco-Heart:`,`5`,inline = true)
            .addField(`Corsola Twig (x1)`,`Một nhánh sừng của Pokémon Corsola, được dùng để ném gây sát thương.`)
            .addField(`Cyndaquil Doll`,`Một con búp bê hình Pokémon Cyndaquil.`);
            
        message.channel.sendEmbed(ME684);
    }

    else if(args[0]==="Mudkip" | args[0]==="mudkip"){
        message.channel.sendMessage(`**Hiện tại có 3 Mudkip**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME459** | **.inv ME684** | **.inv ME725**`)
    }
    
    // Togekiss (ME892) ///
    if(args[0]==="ME892"| args[0]==="Me892" | args[0]==="me892"| args[0]==="Togekiss" | args[0]==="togekiss"){
        var ME892 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Togekiss/Dương Anh Văn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7b/Togekiss.png/revision/latest/scale-to-width-down/100?cb=20160817083806`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`400`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME892);
    }

    // Mega Latias (ME089) ///
    if(args[0]==="ME089"| args[0]==="Me089" | args[0]==="me089" | args[0]==="MegaLatias" | args[0]==="Megalatias" | args[0]==="megalatias"){
        var ME089 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mega Latias/Trần Minh Hoàng`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/30/Megalatias.png/revision/latest/scale-to-width-down/100?cb=20160823063629`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1297`,inline = true)
            .addField(`Choco-Heart:`,`15`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME089);
    }

    // Dedenne (ME072) ///
    if(args[0]==="ME072"| args[0]==="Me072" | args[0]==="me072"){
        var ME072 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 2 | 1/5) -`).setImage(`https://i.imgur.com/zJWCkpn.gif`)
            .setAuthor (`Dedenne/Trần Khoa Lộc`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/33/Dedenne1.png/revision/latest/scale-to-width-down/100?cb=20170618090108`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`370`,inline = true)
            .addField(`Snowflake:`,`1`,inline = true)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .setFooter(`Trang sau (.inv ME072--2)`);

        message.channel.sendEmbed(ME072);
    }
    
    if(args[0]==="ME072--2"| args[0]==="Me072--2" | args[0]==="me072--2"){
        var ME072 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 2 | 2/5) -`).setImage(`https://i.imgur.com/zJWCkpn.gif`)
            .setAuthor (`Dedenne/Trần Khoa Lộc`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/33/Dedenne1.png/revision/latest/scale-to-width-down/100?cb=20170618090108`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`370`,inline = true)
            .addField(`Snowflake:`,`1`,inline = true)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .setFooter(`Trang trước (.inv ME072) | Trang sau (.inv ME072--3)`);

        message.channel.sendEmbed(ME072);
    }

    if(args[0]==="ME072--3"| args[0]==="Me072--3" | args[0]==="me072--3"){
        var ME072 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 2 | 3/5) -`).setImage(`https://i.imgur.com/zJWCkpn.gif`)
            .setAuthor (`Dedenne/Trần Khoa Lộc`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/33/Dedenne1.png/revision/latest/scale-to-width-down/100?cb=20170618090108`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`370`,inline = true)
            .addField(`Snowflake:`,`1`,inline = true)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .setFooter(`Trang trước (.inv ME072--2) | Trang sau (.inv ME072--4)`);

        message.channel.sendEmbed(ME072);
    }

    if(args[0]==="ME072--4"| args[0]==="Me072--4" | args[0]==="me072--4"){
        var ME072 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 2 | 4/5) -`).setImage(`https://i.imgur.com/zJWCkpn.gif`)
            .setAuthor (`Dedenne/Trần Khoa Lộc`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/33/Dedenne1.png/revision/latest/scale-to-width-down/100?cb=20170618090108`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`370`,inline = true)
            .addField(`Snowflake:`,`1`,inline = true)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .setFooter(`Trang trước (.inv ME072--3) | Trang sau (.inv ME072--5)`);

        message.channel.sendEmbed(ME072);
    }

    if(args[0]==="ME072--5"| args[0]==="Me072--5" | args[0]==="me072--5"){
        var ME072 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 2 | 5/5) -`).setImage(`https://i.imgur.com/zJWCkpn.gif`)
            .setAuthor (`Dedenne/Trần Khoa Lộc`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/33/Dedenne1.png/revision/latest/scale-to-width-down/100?cb=20170618090108`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`370`,inline = true)
            .addField(`Snowflake:`,`1`,inline = true)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .setFooter(`Trang trước (.inv ME072--4)`);

        message.channel.sendEmbed(ME072);
    }

    // Dedenne (ME572) ///
    if(args[0]==="ME572"| args[0]==="Me572" | args[0]==="me572"){
        var ME572 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Dedenne/Yuuki Yuuna`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/33/Dedenne1.png/revision/latest/scale-to-width-down/100?cb=20170618090108`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

            message.channel.sendEmbed(ME572);
    }

    else if(args[0]==="Dedenne" | args[0]==="dedenne"){
        message.channel.sendMessage(`**Hiện tại có 2 Dedenne**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME072** | **.inv ME572**`)
    }

    // Dewott (ME240) ///
    if(args[0]==="ME240"| args[0]==="Me240" | args[0]==="me240"| args[0]==="Dewott" | args[0]==="dewott"){
        var ME240 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/2) -`)
            .setAuthor (`Dewott/Namhuy Ly`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/8/85/Dewott_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20171227073307`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1700`,inline = true)
            .addField(`Spooky Token:`,`10`,inline = true)
            .addField(`Snowflake:`,`63`,inline = true)
            .addField(`Choco-Heart:`,`22`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Mudkip Doll`,`Một con búp bê hình Pokémon Mudkip.`)
            .addField(`Plusle Doll`,`Một con búp bê hình Pokémon Plusle.`)
            .addField(`Minun Doll`,`Một con búp bê hình Pokémon Minun.`)
            .addField(`Salt (x9)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .setFooter(`Trang sau (.inv ME240--2)`);
            
        message.channel.sendEmbed(ME240);
    }
    
    if(args[0]==="ME240--2"| args[0]==="Me240--2" | args[0]==="me240--2"){
        var ME240 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (2/2) -`)
            .setAuthor (`Dewott/Namhuy Ly`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/8/85/Dewott_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20171227073307`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1700`,inline = true)
            .addField(`Spooky Token:`,`10`,inline = true)
            .addField(`Snowflake:`,`63`,inline = true)
            .addField(`Choco-Heart:`,`22`,inline = true)
            .addField(`Shiny Charm`,`Một vật phẩm có thể giúp cho người dùng thay đổi Avatar thành Avatar Shiny Pokémon.`)
            .addField(`Vanillite Cone (x1)`,`Một cây kem cực kì ngon được thiết kế giống với Pokémon Vanillite.`)
            .addField(`Gold Ditto Doll`,`Một con búp bê hình Pokémon Ditto màu vàng kim cực kì quý hiếm và đặc biệt. Nó có thể biến đổi thành bất cứ búp bê hình Pokémon nào khác tuỳ theo ý chủ sở hữu.`)
            .addField(`Riolu Doll`,`Một con búp bê hình Pokémon Riolu.`)
            .addField(`Heart Scale (x1)`,`Một miếng vảy hình trái tim tuyệt đẹp và rất quý hiếm. Nó phát sáng nhẹ với đủ 7 màu sắc của cầu vồng.`)
            .setFooter(`Trang trước (.inv ME240--2)`);
            
        message.channel.sendEmbed(ME240);
    }

    // Jolteon (ME219) ///
    if(args[0]==="ME219"| args[0]==="Me219" | args[0]==="me219"| args[0]==="Jolteon" | args[0]==="jolteon"){
        var ME219 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Jolteon/Nguyễn Mai Phương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/4/49/Jolteon1.png/revision/latest/scale-to-width-down/100?cb=20170622091121`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`300`,inline = true)
            .addField(`Snowflake:`,`5`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);
                
        message.channel.sendEmbed(ME219);
    }

    // Lucario (ME300) ///
    if(args[0]==="ME300"| args[0]==="Me300" | args[0]==="me300"){
        var ME300 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Lucario/Đạt Quốc Trương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/d0/Lucario.png/revision/latest/scale-to-width-down/100?cb=20171028171549`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1137`,inline = true)
            .addField(`Spooky Token:`,`107`,inline = true)
            .addField(`Snowflake:`,`38`,inline = true)
            .addField(`Choco-Heart:`,`15`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Cubchoo Doll`,`Một con búp bê hình Pokémon Cubchoo.`)
            .addField(`Deerling Doll (Winter)`,`Một con búp bê hình Pokémon Deerling (Winter Form).`)
            .addField(`Riolu Doll`,`Một con búp bê hình Pokémon Riolu.`)
            .addField(`Mew Doll`,`Một con búp bê hình Pokémon Mew.`)
            .addField(`Victory Bell`,`Một chiếc chuông phát ra âm thanh, đem lại động lực để vươn tới vinh quang.`);

        message.channel.sendEmbed(ME300);
    }

    // Lucario (ME773) ///
    if(args[0]==="ME773"| args[0]==="Me773" | args[0]==="me773"){
        var ME773 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Lucario/Minh Song Nguyễn Huỳnh`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/2/27/Lucario1.png/revision/latest/scale-to-width-down/100?cb=20171108133953`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`50`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

        message.channel.sendEmbed(ME773);
    }

    else if(args[0]==="Lucario" | args[0]==="lucario"){
        message.channel.sendMessage(`**Hiện tại có 2 Lucario**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME300** | **.inv ME773**`)
    }

    // Mega Charizard X (ME209) ///
    if(args[0]==="ME209"| args[0]==="Me209" | args[0]==="me209"| args[0]==="MegaCharizardX" | args[0]==="Megacharizardx" | args[0]==="megacharizardx" | args[0]==="MegacharizardX" | args[0]==="megacharizardX"){
        var ME209 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mega Charizard X/Dương Võ`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/de/Megacharizardx.png/revision/latest/scale-to-width-down/100?cb=20160818075829`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`300`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME209);
    }

    // Mega Charizard X (ME685) ///
    if(args[0]==="ME685"| args[0]==="Me685" | args[0]==="me685"){
        var ME685 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mega Charizard X/Kan Meketo`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/de/Megacharizardx.png/revision/latest/scale-to-width-down/100?cb=20160818075829`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

        message.channel.sendEmbed(ME685);
    }

    else if(args[0]==="MegaCharizardX" | args[0]==="Megacharizardx" | args[0]==="megacharizardx" | args[0]==="MegacharizardX" | args[0]==="megacharizardX"){
        message.channel.sendMessage(`**Hiện tại có 2 Mega Charizard X**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME209** | **.inv ME685**`)
    }

    // Mega Charizard Y (ME054) ///
    if(args[0]==="ME054"| args[0]==="Me054" | args[0]==="me054"| args[0]==="MegaCharizardY" | args[0]==="Megacharizardy" | args[0]==="megacharizardy" | args[0]==="MegacharizardY" | args[0]==="megacharizardY"){
        var ME054 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mega Charizard Y/Thu Phương Đỗ`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/c/c8/Megacharizardy.png/revision/latest/scale-to-width-down/100?cb=20160821135727`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`959`,inline = true)
            .addField(`Snowflake:`,`35`,inline = true)
            .addField(`Choco-Heart:`,`50`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME054);
    }

    // Riolu (ME711) ///
    if(args[0]==="ME711"| args[0]==="Me711" | args[0]==="me711"){
        var ME711 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Riolu/Huỳnh Tiến Phát`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/f0/Riolu.png/revision/latest/scale-to-width-down/100?cb=20160816072138`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`2149`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Cherrim Doll`,`Một con búp bê hình Pokémon Cherrim.`)
            .addField(`Corsola Twig (x1)`,`Một nhánh sừng của Pokémon Corsola, được dùng để ném gây sát thương.`)
            .addField(`Lovely Note (x1)`,`Một bức thư có bìa ngoài được trang trí hường phấn lãng mạn, được dùng để gửi đi những lời chúc đến người mình yêu thương nhất.`);

        message.channel.sendEmbed(ME711);
    }

    // Riolu (ME640) ///
    if(args[0]==="ME640"| args[0]==="Me640" | args[0]==="me640"){
        var ME640 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Riolu/Huyền Rosie`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/c/c9/Riolu1.png/revision/latest/scale-to-width-down/100?cb=20171117141434`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME640);
    }

    else if(args[0]==="Riolu" | args[0]==="riolu"){
        message.channel.sendMessage(`**Hiện tại có 2 Riolu**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME640** | **.inv ME711**`)
    }

    // Sylveon (ME011) ///
    if(args[0]==="ME011"| args[0]==="Me011" | args[0]==="me011"){
        var ME011 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/3) -`).setImage(`https://i.imgur.com/JYcNKLI.gif`)
            .setAuthor (`Sylveon/Mỹ Duyên Hứa`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/4/4f/Sylveon1.png/revision/latest/scale-to-width-down/100?cb=20160911131143`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1935`,inline = true)
            .addField(`Snowflake:`,`20`,inline = true)
            .addField(`Choco-Heart:`,`25`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Plusle Doll`,`Một con búp bê hình Pokémon Plusle.`)
            .addField(`Minun Doll`,`Một con búp bê hình Pokémon Minun.`)
            .addField(`Rainbow Wing`,`Một chiếc lông vũ bảy sắc cầu vồng lấp lánh.`)
            .addField(`Salt (x11)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .setFooter(`Trang sau (.inv ME011--2)`);

        message.channel.sendEmbed(ME011);
    }
    
    if(args[0]==="ME011--2"| args[0]==="Me011--2" | args[0]==="me011--2"){
        var ME011 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (2/3) -`).setImage(`https://i.imgur.com/JYcNKLI.gif`)
            .setAuthor (`Sylveon/Mỹ Duyên Hứa`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/4/4f/Sylveon1.png/revision/latest/scale-to-width-down/100?cb=20160911131143`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`2556`,inline = true)
            .addField(`Snowflake:`,`20`,inline = true)
            .addField(`Choco-Heart:`,`25`,inline = true)
            .addField(`Pichu Doll`,`Một con búp bê hình Pokémon Pichu.`)
            .addField(`Frozen Wand`,`Một chiếc gậy làm từ băng ẩn chứa một sức mạnh bí ẩn có khả năng tạo ra Snowflake.`)
            .addField(`Ho-Oh Doll`,`Một con búp bê hình Pokémon Ho-Oh.`)
            .addField(`Pachirisu Doll`,`Một con búp bê hình Pokémon Pachirisu.`)
            .addField(`Emolga Doll`,`Một con búp bê hình Pokémon Emolga.`)
            .setFooter(`Trang trước (.inv ME011) | Trang sau (.inv ME011--3)`);

        message.channel.sendEmbed(ME011);
    }

    if(args[0]==="ME011--3"| args[0]==="Me011--3" | args[0]==="me011--3"){
        var ME011 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (3/3) -`).setImage(`https://i.imgur.com/JYcNKLI.gif`)
            .setAuthor (`Sylveon/Mỹ Duyên Hứa`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/4/4f/Sylveon1.png/revision/latest/scale-to-width-down/100?cb=20160911131143`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`2556`,inline = true)
            .addField(`Snowflake:`,`20`,inline = true)
            .addField(`Choco-Heart:`,`25`,inline = true)
            .addField(`Dedenne Doll`,`Một con búp bê hình Pokémon Dedenne.`)
            .addField(`Rockruff Doll`,`Một con búp bê hình Pokémon Rockruff.`)
            .addField(`Cherrim Doll`,`Một con búp bê hình Pokémon Rockruff.`)
            .setFooter(`Trang trước (.inv ME011--2)`);

        message.channel.sendEmbed(ME011);
    }

    // Sylveon (ME884) ///
    if(args[0]==="ME884"| args[0]==="Me884" | args[0]==="me884"){
        var ME884 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Sylveon/Nguyễn Hà`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/63/Sylveon.png/revision/latest/scale-to-width-down/100?cb=20170618140044`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1855`,inline = true)
            .addField(`Snowflake:`,`20`,inline = true)
            .addField(`Choco-Heart:`,`41`,inline = true)
            .addField(`Yveltal Doll`,`Một con búp bê hình Pokémon Yveltal.`);

        message.channel.sendEmbed(ME884);
    }

    else if(args[0]==="Sylveon" | args[0]==="sylveon"){
        message.channel.sendMessage(`**Hiện tại có 2 Sylveon**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME011** | **.inv ME884**`)
    }

    // Talonflame (ME099) ///
    if(args[0]==="ME099"| args[0]==="Me099" | args[0]==="me099"){
        var ME099 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/2) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/69/Spring_Banner.png/revision/latest?cb=20180212012553`)
            .setAuthor (`Talonflame/Justin Vader`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/0/0b/Talonflame_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20180128152130`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1663`,inline = true)
            .addField(`Snowflake:`,`3`,inline = true)
            .addField(`Choco-Heart:`,`19`,inline = true)
            .addField(`Poké Doll`,`Một con búp bê hình Clefairy thường được dùng làm mồi nhử để đánh lạc hướng.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Salt (x1)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Totodile Doll`,`Một con búp bê hình Pokémon Totodile.`)
            .addField(`Shiny Charm`,`Một vật phẩm có thể giúp cho người dùng thay đổi Avatar thành Avatar Shiny Pokémon.`)
            .setFooter(`Trang sau (.inv ME099--2)`);

        message.channel.sendEmbed(ME099);
    }

    if(args[0]==="ME099--2"| args[0]==="Me099--2" | args[0]==="me099--2"){
        var ME099 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (2/2) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/69/Spring_Banner.png/revision/latest?cb=20180212012553`)
            .setAuthor (`Talonflame/Justin Vader`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/0/0b/Talonflame_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20180128152130`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1663`,inline = true)
            .addField(`Snowflake:`,`3`,inline = true)
            .addField(`Choco-Heart:`,`19`,inline = true)
            .addField(`Heart Balloon`,`Một quả bóng bay hình trái tim.`)
            .addField(`Plain Seed (x10)`,`Một hạt giống hết sức bình thường. Khi ăn vào thì cũng không có gì đặc biệt xảy ra cả.`)
            .addField(`Furfrou Doll (Kabuki)`,`Một con búp bê hình Pokémon Furfrou (Kabuki Trim).`)
            .setFooter(`Trang trước (.inv ME099)`);

        message.channel.sendEmbed(ME099);
    }

    // Talonflame (ME381) ///
    if(args[0]==="ME381"| args[0]==="Me381" | args[0]==="me381"){
        var ME381 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Talonflame/Koutei Akumei`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a9/Talonflame1.png/revision/latest/scale-to-width-down/100?cb=20160908082743`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

        message.channel.sendEmbed(ME381);
    }

    else if(args[0]==="Talonflame" | args[0]==="talonflame"){
        message.channel.sendMessage(`**Hiện tại có 2 Talonflame**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME099** | **.inv ME381**`)
    }

    // Decidueye (ME330) ///
    if(args[0]==="ME330"| args[0]==="Me330" | args[0]==="me330"| args[0]==="Decidueye" | args[0]==="decidueye"){
        var ME330 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Decidueye/Nguyễn Tiến Gia Nguyên`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/d3/Decidueye.png/revision/latest/scale-to-width-down/100?cb=20170621040327`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1095`,inline = true)
            .addField(`Spooky Token:`,`10`,inline = true)
            .addField(`Snowflake:`,`142`,inline = true)
            .addField(`Choco-Heart:`,`1`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Snover Doll`,`Một con búp bê hình Pokémon Snover.`);

        message.channel.sendEmbed(ME330);
    }

    // Purrloin (ME716) ///
    if(args[0]==="ME716"| args[0]==="Me716" | args[0]==="me716"){
        var ME716 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/c/c3/Ribbon_Banner.png/revision/latest?cb=20180215033233`)
            .setAuthor (`Purrloin/Đoàn Anh Đức`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/0/0f/Purrloin.png/revision/latest/scale-to-width-down/100?cb=20160821010754`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1510`,inline = true)
            .addField(`Choco-Heart:`,`4`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Cleffa Doll`,`Một con búp bê hình Pokémon Cleffa.`)
            .addField(`Meowth Doll`,`Một con búp bê hình Pokémon Meowth.`)
            .addField(`Destiny Knot`,`Một cuộn chỉ màu đỏ dài, mảnh và không có gì đặc biệt khi nhìn qua. Tuy nhiên, có thể nó sẽ đem lại một điều gì đó đặc biệt nếu bạn được người mình yêu thương nhất hồi đáp.`)
            .addField(`Riolu Doll`,`Một con búp bê hình Pokémon Riolu.`)
            .setFooter(`Trang sau (.inv ME0716--2)`);

        message.channel.sendEmbed(ME716);
    }

    if(args[0]==="ME716--2"| args[0]==="Me716--2" | args[0]==="me716--2"){
        var ME716 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/c/c3/Ribbon_Banner.png/revision/latest?cb=20180215033233`)
            .setAuthor (`Purrloin/Đoàn Anh Đức`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/0/0f/Purrloin.png/revision/latest/scale-to-width-down/100?cb=20160821010754`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1510`,inline = true)
            .addField(`Choco-Heart:`,`4`,inline = true)
            .addField(`Lillipup Doll`,`Một con búp bê hình Pokémon Lillipup.`)
            .addField(`Salt (x1)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .setFooter(`Trang trước (.inv ME716)`);

        message.channel.sendEmbed(ME716);
    }


    // Mega Sableye (ME456) ///
    if(args[0]==="ME456"| args[0]==="Me456" | args[0]==="me456" | args[0]==="Megasableye" | args[0]==="megasableye"){
        var ME456 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/IRASI39.gif`)
            .setAuthor (`Mega Sableye/Trần Ngọc Phi Long`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/69/Megasableye_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20171214121620`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1035`,inline = true)
            .addField(`Shiny Charm`,`Một vật phẩm có thể giúp cho người dùng thay đổi Avatar thành Avatar Shiny Pokémon.`)
            .addField(`Heart Scale (x1)`,`Một miếng vảy hình trái tim tuyệt đẹp và rất quý hiếm. Nó phát sáng nhẹ với đủ 7 màu sắc của cầu vồng.`)
            .addField(`Litten Doll`,`Một con búp bê hình Pokémon Litten.`)
            .addField(`Victini Doll`,`Một con búp bê hình Pokémon Victini.`);

        message.channel.sendEmbed(ME456);
    }

    // Sableye (ME441) ///
    if(args[0]==="ME441"| args[0]==="Me441" | args[0]==="me441" | args[0]==="Sableye" | args[0]==="sableye"){
        var ME441 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Sableye/Le Ba Tuan`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/99/Sableye.png/revision/latest/scale-to-width-down/100?cb=20160908081725`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`2090`,inline = true)
            .addField(`Snover Doll`,`Một con búp bê hình Pokémon Snover.`)
            .addField(`Salt (x1)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`);

        message.channel.sendEmbed(ME441);
    }

    // Gallade (ME110) ///
    if(args[0]==="ME110"| args[0]==="Me110" | args[0]==="me110"){
        var ME110 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Gallade/Silver Mist`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/2/2d/Gallade.png/revision/latest/scale-to-width-down/100?cb=20160817090558`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`300`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME110);
    }

    // Gallade (ME014) ///
    if(args[0]==="ME014"| args[0]==="Me014" | args[0]==="me014"){
        var ME014 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/3) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/db/475_%28shiny%29.gif`)
            .setAuthor (`Gallade/Tuấn Minh Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/ee/Gallade_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20180216032242`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1430`,inline = true)
            .addField(`Audino Doll`,`Một con búp bê hình Pokémon Audino.`)
            .addField(`Destiny Knot`,`Một cuộn chỉ màu đỏ dài, mảnh và không có gì đặc biệt khi nhìn qua. Tuy nhiên, có thể nó sẽ đem lại một điều gì đó đặc biệt nếu bạn được người mình yêu thương nhất hồi đáp.`)
            .addField(`Growlithe Doll`,`Một con búp bê hình Pokémon Growlithe.`)
            .addField(`Houndour Doll`,`Một con búp bê hình Pokémon Houndour.`)
            .addField(`Poochyena Doll`,`Một con búp bê hình Pokémon Poochyena.`)
            .setFooter(`Trang sau (.inv ME014--2)`);

        message.channel.sendEmbed(ME014);
    }

    if(args[0]==="ME014--2"| args[0]==="Me014--2" | args[0]==="me014--2"){
        var ME014 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (2/3) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/db/475_%28shiny%29.gif`)
            .setAuthor (`Gallade/Tuấn Minh Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/ee/Gallade_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20180216032242`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1430`,inline = true)
            .addField(`Rockruff Doll`,`Một con búp bê hình Pokémon Rockruff.`)
            .addField(`Lillipup Doll`,`Một con búp bê hình Pokémon Lillipup.`)
            .addField(`Furfrou Doll (Kabuki)`,`Một con búp bê hình Pokémon Furfrou (Kabuki Trim).`)
            .addField(`Furfrou Doll (Dandy)`,`Một con búp bê hình Pokémon Furfrou (Dandy Trim).`)
            .addField(`Lucky Note (x1)`,`Một bức thư màu vàng rực rỡ, được dùng để gửi lời chúc phúc và cầu mong cho những điều tốt đẹp và may mắn xảy đến với người nhận.`)
            .setFooter(`Trang trước (.inv ME014) | Trang sau (.inv ME014--3)`);

        message.channel.sendEmbed(ME014);
    }

    if(args[0]==="ME014--3"| args[0]==="Me014--3" | args[0]==="me014--3"){
        var ME014 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (3/3) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/db/475_%28shiny%29.gif`)
            .setAuthor (`Gallade/Tuấn Minh Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/ee/Gallade_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20180216032242`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1430`,inline = true)
            .addField(`Cherrim Doll`,`Một con búp bê hình Pokémon Cherrim.`)
            .addField(`Shiny Charm`,`Một vật phẩm có thể giúp cho người dùng thay đổi Avatar thành Avatar Shiny Pokémon.`)
            .addField(`Love Record`,`Một chiếc hộp màu hồng xinh xắn có thể phát ra một bản nhạc lãng mạn.`)
            .addField(`Amulet Coin`,`Một đồng xu vàng may mắn có thể giúp cho người dùng nhận được Poké nhiều hơn bình thường. (Chỉ dùng được 5 lần)`)
            .setFooter(`Trang trước (.inv ME014--2)`);

        message.channel.sendEmbed(ME014);
    }

    else if(args[0]==="Gallade" | args[0]==="gallade"){
        message.channel.sendMessage(`**Hiện tại có 2 Gallade**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME014** | **.inv ME110**`)
    }

    // Brionne (ME062) ///
    if(args[0]==="ME062"| args[0]==="Me062" | args[0]==="me062"| args[0]==="Brionne" | args[0]==="brionne"){
        var ME062 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Brionne/Shiiri Ether`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/d3/Brionne.png/revision/latest/scale-to-width-down/100?cb=20170618091552`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`400`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME062);
    }

    // Zygarde (ME607) ///
    if(args[0]==="ME607"| args[0]==="Me607" | args[0]==="me607"| args[0]==="Zygarde" | args[0]==="zygarde"){
        var ME607 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Zygarde/Ngọc Minh Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/69/Zygarde.png/revision/latest/scale-to-width-down/100?cb=20160819085135`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`500`,inline = true)
            .addField(`Snowflake:`,`7`,inline = true)
            .addField(`Gracidea`,`Một loài hoa thường được dùng để bày tỏ lòng biết ơn vào những dịp lễ đặc biệt.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Victini Doll`,`Một con búp bê hình Pokémon Victini.`);

        message.channel.sendEmbed(ME607);
    }

    // Cyndaquil (ME867) ///
    if(args[0]==="ME867"| args[0]==="Me867" | args[0]==="me867"){
        var ME867 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Cyndaquil/Sejuro Akayashi`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/99/Cyndaquil.png/revision/latest/scale-to-width-down/100?cb=20170617135609`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

        message.channel.sendEmbed(ME867);
    }

    // Cyndaquil (ME662) ///
    if(args[0]==="ME662"| args[0]==="Me662" | args[0]==="me662"){
        var ME662 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Cyndaquil/Nguyễn Thành Nhân`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/99/Cyndaquil.png/revision/latest/scale-to-width-down/100?cb=20170617135609`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

        message.channel.sendEmbed(ME662);
    }

    else if(args[0]==="Cyndaquil" | args[0]==="cyndaquil"){
        message.channel.sendMessage(`**Hiện tại có 2 Cyndaquil**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME867** | **.inv ME662**`)
    }

    // Cherrim (ME906) ///
    if(args[0]==="ME906"| args[0]==="Me906" | args[0]==="me906"| args[0]==="Cherrim" | args[0]==="cherrim"){
        var ME906 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 1 | 1/4) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/69/Spring_Banner.png`)
            .setAuthor (`Cherrim/Ngọc Bảo`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/b1/Cherrim_%28sunshine%29_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20180219103651`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1124`,inline = true)
            .addField(`Snowflake:`,`20`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Salt (x1000)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Rainbow Wing`,`Một chiếc lông vũ bảy sắc cầu vồng lấp lánh.`)
            .addField(`Vanillite Cone (x2)`,`Một cây kem cực kì ngon được thiết kế giống với Pokémon Vanillite.`)
            .setFooter(`Trang sau (.inv ME906--2)`);

        message.channel.sendEmbed(ME906);
    }
    
    if(args[0]==="ME906--2"| args[0]==="Me906--2" | args[0]==="me906--2"){
        var ME906 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 1 | 2/4) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/69/Spring_Banner.png`)
            .setAuthor (`Cherrim/Ngọc Bảo`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/b1/Cherrim_%28sunshine%29_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20180219103651`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1124`,inline = true)
            .addField(`Snowflake:`,`20`,inline = true)
            .addField(`Shiny Charm`,`Một vật phẩm có thể giúp cho người dùng thay đổi Avatar thành Avatar Shiny Pokémon.`)
            .addField(`Snover Doll`,`Một con búp bê hình Pokémon Snover.`)
            .addField(`Snivy Doll`,`Một con búp bê hình Pokémon Snivy.`)
            .addField(`Pikachu Doll`,`Một con búp bê hình Pokémon Pikachu.`)
            .addField(`Corsola Twig (x1)`,`Một nhánh sừng của Pokémon Corsola, được dùng để ném gây sát thương.`)
            .setFooter(`Trang trước (.inv ME906) | Trang sau (.inv ME906--3)`);

        message.channel.sendEmbed(ME906);
    }

    if(args[0]==="ME906--3"| args[0]==="Me906--3" | args[0]==="me906--3"){
        var ME906 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 1 | 3/4) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/69/Spring_Banner.png`)
            .setAuthor (`Cherrim/Ngọc Bảo`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/b1/Cherrim_%28sunshine%29_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20180219103651`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1124`,inline = true)
            .addField(`Snowflake:`,`20`,inline = true)
            .addField(`Furfrou Doll (Pharaoh)`,`Một con búp bê hình Pokémon Furfrou (Pharaoh Trim).`)
            .addField(`Shaymin Doll`,`Một con búp bê hình Pokémon Shaymin.`)
            .addField(`Gracidea`,`Một loài hoa thường được dùng để bày tỏ lòng biết ơn vào những dịp lễ đặc biệt.`)
            .addField(`Plain Seed (x2)`,`Một hạt giống hết sức bình thường. Khi ăn vào thì cũng không có gì đặc biệt xảy ra cả.`)
            .addField(`Cherrim Doll`,`Một con búp bê hình Pokémon Cherrim.`)
            .setFooter(`Trang trước (.inv ME906--2) | Trang sau (.inv ME906--4)`);

            message.channel.sendEmbed(ME906);
    }

    if(args[0]==="ME906--4"| args[0]==="Me906--4" | args[0]==="me906--4"){
        var ME906 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 1 | 4/4) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/69/Spring_Banner.png`)
            .setAuthor (`Cherrim/Ngọc Bảo`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/b1/Cherrim_%28sunshine%29_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20180219103651`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1124`,inline = true)
            .addField(`Snowflake:`,`20`,inline = true)
            .addField(`Happiness Tune`,`Một bản nhạc đem lại niềm vui và hạnh phúc! ~ 🎵`)
            .addField(`Golden Apple`,`Một quả táo đặc biệt có ánh hào quang vàng kim chói lọi. Nó quý hiếm và đẹp đến nỗi không nỡ ăn được!`)
            .addField(`Heart Balloon`,`Một quả bóng bay hình trái tim.`)
            .addField(`Rose Thorn (x1)`,`Một nhánh gai hoa hồng không có giá trị đặc biệt gì, chỉ để sưu tầm. Đầu của nó rất nhọn và sẽ rất đau nếu chạm vào đó.`)
            .addField(`Victory Bell`,`Một chiếc chuông phát ra âm thanh, đem lại động lực để vươn tới vinh quang.`)
            .setFooter(`Trang trước (.inv ME906--3)`);

        message.channel.sendEmbed(ME906);
    }

    /// Mega Diancie (ME905) ///
    if(args[0]==="ME905"| args[0]==="me905" | args[0]==="Me905" | args[0]==="MegaDiancie" | args[0]==="Megadiancie" | args[0]==="megadiancie"){
        var ME905 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Mega Diancie/Nguyễn Diancie`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/31/Megadiancie.png/revision/latest/scale-to-width-down/100?cb=20160815093508`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`2121`,inline = true)
            .addField(`Snowflake:`,`80`,inline = true)
            .addField(`Choco-Heart:`,`17`,inline = true)
            .addField(`Deerling Doll (Winter)`,`Một con búp bê hình Pokémon Deerling Doll (Winter Form).`)
            .addField(`Ice Diamond`,`Một viên kim cương lấp lánh có lớp băng phủ bên ngoài.`);
            
        message.channel.sendEmbed(ME905);
    }

    /// Mega Lucario (ME923) ///
    if(args[0]==="ME923"| args[0]==="me923" | args[0]==="Me923" | args[0]==="MegaLucario" | args[0]==="Megalucario" | args[0]==="megalucario"){
        var ME923 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Mega Lucario/Luke Stelard`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/dd/Megalucario.png/revision/latest/scale-to-width-down/100?cb=20160817072416`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1046`,inline = true)
            .addField(`Snowflake:`,`21`,inline = true)
            .addField(`Choco-Heart:`,`17`,inline = true)
            .addField(`Corsola Twig (x1)`,`Một nhánh sừng của Pokémon Corsola, được dùng để ném gây sát thương.`)
            .addField(`Riolu Doll`,`Một con búp bê hình Pokémon Riolu.`)
            .addField(`Victory Bell`,`Một chiếc chuông phát ra âm thanh, đem lại động lực để vươn tới vinh quang.`);
            
        message.channel.sendEmbed(ME923);
    }

    // Ursaring (ME857) ///
    if(args[0]==="ME857"| args[0]==="Me857" | args[0]==="me857"| args[0]==="Ursaring" | args[0]==="ursaring"){
        var ME857 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Ursaring/ゲイル ハワアド`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/61/Ursaring.png/revision/latest/scale-to-width-down/100?cb=20171206055526`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`60`,inline = true)
            .addField(`Snowflake:`,`57`,inline = true)
            .addField(`Snover Doll`,`Một con búp bê hình Pokémon Snover.`);

        message.channel.sendEmbed(ME857);
    }

    // Froakie (ME041) ///
    if(args[0]==="ME041"| args[0]==="Me041" | args[0]==="me041"| args[0]==="Froakie" | args[0]==="froakie"){
        var ME041 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Froakie/Lê N. G. Bảo`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/8/8e/Froakie.png/revision/latest/scale-to-width-down/100?cb=20171206084436`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Snowflake:`,`2`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

        message.channel.sendEmbed(ME041);
    }

    // Mega Metagross (ME037) ///
    if(args[0]==="ME037"| args[0]==="Me037" | args[0]==="me037"){
        var ME037 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mega Metagross/Nguyễn Hoàng Lâm`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/78/Megametagross.png/revision/latest/scale-to-width-down/100?cb=20160824061358`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`600`,inline = true)
            .addField(`Snowflake:`,`9`,inline = true)
            .addField(`Gracidea`,`Một loài hoa thường được dùng để bày tỏ lòng biết ơn vào những dịp lễ đặc biệt.`)
            .addField(`Golden Apple`,`Một quả táo đặc biệt có ánh hào quang vàng kim chói lọi. Nó quý hiếm và đẹp đến nỗi không nỡ ăn được!`)
            .addField(`Yveltal Doll`,`Một con búp bê hình Pokémon Yveltal.`);

        message.channel.sendEmbed(ME037);
    }

    // Mega Metagross (ME813) ///
    if(args[0]==="ME813"| args[0]==="Me813" | args[0]==="me813"){
        var ME813 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mega Metagross/Duy Tran`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Megametagross_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20171213093652`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`60`,inline = true)
            .addField(`Shiny Charm`,`Một vật phẩm có thể giúp cho người dùng thay đổi Avatar thành Avatar Shiny Pokémon.`);

        message.channel.sendEmbed(ME813);
    }

    else if(args[0]==="Megametagross" | args[0]==="megametagross"){
        message.channel.sendMessage(`**Hiện tại có 2 Mega Metagross**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME037** | **.inv ME813**`)
    }

    // Arcanine (ME503) ///
    if(args[0]==="ME503"| args[0]==="Me503" | args[0]==="me503"| args[0]==="Arcanine" | args[0]==="arcanine"){
        var ME503 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/2) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/73/Lucky_Wheel_Banner.png/revision/latest?cb=20180211043205`)
            .setAuthor (`Arcanine/Khương Trần Duy`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/50/Arcanine.png/revision/latest/scale-to-width-down/100?cb=20171202161640`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`2480`,inline = true)
            .addField(`Choco-Heart:`,`32`,inline = true)
            .addField(`Yveltal Doll`,`Một con búp bê hình Pokémon Yveltal.`)
            .addField(`Delibird Doll`,`Một con búp bê hình Pokémon Delibird.`)
            .addField(`Snowver Doll`,`Một con búp bê hình Pokémon Snowver.`)
            .addField(`Deerling Doll (Winter)`,`Một con búp bê hình Pokémon Deerling (Winter Form).`)
            .addField(`Corsola Twig (x1)`,`Một nhánh sừng của Pokémon Corsola, được dùng để ném gây sát thương.`)
            .setFooter(`Trang sau (.inv ME503--2)`);

        message.channel.sendEmbed(ME503);
    }

    if(args[0]==="ME503--2"| args[0]==="Me503--2" | args[0]==="me503--2"){
        var ME503 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (2/2) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/73/Lucky_Wheel_Banner.png/revision/latest?cb=20180211043205`)
            .setAuthor (`Arcanine/Khương Trần Duy`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/50/Arcanine.png/revision/latest/scale-to-width-down/100?cb=20171202161640`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`2480`,inline = true)
            .addField(`Choco-Heart:`,`32`,inline = true)
            .addField(`Victory Bell`,`Một chiếc chuông phát ra âm thanh, đem lại động lực để vươn tới vinh quang.`)
            .addField(`Growlithe Doll`,`Một con búp bê hình Pokémon Growlithe.`)
            .setFooter(`Trang trước (.inv ME503)`);

        message.channel.sendEmbed(ME503);
    }

    // Houndour (ME078) ///
    if(args[0]==="ME078"| args[0]==="me078" | args[0]==="Me078" | args[0]==="Houndour" | args[0]==="houndour"){
        var ME078 = new Discord.RichEmbed().setColor(`#3A77E6`)
        .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Houndour/Mạnh Dương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/ba/Houndour.png/revision/latest/scale-to-width-down/100?cb=20170618081347`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`15`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME078);

    }
    // Golem (ME081) ///
    if(args[0]==="ME081"| args[0]==="me081" | args[0]==="Me081" | args[0]==="Golem" | args[0]==="golem"){
        var ME081 = new Discord.RichEmbed().setColor(`#3A77E6`)
        .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Golem/Truong Hung Quan`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/c/ce/Golem.png/revision/latest/scale-to-width-down/100?cb=20160816065418`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`136`,inline = true)
            .addField(`Snowflake:`,`15`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME081);
    }

    // Luxray (ME978) ///
    if(args[0]==="ME978"| args[0]==="Me978" | args[0]==="me978"){
        var ME978 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Luxray/Nguyễn Hiền`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/ad/Luxray1.png/revision/latest/scale-to-width-down/100?cb=20170710064348`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`620`,inline = true)
            .addField(`Igglybuff Doll`,`Một con búp bê hình Pokémon Igglybuff.`);

        message.channel.sendEmbed(ME978);
    }

    // Luxray (ME514) ///
    if(args[0]==="ME514"| args[0]==="Me514" | args[0]==="me514"){
        var ME514 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Luxray/Hunter Knight`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/ee/Luxray.png/revision/latest/scale-to-width-down/100?cb=20170617152627`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

        message.channel.sendEmbed(ME514);
    }

    else if(args[0]==="Luxray" | args[0]==="luxray"){
        message.channel.sendMessage(`**Hiện tại có 2 Luxray**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME514** | **.inv ME978**`)
    }

    /// Serperior (ME868) ///
    if(args[0]==="ME868"| args[0]==="me868" | args[0]==="Me868" | args[0]==="Serperior" | args[0]==="serperior"){
        var ME868 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/3) -`)
            .setAuthor(`Serperior/Nguyễn Hoài Thu`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/6a/Serperior.png/revision/latest/scale-to-width-down/100?cb=20160904162403`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1005`,inline = true)
            .addField(`Spooky Token:`,`1`,inline = true)
            .addField(`Snowflake:`,`1`,inline = true)
            .addField(`Choco-Heart:`,`1`,inline = true)
            .addField(`Yveltal Doll`,`Một con búp bê hình Pokémon Yveltal.`)
            .addField(`Snover Doll`,`Một con búp bê hình Pokémon Snover.`)
            .addField(`Delibird Doll`,`Một con búp bê hình Pokémon Delibird.`)
            .addField(`Snivy Doll`,`Một con búp bê hình Pokémon Snivy.`)
            .addField(`Furfrou Doll (La Reine)`,`Một con búp bê hình Pokémon Furfrou (La Reine Trim).`)
            .setFooter(`Trang sau (.inv ME868--2)`);
            
        message.channel.sendEmbed(ME868);
    }

    if(args[0]==="ME868--2"| args[0]==="me868--2" | args[0]==="Me868--2"){
        var ME868 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (2/3) -`)
            .setAuthor(`Serperior/Nguyễn Hoài Thu`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/6a/Serperior.png/revision/latest/scale-to-width-down/100?cb=20160904162403`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1005`,inline = true)
            .addField(`Spooky Token:`,`1`,inline = true)
            .addField(`Snowflake:`,`1`,inline = true)
            .addField(`Choco-Heart:`,`1`,inline = true)
            .addField(`Audino Doll`,`Một con búp bê hình Pokémon Audino.`)
            .addField(`Destiny Knot`,`Một cuộn chỉ màu đỏ dài, mảnh và không có gì đặc biệt khi nhìn qua. Tuy nhiên, có thể nó sẽ đem lại một điều gì đó đặc biệt nếu bạn được người mình yêu thương nhất hồi đáp.`)           
            .addField(`Mimikyu Doll`,`Một con búp bê hình Pokémon Mimikyu.`)           
            .addField(`Poké Doll`,`Một con búp bê hình Clefairy thường được dùng làm mồi nhử để đánh lạc hướng.`)
            .addField(`Plusle Doll`,`Một con búp bê hình Pokémon Plusle.`)
            .addField(`Minun Doll`,`Một con búp bê hình Pokémon Minun.`)
            .setFooter(`Trang trước (.inv ME868) | Trang sau (.inv ME868--3)`);
            
        message.channel.sendEmbed(ME868);
    }

    if(args[0]==="ME868--3"| args[0]==="me868--3" | args[0]==="Me868--3"){
        var ME868 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (3/3) -`)
            .setAuthor(`Serperior/Nguyễn Hoài Thu`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/6a/Serperior.png/revision/latest/scale-to-width-down/100?cb=20160904162403`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1005`,inline = true)
            .addField(`Spooky Token:`,`1`,inline = true)
            .addField(`Snowflake:`,`1`,inline = true)
            .addField(`Choco-Heart:`,`1`,inline = true)
            .addField(`Cherrim Doll`,`Một con búp bê hình Pokémon Cherrim.`)
            .setFooter(`Trang trước (.inv ME868--2)`);
            
        message.channel.sendEmbed(ME868);
    }

    /// Cutiefly (ME566) ///
    if(args[0]==="ME566"| args[0]==="me566" | args[0]==="Me566" | args[0]==="Cutiefly" | args[0]==="cutiefly"){
        var ME566 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/2) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/1/1b/Sentiment_Banner.png/revision/latest?cb=20180215033217`)
            .setAuthor(`Cutiefly/Hồ Hoàng Nhật Huy`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/76/Cutiefly.png/revision/latest/scale-to-width-down/100?cb=20170904043748`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`2100`,inline = true)
            .addField(`Choco-Heart:`,`1`,inline = true)
            .addField(`Vanillite Cone (x1)`,`Một cây kem cực kì ngon được thiết kế giống với Pokémon Vanillite.`)
            .addField(`Cubchoo Doll`,`Một con búp bê hình Pokémon Cubchoo.`)
            .addField(`Delibird Doll`,`Một con búp bê hình Pokémon Delibird.`)
            .addField(`Yellow Balloon`,`Một quả bóng bay màu xanh vàng.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .setFooter(`Trang sau (.inv ME566--2)`);
            
        message.channel.sendEmbed(ME566);
    }

    if(args[0]==="ME566--2"| args[0]==="me566--2" | args[0]==="Me566--2"){
        var ME566 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (2/2) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/1/1b/Sentiment_Banner.png/revision/latest?cb=20180215033217`)
            .setAuthor(`Cutiefly/Hồ Hoàng Nhật Huy`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/76/Cutiefly.png/revision/latest/scale-to-width-down/100?cb=20170904043748`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`2100`,inline = true)
            .addField(`Choco-Heart:`,`1`,inline = true)
            .addField(`Marshadow Doll`,`Một con búp bê hình Pokémon Marshadow.`)
            .addField(`Furfrou Doll (Deputante)`,`Một con búp bê hình Pokémon Furfrou (Deputante Trim).`)
            .setFooter(`Trang trước (.inv ME566)`);
            
        message.channel.sendEmbed(ME566);
    }

    // Chandelure (ME819) ///
    if(args[0]==="ME819"| args[0]==="me819" | args[0]==="Me819" | args[0]==="Chandelure" | args[0]==="chandelure"){
        var ME819 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/2) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/69/609.gif`)
            .setAuthor(`Chandelure/Phạm Đức Nam Phương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/90/Chandelure.png/revision/latest/scale-to-width-down/100?cb=20160818065924`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`660`,inline = true)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Golden Apple`,`Một quả táo đặc biệt có ánh hào quang vàng kim chói lọi. Nó quý hiếm và đẹp đến nỗi không nỡ ăn được!`)
            .addField(`Delibird Doll`,`Một con búp bê hình Pokémon Delibird.`)
            .addField(`Snover Doll`,`Một con búp bê hình Pokémon Snover.`)
            .addField(`Vanillite Cone (x1)`,`Một cây kem cực kì ngon được thiết kế giống với Pokémon Vanillite.`)
            .setFooter(`Trang sau (.inv ME819--2)`)
            
        message.channel.sendEmbed(ME819);
    }

    if(args[0]==="ME819--2"| args[0]==="me819--2" | args[0]==="Me819--2"){
        var ME819 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (2/2) -`).setImage(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/69/609.gif`)
            .setAuthor(`Chandelure/Phạm Đức Nam Phương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/90/Chandelure.png/revision/latest/scale-to-width-down/100?cb=20160818065924`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`660`,inline = true)
            .addField(`Snivy Doll`,`Một con búp bê hình Pokémon Snivy.`)
            .addField(`Riolu Doll`,`Một con búp bê hình Pokémon Riolu.`)
            .addField(`Cherrim Doll`,`Một con búp bê hình Pokémon Cherrim.`)
            .addField(`Woobat Doll`,`Một con búp bê hình Pokémon Woobat.`)
            .setFooter(`Trang trước (.inv ME819)`);
            
        message.channel.sendEmbed(ME819);
    }

    /// Girafarig (ME460) ///
    if(args[0]==="ME460"| args[0]==="me460" | args[0]==="Me460" | args[0]==="Girafarig" | args[0]==="girafarig"){
        var ME460 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Girafarig/Hươu Phế Liệu`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/eb/Girafarig.png/revision/latest/scale-to-width-down/100?cb=20171220075955`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`10`,inline = true)
            .addField(`Snowflake:`,`3`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME460);
    }

    /// Ampharos (ME053) ///
    if(args[0]==="ME053"| args[0]==="me053" | args[0]==="Me053" | args[0]==="Ampharos" | args[0]==="ampharos"){
        var ME053 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Ampharos/Phạm Nguyên`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/f5/Ampharos.png/revision/latest/scale-to-width-down/100?cb=20171227082104`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`30`,inline = true)
            .addField(`Salt (x1)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Vanillite Cone (x1)`,`Một cây kem cực kì ngon được thiết kế giống với Pokémon Vanillite.`);
            
        message.channel.sendEmbed(ME053);
    }

    /// Zorua (ME134) ///
    if(args[0]==="ME134"| args[0]==="me134" | args[0]==="Me134" | args[0]==="Zorua" | args[0]==="zorua"){
        var ME134 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Zorua/Quỷ Lệ`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/ff/Zorua.png/revision/latest/scale-to-width-down/100?cb=20160822060620`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME134);
    }

    /// Garchomp (ME200) ///
    if(args[0]==="ME200"| args[0]==="me200" | args[0]==="Me200" | args[0]==="Garchomp" | args[0]==="garchomp"){
        var ME200 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/2) -`)
            .setAuthor(`Garchomp/Minh Nguyenvan`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/e4/Garchomp.png/revision/latest/scale-to-width-down/100?cb=20180108073309`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`350`,inline = true)
            .addField(`Pikachu Doll`,`Một con búp bê hình Pokémon Pikachu.`)
            .addField(`Pikachu Doll`,`Một con búp bê hình Pokémon Pikachu.`)
            .addField(`Pikachu Doll`,`Một con búp bê hình Pokémon Pikachu.`)
            .addField(`Pikachu Doll`,`Một con búp bê hình Pokémon Pikachu.`)
            .addField(`Pikachu Doll`,`Một con búp bê hình Pokémon Pikachu.`)
            .setFooter(`Trang sau (.inv ME200--2)`);
            
        message.channel.sendEmbed(ME200);
    }

    if(args[0]==="ME200--2"| args[0]==="me200--2" | args[0]==="Me200--2"){
        var ME200 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (2/2) -`)
            .setAuthor(`Garchomp/Minh Nguyenvan`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/e4/Garchomp.png/revision/latest/scale-to-width-down/100?cb=20180108073309`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`350`,inline = true)
            .addField(`Pikachu Doll`,`Một con búp bê hình Pokémon Pikachu.`)
            .setFooter(`Trang trước (.inv ME200)`);
            
        message.channel.sendEmbed(ME200);
    }

    /// Leafeon (ME878) ///
    if(args[0]==="ME878"| args[0]==="me878" | args[0]==="Me878"){
        var ME878 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Leafeon/Nguyễn Hồ Thư`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/91/Leafeon.png/revision/latest/scale-to-width-down/100?cb=20171029143458`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME878);
    }

    else if(args[0]==="Leafeon" | args[0]==="leafeon"){
        message.channel.sendMessage(`**Hiện tại có 2 Leafeon**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME401** | **.inv ME878**`)
    }

    /// Flareon (ME618) ///
    if(args[0]==="ME618"| args[0]==="me618" | args[0]==="Me618" | args[0]==="Flareon" | args[0]==="flareon"){
        var ME618 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Flareon/Jackson Sturel`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/1/17/Flareon.png/revision/latest/scale-to-width-down/100?cb=20160821140812`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`105`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME618);
    }

    /// Buizel (ME362) ///
    if(args[0]==="ME362"| args[0]==="me362" | args[0]==="Me362" | args[0]==="Buizel" | args[0]==="buizel"){
        var ME362 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Buizel/Haku Dương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/ba/Buizel.png/revision/latest/scale-to-width-down/100?cb=20180114094757`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME362);
    }

    /// Glaceon (ME544) ///
    if(args[0]==="ME544"| args[0]==="me544" | args[0]==="Me544" | args[0]==="Glaceon" | args[0]==="glaceon"){
        var ME544 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/2) -`).setImage(`https://i.imgur.com/ixdTEpP.gif`)
            .setAuthor(`Glaceon/Aoi Miyuki`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/8/8a/Glaceon1.png/revision/latest/scale-to-width-down/100?cb=20180115071344`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`277`,inline = true)
            .addField(`Pachirisu Doll`,`Một con búp bê hình Pokémon Pachirisu.`)
            .addField(`Delibird Doll`,`Một con búp bê hình Pokémon Delibird.`)
            .addField(`Cubchoo Doll`,`Một con búp bê hình Pokémon Cubchoo.`)
            .addField(`Snover Doll`,`Một con búp bê hình Pokémon Snover.`)
            .addField(`Destiny Knot`,`Một cuộn chỉ màu đỏ dài, mảnh và không có gì đặc biệt khi nhìn qua. Tuy nhiên, có thể nó sẽ đem lại một điều gì đó đặc biệt nếu bạn được người mình yêu thương nhất hồi đáp.`)
            .setFooter(`Trang sau (.inv ME544--2)`);
            
        message.channel.sendEmbed(ME544);
    }

    if(args[0]==="ME544--2"| args[0]==="me544--2" | args[0]==="Me544--2"){
        var ME544 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (2/2) -`).setImage(`https://i.imgur.com/ixdTEpP.gif`)
            .setAuthor(`Glaceon/Aoi Miyuki`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/8/8a/Glaceon1.png/revision/latest/scale-to-width-down/100?cb=20180115071344`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`277`,inline = true)
            .addField(`Furfrou Doll (Star) `,`Một con búp bê hình Pokémon Furfrou (Star Trim).`)
            .addField(`Heart Scale (x1)`,`Một miếng vảy hình trái tim tuyệt đẹp và rất quý hiếm. Nó phát sáng nhẹ với đủ 7 màu sắc của cầu vồng.`)
            .setFooter(`Trang trước (.inv ME544)`);
            
        message.channel.sendEmbed(ME544);
    }

    /// Floette (ME968) ///
    if(args[0]==="ME968"| args[0]==="me968" | args[0]==="Me968" | args[0]==="Floette" | args[0]==="floette"){
        var ME968 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Floette/Nguyễn Nhật Uy`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/9c/Floette_%28eternal%29.png/revision/latest/scale-to-width-down/100?cb=20180119131211`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME968);
    }

    /// Tepig (ME703) ///
    if(args[0]==="ME703"| args[0]==="me703" | args[0]==="Me703" | args[0]==="Tepig" | args[0]==="tepig"){
        var ME703 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Tepig/Helena Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/0/0e/Tepig.png/revision/latest/scale-to-width-down/100?cb=20180120105210`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME703);
    }

    /// Empoleon (ME689) ///
    if(args[0]==="ME689"| args[0]==="me689" | args[0]==="Me689"){
        var ME689 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Empoleon/Nguyễn Jim`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/bb/Empoleon.png/revision/latest/scale-to-width-down/100?cb=20160929072201`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`6`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME689);
    }

    /// Empoleon (ME590) ///
    if(args[0]==="ME590"| args[0]==="me590" | args[0]==="Me590"){
        var ME590 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Empoleon/Thủy Đặng`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/bb/Empoleon.png/revision/latest/scale-to-width-down/100?cb=20160929072201`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`50`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME590);
    }

    else if(args[0]==="Empoleon" | args[0]==="empoleon"){
        message.channel.sendMessage(`**Hiện tại có 2 Empoleon**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME590** | **.inv ME689**`)
    }

    /// Shinx (ME030) ///
    if(args[0]==="ME030"| args[0]==="me030" | args[0]==="Me030" | args[0]==="Shinx" | args[0]==="shinx"){
        var ME030 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Shinx/Hải Thanh Lê`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a5/Shinx.png/revision/latest/scale-to-width-down/100?cb=20160908081524`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`2100`,inline = true)
            .addField(`Choco-Heart:`,`50`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME030);
    }

    /// Charmeleon (ME613) ///
    if(args[0]==="ME613"| args[0]==="me613" | args[0]==="Me613" | args[0]==="Charmeleon" | args[0]==="charmeleon"){
        var ME613 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Charmeleon/Propiete la Reputation`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fb/Charmeleon.png/revision/latest/scale-to-width-down/100?cb=20180206110802`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME613);
    }

    /// Giratina (ME751) ///
    if(args[0]==="ME751"| args[0]==="me751" | args[0]==="Me751" | args[0]==="Giratina" | args[0]==="giratina"){
        var ME751 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Giratina/Kha Louis`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a8/Giratina_%28origin%292.png/revision/latest/scale-to-width-down/100?cb=20160918154048`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`450`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME751);
    }

    /// Volcarona (ME701) ///
    if(args[0]==="ME701"| args[0]==="me701" | args[0]==="Me701" | args[0]==="Volcarona" | args[0]==="volcarona"){
        var ME701 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Volcarona/Hải Võ`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/5e/Volcarona.png/revision/latest/scale-to-width-down/100?cb=20160818084751`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME701);
    }

    /// Umbreon (ME069) ///
    if(args[0]==="ME069"| args[0]==="me069" | args[0]==="Me069" | args[0]==="Umbreon" | args[0]==="umbreon"){
        var ME069 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Umbreon/Nguyễn Minh Triết`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/9f/Umbreon.png/revision/latest/scale-to-width-down/100?cb=20180214122343`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`10`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME069);
    }

    /// Meloetta (ME452) ///
    if(args[0]==="ME452"| args[0]==="me452" | args[0]==="Me452"){
        var ME452 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Meloetta/Đỗ Nam`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/f3/Meloetta_%28pirouette%29.png/revision/latest/scale-to-width-down/100?cb=20161009170125`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`100`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME452);
    }

    else if(args[0]==="Meloetta" | args[0]==="meloetta"){
        message.channel.sendMessage(`**Hiện tại có 2 Meloetta**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME983** | **.inv ME452**`)
    }

    /// Comfey (ME457) ///
    if(args[0]==="ME457"| args[0]==="me457" | args[0]==="Me457" | args[0]==="Comfey" | args[0]==="comfey"){
        var ME457 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Comfey/Thuỳ Nhã`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/37/Comfey.png/revision/latest/scale-to-width-down/100?cb=20180217014140`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME457);
    }

    /// Bewear (ME303) ///
    if(args[0]==="ME303"| args[0]==="me303" | args[0]==="Me303" | args[0]==="Bewear" | args[0]==="bewear"){
        var ME303 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Bewear/Bảo Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/0/04/Bewear.png/revision/latest/scale-to-width-down/100?cb=20170617111639`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`462`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME303);
    }

    /// Feraligatr (ME199) ///
    if(args[0]==="ME199"| args[0]==="me199" | args[0]==="Me199" | args[0]==="Feraligatr" | args[0]==="feraligatr"){
        var ME199 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Feraligatr/Thinh Tran`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/51/Feraligatr.png/revision/latest/scale-to-width-down/100?cb=20180225005014`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME199);
    }

    /// Pichu (ME394) ///
    if(args[0]==="ME394"| args[0]==="me394" | args[0]==="Me394" | args[0]==="Pichu" | args[0]==="pichu"){
        var ME394 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Pichu/Thiện Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/9d/Pichu.png/revision/latest/scale-to-width-down/100?cb=20161004073859`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Zekrom Doll`,`Một con búp bê hình Pokémon Zekrom.`);
            
        message.channel.sendEmbed(ME394);
    }

    /// Pancham (ME969) ///
    if(args[0]==="ME969"| args[0]==="me969" | args[0]==="Me969" | args[0]==="Pancham" | args[0]==="pancham"){
        var ME969 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Pancham/Tuệ Minh Tuệ`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/53/Pancham1.png/revision/latest/scale-to-width-down/100?cb=20160824085003`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`320`,inline = true)
            .addField(`Gracidea`,`Một loài hoa thường được dùng để bày tỏ lòng biết ơn vào những dịp lễ đặc biệt.`)
            .addField(`Heart Scale (x1)`,`Một miếng vảy hình trái tim tuyệt đẹp và rất quý hiếm. Nó phát sáng nhẹ với đủ 7 màu sắc của cầu vồng.`)
            .addField(`Solgaleo Doll`,`Một con búp bê hình Pokémon Solgaleo.`)
            .addField(`Salt (x969)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`);
            
        message.channel.sendEmbed(ME969);
    }
}

module.exports.help = {
    name: "inv"
}