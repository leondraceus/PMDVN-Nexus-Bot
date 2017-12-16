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
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Zekrom Doll`,`Một con búp bê hình Pokémon Zekrom.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`);
            
        message.channel.sendEmbed(AD003);
    }

//    else if(args[0]==="Zekrom" | args[0]==="zekrom"){
//        message.channel.sendMessage(`**Hiện tại có 2 Zekrom**
//Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv AD003** | **?**`)
//   }

    /// Marshadow (AD004) ///
    if(args[0]==="AD004"| args[0]==="ad004" | args[0]==="Ad004" | args[0]==="Marshadow" | args[0]==="marshadow"){
        var AD004 = new Discord.RichEmbed().setColor(`#E7462B`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/OGTVkzI.gif`)
            .setAuthor(`Marshadow/Tom A. Reyes`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/dd/Marshadow.png/revision/latest/scale-to-width-down/100?cb=20170616131445`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/9e/Developer_Logo.png/revision/latest?cb=20170613044000`)
            .addField(`Poké:`,`∞`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Solgaleo Doll`,`Một con búp bê hình Pokémon Solgaleo.`);
            
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
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Yveltal Doll`,`Một con búp bê hình Pokémon Yveltal.`)
            .addField(`Salt (x69)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Rainbow Wing`,`Một chiếc lông vũ bảy sắc cầu vồng lấp lánh.`)
            .addField(`Shaymin Doll`,`Một con búp bê hình Pokémon Shaymin.`);
            
        message.channel.sendEmbed(AD006);
    }

//    else if(args[0]==="Yveltal" | args[0]==="yveltal"){
//        message.channel.sendMessage(`**Hiện tại có 2 Yveltal**
//Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv AD006** | **?**`)
//   }

    /// Mega Altaria (AD007) ///
    if(args[0]==="AD007"| args[0]==="ad007" | args[0]==="Ad007" | args[0]==="MegaAltaria" | args[0]==="Megaaltaria" | args[0]==="megaaltaria"){
        var AD007 = new Discord.RichEmbed().setColor(`#2CE0C0`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/uIFZZbL.gif`)
            .setAuthor(`Mega Altaria/Nguyễn Mạnh Kha`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/73/Megaaltaria.png/revision/latest/scale-to-width-down/100?cb=20160822063724`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/51/Organizer_Logo.png/revision/latest?cb=20170613044004`)
            .addField(`Poké:`,`∞`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Mega Altaria Doll`,`Một con búp bê hình Pokémon Altaria trong dạng Mega.`);
            
        message.channel.sendEmbed(AD007);
    }
    
    /// Gible (AD008) ///
    if(args[0]==="AD008"| args[0]==="ad008" | args[0]==="Ad008" | args[0]==="Gible" | args[0]==="gible"){
        var AD008 = new Discord.RichEmbed().setColor(`#2CE0C0`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/xadjdAw.gif`)
            .setAuthor(`Gible/Leon Draceus`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/37/Gible.png/revision/latest/scale-to-width-down/100?cb=20160827072330`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/51/Organizer_Logo.png/revision/latest?cb=20170613044004`)
            .addField(`Poké:`,`∞`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Bulbasaur Doll`,`Một con búp bê hình Pokémon Bulbasaur.`)
            .addField(`Salt (x69)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Rainbow Wing`,`Một chiếc lông vũ bảy sắc cầu vồng lấp lánh.`)
            .addField(`Blue Balloon`,`Một quả bóng bay màu lam.`);
            
        message.channel.sendEmbed(AD008);
    }

////////////////   CONTRIBUTOR   ////////////////

    /// Shaymin (ME044) ///
    if(args[0]==="ME044"| args[0]==="me044" | args[0]==="Me044"){
        var ME044 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Shaymin/Ebisu Misao`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/b7/Shaymin_%28sky%29.png/revision/latest/scale-to-width-down/100?cb=20170617033642`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`915`,inline = true)
            .addField(`Spooky Token:`,`202`,inline = true)
            .addField(`Mimikyu Doll`,`Một con búp bê hình Pokémon Mimikyu.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Salt (x1000)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`);
            
        message.channel.sendEmbed(ME044);
    }

    /// Pikachu (ME061) ///
    if(args[0]==="ME061"| args[0]==="me061" | args[0]==="Me061" | args[0]==="Pikachu" | args[0]==="pikachu"){
        var ME061 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Pikachu/Song Huy`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/32/Pikachu2.png/revision/latest/scale-to-width-down/100?cb=20160911055810`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`610`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Poké Doll`,`Một con búp bê hình Clefairy thường được dùng làm mồi nhử để đánh lạc hướng.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Salt (x1000)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`);
            
        message.channel.sendEmbed(ME061);
    }

    /// Mega Rayquaza (ME642) ///
    if(args[0]==="ME642"| args[0]==="me642" | args[0]==="Me642"){
        var ME642 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mega Rayquaza/Huy Ninh`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/4/44/Megarayquaza.png/revision/latest/scale-to-width-down/100?cb=20160816075307`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`1190`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Gracidea`,`Một loài hoa thường được dùng để bày tỏ lòng biết ơn vào những dịp lễ đặc biệt.`)
            .addField(`Poké Doll`,`Một con búp bê hình Clefairy thường được dùng làm mồi nhử để đánh lạc hướng.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Golden Apple`,`Một quả táo đặc biệt có ánh hào quang vàng kim chói lọi. Nó quý hiếm và đẹp đến nỗi không nỡ ăn được!`);
        
        message.channel.sendEmbed(ME642);
    }

    // Alolan Vulpix (ME786) ///
    if(args[0]==="ME786"| args[0]==="Me786" | args[0]==="me786" | args[0]==="Alolanvulpix" | args[0]==="alolanvulpix"){
        var ME786 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Alolan Vulpix/Ka Lê Quốc Bảo`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/c/c5/Vulpix_%28alolan%29.png/revision/latest/scale-to-width-down/100?cb=20170910131902`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Gracidea`,`Một loài hoa thường được dùng để bày tỏ lòng biết ơn vào những dịp lễ đặc biệt.`)
            
        message.channel.sendEmbed(ME786);
    }

////////////////   MEMBER   ////////////////

    /// Electivire (ME004) ///
    if(args[0]==="ME004"| args[0]==="me004" | args[0]==="Me004" | args[0]==="Electivire" | args[0]==="electivire"){
        var ME004 = new Discord.RichEmbed().setColor(`#3A77E6`)
        .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Electivire/Trần Sage Kabuto Minato`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/ee/Electivire.png/revision/latest/scale-to-width-down/100?cb=20170618085511`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME007);
    }
    
    /// Victini (ME509) ///
    if(args[0]==="ME509"| args[0]==="me509" | args[0]==="Me509"){
        var ME509 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 1 | 1/5) -`)
            .setAuthor(`Victini/Đỗ Khắc Hiệp`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1546`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Sea Dew`,`Một loại nước đặc biệt được lấy từ loài Pokémon Phione sống sâu dưới đại dương. Nó có tác dụng chữa bệnh và làm giảm cơn sốt cho Pokémon.`)
            .addField(`Shaymin  Doll`,`Một con búp bê hình Pokémon Shaymin .`)
            .addField(`Mimikyu Doll`,`Một con búp bê hình Pokémon Mimikyu.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .setFooter(`Trang sau (.inv ME509--2)`);
            
        message.channel.sendEmbed(ME509);
    }
    
    if(args[0]==="ME509--2"| args[0]==="me509--2" | args[0]==="Me509--2"){
        var ME509 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 1 | 2/5) -`)
            .setAuthor(`Victini/Đỗ Khắc Hiệp`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1546`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Salt (x999)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Golden Apple`,`Một quả táo đặc biệt có ánh hào quang vàng kim chói lọi. Nó quý hiếm và đẹp đến nỗi không nỡ ăn được!`)
            .addField(`Plusle Doll`,`Một con búp bê hình Pokémon Plusle.`)
            .addField(`Minun Doll`,`Một con búp bê hình Pokémon Minun.`)
            .addField(`Heart Scale`,`Một miếng vảy hình trái tim tuyệt đẹp và rất quý hiếm. Nó phát sáng nhẹ với đủ 7 màu sắc của cầu vồng.`)
            .setFooter(`Trang trước (.inv ME509) | Trang sau (.inv ME509--3)`);
            
        message.channel.sendEmbed(ME509);
    }
    
    if(args[0]==="ME509--3"| args[0]==="me509--3" | args[0]==="Me509--3"){
        var ME509 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 1 | 3/5) -`)
            .setAuthor(`Victini/Đỗ Khắc Hiệp`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1546`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Marshadow Doll`,`Một con búp bê hình Pokémon Marshadow.`)
            .addField(`Rainbow Wing`,`Một chiếc lông vũ bảy sắc cầu vồng lấp lánh.`)
            .addField(`Red Balloon`,`Một quả bóng bay màu đỏ.`)
            .addField(`Shiny Charm`,`Một vật phẩm có thể giúp cho người dùng thay đổi Avatar thành Avatar Shiny Pokémon.`)
            .addField(`Frozen Wand`,`Một chiếc gậy làm từ băng ẩn chứa một sức mạnh bí ẩn có khả năng tạo ra Snowflake.`)
            .setFooter(`Trang trước (.inv ME509--2) | Trang sau (.inv ME509--4)`);
            
        message.channel.sendEmbed(ME509);
    }
    
    if(args[0]==="ME509--4"| args[0]==="me509--4" | args[0]==="Me509--4"){
        var ME509 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 1 | 4/5) -`)
            .setAuthor(`Victini/Đỗ Khắc Hiệp`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1546`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Gible Fang`,`Một chiếc răng của Pokémon Gible.`)
            .addField(`Treecko Doll`,`Một con búp bê hình Pokémon Treecko.`)
            .addField(`Torchic Doll`,`Một con búp bê hình Pokémon Torchic.`)
            .addField(`Mudkip Doll`,`Một con búp bê hình Pokémon Mudkip.`)
            .addField(`Jirachi Doll`,`Một con búp bê hình Pokémon Jirachi.`)
            .setFooter(`Trang trước (.inv ME509--3) | Trang sau (.inv ME509--5)`);
            
        message.channel.sendEmbed(ME509);
    }

    if(args[0]==="ME509--5"| args[0]==="me509--5" | args[0]==="Me509--5"){
        var ME509 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 1 | 5/5) -`)
            .setAuthor(`Victini/Đỗ Khắc Hiệp`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1546`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Never-Melt Ice`,`Một cục băng có thể bật lại sức nóng, khiến cho nó không thể bị tan ra.`)
            .addField(`Vanillite Cone (x1)`,`Một cây kem cực kì ngon được thiết kế giống với Pokémon Vanillite.`)
            .setFooter(`Trang trước (.inv ME509--4)`);
            
        message.channel.sendEmbed(ME509);
    }
    
    /// Victini (ME264) ///
    if(args[0]==="ME264"| args[0]==="me264" | args[0]==="Me264"){
        var ME264 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Victini/Vickyu Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/67/Victini2.png/revision/latest/scale-to-width-down/100?cb=20161119021011`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`555`,inline = true)
            .addField(`Spooky Token:`,`202`,inline = true)
            .addField(`Mimikyu Doll`,`Một con búp bê hình Pokémon Mimikyu.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Heart Scale (x2)`,`Một miếng vảy hình trái tim tuyệt đẹp và rất quý hiếm. Nó phát sáng nhẹ với đủ 7 màu sắc của cầu vồng.`)
            .addField(`Golden Apple`,`Một quả táo đặc biệt có ánh hào quang vàng kim chói lọi. Nó quý hiếm và đẹp đến nỗi không nỡ ăn được!`)
            .addField(`Plusle Doll`,`Một con búp bê hình Pokémon Plusle.`)
            .addField(`Minun Doll`,`Một con búp bê hình Pokémon Minun.`);
            
        message.channel.sendEmbed(ME264);
    }
    
    else if(args[0]==="Victini" | args[0]==="victini"){
        message.channel.sendMessage(`**Hiện tại có 2 Victini**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME509** | **.inv ME264**`)
    }

    /// Leafeon (ME401) ///
    if(args[0]==="ME401"| args[0]==="me401" | args[0]==="Me401" | args[0]==="Leafeon" | args[0]==="leafeon"){
        var ME401 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Leafeon/Decina Denele`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/91/Leafeon.png/revision/latest/scale-to-width-down/100?cb=20171029143458`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`70`,inline = true)
            .addField(`Spooky Token:`,`35`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Salt (x16)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Bulbasaur Doll`,`Một con búp bê hình Pokémon Bulbasaur.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Frozen Wand`,`Một chiếc gậy làm từ băng ẩn chứa một sức mạnh bí ẩn có khả năng tạo ra Snowflake.`);
            
        message.channel.sendEmbed(ME401);
    }
    
    /// Torterra (ME563) ///
    if(args[0]==="ME563"| args[0]==="me563" | args[0]==="Me563" | args[0]==="Torterra" | args[0]==="torterra"){
        var ME563 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/2) -`)
            .setAuthor(`Torterra/Chương Lê`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/0/05/Torterra.png/revision/latest/scale-to-width-down/100?cb=20171128145511`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`2956 `,inline = true)
            .addField(`Spooky Token:`,`60`,inline = true)
            .addField(`Mimikyu Doll`,`Một con búp bê hình Pokémon Mimikyu.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Chikorita Doll`,`Một con búp bê hình Pokémon Chikorita.`)
            .addField(`Mega Altaria Doll`,`Một con búp bê hình Pokémon Mega Altaria.`)
            .setFooter(`Trang sau (.inv ME563--2)`);
            
        message.channel.sendEmbed(ME563);
    }
    
    if(args[0]==="ME563--2"| args[0]==="me563--2" | args[0]==="Me563--2"){
        var ME563 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (2/2) -`)
            .setAuthor(`Torterra/Chương Lê`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/0/05/Torterra.png/revision/latest/scale-to-width-down/100?cb=20171128145511`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`2956 `,inline = true)
            .addField(`Spooky Token:`,`60`,inline = true)
            .addField(`Frozen Wand`,`Một chiếc gậy làm từ băng ẩn chứa một sức mạnh bí ẩn có khả năng tạo ra Snowflake.`)
            .setFooter(`Trang trước (.inv ME563)`);
            
        message.channel.sendEmbed(ME563);
    }
    
    /// Fennekin (ME185) ///
    if(args[0]==="ME185"| args[0]==="me185" | args[0]==="Me185" | args[0]==="Fennekin" | args[0]==="fennekin"){
        var ME185 = new Discord.RichEmbed().setColor(`#CD90BF`)
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/T47qRfC.gif`)
            .setAuthor(`Fennekin/Quang Phú`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/e1/Fennekin1.png/revision/latest/scale-to-width-down/100?cb=20170617053156`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`200`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Salt (x1000)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`);
            
        message.channel.sendEmbed(ME185);
    }
    
    /// Bisharp (ME392) ///
    if(args[0]==="ME392"| args[0]==="me392" | args[0]==="Me392" | args[0]==="Bisharp" | args[0]==="bisharp"){
        var ME392 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (Size 1 | 1/4) -`)
            .setAuthor(`Bisharp/Rayen Sylvia`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/3c/Bisharp.png/revision/latest/scale-to-width-down/100?cb=20160821125340`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`946`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Deerling Doll (Winter)`,`Một con búp bê hình Pokémon Deerling Doll (Winter Form).`)
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
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .setTitle(`- KHO ĐỒ -`).setImage(`https://i.imgur.com/kT71Iwl.gif`)
            .setAuthor(`Lilligant/Lein Cương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/9e/Lilligant_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20171029142911`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`175`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Shiny Charm`,`Một vật phẩm có thể giúp cho người dùng thay đổi Avatar thành Avatar Shiny Pokémon.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Marshadow Doll`,`Một con búp bê hình Pokémon Marshadow.`)
            .addField(`Deerling Doll (Spring)`,`Một con búp bê hình Pokémon Deerling Doll (Spring Form).`)
            .addField(`Vanillite Cone (x2)`,`Một cây kem cực kì ngon được thiết kế giống với Pokémon Vanillite.`);
            
        message.channel.sendEmbed(ME571);
    }

    /// Mega Rayquaza (ME697) ///
    if(args[0]==="ME697"| args[0]==="me697" | args[0]==="Me697"){
        var ME697 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mega Rayquaza/Lưu Mạnh Hà`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/4/44/Megarayquaza.png/revision/latest/scale-to-width-down/100?cb=20160816075307`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

        message.channel.sendEmbed(ME697);
    }

    else if(args[0]==="MegaRayquaza" | args[0]==="Megarayquaza" | args[0]==="megarayquaza"){
        message.channel.sendMessage(`**Hiện tại có 2 Mega Rayquaza**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME642** | **.inv ME697**`)
    }

    /// Spinda (ME329) ///
    if(args[0]==="ME329"| args[0]==="me329" | args[0]==="Me329" | args[0]==="Spinda" | args[0]==="spinda"){
        var ME329 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/2) -`)
            .setAuthor(`Spinda/Bihaicau Neko`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/3b/Spinda.png/revision/latest/scale-to-width-down/100?cb=20160904162441`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`710`,inline = true)
            .addField(`Spooky Token:`,`67`,inline = true)
            .addField(`Gracidea`,`Một loài hoa thường được dùng để bày tỏ lòng biết ơn vào những dịp lễ đặc biệt.`)
            .addField(`Zekrom Doll`,`Một con búp bê hình Pokémon Zekrom.`)
            .addField(`Shaymin Doll`,`Một con búp bê hình Pokémon Shaymin.`)
            .addField(`Tiny Mushroom`,`Một chiếc nấm nhỏ và hiếm, có thể dùng để chế biến thức ăn.`)
            .addField(`Salt (x1000)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .setFooter(`Trang sau (.inv ME329--2)`);
            
        message.channel.sendEmbed(ME329);
    }
    
    if(args[0]==="ME329--2"| args[0]==="me329--2" | args[0]==="Me329--2"){
        var ME329 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (2/2) -`)
            .setAuthor(`Spinda/Bihaicau Neko`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/3b/Spinda.png/revision/latest/scale-to-width-down/100?cb=20160904162441`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`710`,inline = true)
            .addField(`Spooky Token:`,`67`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .setFooter(`Trang trước (.inv ME329)`);
            
        message.channel.sendEmbed(ME329);
    }

    /// Suicune (ME818) ///
    if(args[0]==="ME818"| args[0]==="me818" | args[0]==="Me818" | args[0]==="Suicune" | args[0]==="suicune"){
        var ME818 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Suicune/Syu Nub`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/c/c3/Suicune.png/revision/latest/scale-to-width-down/100?cb=20160827153416`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`2055`,inline = true)
            .addField(`Spooky Token:`,`144`,inline = true)
            .addField(`Sea Pendant`,`Một chiếc mặt dây chuyền ánh lên màu xanh của biển. Nó chứa đựng một năng lượng kì lạ nào đó.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Salt (x1000)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`);
        
        message.channel.sendEmbed(ME818);
    }

    // Mimikyu (ME319) ///
    if(args[0]==="ME319"| args[0]==="me319" | args[0]==="Me319"){
        var ME319 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mimikyu/Nagisa Shiota`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/ab/Mimikyu1.png/revision/latest/scale-to-width-down/100?cb=20170617060854`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .setTitle(`- KHO ĐỒ (1/2) -`)
            .setAuthor (`Rockruff/Drack Mon`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/1/13/Rockruff.png/revision/latest/scale-to-width-down/100?cb=20170617061838`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`494`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .setTitle(`- KHO ĐỒ (2/2) -`)
            .setAuthor (`Rockruff/Drack Mon`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/1/13/Rockruff.png/revision/latest/scale-to-width-down/100?cb=20170617061838`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`494`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Mega Altaria Doll`,`Một con búp bê hình Pokémon Mega Altaria.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
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
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Squirtle Doll`,`Một con búp bê hình Pokémon Squirtle.`)
            .addField(`Totodile Doll`,`Một con búp bê hình Pokémon Totodile.`)
            .addField(`Salt (x1)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`);

        message.channel.sendEmbed(ME427);
    }

    // Lugia (ME411) ///
    if(args[0]==="ME411"| args[0]==="me411" | args[0]==="Me411" | args[0]==="Lugia" | args[0]==="lugia"){
        var ME411 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Lugia/Daigo Metagurosu`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a7/Lugia.png/revision/latest/scale-to-width-down/100?cb=20160820013937`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`490`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Salt (x1000)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Yveltal Doll`,`Một con búp bê hình Pokémon Yveltal.`);

        message.channel.sendEmbed(ME411);
    }

    // Sharpedo (ME524) ///
    if(args[0]==="ME524"| args[0]==="Me524" | args[0]==="me524"){
        var ME411 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Sharpedo/Vũ Ân Mỹ`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fc/Sharpedo1.png/revision/latest/scale-to-width-down/100?cb=20171119024849`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1620`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Salt (x69)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`);

        message.channel.sendEmbed(ME411);
    }

    // Mudkip (ME725) ///
    if(args[0]==="ME725"| args[0]==="Me725" | args[0]==="me725"){
        var ME725 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/3) -`)
            .setAuthor (`Mudkip/Thanh Ngọc`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/54/Mudkip2.png/revision/latest/scale-to-width-down/100?cb=20161008084148`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`559`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .setTitle(`- KHO ĐỒ (2/3) -`)
            .setAuthor (`Mudkip/Thanh Ngọc`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/54/Mudkip2.png/revision/latest/scale-to-width-down/100?cb=20161008084148`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`559`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Mudkip Doll`,`Một con búp bê hình Pokémon Mudkip.`)
            .addField(`Heart Scale`,`Một miếng vảy hình trái tim tuyệt đẹp và rất quý hiếm. Nó phát sáng nhẹ với đủ 7 màu sắc của cầu vồng.`)
            .addField(`Red Balloon`,`Một quả bóng bay màu đỏ.`)
            .addField(`Pikachu Doll`,`Một con búp bê hình Pokémon Pikachu.`)
            .addField(`Tiny Mushroom`,`Một chiếc nấm nhỏ và hiếm, có thể dùng để chế biến thức ăn.`)
            .setFooter(`Trang trước (.inv ME725) | Trang sau (.inv ME725--3)`);

        message.channel.sendEmbed(ME725);
    }

    if(args[0]==="ME725--3"| args[0]==="Me725--3" | args[0]==="me725--3"){
        var ME725 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (3/3) -`)
            .setAuthor (`Mudkip/Thanh Ngọc`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/54/Mudkip2.png/revision/latest/scale-to-width-down/100?cb=20161008084148`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`559`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Deerling Doll (Autumn)`,`Một con búp bê hình Pokémon Deerling Doll (Autumn Form).`)
            .addField(`Vanillite Cone (x2)`,`Một cây kem cực kì ngon được thiết kế giống với Pokémon Vanillite.`)
            .setFooter(`Trang trước (.inv ME725--2)`);

        message.channel.sendEmbed(ME725);
    }

    // Mudkip (ME459) ///
    if(args[0]==="ME459"| args[0]==="Me459" | args[0]==="me459"){
        var ME459 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mudkip/Nguyễn An`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/ae/Mudkip.png/revision/latest/scale-to-width-down/100?cb=20160905044511`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`500`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Mega Altaria Doll`,`Một con búp bê hình Pokémon Mega Altaria.`)
            .addField(`Solgaleo Doll`,`Một con búp bê hình Pokémon Solgaleo.`);

        message.channel.sendEmbed(ME459);
    }

    else if(args[0]==="Mudkip" | args[0]==="mudkip"){
        message.channel.sendMessage(`**Hiện tại có 2 Mudkip**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME459** | **.inv ME725**`)
    }
    
    // Togekiss (ME892) ///
    if(args[0]==="ME892"| args[0]==="Me892" | args[0]==="me892"| args[0]==="Togekiss" | args[0]==="togekiss"){
        var ME892 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Togekiss/Dương Anh Văn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7b/Togekiss.png/revision/latest/scale-to-width-down/100?cb=20160817083806`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`300`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME892);
    }

    // Mega Latias (ME089) ///
    if(args[0]==="ME089"| args[0]==="Me089" | args[0]==="me089" | args[0]==="MegaLatias" | args[0]==="Megalatias" | args[0]==="megalatias"){
        var ME089 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mega Latias/Trần Minh Hoàng`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/30/Megalatias.png/revision/latest/scale-to-width-down/100?cb=20160823063629`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`300`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME089);
    }

    // Dedenne (ME072) ///
    if(args[0]==="ME072"| args[0]==="Me072" | args[0]==="me072"| args[0]==="Dedenne" | args[0]==="dedenne"){
        var ME072 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (1/2) -`)
            .setAuthor (`Dedenne/Trần Khoa Lộc`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/33/Dedenne1.png/revision/latest/scale-to-width-down/100?cb=20170618090108`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`10`,inline = true)
            .addField(`Spooky Token:`,`40`,inline = true)
            .addField(`Zekrom Doll`,`Một con búp bê hình Pokémon Zekrom.`)
            .addField(`Mimikyu Doll`,`Một con búp bê hình Pokémon Mimikyu.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Pikachu Doll`,`Một con búp bê hình Pokémon Pikachu.`)
            .setFooter(`Trang sau (.inv ME072--2)`);

        message.channel.sendEmbed(ME072);
    }
    
    if(args[0]==="ME072--2"| args[0]==="Me072--2" | args[0]==="me072--2"){
        var ME072 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ (2/2) -`)
            .setAuthor (`Dedenne/Trần Khoa Lộc`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/33/Dedenne1.png/revision/latest/scale-to-width-down/100?cb=20170618090108`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`10`,inline = true)
            .addField(`Spooky Token:`,`40`,inline = true)
            .addField(`Salt (x1000)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Plusle Doll`,`Một con búp bê hình Pokémon Plusle.`)
            .addField(`Minun Doll`,`Một con búp bê hình Pokémon Minun.`)
            .addField(`Gible Fang`,`Một chiếc răng của Pokémon Gible.`)
            .setFooter(`Trang trước (.inv ME072)`);

        message.channel.sendEmbed(ME072);
    }

    // Dewott (ME240) ///
    if(args[0]==="ME240"| args[0]==="Me240" | args[0]==="me240"| args[0]==="Dewott" | args[0]==="dewott"){
        var ME240 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Dewott/Namhuy Ly`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/b7/Dewott.png/revision/latest/scale-to-width-down/100?cb=20170904025318`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`150`,inline = true)
            .addField(`Spooky Token:`,`10`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Mudkip Doll`,`Một con búp bê hình Pokémon Mudkip.`)
            .addField(`Plusle Doll`,`Một con búp bê hình Pokémon Plusle.`)
            .addField(`Minun Doll`,`Một con búp bê hình Pokémon Minun.`)
            .addField(`Salt (x9)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`);
            
        message.channel.sendEmbed(ME240);
    }

    // Jolteon (ME219) ///
    if(args[0]==="ME219"| args[0]==="Me219" | args[0]==="me219"| args[0]==="Jolteon" | args[0]==="jolteon"){
        var ME219 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Jolteon/Nguyễn Mai Phương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/4/49/Jolteon1.png/revision/latest/scale-to-width-down/100?cb=20170622091121`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`300`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);
                
        message.channel.sendEmbed(ME219);
    }

    // Lucario (ME300) ///
    if(args[0]==="ME300"| args[0]==="Me300" | args[0]==="me300"){
        var ME300 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Lucario/Đạt Quốc Trương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/d0/Lucario.png/revision/latest/scale-to-width-down/100?cb=20171028171549`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`470`,inline = true)
            .addField(`Spooky Token:`,`107`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME300);
    }

    // Lucario (ME773) ///
    if(args[0]==="ME773"| args[0]==="Me773" | args[0]==="me773"){
        var ME773 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Lucario/Minh Song Nguyễn Huỳnh`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/2/27/Lucario1.png/revision/latest/scale-to-width-down/100?cb=20171108133953`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`50`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME209);
    }

    // Mega Charizard Y (ME054) ///
    if(args[0]==="ME054"| args[0]==="Me054" | args[0]==="me054"| args[0]==="MegaCharizardY" | args[0]==="Megacharizardy" | args[0]==="megacharizardy" | args[0]==="MegacharizardY" | args[0]==="megacharizardY"){
        var ME054 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mega Charizard Y/Thu Phương Đỗ`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/c/c8/Megacharizardy.png/revision/latest/scale-to-width-down/100?cb=20160821135727`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`374`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME054);
    }

    // Riolu (ME711) ///
    if(args[0]==="ME711"| args[0]==="Me711" | args[0]==="me711"){
        var ME711 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Riolu/Huỳnh Tiến Phát`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/f0/Riolu.png/revision/latest/scale-to-width-down/100?cb=20160816072138`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`300`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME711);
    }

    // Riolu (ME640) ///
    if(args[0]==="ME640"| args[0]==="Me640" | args[0]==="me640"){
        var ME640 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Riolu/Huyền Rosie`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/c/c9/Riolu1.png/revision/latest/scale-to-width-down/100?cb=20171117141434`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .setTitle(`- KHO ĐỒ (1/2) -`).setImage(`https://i.imgur.com/JYcNKLI.gif`)
            .setAuthor (`Sylveon/Mỹ Duyên Hứa`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/4/4f/Sylveon1.png/revision/latest/scale-to-width-down/100?cb=20160911131143`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`2299`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .setTitle(`- KHO ĐỒ (2/2) -`).setImage(`https://i.imgur.com/JYcNKLI.gif`)
            .setAuthor (`Sylveon/Mỹ Duyên Hứa`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/4/4f/Sylveon1.png/revision/latest/scale-to-width-down/100?cb=20160911131143`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`2299`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Pichu Doll`,`Một con búp bê hình Pokémon Pichu.`)
            .addField(`Frozen Wand`,`Một chiếc gậy làm từ băng ẩn chứa một sức mạnh bí ẩn có khả năng tạo ra Snowflake.`)
            .setFooter(`Trang trước (.inv ME011)`);

        message.channel.sendEmbed(ME011);
    }

    // Sylveon (ME884) ///
    if(args[0]==="ME884"| args[0]==="Me884" | args[0]==="me884"){
        var ME884 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Sylveon/Nguyễn Hà`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/63/Sylveon.png/revision/latest/scale-to-width-down/100?cb=20170618140044`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`650`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Talonflame/Justin Vader`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/bc/Talonflame.png/revision/latest/scale-to-width-down/100?cb=20160822135536`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`1366`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Poké Doll`,`Một con búp bê hình Clefairy thường được dùng làm mồi nhử để đánh lạc hướng.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME099);
    }

    // Talonflame (ME381) ///
    if(args[0]==="ME381"| args[0]==="Me381" | args[0]==="me381"){
        var ME381 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Talonflame/Koutei Akumei`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a9/Talonflame1.png/revision/latest/scale-to-width-down/100?cb=20160908082743`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Poké:`,`390`,inline = true)
            .addField(`Spooky Token:`,`10`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`);

        message.channel.sendEmbed(ME330);
    }

    // Purrloin (ME716) ///
    if(args[0]==="ME716"| args[0]==="Me716" | args[0]==="me716"| args[0]==="Purrloin" | args[0]==="purrloin"){
        var ME716 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Purrloin/Đoàn Anh Đức`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/0/0f/Purrloin.png/revision/latest/scale-to-width-down/100?cb=20160821010754`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`300`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME716);
    }

    // Mega Sableye (ME456) ///
    if(args[0]==="ME456"| args[0]==="Me456" | args[0]==="me456" | args[0]==="Megasableye" | args[0]==="megasableye"){
        var ME456 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Mega Sableye/Trần Ngọc Phi Long`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/69/Megasableye_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20171214121620`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`634`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Salt (x1000)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Shiny Charm`,`Một vật phẩm có thể giúp cho người dùng thay đổi Avatar thành Avatar Shiny Pokémon.`);

        message.channel.sendEmbed(ME456);
    }

    // Sableye (ME441) ///
    if(args[0]==="ME441"| args[0]==="Me441" | args[0]==="me441" | args[0]==="Sableye" | args[0]==="sableye"){
        var ME441 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Sableye/Le Ba Tuan`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/99/Sableye.png/revision/latest/scale-to-width-down/100?cb=20160908081725`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

        message.channel.sendEmbed(ME441);
    }

    // Gallade (ME110) ///
    if(args[0]==="ME110"| args[0]==="Me110" | args[0]==="me110"){
        var ME110 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Gallade/Silver Mist`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/2/2d/Gallade.png/revision/latest/scale-to-width-down/100?cb=20160817090558`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`300`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME110);
    }

    // Gallade (ME014) ///
    if(args[0]==="ME014"| args[0]==="Me014" | args[0]==="me014"){
        var ME014 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Gallade/Tuấn Minh Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/2/2d/Gallade.png/revision/latest/scale-to-width-down/100?cb=20160817090558`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

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
            .setAuthor (`Brionne/Đặng Lê Bảo Linh`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/d3/Brionne.png/revision/latest/scale-to-width-down/100?cb=20170618091552`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`400`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`);

        message.channel.sendEmbed(ME062);
    }

    // Zygarde (ME607) ///
    if(args[0]==="ME607"| args[0]==="Me607" | args[0]==="me607"| args[0]==="Zygarde" | args[0]==="zygarde"){
        var ME607 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Zygarde/Ngọc Minh Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/69/Zygarde.png/revision/latest/scale-to-width-down/100?cb=20160819085135`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`300`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Gracidea`,`Một loài hoa thường được dùng để bày tỏ lòng biết ơn vào những dịp lễ đặc biệt.`)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Salt (x1000)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`);

        message.channel.sendEmbed(ME607);
    }

    // Cyndaquil (ME867) ///
    if(args[0]==="ME867"| args[0]==="Me867" | args[0]==="me867"){
        var ME867 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Cyndaquil/Sejuro Akayashi`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/99/Cyndaquil.png/revision/latest/scale-to-width-down/100?cb=20170617135609`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

        message.channel.sendEmbed(ME662);
    }

    else if(args[0]==="Cyndaquil" | args[0]==="cyndaquil"){
        message.channel.sendMessage(`**Hiện tại có 2 Cyndaquil**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.inv ME867** | **.inv ME662**`)
    }

    // Dratini (ME906) ///
    if(args[0]==="ME906"| args[0]==="Me906" | args[0]==="me906"| args[0]==="Dratini" | args[0]==="dratini"){
        var ME906 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Dratini/Ngọc Bảo`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/4/4c/Dratini1.png/revision/latest/scale-to-width-down/100?cb=20170904030420`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`185`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Togepi Doll`,`Một con búp bê hình Pokémon Togepi.`)
            .addField(`Gible Doll`,`Một con búp bê hình Pokémon Gible.`)
            .addField(`Salt (x1000)`,`Chỉ đơn thuần là một bịch muối trắng. Feeling salty? =))`)
            .addField(`Rainbow Wing`,`Một chiếc lông vũ bảy sắc cầu vồng lấp lánh.`)
            .addField(`Vanillite Cone (x2)`,`Một cây kem cực kì ngon được thiết kế giống với Pokémon Vanillite.`);

        message.channel.sendEmbed(ME906);
    }

    /// Mega Diancie (ME905) ///
    if(args[0]==="ME905"| args[0]==="me905" | args[0]==="Me905" | args[0]==="MegaDiancie" | args[0]==="Megadiancie" | args[0]==="megadiancie"){
        var ME905 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Mega Diancie/Nguyễn Diancie`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/31/Megadiancie.png/revision/latest/scale-to-width-down/100?cb=20160815093508`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`389`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Poké:`,`64`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME923);
    }

    // Ursaring (ME857) ///
    if(args[0]==="ME857"| args[0]==="Me857" | args[0]==="me857"| args[0]==="Ursaring" | args[0]==="ursaring"){
        var ME857 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Ursaring/ゲイル ハワアド`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/61/Ursaring.png/revision/latest/scale-to-width-down/100?cb=20171206055526`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`60`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .setTitle(`- KHO ĐỒ -`)
            .setAuthor (`Arcanine/Khương Trần Duy`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/50/Arcanine.png/revision/latest/scale-to-width-down/100?cb=20171202161640`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`400`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Yveltal Doll`,`Một con búp bê hình Pokémon Yveltal.`);

        message.channel.sendEmbed(ME503);
    }

    // Houndour (ME078) ///
    if(args[0]==="ME078"| args[0]==="me078" | args[0]==="Me078" | args[0]==="Houndour" | args[0]==="houndour"){
        var ME078 = new Discord.RichEmbed().setColor(`#3A77E6`)
        .setTitle(`- KHO ĐỒ -`)
            .setAuthor(`Houndour/Mạnh Dương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/ba/Houndour.png/revision/latest/scale-to-width-down/100?cb=20170618081347`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME081);
    }

    // Luxray (ME978) ///
    if(args[0]==="ME978"| args[0]==="Me978" | args[0]==="me978"){
        var ME978 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Luxray/Nguyễn Hiền`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/ad/Luxray1.png/revision/latest/scale-to-width-down/100?cb=20170710064348`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);

        message.channel.sendEmbed(ME978);
    }

    // Luxray (ME514) ///
    if(args[0]==="ME514"| args[0]==="Me514" | args[0]==="me514"){
        var ME514 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Luxray/Hunter Knight`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/ee/Luxray.png/revision/latest/scale-to-width-down/100?cb=20170617152627`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`0`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
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
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Serperior/Nguyễn Hoài Thu`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/6a/Serperior.png/revision/latest/scale-to-width-down/100?cb=20160904162403`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`295`,inline = true)
            .addField(`Spooky Token:`,`40`,inline = true)
            .addField(`Yveltal Doll`,`Một con búp bê hình Pokémon Yveltal.`);
            
        message.channel.sendEmbed(ME868);
    }

    /// Cutiefly (ME566) ///
    if(args[0]==="ME566"| args[0]==="me566" | args[0]==="Me566" | args[0]==="Cutiefly" | args[0]==="cutiefly"){
        var ME566 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Cutiefly/Bùi Nhật Huy`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/76/Cutiefly.png/revision/latest/scale-to-width-down/100?cb=20170904043748`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Poké:`,`10`,inline = true)
            .addField(`Spooky Token:`,`0`,inline = true)
            .addField(`Không có Item nào trong kho đồ...`,`\u200B`);
            
        message.channel.sendEmbed(ME566);
    }
}

module.exports.help = {
    name: "inv"
}