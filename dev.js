const { malvin, commands } = require('../malvin');

malvin({
    pattern: "owner",
    alias: ["developer", "dev"],
    desc: "Displays the developer info",
    category: "owner",
    react: "👨‍💻",
    filename: __filename
}, async (conn, mek, m, {
    from, reply, pushname
}) => {
    try {
        const name = pushname || "there";

        const text = `
╭─⌈ *DSN TECHNOLOGY * ⌋──
│
│ 👋 Hello *${name}*,
│
│ 🤖 I’m *DSN TECHNOLOGY own*, a multi-functional
│    WhatsApp Bot built to assist you!
│
│ 👨‍💻 *OWNER DETAILS:*
│ ───────────────
│ 🧠 *Name* : DSN TECHNOLOGY 
| 🌐 *Website* : dsntechnology.site
│ 🕯️ *Age* : +19
│ ☎️ *Contact* : wa.me/255762720609
│ 🗨️ *WhatsApp* : DSN TECHNOLOGY (DSNTECH)
│    https://whatsapp.com/channel/0029VajEAHf72WU27tvmzA41
│
│ ⚡ Powered by *DSN TECHNOLOGY*
│
╰───────────────
        `.trim();

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/nek4nr.jpg' },
                caption: text,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398430045533@newsletter',
                        newsletterName: '🪀『 DSN TECHNOLOGY 』🪀',
                        serverMessageId: 143
                    },
                    externalAdReply: {
                        title: "dsntech Bot",
                        body: "Created with love by Dsn Technology",
                        thumbnailUrl: 'https://files.catbox.moe/nek4nr.jpg',
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        mediaUrl: "https://whatsapp.com/channel/0029VajEAHf72WU27tvmzA41",
                        sourceUrl: "https://youtube.com/@dsn-technology?si=mRRmadkIU7rJZhY_"
                    }
                }
            },
            { quoted: mek }
        );
    } catch (e) {
        console.error("Error in .dev command:", e);
        reply(`❌ Error: ${e.message}`);
    }
});
