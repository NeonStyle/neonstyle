const Discord = require("discord.js");
const bott = new Discord.Client();
const prefix = 'ns!';

const colors = ['080808', '8f8787', 'ffffff', '964b00', 'e97451', 'ffb19e', 'ffa500', 'ffd700', 'ffff00', 'c3ff01', '00ff00', '02bb02', '98ff98', '00ffa9', '00ffff', '55bef3', '617ff8', '007fff', '0000ff', '8b00ff', 'ff01a2', 'ff0056', 'dc143c', 'fe0000', 'ff2400', 'fc89ac',];
function color () {
  colors.forEach(function (item, number) {
      setTimeout(function () {bott.guilds.get('427155212726173696').roles.get('432483991463919617').setColor(item).catch();if(number === colors.length-1) setTimeout(function () {color()}, 2000)}, number*2000);
  });
}

bott.on('ready', () => {
  console.log(`Logged in as ${bott.user.tag}!`);
  bott.user.setPresence({ game: { name: `на сервер`, type: 3 } }).catch();
bott.channels.get ('432147733273378816').fetchMessage ('434392105775792128');
color ();
});

bott.on('guildMemberRemove', (member) => {
    bott.channels.get('428487097154928641').send(`${member.user.tag}, ливнул с Neon Style. ПИДОРАС <a:soangry:428277275696431114>`)
});


