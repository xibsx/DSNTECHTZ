/*
Project Name : DSNTECH 
Creator      : DSNTECH 
Repo         : https://github.com/DSNTECHTZ/DSNTECHTZ
Support      : wa.me/255762720609
*/

const config = require('../settings');
const { malvin, commands } = require('../malvin');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

malvin({
    pattern: "support",
    alias: "follow",
    desc: "base",
    category: "support",
    react: "📡",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        // Get the current time for dynamic greeting
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        let dec = `
╭────────────≫
┋ 🌟 *ᴅᴇᴠᴇʟᴏᴘᴇʀ* : *ᴍʀ ᴍᴀʟᴠɪɴ (🇹🇿)* 🌍
┋ 🚀 *ᴍᴏᴅᴇ* : *${config.MODE}*
┋ ⚡ *ᴘʀᴇғɪx* : *${config.PREFIX}*
┋ 🧩 *ᴠᴇʀsɪᴏɴ* : ${config.version}
┋ ⏳ *ᴜᴘᴛɪᴍᴇ* : _${runtime(process.uptime())}_
┋ 🕰️ *ᴄᴜʀʀᴇɴᴛ ᴛɪᴍᴇ* : _${currentTime}_
╰────────────≫

   💬 *ᴍᴀʟᴠɪɴ xᴅ sᴜᴘᴘᴏʀᴛ ʟɪɴᴋs* ↷

${readMore}
\`🔔 ᴄʜᴀɴɴᴇʟ🩵\`
🔗 https://whatsapp.com/channel/0029VajEAHf72WU27tvmzA41

\`👥 ɢʀᴏᴜᴘ💙\`
🔗 https://whatsapp.com/channel/0029VajEAHf72WU27tvmzA41

\`🎥 ʏᴛ ᴄʜᴀɴɴᴇʟ🚀\`
🔗 https://youtube.com/@dsn-technology?si=wNMo9RzwDHk8XlIq

\`💻 ᴍʀ ᴍᴀʟᴠɪɴ ᴋ\` *Developer🧑‍💻*
🔗 wa.me/255762720609?text=Support!

> 🚀 *ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴅ ᴄʜᴀɴɴᴇʟ* 🚀
`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/noe8fg.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398430045533@newsletter',
                        newsletterName: '🪀『 DSNTECH 』🪀',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio message with a fun personalized touch
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/XdKing2/MALVIN-DATA/raw/refs/heads/main/autovoice/menu2.mp3' },
            mimetype: 'audio/mp3',
            ptt: true
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`*⚠️ Oops! Something went wrong:* ${e.message}`);
    }
});

//  DSN TECHNOLOGY 
