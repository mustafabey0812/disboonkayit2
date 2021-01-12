
const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   if(!message.member.roles.cache.has('KAYIT YETKİLİ ID'))  //Kayıt yetkilisi rolü  ID
 return  message.channel.send('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin ')
   let member = args[0]
   if(!member) {
       return message.channel.send('Bir kişi etiketlemelisin')
   }
//Burayı Doldur
   let devtr = message.guild.roles.cache.find(r => r.id === 'ERKEK ROL ID') //Erkek
   let kayıtsız = message.guild.roles.cache.find(r => r.id === 'KAYITSIZ ROL IDs') // Kayıtsız
//Burayı Doldur
   if(!devtr) {
       return message.channel.send('Erkek rolü ayarlanmamış veya rol aranırken bir hata oluştu logu kontrol et')
   }
   if(!kayıtsız) {
       return message.channel.send('kayıtsız rolü ayarlanmamış veya rol aranırken bir hata oluştu logu kontrol et')
   }

   let isim = args[1]
   let yas = args[2]

   if(!isim) return message.channel.send('İsim belirtmelisin')
   if(isNaN(yas)) return message.channel.send('Yaş belirtmelisin')

   .setNickname(`${isim} | ${yas}`)
   .roles.add(devtr)
   .roles.remove(kayıtsız)
   let embed = new Discord.MessageEmbed()
   .setColor('GREEN')
   .setTitle('Kayıt Tamamlandı')
   .addField('Kayıt edilen kullanıcı', member)
   .addField('Adı :', isim)
   .addField('Yaşı :', yas)
   .addField('Kayıt eden yetkili', message.author)
   client.channels.cache.get('725786943987908609').send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:['erkek','e'],
    permlevel: 0
};

exports.help = {
    name: "kayıt-erkek"
}
//Editlersiniz Kendiniz
 