bott.on('message', message => {
    if (message.content === 'Хостинг бота'){
        const embed = new Discord.RichEmbed()
    .setAuthor('Neon Style')
    .setColor('#0077ff')
    .setFooter('Neon Style')
    .setTimestamp()
    .attachFile('lol.gif')
    .setImage('attachment://lol.gif')
    .setTitle(`Все вопросы по боту рассматривает хост`)
    .setDescription(`**Этот бот хостится пользователем -** <@!419100684198215692>`);
    message.channel.send({embed: embed});
    }
if(message.author.bot) return;
        if(message.content.indexOf(prefix) !== 0) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
if (command === 'clear') {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply ("sorry, you haven't permission MANAGE_MESSAGE"); 
  if(!args[0]) return message.channel.send ("ERROR"); 
  message.channel.bulkDelete(parseInt(args[0])+1).then(() => { 
  message.channel.send('___**Clearing messages successfull!**___').then(msg =>msg.delete(5000)); 
  }); 
}
if (command === 'say'  && message.author.id === '419100684198215692') {
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{});
  const embed = `${message.author}, неизвестная ошибка отправки сообщения в чат`;
  let msg = message.channel.send(sayMessage).catch(()=>{message.reply(embed);});
}
if (command === 'eval' && message.author.id === '419100684198215692') {
  try {
              let code = args.join(" ");
              let evaled = eval(code);
  
              if (typeof evaled !== "string")
                  evaled = util.inspect(evaled);
          } catch (err) {
          }
  }
  function setBigTimeout(func, timeout) {
    if (timeout > 0x7FFFFFFF)
        setTimeout(function() {setBigTimeout(func, timeout-0x7FFFFFFF);}, 0x7FFFFFFF);
    else
        setTimeout(func, timeout);
}
function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

function embed_error(text) {
    let error_emoji = bott.emojis.get(emojis.error);
    return new Discord.RichEmbed()
        .setTitle('Ошибка')
        .setColor('#C34E4E')
        .setFooter('Neon Style')
        .setDescription(`${error_emoji} ${text}`);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
async function unmute(member, mute_id, time, reason = 'Автоматический анмут') {
    setBigTimeout( function () {
                member.removeRole('427940392785281025').catch(console.error);
                member.user.send('Волшебная сила размутила вас Neon Style.');
    }, time+1000);
}
if (['mute', 'мут', 'заклеить_рот', 'заткнуть', 'заткнись', 'закройся'].includes(command) && message.member.hasPermission('MANAGE_MESSAGES')) {
        message.delete();
        let new_args = args;
        new_args.shift();
        let time_formatted = new_args.shift();
        let reason = new_args.join(' ').trim();
 
        function getSeconds(str) {
            let seconds = 0;
            let years = str.match(/(\d+)\s*y/);
            let months = str.match(/(\d+)\s*M/);
            let weeks = str.match(/(\d+)\s*w/);
            let days = str.match(/(\d+)\s*d/);
            let hours = str.match(/(\d+)\s*h/);
            let minutes = str.match(/(\d+)\s*m/);
            let secs = str.match(/(\d+)\s*s/);
            if (years) { seconds += parseInt(years[1])*31556926; }
            if (months) { seconds += parseInt(months[1])*2592000; }
            if (weeks) { seconds += parseInt(weeks[1])*604800; }
            if (days) { seconds += parseInt(days[1])*86400; }
            if (hours) { seconds += parseInt(hours[1])*3600; }
            if (minutes) { seconds += parseInt(minutes[1])*60; }
            if (secs) { seconds += parseInt(secs[1]); }
            return seconds;
        }
        function getTimeInWords(str) {
            let text = '';
            let years = str.match(/(\d+)\s*y/);
            let months = str.match(/(\d+)\s*M/);
            let weeks = str.match(/(\d+)\s*w/);
            let days = str.match(/(\d+)\s*d/);
            let hours = str.match(/(\d+)\s*h/);
            let minutes = str.match(/(\d+)\s*m/);
            let secs = str.match(/(\d+)\s*s/);
            if (years) { text += years[1]+' '+declOfNum(parseInt(years[1]), ['год ', 'года ', 'лет ']) }
            if (months) { text += months[1]+' '+declOfNum(parseInt(months[1]), ['месяц ', 'месяца ', 'месяцев ']) }
            if (weeks) { text += weeks[1]+' '+declOfNum(parseInt(weeks[1]), ['неделю ', 'недели ', 'недель ']) }
            if (days) { text += days[1]+' '+declOfNum(parseInt(days[1]), ['день ', 'дня ', 'дней']) }
            if (hours) { text += hours[1]+' '+declOfNum(parseInt(hours[1]), ['час ', 'часа ', 'часов ']) }
            if (minutes) { text += minutes[1]+' '+declOfNum(parseInt(minutes[1]), ['минуту ', 'минуты ', 'минут ']) }
            if (secs) { text += secs[1]+' '+declOfNum(parseInt(secs[1]), ['секунду ', 'секунды ', 'секунд ']) }
            return text;
        }
        let time = getSeconds(time_formatted);
        if (time === 0) return message.channel.send({embed: embed_error(`${message.author}, извините, но вы не можете замутить человека на 0 секунд.`)});
 
        let user = message.mentions.members.first();
        if (!user) return message.channel.send({embed: embed_error(`${message.author}, извините, но пользователь, которого вы упомянули, не является участником сервера или не существует`)});
        if (user.user.id === message.author.id) return message.channel.send({embed: embed_error(`${user.user}, извините, но вы не можете замутить самого себя.`)});
        if (user.user.bot) return message.channel.send({embed: embed_error(`${message.author}, извините, но вы не можете наказать бота`)});
        let reasontext = '';
        if (reason !== null && typeof reason !== undefined && reason !== '') reasontext = ` Причина \`${reason}\``;
        if (reason === null || typeof reason === undefined || reason === '') reason = 'Причина отсутствует.';
        let accepting = message.channel.send(`Вы уверены, что хотите замутить пользователя ${user.user} на ${getTimeInWords(time_formatted)}${reasontext}?\n\n**Напишите \`да\`, чтобы подтведить.**`);
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 60000 });
        collector.on('collect', msg => {
            if (['да', 'ага', 'кнш', 'конечно', 'конешно', 'давай', 'йес', 'yes', 'y', 'aga', 'go', 'da', 'го'].includes(msg.content.toLowerCase())) {
                message.channel.startTyping();
                message.delete();
                    if (reason === null || typeof reason === 'undefined') reason = 'Причина не указана.';
                    let embed = new Discord.RichEmbed()
                        .setTitle('Вас замутили на Neon Style')
                        .addField('Пользователь', `${user.user} (\`${user.user.tag}\`)`, true)
                        .addField('Администратор', `${message.author} (\`${message.author.tag}\`)`, true)
                        .addField('Окончание мута', getTimeInWords(time_formatted), true)
                        .setColor('ffff00');
                    let dm_embed = new Discord.RichEmbed()
                        .setTitle('Размут')
                        .setDescription('Вы были размучены Neon Style')
                        .addField('Администратор', `${message.author} (\`${message.author.tag}\`)`, true)
                        .addField('Окончание мута', getTimeInWords(time_formatted), true)
                        .setColor('90ee90');
                    if (reason !== null && typeof reason !== undefined && reason !== '') {embed.addField('Причина', `${reason}`);dm_embed.addField('Причина', `${reason}`);}
                    message.channel.send(`${user.user}`, {embed}).then(() => {message.channel.stopTyping(true)}).then(() => {if (message.author.id === user.user.id) message.channel.send(`${message.author}, не ну ты и долбоеб братишка, земля тебе пухом... ${bott.emojis.get(emojis.facepalm)}`)});
                    user.send({embed});
                    user.addRole('427940392785281025').catch(console.error);
                    console.log(time);
                    unmute(user, user.id, time*1000).catch(console.error);
            }
            console.log(collector);
            collector.stop();
        });
    }
});

bott.on('messageReactionAdd', (reaction, user) => {
  reaction.remove (user);
if (reaction.message.id !== '434392105775792128')
  return ;
if (reaction.emoji.name === '🚹'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('427214168685412353').catch();
member.removeRole ('429746509404307472').catch ();
}
if (reaction.emoji.name === '🚺'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('427214368778878979').catch();
member.removeRole ('429746509404307472').catch ();
}
if (reaction.emoji.name === '😭'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('429746509404307472').catch();
member.removeRole ('427214368778878979').catch ();
member.removeRole ('427214168685412353').catch ();
}
  } )

  bott.on("guildMemberAdd", member => {
    member.addRole('429746509404307472');
    });

bott.login(process.env.TOKEN);
process.env.TOKEN = 'ПАШОЛ НАХОЙ ПИДАРАС ЕБАНЫЙ МАТЬ ТВОЮ ЕБАЛ КОНЧЕНОЕ СОЗДАНИЕ, ТВОЯ МАТЬ СДОХЛА МУЧАЯСБ КОГДА Я ЗАЛИВАЛ ЕЙ В УШИ СВОЁ ДЕРЬМО, ОБОССЫШЬ >:)';