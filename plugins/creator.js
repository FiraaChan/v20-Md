const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;KingOfBear;;;'
                    + 'FN:KingOfBear\n' // full name
                    + 'ORG:Owner FiraChann;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6283830815715:+6283830815715\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'F I R A', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
