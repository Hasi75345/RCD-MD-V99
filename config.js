//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS ||  "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUtNdjRlSjhXYzI3ejJ3NVd6ams4WFEzVWxpc0ZZK1d0TVg3Q3l6cWxtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTk84bEY1UExNOEZnTE5iVDZoekRHd0FIam90bHVYMEhpeTNEenRDYU0wOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUG9Rb1J6Y3B6bDE3WXdxNWUwM2JrMmtJZVdDUjNEdysyQnlJVXFLQmtvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrVkVBVCtGam5ucVZDSlIwWG9kUDR0VFlFU05tYkhaQzB4U1IvM1JvMWpJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNJc1hsN0gyMjV2c0hlcEI3ZXdUMGhvRDFoV1dpSmhyL3N1UitQcC9ObmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkgwQk9uT0tyMlJ4NEZreDVsWURpSXZsM1VtZmNVK0tIVnRXYzY5Rkt2UU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpzalFMY1Z2eU1iNzhYMVU3bnM1LytQR3FDSFdmdWF6OCtzSjgzYmhYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzVZSXNhWHJ0UThjcXBTWGFNN3NzUFdsNFcvNWVEUVdxNXVmcXRkZkR6QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Indrak1vY2dDM3F3OUNwTVpSWHU3YlV3SVJtUlFncVdxNHc4bUpGV1JYcHphQ20zZFJ5YjcvdkR0bUEyaTJ2MXVGeWFLUHJhaWRGUHNITTRwa0VCSmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJQKzVkMHRNaC9SV2daT3FwU3hnL2FtcG9kTDJ4SERSTzREVTlreWlLS01BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU0MTA4MzM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhCREJBRTVFM0Y1QzVFOEI4QzE5Qjc3QUU0MTE5MzU2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAyMzQ2NzR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImdlcWlCWG5jU0FDWlBhQXJJOVdiY1EiLCJwaG9uZUlkIjoiN2FiY2NkMzAtMzlkNS00ZWU4LTk2MDAtNzU0ZjliOTVjOWVlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZpZGdrRlAzeXlFZE5MVGtEaEZsaThoRFA4RT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmQWpTeTd4dWl1ZFoyTDlmS1QyNE1wTUlESnc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS1hESzM4NUwiLCJtZSI6eyJpZCI6Ijk0NzU0MTA4MzM2OjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4Ly6IPCdmoLwnZqDIHwgXCIg8J2ZuvCdmbjwnZm98J2ZtiDwnZm78J2ZvvCdmbrwnZqEIPCdmbfwnZm48J2agfCdmb4gIOGthOC/k+C/lCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTk9COXA0QkVKYmxvclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUXV1dkUvakxRamE3N2ZFc3FRTFRERHFURjFONFFjZVE2bElQbTEwMjBHYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibTdRMnRmSzF6azQ0UTJURWRnd05sQjRnSmszTnQwa1Y0UHVOR215blY3Qm5YOE9mY2tHKzEyNGNUaWVHMk1DQ0duV243alVoTXBqMVlOcnd6STZhQnc9PSIsImRldmljZVNpZ25hdHVyZSI6InFNTnh3dVZxcHBzcHRUWDRKejZLUllTSWwxZ1lOTjFseU5mSWFIY3QwSisxSnZpb2piLzFURlh3ckxJL2loV0RmSnkrbUkrU3p0b1BaSkZ4Y1NuaWl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTQxMDgzMzY6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVTHJyeFA0eTBJMnUrM3hMS2tDMHd3Nmt4ZFRlRUhIa09wU0Q1dGROdEJuIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMjM0NjU5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVZciJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
