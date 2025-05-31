require('dotenv').config({"noiseKey":{"private":{"type":"Buffer","data":"6JiMFJBF/LWNRe7K0EaSaTBtR1AgihMWuDalGo+TyFk="},"public":{"type":"Buffer","data":"m39pMNWdggmY2vNKd+kPP3EiarmWxktZG126WEd+uWw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"ECUn7fsvWMN9bhRLTVi+ZBmTE9coyboy5uWcueal70A="},"public":{"type":"Buffer","data":"DdM0954D3cQJ0iDMyzU6mMaPBUtfmk0yPNfG9KKG/XM="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"OPjlUc6DxYFzLeSH/9QUpH2dUt/FZZ5ZtkHzWscLzlg="},"public":{"type":"Buffer","data":"TaA7EYbMfNCYXrvu4Hbs0nFvO2j293uQo+lgg+ZMMWk="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"oPHuMApTxex60mZKX0z0MQzU2VYpRksi59hWtQVs+3Q="},"public":{"type":"Buffer","data":"pmPd3Nzq0o/vJzQeOvOZa0Q6Kiy69aqs0W5Cs6DxSTM="}},"signature":{"type":"Buffer","data":"GqEPi8e8uB0SYoEvztW+gZ+YBgYe8huliq9oAro3vgwLT/3xbHTDsj0pbuICT4tqtZ97qaBamhHVh3Oau3xyCg=="},"keyId":1},"registrationId":134,"advSecretKey":"MqQimFYAbehSMd92vT3eQYnJCHS/U5pya+G2qXhFim8=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"12345678","me":{"id":"22871765621:54@s.whatsapp.net","lid":"32131220799697:54@lid"},"account":{"details":"CKH6/rIBEJCU7sEGGAYgACgA","accountSignatureKey":"77nwvtbeReZr2v4f/kFc28HSXD3pZGQ5lQWxmiLFxTU=","accountSignature":"Q8L8EuR6/L0/n/na1iOG5psCYxCUxjFMkivLiWjSDwkTx1g0dMGd0emEPApSuibCKnC1YwoKravXO9SbKVMrAA==","deviceSignature":"X9UKBvIOxG1X0smbyV7K/JjrwvZM/eLxyimctQ1U2FahkmvXoRfjvHdKYICNXYDhwwA4ojUQ6f+V1L4Fhs+FDw=="},"signalIdentities":[{"identifier":{"name":"22871765621:54@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Be+58L7W3kXma9r+H/5BXNvB0lw96WRkOZUFsZoixcU1"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CBIICA=="},"lastAccountSyncTimestamp":1748732446,"lastPropHash":"2P1Yhf","myAppStateKeyId":"AAAAAMtb"});
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.ownernomer = process.env.OWNER_NOMER || "2348109263390";
global.ytname = process.env.YT_NAME || "YT: @EliteProTech";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '2348109263390';
global.ownername = process.env.OWNER_NAME || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefa = process.env.PREFIX ? process.env.PREFIX.split(',') : ['', '!', '.', '#', '&'];
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2348109263390';
// Default settings 2
global.typemenu = process.env.TYPE_MENU || 'v2';
global.wm = process.env.WM || "Youtube @EliteProTech";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Text bug
global.xbugtex = {
    xtxt: '👨‍💻ELITE-PRO👨‍💻',
};

// Reply messages
global.mess = {
    done: '*⿻ DONE: Task completed ✔️*',
    prem: '*⦿ This command is made for premium users.⁉️*',
    admin: '*⦿ This command is made for group admins.‼️*',
    botAdmin: '*⦿  Make bot admin to access commands⿻*',
    owner: '*⦿This commands is made for bot owner.*',
    group: '*⦿ This command is made for group chat❕*',
    private: '*⦿ This command is made for private chat ⭕*',
    wait: '*_⚙️PROCESSING DATA......_*',
    error: '*‼️AN ERROR OCCUR‼️*',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
