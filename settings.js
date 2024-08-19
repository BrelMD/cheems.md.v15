//base by 𝘾𝙊𝙉𝙁𝙐𝘾𝙄𝙐𝙎
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGYato
//Instagram: _dream_guy_yato
//Telegram: @Lutcho_Black
//GitHub: @Brelmd
//WhatsApp: +242055617560
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: Black soul" //ur yt chanel name
global.socialm = "GitHub: Dream-guy-yato" //ur github or insta name
global.location = "Congo, Brazzaville" //ur location

//new
global.botname = '𝘾𝙊𝙉𝙁𝙐𝘾𝙄𝙐𝙎-𝙈𝘿' //ur bot name
global.ownernumber = ['242055617560'] //ur owner number, dont add more than one
global.ownername = '𝘾𝙊𝙉𝙁𝙐𝘾𝙄𝙐𝙎' //ur owner name
global.websitex = "https://youtu.be/tLq8_qOOGFI"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Brel Bot inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD15' //script link
global.packname = "Sticker By"
global.author = "𝘾𝙊𝙉𝙁𝙐𝘾𝙄𝙐𝙎'\n\n+242055617560"
global.creator = "242055617560@s.whatsapp.net"
global.xprefix = '@'
global.premium = ["242055617560"] // Premium User

//channel id
global.xchannel = {
	jid: '242064406203@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '1' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Idiot!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
