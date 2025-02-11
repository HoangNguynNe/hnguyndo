const Discord = require('discord.js');
const math = require('advanced-calculator');

module.exports = {
    name: "math",
    description: "Tính toán phép tính",

    /**
    *
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args
    */
    async run (client, message, args) { 
        if (!args[0]) {
            return message.reply(`imath <Phép tính> (\`sin\`, \`cos\`, \`tan\`, \`ln\`, \`log\`, \`sqrt\`, \`+\`, \`-\`, \`*\`, \`/\`, \`%\`, \`^\`, \`max\`, \`min\``)
        } else {
            try {
                var kq = await math.evaluate(args.slice(0).join(""));
            } catch {
                return message.reply(`Đã xảy ra lỗi khi tính toán. Kiểm tra lại cú pháp phép tính.`)
            }
            try {
                return message.reply(`\`${args.slice(0).join("")}\` = **${kq}**`);
            } catch {
                return message.reply(`Kết quả : **${kq}**`)
            }
        } 
    }
}