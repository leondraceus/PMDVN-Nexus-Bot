const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {

///////////////   ADMIN   ///////////////    
    /// Shaymin (AD001) ///
    if(args[0]==="AD001"| args[0]==="ad001" | args[0]==="Ad001"){
        var AD001 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÔNG TIN -`).setImage(`https://i.imgur.com/kt7G3Br.gif`)
            .setAuthor(`Shaymin/Mã Tiến An`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/1/18/Shaymin_%28land%292.png/revision/latest/scale-to-width-down/100?cb=20160815090806`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Chủng loài:`,`Shaymin (Land Forme)`)
            .addField(`Tên Facebook:`,`Mã Tiến An`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`19/9`)
            .addField(`Cấp bậc:`,`Contributor`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Làm Admin Group`);
            
        message.channel.sendEmbed(AD001);
    }

    else if(args[0]==="Shaymin" | args[0]==="shaymin"){
        message.channel.sendMessage(`**Hiện tại có 2 Shaymin**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info AD001** | **.info ME044**`)
    }

    /// Mew (AD002) ///
    if(args[0]==="AD002"| args[0]==="ad002" | args[0]==="Ad002"){
        var AD002 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÔNG TIN -`).setImage(`https://i.imgur.com/nM0UZzS.gif`)
            .setAuthor(`Mew/Pikarry Phạm`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a4/Mew_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20170616124144`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Chủng loài:`,`Mew <:shiny:385079020158451722>`)
            .addField(`Tên Facebook:`,`Pikarry Phạm`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`26/10`)
            .addField(`Cấp bậc:`,`Contributor`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Làm Admin Group`);
            
        message.channel.sendEmbed(AD002);
    }

    else if(args[0]==="Mew" | args[0]==="mew"){
        message.channel.sendMessage(`**Hiện tại có 2 Mew**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info AD002** | **(Mew/Huỳnh Long - đang cập nhật)**`)
    }

    /// Zekrom (AD003) ///
    if(args[0]==="AD003"| args[0]==="ad003" | args[0]==="Ad003" | args[0]==="Zekrom" | args[0]==="zekrom"){
        var AD003 = new Discord.RichEmbed().setColor(`#EA2FC0`)
            .setTitle(`- THÔNG TIN -`).setImage(`https://i.imgur.com/qcWppUj.gif`)
            .setAuthor(`Zekrom/Cao Minh Trí`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/68/Zekrom.png/revision/latest?cb=20160814002800`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/b1/Grand_Administrator_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Zekrom`)
            .addField(`Tên Facebook:`,`Cao Minh Trí`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`24/7`)
            .addField(`Cấp bậc:`,`Grand Administrator`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Làm Admin Group`);
            
        message.channel.sendEmbed(AD003);
    }

//    else if(args[0]==="Zekrom" | args[0]==="zekrom"){
//        message.channel.sendMessage(`**Hiện tại có 2 Zekrom**
//Vui lòng dùng code để tra cứu theo các lệnh sau: **.info AD003** | **?**`)
//   }

    /// Marshadow (AD004) ///
    if(args[0]==="AD004"| args[0]==="ad004" | args[0]==="Ad004" | args[0]==="Marshadow" | args[0]==="marshadow"){
        var AD004 = new Discord.RichEmbed().setColor(`#2CE0C0`)
            .setTitle(`- THÔNG TIN -`).setImage(`https://i.imgur.com/OGTVkzI.gif`)
            .setAuthor(`Marshadow/レイズ トム・`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/dd/Marshadow.png/revision/latest/scale-to-width-down/100?cb=20170616131445`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/51/Organizer_Logo.png/revision/latest?cb=20170613044004`)
            .addField(`Chủng loài:`,`Marshadow`)
            .addField(`Tên Facebook:`,`レイズ トム・`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`6/10`)
            .addField(`Cấp bậc:`,`Organizer`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Làm Admin Group`);
            
        message.channel.sendEmbed(AD004);
    }

//    else if(args[0]==="Marshadow" | args[0]==="marshadow"){
//        message.channel.sendMessage(`**Hiện tại có 2 Marshadow**
//Vui lòng dùng code để tra cứu theo các lệnh sau: **.info AD004** | **?**`)
//   }

    /// Solgaleo (AD005) ///
    if(args[0]==="AD005"| args[0]==="ad005" | args[0]==="Ad005"){
        var AD005 = new Discord.RichEmbed().setColor(`#E7462B`)
            .setTitle(`- THÔNG TIN -`).setImage(`https://i.imgur.com/TtoFdTO.gif`)
            .setAuthor(`Solgaleo/Lê Gia Long`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a2/Solgaleo.png/revision/latest/scale-to-width-down/100?cb=20170616133607`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/9e/Developer_Logo.png/revision/latest?cb=20170613044000`)
            .addField(`Chủng loài:`,`Solgaleo`)
            .addField(`Tên Facebook:`,`Lê Gia Long`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`27/9`)
            .addField(`Cấp bậc:`,`Developer`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Làm Admin Group`);
            
        message.channel.sendEmbed(AD005);
    }

    else if(args[0]==="Solgaleo" | args[0]==="solgaleo"){
        message.channel.sendMessage(`**Hiện tại có 2 Solgaleo**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info AD005** | **.info ME191**`)
   }

    /// Yveltal (AD006) ///
    if(args[0]==="AD006"| args[0]==="ad006" | args[0]==="Ad006" | args[0]==="Yveltal" | args[0]==="yveltal"){
        var AD006 = new Discord.RichEmbed().setColor(`#2CE0C0`)
            .setTitle(`- THÔNG TIN -`).setImage(`https://i.imgur.com/ogbvJhH.gif`)
            .setAuthor(`Yveltal/Nguyễn Nhật`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/b6/Yveltal.png/revision/latest/scale-to-width-down/100?cb=20160821130113`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/51/Organizer_Logo.png/revision/latest?cb=20170613044004`)
            .addField(`Chủng loài:`,`Yveltal`)
            .addField(`Tên Facebook:`,`Nguyễn Nhật`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`12/12`)
            .addField(`Cấp bậc:`,`Organizer`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Làm Admin Group`);
            
        message.channel.sendEmbed(AD006);
    }

//    else if(args[0]==="Yveltal" | args[0]==="yveltal"){
//        message.channel.sendMessage(`**Hiện tại có 2 Yveltal**
//Vui lòng dùng code để tra cứu theo các lệnh sau: **.info AD006** | **?**`)
//   }

    /// Mega Altaria (AD007) ///
    if(args[0]==="AD007"| args[0]==="ad007" | args[0]==="Ad007" | args[0]==="MegaAltaria" | args[0]==="megaaltaria"){
        var AD007 = new Discord.RichEmbed().setColor(`#2CE0C0`)
            .setTitle(`- THÔNG TIN -`).setImage(`https://i.imgur.com/uIFZZbL.gif`)
            .setAuthor(`Mega Altaria/Nguyễn Mạnh Kha`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/73/Megaaltaria.png/revision/latest/scale-to-width-down/100?cb=20160822063724`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/51/Organizer_Logo.png/revision/latest?cb=20170613044004`)
            .addField(`Chủng loài:`,`Altaria (Mega)`)
            .addField(`Tên Facebook:`,`Nguyễn Mạnh Kha`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`10/6`)
            .addField(`Cấp bậc:`,`Organizer`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Làm Admin Group`);
            
        message.channel.sendEmbed(AD007);
    }
    
    /// Gible (AD008) ///
    if(args[0]==="AD008"| args[0]==="ad008" | args[0]==="Ad008" | args[0]==="Gible" | args[0]==="gible"){
        var AD008 = new Discord.RichEmbed().setColor(`#E7462B`)
            .setTitle(`- THÔNG TIN -`).setImage(`https://i.imgur.com/xadjdAw.gif`)
            .setAuthor(`Gible/Leon Draceus`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/37/Gible.png/revision/latest/scale-to-width-down/100?cb=20160827072330`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/9e/Developer_Logo.png/revision/latest?cb=20170613044000`)
            .addField(`Chủng loài:`,`Gible`)
            .addField(`Tên Facebook:`,`Leon Draceus`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`4/12`)
            .addField(`Cấp bậc:`,`Organizer`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Làm Admin Group`);
            
        message.channel.sendEmbed(AD008);
    }

///////////////   CONTRIBUTOR   ///////////////

    /// Shaymin (ME044) ///
    if(args[0]==="ME044"| args[0]==="me044" | args[0]==="Me044"){
        var ME044 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Shaymin/Inverno Luna`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/b7/Shaymin_%28sky%29.png/revision/latest/scale-to-width-down/100?cb=20170617033642`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Chủng loài:`,`Shaymin (Sky Forme)`)
            .addField(`Tên Facebook:`,`Inverno Luna`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`26/10`)
            .addField(`Cấp bậc:`,`Contributor`)
            .addField(`Guild:`,`---`);
        var ACME044 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÀNH TÍCH -`)
            .addField(`Tổ chức Member Event:`,`PokéLand Wonder Library (18/7/2017 -> 1/8/2017)`)
            .addField(`Đóng góp truyện tích cực cho The Great Archive`,`\u200B`);
            
        message.channel.sendEmbed(ME044);
        message.channel.sendEmbed(ACME044);
    }

    /// Pikachu (ME061) ///
    if(args[0]==="ME061"| args[0]==="me061" | args[0]==="Me061" | args[0]==="Pikachu" | args[0]==="pikachu"){
        var ME061 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Pikachu/Nguyễn Song Hoàng Huy`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/32/Pikachu2.png/revision/latest/scale-to-width-down/100?cb=20160911055810`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Chủng loài:`,`Pikachu`)
            .addField(`Tên Facebook:`,`Nguyễn Song Hoàng Huy`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`7/7`)
            .addField(`Cấp bậc:`,`Contributor`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME061);
    }

    /// Mega Rayquaza (ME642) ///
    if(args[0]==="ME642"| args[0]==="me642" | args[0]==="Me642"){
        var ME642 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Mega Rayquaza/Huy Ninh`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/5e/Megarayquaza_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20180120142214`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Chủng loài:`,`Rayquaza (Mega) <:shiny:385079020158451722>`)
            .addField(`Tên Facebook:`,`Huy Ninh`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`25/6`)
            .addField(`Cấp bậc:`,`Contributor`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Đăng bài, hoạt động tích cực trên Group`);
        
        message.channel.sendEmbed(ME642);
    }

    // Alolan Vulpix (ME786) ///
    if(args[0]==="ME786"| args[0]==="Me786" | args[0]==="me786" | args[0]==="Alolanvulpix" | args[0]==="alolanvulpix"){
        var ME786 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Alolan Vulpix/Ka Lê Quốc Bảo`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/c/c5/Vulpix_%28alolan%29.png/revision/latest/scale-to-width-down/100?cb=20170910131902`)
                .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
                .addField(`Chủng loài:`,`Vulpix (Alola)`)
                .addField(`Tên Facebook:`,`Ka Lê Quốc Bảo`)
                .addField(`Giới tính:`,`Nam`)
                .addField(`Ngày sinh:`,`9/1`)
                .addField(`Cấp bậc:`,`Contributor`)
                .addField(`Guild:`,`---`);
        var ACME786 = new Discord.RichEmbed().setColor(`#5CE05F`)
                .setTitle(`- THÀNH TÍCH -`)
                .addField(`Sky Ruins Expedition:`,`Giải nhất`)
                .addField(`Đăng bài, hoạt động tích cực trên Group`,`\u200B`);

        message.channel.sendEmbed(ME786);
        message.channel.sendEmbed(ACME786);
    }

    /// Leafeon (ME401) ///
    if(args[0]==="ME401"| args[0]==="me401" | args[0]==="Me401"){
        var ME401 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Leafeon/Decina Denele`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/91/Leafeon.png/revision/latest/scale-to-width-down/100?cb=20171029143458`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Chủng loài:`,`Leafeon`)
            .addField(`Tên Facebook:`,`Decina Denele`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`24/12`)
            .addField(`Cấp bậc:`,`Contributor`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Giúp đỡ Admin xây dựng, quản lí Server Discord`);
            
        message.channel.sendEmbed(ME401);
    }
    
    /// Primarina (ME563) ///
    if(args[0]==="ME563"| args[0]==="me563" | args[0]==="Me563" | args[0]==="Primarina" | args[0]==="primarina"){
        var ME563 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÔNG TIN -`).setImage(`https://i.imgur.com/W1CMwcD.gif`)
            .setAuthor(`Primarina/Chương Lê`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/1/14/Primarina.png/revision/latest/scale-to-width-down/100?cb=20180108143722`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Chủng loài:`,`Primarina`)
            .addField(`Tên Facebook:`,`Chương Lê`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`12/2`)
            .addField(`Cấp bậc:`,`Contributor`)
            .addField(`Guild:`,`---`);
        var ACME563 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÀNH TÍCH -`)
            .addField(`Tìm kiếm nguồn và nhắc nhở ghi nguồn cho các ảnh đăng trong Group`,`\u200B`)
            .addField(`Tổ chức Member Event:`,`Ai là Poké Phú (13/1/2018 -> 20/1/2018)`);
            
        message.channel.sendEmbed(ME563);
        message.channel.sendEmbed(ACME563);
    }
    
    /// Spinda (ME329) ///
    if(args[0]==="ME329"| args[0]==="me329" | args[0]==="Me329" | args[0]==="Spinda" | args[0]==="spinda"){
        var ME329 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Spinda/Bihaicau Neko`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/3b/Spinda.png/revision/latest/scale-to-width-down/100?cb=20160904162441`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Chủng loài:`,`Spinda`)
            .addField(`Tên Facebook:`,`Bihaicau Neko`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`12/12`)
            .addField(`Cấp bậc:`,`Contributor`)
            .addField(`Guild:`,`---`);
        var ACME329 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÀNH TÍCH -`)
            .addField(`Quản lí Spinda's Café`,`\u200B`)
            .addField(`Tổ chức Member Event:`,`Spinda's Cooking Contest (9/7/2017 -> 16/7/2017)`)
            .addField(`Pokémas:`,`Giải ba (Tour SD)`);
            
        message.channel.sendEmbed(ME329);
        message.channel.sendEmbed(ACME329);
    }
    
    /// Corsola (ME595) ///
    if(args[0]==="ME595"| args[0]==="me595" | args[0]==="Me595" | args[0]==="Corsola" | args[0]==="corsola"){
        var ME595 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Corsola/Oo Mốc`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/6a/Corsola.png/revision/latest/scale-to-width-down/100?cb=20160905044456`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Chủng loài:`,`Corsola`)
            .addField(`Tên Facebook:`,`Oo Mốc`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`14/1`)
            .addField(`Cấp bậc:`,`Contributor`)
            .addField(`Guild:`,`---`);
        var ACME595 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÀNH TÍCH -`)
            .addField(`Tổ chức Member Event:`,`Spinda's Cooking Contest (9/7/2017 -> 16/7/2017)`)
            .addField(`Livestream làm Figure cho Group`,`\u200B`);
            
            message.channel.sendEmbed(ME595);
            message.channel.sendEmbed(ACME595);
    }

    /// Meloetta (ME983) ///
    if(args[0]==="ME983"| args[0]==="me983" | args[0]==="Me983"){
        var ME983 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Meloetta/Robin Nico`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/61/Meloetta_%28aria%29_1.png/revision/latest/scale-to-width-down/100?cb=20160820011552`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Chủng loài:`,`Meloetta (Aria)`)
            .addField(`Tên Facebook:`,`Robin Nico`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`15/12`)
            .addField(`Cấp bậc:`,`Contributor`)
            .addField(`Guild:`,`---`);
        var ACME983 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÀNH TÍCH -`)
            .addField(`Sky Ruins Expedition:`,`Giải khuyến khích`)
            .addField(`Pokéween:`,`Giải nhất (Pokékween) & Giải khuyến khích (Lost Library)`);
            
            message.channel.sendEmbed(ME983);
            message.channel.sendEmbed(ACME983);
    }

    /// Keldeo (ME674) ///
    if(args[0]==="ME674"| args[0]==="me674" | args[0]==="Me674" | args[0]==="Keldeo" | args[0]==="keldeo"){
        var ME674 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Keldeo/ペリエ リッチー`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a5/Keldeo_%28resolute%29.png/revision/latest/scale-to-width-down/100?cb=20170618235442`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Contributor_Logo.png/revision/latest?cb=20170613043958`)
            .addField(`Chủng loài:`,`Keldeo (Resolute)`)
            .addField(`Tên Facebook:`,`ペリエ リッチー`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`6/7`)
            .addField(`Cấp bậc:`,`Contributor`)
            .addField(`Guild:`,`---`);
        var ACME674 = new Discord.RichEmbed().setColor(`#5CE05F`)
            .setTitle(`- THÀNH TÍCH -`)
            .addField(`Pokéween:`,`Giải ba (Pokékween)`)
            .addField(`Vẽ tranh tặng cho Group`,`\u200B`)
            .addField(`Làm các Avatar PMD cho Gen 7 Pokémon`,`\u200B`);
            
            message.channel.sendEmbed(ME674);
            message.channel.sendEmbed(ACME674);
    }

////////////////   MEMBER   ////////////////

    /// Electivire (ME004) ///
    if(args[0]==="ME004"| args[0]==="me004" | args[0]==="Me004" | args[0]==="Electivire" | args[0]==="electivire"){
        var ME004 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Electivire/Trần Sage Kabuto Minato`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/ee/Electivire.png/revision/latest/scale-to-width-down/100?cb=20170618085511`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Electivire`)
            .addField(`Tên Facebook:`,`Trần Sage Kabuto Minato`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`26/12`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME004);
    }

    /// Turtwig (ME007) ///
    if(args[0]==="ME007"| args[0]==="me007" | args[0]==="Me007" | args[0]==="Turtwig" | args[0]==="turtwig"){
        var ME007 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Turtwig/Nguyễn Ngọc Hiếu`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/e6/Turtwig3.png/revision/latest/scale-to-width-down/100?cb=20160821143622`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Turtwig`)
            .addField(`Tên Facebook:`,`Nguyễn Ngọc Hiếu`)
            .addField(`Giới tính:`,`Gay`)
            .addField(`Ngày sinh:`,`2/12`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME007);
    }

    /// Victini (ME509) ///
    if(args[0]==="ME509"| args[0]==="me509" | args[0]==="Me509"){
        var ME509 = new Discord.RichEmbed().setColor(`#F08120`)
            .setTitle(`- THÔNG TIN -`).setImage(`https://i.imgur.com/3e6Q9vx.gif`)
            .setAuthor(`Victini/Đỗ Khắc Hiệp`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Victini <:shiny:385079020158451722>`)
            .addField(`Tên Facebook:`,`Đỗ Khắc Hiệp`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`17/4`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`);
        var ACME509 = new Discord.RichEmbed().setColor(`#F08120`)
            .setTitle(`- THÀNH TÍCH -`)
            .addField(`Underwater Expedition:`,`Giải nhất (Thi bơi), Đạt điểm cao nhất (Thi vẽ)`)
            .addField(`Pokéween 2 - Lost in the Woods:`,`Giải ba (Tour SD)`)
            .addField(`Pokémas:`,`Giải nhất (Tour SD)`);
            
        message.channel.sendEmbed(ME509);
        message.channel.sendEmbed(ACME509);
    }
    
    /// Victini (ME264) ///
    if(args[0]==="ME264"| args[0]==="me264" | args[0]==="Me264"){
        var ME264 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Victini/Vickyu Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7c/Victini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20160910151404`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Victini <:shiny:385079020158451722>`)
            .addField(`Tên Facebook:`,`Vickyu Nguyễn`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`24/10`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Tổ chức Member Event: #teamcạpcạp vs #teambắtcạpcạprong (26/9/2017 -> 5/10/2017)`);
            
        message.channel.sendEmbed(ME264);
    }
    
    else if(args[0]==="Victini" | args[0]==="victini"){
        message.channel.sendMessage(`**Hiện tại có 2 Victini**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info ME509** | **.info ME264**`)
    }
    
    /// Fennekin (ME185) ///
    if(args[0]==="ME185"| args[0]==="me185" | args[0]==="Me185" | args[0]==="Fennekin" | args[0]==="fennekin"){
        var ME185 = new Discord.RichEmbed().setColor(`#CD90BF`)
            .setTitle(`- THÔNG TIN -`).setImage(`https://i.imgur.com/T47qRfC.gif`)
            .setAuthor(`Fennekin/Quang Phú`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/e1/Fennekin1.png/revision/latest/scale-to-width-down/100?cb=20170617053156`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Fennekin`)
            .addField(`Tên Facebook:`,`Quang Phú`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`4/9`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME185);
    }
    
    /// Bisharp (ME392) ///
    if(args[0]==="ME392"| args[0]==="me392" | args[0]==="Me392" | args[0]==="Bisharp" | args[0]==="bisharp"){
        var ME392 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Bisharp/Rayen Sylvia`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/3c/Bisharp.png/revision/latest/scale-to-width-down/100?cb=20160821125340`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Bisharp`)
            .addField(`Tên Facebook:`,`Rayen Sylvia`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`26/3`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME392);
    }

    /// Hawlucha (ME028) ///
    if(args[0]==="ME028"| args[0]==="me028" | args[0]==="Me028"){
        var ME028 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Hawlucha/Nguyễn Tấn Phát`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/8/82/Hawlucha.png/revision/latest/scale-to-width-down/100?cb=20160817081722`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Hawlucha`)
            .addField(`Tên Facebook:`,`Nguyễn Tấn Phát`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`1/8`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME028);
    }

    /// Hawlucha (ME320) ///
    if(args[0]==="ME320"| args[0]==="me320" | args[0]==="Me320"){
        var ME320 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Hawlucha/Đinh Hoàng Việt`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/8/82/Hawlucha.png/revision/latest/scale-to-width-down/100?cb=20160817081722`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Hawlucha`)
            .addField(`Tên Facebook:`,`Đinh Hoàng Việt`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`19/6`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME320);
    }

    else if(args[0]==="Hawlucha" | args[0]==="hawlucha"){
        message.channel.sendMessage(`**Hiện tại có 2 Hawlucha**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info ME028** | **.info ME320**`)
    }

    /// Lilligant (ME571) ///
    if(args[0]==="ME571"| args[0]==="me571" | args[0]==="Me571" | args[0]==="Lilligant" | args[0]==="lilligant"){
        var ME571 = new Discord.RichEmbed().setColor(`#FDFD9C`)
            .setTitle(`- THÔNG TIN -`).setImage(`https://i.imgur.com/kT71Iwl.gif`)
            .setAuthor(`Lilligant/Lein Cương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/9e/Lilligant_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20171029142911`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Lilligant <:shiny:385079020158451722>`)
            .addField(`Tên Facebook:`,`Lein Cương`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`---`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME571);
    }

    /// Mega Rayquaza (ME697) ///
    if(args[0]==="ME697"| args[0]==="me697" | args[0]==="Me697"){
        var ME697 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Mega Rayquaza/Lưu Mạnh Hà`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/4/44/Megarayquaza.png/revision/latest/scale-to-width-down/100?cb=20160816075307`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Rayquaza (Mega)`)
            .addField(`Tên Facebook:`,`Lưu Mạnh Hà`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`15/9`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME697);
    }

    else if(args[0]==="MegaRayquaza" | args[0]==="Megarayquaza" | args[0]==="megarayquaza"){
        message.channel.sendMessage(`**Hiện tại có 2 Mega Rayquaza**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info ME642** | **.info ME697**`)
    }

    /// Suicune (ME818) ///
    if(args[0]==="ME818"| args[0]==="me818" | args[0]==="Me818" | args[0]==="Suicune" | args[0]==="suicune"){
        var ME818 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Suicune/Syu Nub`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/c/c3/Suicune.png/revision/latest/scale-to-width-down/100?cb=20160827153416`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Suicune`)
            .addField(`Tên Facebook:`,`Syu Nub`)
            .addField(`Giới tính:`,`Bisexual`)
            .addField(`Ngày sinh:`,`20/7`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`);
        var ACME818 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÀNH TÍCH -`)
            .addField(`Sky Peak Conquest:`,`Giải nhì`)
            .addField(`Underwater Expedition:`,`Giải ba (Thi bơi)`)
            .addField(`Pokéween 2 - Lost in the Woods:`,`Giải nhất (Tour SD)`);
            
        message.channel.sendEmbed(ME818);
        message.channel.sendEmbed(ACME818);
    }

    // Mimikyu (ME319) ///
    if(args[0]==="ME319"| args[0]==="me319" | args[0]==="Me319"){
        var ME319 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Mimikyu/Nagisa Shiota`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/ab/Mimikyu1.png/revision/latest/scale-to-width-down/100?cb=20170617060854`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Mimikyu`)
            .addField(`Tên Facebook:`,`Nagisa Shiota`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`29/5`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME319);
    }

    // Mimikyu (ME982) ///
    if(args[0]==="ME982"| args[0]==="me982" | args[0]==="Me982"){
        var ME982 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Mimikyu/Thanh Phạm`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/ab/Mimikyu1.png/revision/latest/scale-to-width-down/100?cb=20170617060854`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Mimikyu`)
            .addField(`Tên Facebook:`,`Thanh Phạm`)
            .addField(`Giới tính:`,`---`)
            .addField(`Ngày sinh:`,`21/2`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME982);
    }

    // Mimikyu (ME304) ///
    if(args[0]==="ME304"| args[0]==="me304" | args[0]==="Me304"){
        var ME304 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Mimikyu/Hậu Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/ab/Mimikyu1.png/revision/latest/scale-to-width-down/100?cb=20170617060854`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Mimikyu`)
            .addField(`Tên Facebook:`,`Hậu Nguyễn`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`---`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME304);
    }

    // Mimikyu (ME338) ///
    if(args[0]==="ME338"| args[0]==="me3384" | args[0]==="Me338"){
        var ME338 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Mimikyu/Le Duy`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/ab/Mimikyu1.png/revision/latest/scale-to-width-down/100?cb=20170617060854`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Mimikyu`)
            .addField(`Tên Facebook:`,`Le Duy`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`24/5`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME338);
    }

    else if(args[0]==="Mimikyu" | args[0]==="mimikyu"){
        message.channel.sendMessage(`**Hiện tại có 4 Mimikyu**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info ME304** | **.info ME319** | **.info ME338** | **.info ME982**`)
    }

    // Rockruff (ME008) ///
    if(args[0]==="ME008"| args[0]==="me008" | args[0]==="Me008"| args[0]==="Rockruff" | args[0]==="rockruff"){
        var ME008 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Rockruff/Drack Mon`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/1/13/Rockruff.png/revision/latest/scale-to-width-down/100?cb=20170617061838`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Rockruff`)
            .addField(`Tên Facebook:`,`Drack Mon`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`27/11`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME008);
    }

    // Rhyperior (ME427) ///
    if(args[0]==="ME427"| args[0]==="me427" | args[0]==="Me427"| args[0]==="Rhyperior" | args[0]==="rhyperior"){
        var ME427 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Rhyperior/Mai Thái Hoàng`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/f1/Rhyperior.png/revision/latest/scale-to-width-down/100?cb=20160908073142`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Rhyperior`)
            .addField(`Tên Facebook:`,`Mai Thái Hoàng`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`27/6`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Pokéween - Giải ba (Lost Library)`);

        message.channel.sendEmbed(ME427);
    }

    // Silvally (ME411) ///
    if(args[0]==="ME411"| args[0]==="me411" | args[0]==="Me411" | args[0]==="Silvally" | args[0]==="silvally"){
        var ME411 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Silvally/Bờ Lách`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/3b/Silvally.png/revision/latest/scale-to-width-down/100?cb=20171230061609`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Silvally`)
            .addField(`Tên Facebook:`,`Bờ Lách`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`4/11`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Tổ chức Member Event: Pokémon Kicking Contest (24/12/2017 -> 1/1/2018)`);

        message.channel.sendEmbed(ME411);
    }

    // Sharpedo (ME524) ///
    if(args[0]==="ME524"| args[0]==="Me524" | args[0]==="me524"){
        var ME524 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Sharpedo/Vũ Ân Mỹ`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fc/Sharpedo1.png/revision/latest/scale-to-width-down/100?cb=20171119024849`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Sharpedo`)
            .addField(`Tên Facebook:`,`Vũ Ân Mỹ`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`9/9`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME524);
    }

    // Mudkip (ME725) ///
    if(args[0]==="ME725"| args[0]==="Me725" | args[0]==="me725"){
        var ME725 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Mudkip/Thanh Ngọc`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/54/Mudkip2.png/revision/latest/scale-to-width-down/100?cb=20161008084148`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Mudkip`)
            .addField(`Tên Facebook:`,`Thanh Ngọc`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`2/7`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME725);
    }

    // Mudkip (ME459) ///
    if(args[0]==="ME459"| args[0]==="Me459" | args[0]==="me459"){
        var ME459 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Mudkip/Nguyễn An`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/ae/Mudkip.png/revision/latest/scale-to-width-down/100?cb=20160905044511`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Mudkip`)
            .addField(`Tên Facebook:`,`Nguyễn An`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`28/2`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME459);
    }

    /// Mudkip (ME684) ///
    if(args[0]==="ME684"| args[0]==="me684" | args[0]==="Me684"){
        var ME684 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Mudkip/Tùng Neko`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/54/Mudkip2.png/revision/latest/scale-to-width-down/100?cb=20161008084148`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Mudkip`)
            .addField(`Tên Facebook:`,`Tùng Neko`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`17/10`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME684);
    }

    else if(args[0]==="Mudkip" | args[0]==="mudkip"){
        message.channel.sendMessage(`**Hiện tại có 3 Mudkip**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info ME459** | **.info ME684** | **.info ME725**`)
    }

    // Togekiss (ME892) ///
    if(args[0]==="ME892"| args[0]==="Me892" | args[0]==="me892"| args[0]==="Togekiss" | args[0]==="togekiss"){
        var ME892 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Togekiss/Dương Anh Văn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/7b/Togekiss.png/revision/latest/scale-to-width-down/100?cb=20160817083806`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Togekiss`)
            .addField(`Tên Facebook:`,`Dương Anh Văn`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`1/6`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Prison Bottle Event - Giải khuyến khích (Hoopa's House)`);

        message.channel.sendEmbed(ME892);
    }

    // Mega Latias (ME089) ///
    if(args[0]==="ME089"| args[0]==="Me089" | args[0]==="me089" | args[0]==="MegaLatias" | args[0]==="Megalatias" | args[0]==="megalatias"){
        var ME089 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Mega Latias/Trần Minh Hoàng`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/30/Megalatias.png/revision/latest/scale-to-width-down/100?cb=20160823063629`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Latias (Mega)`)
            .addField(`Tên Facebook:`,`Trần Minh Hoàng`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`9/6`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME089);
    }

    // Dedenne (ME072) ///
    if(args[0]==="ME072"| args[0]==="Me072" | args[0]==="me072"| args[0]==="Dedenne" | args[0]==="dedenne"){
        var ME072 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`).setImage(`https://i.imgur.com/zJWCkpn.gif`)
            .setAuthor (`Dedenne/Trần Khoa Lộc`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/33/Dedenne1.png/revision/latest/scale-to-width-down/100?cb=20170618090108`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Dedenne`)
            .addField(`Tên Facebook:`,`Trần Khoa Lộc`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`5/4`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`);
        var ACME072 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÀNH TÍCH -`)
            .addField(`Tổ chức Member Event:`,`Pokémon Kicking Contest (24/12/2017 -> 1/1/2018)`)
            .addField(`Tổ chức Member Event:`,`Time to Explode (1/1/2018 -> 6/1/2018)`)
            .addField(`Tổ chức Member Event:`,`Fast and Furious (14/1/2018)`);

        message.channel.sendEmbed(ME072);
        message.channel.sendEmbed(ACME072);
    }

    // Dewott (ME240) ///
    if(args[0]==="ME240"| args[0]==="Me240" | args[0]==="me240"| args[0]==="Dewott" | args[0]==="dewott"){
        var ME240 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Dewott/Namhuy Ly`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/8/85/Dewott_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20171227073307`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Dewott <:shiny:385079020158451722>`)
            .addField(`Tên Facebook:`,`Namhuy Ly`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`6/5`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME240);
    }

    // Jolteon (ME219) ///
    if(args[0]==="ME219"| args[0]==="Me219" | args[0]==="me219"| args[0]==="Jolteon" | args[0]==="jolteon"){
        var ME219 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Jolteon/Nguyễn Mai Phương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/4/49/Jolteon1.png/revision/latest/scale-to-width-down/100?cb=20170622091121`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Jolteon`)
            .addField(`Tên Facebook:`,`Nguyễn Mai Phương`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`23/2`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME219);
    }

    // Lucario (ME300) ///
    if(args[0]==="ME300"| args[0]==="Me300" | args[0]==="me300"){
        var ME300 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Lucario/Đạt Quốc Trương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/d0/Lucario.png/revision/latest/scale-to-width-down/100?cb=20171028171549`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Lucario`)
            .addField(`Tên Facebook:`,`Đạt Quốc Trương`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`12/9`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME300);
    }

    // Lucario (ME773) ///
    if(args[0]==="ME773"| args[0]==="Me773" | args[0]==="me773"){
        var ME773 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Lucario/Minh Song Nguyễn Huỳnh`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/2/27/Lucario1.png/revision/latest/scale-to-width-down/100?cb=20171108133953`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Lucario`)
            .addField(`Tên Facebook:`,`Minh Song Nguyễn Huỳnh`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`15/1`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME773);
    }

    else if(args[0]==="Lucario" | args[0]==="lucario"){
        message.channel.sendMessage(`**Hiện tại có 2 Lucario**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info ME300** | **.info ME773**`)
    }

    // Mega Charizard X (ME209) ///
    if(args[0]==="ME209"| args[0]==="Me209" | args[0]==="me209"| args[0]==="MegaCharizardX" | args[0]==="Megacharizardx" | args[0]==="megacharizardx" | args[0]==="MegacharizardX" | args[0]==="megacharizardX"){
        var ME209 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Mega Charizard X/Dương Võ`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/de/Megacharizardx.png/revision/latest/scale-to-width-down/100?cb=20160818075829`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Charizard (Mega) X`)
            .addField(`Tên Facebook:`,`Dương Võ`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`16/9`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME209);
    }

    // Mega Charizard Y (ME054) ///
    if(args[0]==="ME054"| args[0]==="Me054" | args[0]==="me054"| args[0]==="MegaCharizardY" | args[0]==="Megacharizardy" | args[0]==="megacharizardy" | args[0]==="MegacharizardY" | args[0]==="megacharizardY"){
        var ME054 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Mega Charizard Y/Thu Phương Đỗ`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/c/c8/Megacharizardy.png/revision/latest/scale-to-width-down/100?cb=20160821135727`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Charizard (Mega) Y`)
            .addField(`Tên Facebook:`,`Thu Phương Đỗ`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`12/1`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME054);
    }

    // Riolu (ME711) ///
    if(args[0]==="ME711"| args[0]==="Me711" | args[0]==="me711"){
        var ME711 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Riolu/Huỳnh Tiến Phát`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/f0/Riolu.png/revision/latest/scale-to-width-down/100?cb=20160816072138`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Riolu`)
            .addField(`Tên Facebook:`,`Huỳnh Tiến Phát`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`20/3`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME711);
    }

    // Riolu (ME640) ///
    if(args[0]==="ME640"| args[0]==="Me640" | args[0]==="me640"){
        var ME640 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Riolu/Huyền Rosie`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/c/c9/Riolu1.png/revision/latest/scale-to-width-down/100?cb=20171117141434`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Riolu`)
            .addField(`Tên Facebook:`,`Huyền Rosie`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`21/1`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME640);
    }

    else if(args[0]==="Riolu" | args[0]==="riolu"){
        message.channel.sendMessage(`**Hiện tại có 2 Riolu**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info ME640** | **.info ME711**`)
    }

    // Sylveon (ME011) ///
    if(args[0]==="ME011"| args[0]==="Me011" | args[0]==="me011"){
        var ME011 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`).setImage(`https://i.imgur.com/JYcNKLI.gif`)
            .setAuthor (`Sylveon/Mỹ Duyên Hứa`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/4/4f/Sylveon1.png/revision/latest/scale-to-width-down/100?cb=20160911131143`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Sylveon`)
            .addField(`Tên Facebook:`,`Mỹ Duyên Hứa`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`24/12`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME011);
    }

    // Sylveon (ME884) ///
    if(args[0]==="ME884"| args[0]==="Me884" | args[0]==="me884"){
        var ME884 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Sylveon/Nguyễn Hà`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/63/Sylveon.png/revision/latest/scale-to-width-down/100?cb=20170618140044`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Sylveon`)
            .addField(`Tên Facebook:`,`Nguyễn Hà`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`5/8`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME884);
    }

    else if(args[0]==="Sylveon" | args[0]==="sylveon"){
        message.channel.sendMessage(`**Hiện tại có 2 Sylveon**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info ME011** | **.info ME884**`)
    }

    // Talonflame (ME099) ///
    if(args[0]==="ME099"| args[0]==="Me099" | args[0]==="me099"){
        var ME099 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Talonflame/Justin Vader`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/0/0b/Talonflame_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20180128152130`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Talonflame <:shiny:385079020158451722>`)
            .addField(`Tên Facebook:`,`Justin Vader`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`16/12`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME099);
    }

    // Talonflame (ME381) ///
    if(args[0]==="ME381"| args[0]==="Me381" | args[0]==="me381"){
        var ME381 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Talonflame/Koutei Akumei`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a9/Talonflame1.png/revision/latest/scale-to-width-down/100?cb=20160908082743`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Talonflame`)
            .addField(`Tên Facebook:`,`Koutei Akumei`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`1/8`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME381);
    }

    else if(args[0]==="Talonflame" | args[0]==="talonflame"){
        message.channel.sendMessage(`**Hiện tại có 2 Talonflame**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info ME099** | **.info ME381**`)
    }

    // Decidueye (ME330) ///
    if(args[0]==="ME330"| args[0]==="Me330" | args[0]==="me330"| args[0]==="Decidueye" | args[0]==="decidueye"){
        var ME330 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Decidueye/Nguyễn Tiến Gia Nguyên`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/d3/Decidueye.png/revision/latest/scale-to-width-down/100?cb=20170621040327`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Decidueye`)
            .addField(`Tên Facebook:`,`Nguyễn Tiến Gia Nguyên`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`28/4`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME330);
    }

    // Purrloin (ME716) ///
    if(args[0]==="ME716"| args[0]==="Me716" | args[0]==="me716"| args[0]==="Purrloin" | args[0]==="purrloin"){
        var ME716 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Purrloin/Đoàn Anh Đức`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/0/0f/Purrloin.png/revision/latest/scale-to-width-down/100?cb=20160821010754`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Purrloin`)
            .addField(`Tên Facebook:`,`Đoàn Anh Đức`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`16/12`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Sky Ruins Expedition: Giải khuyến khích`);

        message.channel.sendEmbed(ME716);
    }

    // Mega Sableye (ME456) ///
    if(args[0]==="ME456"| args[0]==="Me456" | args[0]==="me456" | args[0]==="Megasableye" | args[0]==="megasableye"){
        var ME456 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`).setImage(`https://i.imgur.com/IRASI39.gif`)
            .setAuthor (`Mega Sableye/Trần Ngọc Phi Long`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/69/Megasableye_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20171214121620`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Sableye (Mega) <:shiny:385079020158451722>`)
            .addField(`Tên Facebook:`,`Trần Ngọc Phi Long`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`6/4`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Tổ chức Member Event: Mightyenia (27/1/2017)`);

        message.channel.sendEmbed(ME456);
    }

    // Sableye (ME441) ///
    if(args[0]==="ME441"| args[0]==="Me441" | args[0]==="me441" | args[0]==="Sableye" | args[0]==="sableye"){
        var ME441 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Sableye/Le Ba Tuan`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/99/Sableye.png/revision/latest/scale-to-width-down/100?cb=20160908081725`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Sableye`)
            .addField(`Tên Facebook:`,`Le Ba Tuan`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`25/1`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Pokéween - Giải nhì (Pokékween)`);

        message.channel.sendEmbed(ME441);
    }

    // Gallade (ME110) ///
    if(args[0]==="ME110"| args[0]==="Me110" | args[0]==="me110"){
        var ME110 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Gallade/Silver Mist`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/2/2d/Gallade.png/revision/latest/scale-to-width-down/100?cb=20160817090558`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Gallade`)
            .addField(`Tên Facebook:`,`Silver Mist`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`26/10`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME110);
    }

    // Gallade (ME014) ///
    if(args[0]==="ME014"| args[0]==="Me014" | args[0]==="me014"){
        var ME014 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Gallade/Tuấn Minh Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/2/2d/Gallade.png/revision/latest/scale-to-width-down/100?cb=20160817090558`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Gallade`)
            .addField(`Tên Facebook:`,`Tuấn Minh Nguyễn`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`13/7`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Prison Bottle Event: Giải nhì (Game Center)`);

        message.channel.sendEmbed(ME014);
    }

    else if(args[0]==="Gallade" | args[0]==="gallade"){
        message.channel.sendMessage(`**Hiện tại có 2 Gallade**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info ME014** | **.info ME110**`)
    }

    // Brionne (ME062) ///
    if(args[0]==="ME062"| args[0]==="Me062" | args[0]==="me062"| args[0]==="Brionne" | args[0]==="brionne"){
        var ME062 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Brionne/Shiiri Ether`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/d3/Brionne.png/revision/latest/scale-to-width-down/100?cb=20170618091552`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Brionne`)
            .addField(`Tên Facebook:`,`Shiiri Ether`)
            .addField(`Giới tính:`,`---`)
            .addField(`Ngày sinh:`,`8/8`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME062);
    }

    // Zygarde (ME607) ///
    if(args[0]==="ME607"| args[0]==="Me607" | args[0]==="me607"| args[0]==="Zygarde" | args[0]==="zygarde"){
        var ME607 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Zygarde/Ngọc Minh Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/69/Zygarde.png/revision/latest/scale-to-width-down/100?cb=20160819085135`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Zygarde`)
            .addField(`Tên Facebook:`,`Ngọc Minh Nguyễn`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`29/4`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME607);
    }

    // Cyndaquil (ME867) ///
    if(args[0]==="ME867"| args[0]==="Me867" | args[0]==="me867"){
        var ME867 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Cyndaquil/Sejuro Akayashi`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/99/Cyndaquil.png/revision/latest/scale-to-width-down/100?cb=20170617135609`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Cyndaquil`)
            .addField(`Tên Facebook:`,`Sejuro Akayashi`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`18/2`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME867);
    }

    // Cyndaquil (ME662) ///
    if(args[0]==="ME662"| args[0]==="Me662" | args[0]==="me662"){
        var ME662 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Cyndaquil/Nguyễn Thành Nhân`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/99/Cyndaquil.png/revision/latest/scale-to-width-down/100?cb=20170617135609`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Cyndaquil`)
            .addField(`Tên Facebook:`,`Nguyễn Thành Nhân`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`15/5`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME662);
    }

    else if(args[0]==="Cyndaquil" | args[0]==="cyndaquil"){
        message.channel.sendMessage(`**Hiện tại có 2 Cyndaquil**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info ME867** | **.info ME662**`)
    }

    // Dratini (ME906) ///
    if(args[0]==="ME906"| args[0]==="Me906" | args[0]==="me906"| args[0]==="Dratini" | args[0]==="dratini"){
        var ME906 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Dratini/Ngọc Bảo`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/e6/Dratini_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20171227073319`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Dratini`)
            .addField(`Tên Facebook:`,`Ngọc Bảo`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`14/1`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`);
        var ACME906 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÀNH TÍCH -`)
            .addField(`Tổ chức Member Event:`,`Pokémon Songs Contest (7/1/2018 -> 10/1/2018)`)
            .addField(`Tổ chức Member Event:`,`Pokémon's Werewolf (17/1/2018 -> 18/1/2018)`)
            .addField(`Tổ chức Member Event:`,`Xoắn não cùng Delibird (23/1/2018 -> 25/1/2018)`);

        message.channel.sendEmbed(ME906);
        message.channel.sendEmbed(ACME906);
    }

    /// Mega Diancie (ME905) ///
    if(args[0]==="ME905"| args[0]==="me905" | args[0]==="Me905" | args[0]==="MegaDiancie" | args[0]==="Megadiancie" | args[0]==="megadiancie"){
        var ME905 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Mega Diancie/Nguyễn Diancie`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/3/31/Megadiancie.png/revision/latest/scale-to-width-down/100?cb=20160815093508`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Diancie (Mega)`)
            .addField(`Tên Facebook:`,`Nguyễn Diancie`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`6/3`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Pokéween: Giải khuyến khích`);
            
        message.channel.sendEmbed(ME905);
    }

    /// Mega Lucario (ME923) ///
    if(args[0]==="ME923"| args[0]==="me923" | args[0]==="Me923" | args[0]==="MegaLucario" | args[0]==="Megalucario" | args[0]==="megalucario"){
        var ME923 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Mega Lucario/Luke Stelard`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/d/dd/Megalucario.png/revision/latest/scale-to-width-down/100?cb=20160817072416`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Lucario (Mega)`)
            .addField(`Tên Facebook:`,`Luke Stelard`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`26/1`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME923);
    }

    // Ursaring (ME857) ///
    if(args[0]==="ME857"| args[0]==="Me857" | args[0]==="me857"| args[0]==="Ursaring" | args[0]==="ursaring"){
        var ME857 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Ursaring/ゲイル ハワアド`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/61/Ursaring.png/revision/latest/scale-to-width-down/100?cb=20171206055526`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Ursaring`)
            .addField(`Tên Facebook:`,`ゲイル ハワアド`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`12/9`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME857);
    }

    // Froakie (ME041) ///
    if(args[0]==="ME041"| args[0]==="Me041" | args[0]==="me041"| args[0]==="Froakie" | args[0]==="froakie"){
        var ME041 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Froakie/Lê N. G. Bảo`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/8/8e/Froakie.png/revision/latest/scale-to-width-down/100?cb=20171206084436`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Froakie`)
            .addField(`Tên Facebook:`,`Lê N. G. Bảo`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`26/3`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME041);
    }

    // Mega Metagross (ME037) ///
    if(args[0]==="ME037"| args[0]==="Me037" | args[0]==="me037"){
        var ME037 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Mega Metagross/Nguyễn Hoàng Lâm`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/78/Megametagross.png/revision/latest/scale-to-width-down/100?cb=20160824061358`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Metagross (Mega)`)
            .addField(`Tên Facebook:`,`Nguyễn Hoàng Lâm`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`9/8`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME037);
    }

    // Mega Metagross (ME813) ///
    if(args[0]==="ME813"| args[0]==="Me813" | args[0]==="me813"){
        var ME813 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Mega Metagross/Duy Tran`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fe/Megametagross_%28shiny%29.png/revision/latest/scale-to-width-down/100?cb=20171213093652`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Metagross (Mega) <:shiny:385079020158451722>`)
            .addField(`Tên Facebook:`,`Duy Tran`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`19/9`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME813);
    }

    else if(args[0]==="Megametagross" | args[0]==="megametagross"){
        message.channel.sendMessage(`**Hiện tại có 2 Mega Metagross**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info ME037** | **.info ME813**`)
    }

    // Arcanine (ME503) ///
    if(args[0]==="ME503"| args[0]==="Me503" | args[0]==="me503"| args[0]==="Arcanine" | args[0]==="arcanine"){
        var ME503 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Arcanine/Khương Trần Duy`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/50/Arcanine.png/revision/latest/scale-to-width-down/100?cb=20171202161640`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Arcanine`)
            .addField(`Tên Facebook:`,`Khương Trần Duy`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`31/1`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME503);
    }
    
    /// Houndour (ME078) ///
    if(args[0]==="ME078"| args[0]==="me078" | args[0]==="Me078" | args[0]==="Houndour" | args[0]==="houndour"){
        var ME078 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Houndour/Mạnh Dương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/ba/Houndour.png/revision/latest/scale-to-width-down/100?cb=20170618081347`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Houndour`)
            .addField(`Tên Facebook:`,`Mạnh Dương`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`15/9`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
            message.channel.sendEmbed(ME078);
    }

    /// Golem (ME081) ///
    if(args[0]==="ME081"| args[0]==="me081" | args[0]==="Me081" | args[0]==="Golem" | args[0]==="golem"){
        var ME081 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Golem/Truong Hung Quan`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/c/ce/Golem.png/revision/latest/scale-to-width-down/100?cb=20160816065418`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Golem`)
            .addField(`Tên Facebook:`,`Truong Hung Quan`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`11/9`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Prison Bottle Event: Giải ba (Hoopa's House)`);
            
        message.channel.sendEmbed(ME081);
    }

    // Luxray (ME978) ///
    if(args[0]==="ME978"| args[0]==="Me978" | args[0]==="me978"){
        var ME978 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Luxray/Nguyễn Hiền`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/ad/Luxray1.png/revision/latest/scale-to-width-down/100?cb=20170710064348`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Luxray`)
            .addField(`Tên Facebook:`,`Nguyễn Hiền`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`14/5`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME978);
    }

    // Luxray (ME514) ///
    if(args[0]==="ME514"| args[0]==="Me514" | args[0]==="me514"){
        var ME514 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor (`Luxray/Hunter Knight`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/ee/Luxray.png/revision/latest/scale-to-width-down/100?cb=20170617152627`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Luxray`)
            .addField(`Tên Facebook:`,`Hunter Knight`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`24/8`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);

        message.channel.sendEmbed(ME514);
    }

    else if(args[0]==="Luxray" | args[0]==="luxray"){
        message.channel.sendMessage(`**Hiện tại có 2 Luxray**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info ME514** | **.info ME978**`)
    }

    /// Serperior (ME868) ///
    if(args[0]==="ME868"| args[0]==="me868" | args[0]==="Me868" | args[0]==="Serperior" | args[0]==="serperior"){
        var ME868 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Serperior/Nguyễn Hoài Thu`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/6/6a/Serperior.png/revision/latest/scale-to-width-down/100?cb=20160904162403`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Serperior`)
            .addField(`Tên Facebook:`,`Nguyễn Hoài Thu`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`11/6`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`Pokéween 2 - Lost in the Woods: Giải nhì (Tour SD)`);
            
        message.channel.sendEmbed(ME868);
    }

    /// Cutiefly (ME566) ///
    if(args[0]==="ME566"| args[0]==="me566" | args[0]==="Me566" | args[0]==="Cutiefly" | args[0]==="cutiefly"){
        var ME566 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Cutiefly/Hồ Hoàng Nhật Huy`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/7/76/Cutiefly.png/revision/latest/scale-to-width-down/100?cb=20170904043748`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Cutiefly`)
            .addField(`Tên Facebook:`,`Hồ Hoàng Nhật Huy`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`24/9`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME566);
    }

    /// Chandelure (ME819) ///
    if(args[0]==="ME819"| args[0]==="me819" | args[0]==="Me819" | args[0]==="Chandelure" | args[0]==="chandelure"){
        var ME819 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Chandelure/Phạm Đức Nam Phương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/90/Chandelure.png/revision/latest/scale-to-width-down/100?cb=20160818065924`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Chandelure`)
            .addField(`Tên Facebook:`,`Phạm Đức Nam Phương`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`2/4`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME819);
    }

    /// Girafarig (ME460) ///
    if(args[0]==="ME460"| args[0]==="me460" | args[0]==="Me460" | args[0]==="Girafarig" | args[0]==="girafarig"){
        var ME460 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Girafarig/Hươu Phế Liệu`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/eb/Girafarig.png/revision/latest/scale-to-width-down/100?cb=20171220075955`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Girafarig`)
            .addField(`Tên Facebook:`,`Hươu Phế Liệu`)
            .addField(`Giới tính:`,`---`)
            .addField(`Ngày sinh:`,`27/12`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME460);
    }

    /// Ampharos (ME053) ///
    if(args[0]==="ME053"| args[0]==="me053" | args[0]==="Me053" | args[0]==="Ampharos" | args[0]==="ampharos"){
        var ME053 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Ampharos/Phạm Nguyên`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/f5/Ampharos.png/revision/latest/scale-to-width-down/100?cb=20171227082104`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Ampharos`)
            .addField(`Tên Facebook:`,`Phạm Nguyên`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`29/9`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME053);
    }

    /// Zorua (ME134) ///
    if(args[0]==="ME134"| args[0]==="me134" | args[0]==="Me134" | args[0]==="Zorua" | args[0]==="zorua"){
        var ME134 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Zorua/Quỷ Lệ`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/ff/Zorua.png/revision/latest/scale-to-width-down/100?cb=20160822060620`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Zorua`)
            .addField(`Tên Facebook:`,`Quỷ Lệ`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`2/12`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME134);
    }

    /// Garchomp (ME200) ///
    if(args[0]==="ME200"| args[0]==="me200" | args[0]==="Me200" | args[0]==="Garchomp" | args[0]==="garchomp"){
        var ME200 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Garchomp/Minh Nguyenvan`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/e/e4/Garchomp.png/revision/latest/scale-to-width-down/100?cb=20180108073309`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Garchomp`)
            .addField(`Tên Facebook:`,`Minh Nguyenvan`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`20/12`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME200);
    }

    /// Leafeon (ME878) ///
    if(args[0]==="ME878"| args[0]==="me878" | args[0]==="Me878"){
        var ME878 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Leafeon/Nguyễn Hồ Thư`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/91/Leafeon.png/revision/latest/scale-to-width-down/100?cb=20171029143458`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Leafeon`)
            .addField(`Tên Facebook:`,`Nguyễn Hồ Thư`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`20/12`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME878);
    }

    else if(args[0]==="Leafeon" | args[0]==="leafeon"){
        message.channel.sendMessage(`**Hiện tại có 2 Leafeon**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info ME401** | **.info ME878**`)
    }

    /// Flareon (ME618) ///
    if(args[0]==="ME618"| args[0]==="me618" | args[0]==="Me618" | args[0]==="Flareon" | args[0]==="flareon"){
        var ME618 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Flareon/Jackson Sturel`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/1/17/Flareon.png/revision/latest/scale-to-width-down/100?cb=20160821140812`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Flareon`)
            .addField(`Tên Facebook:`,`Jackson Sturel`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`19/2`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME618);
    }

    /// Buizel (ME362) ///
    if(args[0]==="ME362"| args[0]==="me362" | args[0]==="Me362" | args[0]==="Buizel" | args[0]==="buizel"){
        var ME362 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Buizel/Haku Dương`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/ba/Buizel.png/revision/latest/scale-to-width-down/100?cb=20180114094757`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Buizel`)
            .addField(`Tên Facebook:`,`Haku Dương`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`5/11`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME362);
    }

    /// Glaceon (ME544) ///
    if(args[0]==="ME544"| args[0]==="me544" | args[0]==="Me544" | args[0]==="Glaceon" | args[0]==="glaceon"){
        var ME544 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`).setImage(`https://i.imgur.com/ixdTEpP.gif`)
            .setAuthor(`Glaceon/Aoi Miyuki`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/8/8a/Glaceon1.png/revision/latest/scale-to-width-down/100?cb=20180115071344`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Glaceon`)
            .addField(`Tên Facebook:`,`Aoi Miyuki`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`17/1`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME544);
    }

    /// Floette (ME968) ///
    if(args[0]==="ME968"| args[0]==="me968" | args[0]==="Me968" | args[0]==="Floette" | args[0]==="floette"){
        var ME968 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Floette/Nguyễn Nhật Uy`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/9c/Floette_%28eternal%29.png/revision/latest/scale-to-width-down/100?cb=20180119131211`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Floette (Eternal Flower)`)
            .addField(`Tên Facebook:`,`Nguyễn Nhật Uy`)
            .addField(`Giới tính:`,`---`)
            .addField(`Ngày sinh:`,`26/9`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME968);
    }

    /// Tepig (ME703) ///
    if(args[0]==="ME703"| args[0]==="me703" | args[0]==="Me703" | args[0]==="Tepig" | args[0]==="tepig"){
        var ME703 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Tepig/Helena Nguyễn`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/0/0e/Tepig.png/revision/latest/scale-to-width-down/100?cb=20180120105210`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Tepig`)
            .addField(`Tên Facebook:`,`Helena Nguyễn`)
            .addField(`Giới tính:`,`Nữ`)
            .addField(`Ngày sinh:`,`19/7`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME703);
    }

    /// Empoleon (ME689) ///
    if(args[0]==="ME689"| args[0]==="me689" | args[0]==="Me689" | args[0]==="Empoleon" | args[0]==="empoleon"){
        var ME689 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Empoleon/Nguyễn Jim`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/b/bb/Empoleon.png/revision/latest/scale-to-width-down/100?cb=20160929072201`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Empoleon`)
            .addField(`Tên Facebook:`,`Nguyễn Jim`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`25/8`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME689);
    }

    /// Shinx (ME030) ///
    if(args[0]==="ME030"| args[0]==="me030" | args[0]==="Me030" | args[0]==="Shinx" | args[0]==="shinx"){
        var ME030 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Shinx/Hải Thanh Lê`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a5/Shinx.png/revision/latest/scale-to-width-down/100?cb=20160908081524`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Shinx`)
            .addField(`Tên Facebook:`,`Hải Thanh Lê`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`20/10`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME030);
    }
    
    /// Charmeleon (ME613) ///
    if(args[0]==="ME613"| args[0]==="me613" | args[0]==="Me613" | args[0]==="Charmeleon" | args[0]==="charmeleon"){
        var ME613 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Charmeleon/Propiete la Reputation`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/fb/Charmeleon.png/revision/latest/scale-to-width-down/100?cb=20180206110802`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Charmeleon`)
            .addField(`Tên Facebook:`,`Propiete la Reputation`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`20/12`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME613);
    }

    /// Giratina (ME751) ///
    if(args[0]==="ME751"| args[0]==="me751" | args[0]==="Me751" | args[0]==="Giratina" | args[0]==="giratina"){
        var ME751 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Giratina/Kha Louis`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a8/Giratina_%28origin%292.png/revision/latest/scale-to-width-down/100?cb=20160918154048`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Giratina (Origin)`)
            .addField(`Tên Facebook:`,`Kha Louis`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`28/4`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME751);
    }

    /// Volcarona (ME701) ///
    if(args[0]==="ME701"| args[0]==="me701" | args[0]==="Me701" | args[0]==="Volcarona" | args[0]==="volcarona"){
        var ME701 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Volcarona/Hải Võ`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/5/5e/Volcarona.png/revision/latest/scale-to-width-down/100?cb=20160818084751`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Volcarona`)
            .addField(`Tên Facebook:`,`Hải Võ`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`29/1`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME701);
    }

    /// Umbreon (ME069) ///
    if(args[0]==="ME069"| args[0]==="me069" | args[0]==="Me069" | args[0]==="Umbreon" | args[0]==="umbreon"){
        var ME069 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Umbreon/Nguyễn Minh Triết`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/9/9f/Umbreon.png/revision/latest/scale-to-width-down/100?cb=20180214122343`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Umbreon`)
            .addField(`Tên Facebook:`,`Nguyễn Minh Triết`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`24/10`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME069);
    }

    /// Meloetta (ME452) ///
    if(args[0]==="ME452"| args[0]==="me452" | args[0]==="Me452"){
        var ME452 = new Discord.RichEmbed().setColor(`#3A77E6`)
            .setTitle(`- THÔNG TIN -`)
            .setAuthor(`Meloetta/Đỗ Nam`,`https://vignette.wikia.nocookie.net/pmdv-nexus/images/f/f3/Meloetta_%28pirouette%29.png/revision/latest/scale-to-width-down/100?cb=20161009170125`)
            .setThumbnail(`https://vignette.wikia.nocookie.net/pmdv-nexus/images/a/a6/Member_Logo.png/revision/latest?cb=20170613044002`)
            .addField(`Chủng loài:`,`Meloetta (Pirouette)`)
            .addField(`Tên Facebook:`,`Đỗ Nam`)
            .addField(`Giới tính:`,`Nam`)
            .addField(`Ngày sinh:`,`25/4`)
            .addField(`Cấp bậc:`,`Member`)
            .addField(`Guild:`,`---`)
            .addField(`Thành tích:`,`---`);
            
        message.channel.sendEmbed(ME452);
    }

    else if(args[0]==="Meloetta" | args[0]==="meloetta"){
        message.channel.sendMessage(`**Hiện tại có 2 Meloetta**
Vui lòng dùng code để tra cứu theo các lệnh sau: **.info ME983** | **.info ME452**`)
    }
}

module.exports.help = {
    name: "info"
}