up/**
//════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                            //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                          //
//                                                                                            // 
//                                         Ｖ：2．5．0                                         // 
//                                                                                            // 
//                                                                                            // 
//          ██████╗ ██╗███████╗████████╗███████╗██████╗     ███╗   ███╗██████╗                // 
//         ██╔════╝ ██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗    ████╗ ████║██╔══██╗               // 
//         ██║  ███╗██║█████╗     ██║   █████╗  ██║  ██║    ██╔████╔██║██║  ██║               // 
//         ██║   ██║██║██╔══╝     ██║   ██╔══╝  ██║  ██║    ██║╚██╔╝██║██║  ██║               // 
//         ╚██████╔╝██║██║        ██║   ███████╗██████╔╝    ██║ ╚═╝ ██║██████╔╝               // 
//          ╚═════╝ ╚═╝╚═╝        ╚═╝   ╚══════╝╚═════╝     ╚═╝     ╚═╝╚═════╝                //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//════════════════════════════════════════════════════════════════════════════════════════════//
*                                                                 
  * @project_name : Gifted-Md
   * @author : Gifted Tech Info
   * @youtube : https://www.youtube.com/@giftedtechnexus
   * @description : Gifted-Md ,A Multi-functional whatsapp user bot.
   * @version 2.5.0
*
* 
   * Created By Gifted Tech Info.
   * © 2024 Gifted-Md.


*/













const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/db3a5c86c0e3dd11e0071.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ngoyaibraah@gmail.com"
global.location="Bungoma,Kenya."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || ""


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/ibrahimaitech/IBRAHIM-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/01bae0068863f48aff101.jpg"



global.devs = "254710772666,254739937062" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254710772666,254739937062";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254717066747,254101447432";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '2',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/01bae0068863f48aff101.jpg,https://telegra.ph/file/db3a5c86c0e3dd11e0071.mp4,https://telegra.ph/file/af1705e9b4d6aa0bc0f96.jpg",
global.waPresence= process.env.WAPRESENCE ||  "typing","recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254710772666,254739937062";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "254xxxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254710772666,254739937062";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://black-panther-scanner-871df7205958.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtl2YXRlIjp7InR5cGUiOiJCdU3bHY5REhnUm5aN0h6Y1p6VU10QitTRUMzM2NVa2xtc1J1NndJUXkwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFpETXNKOHMzeUhJTWtURjdKMEs2WEd6aURpaFo5OUpZVmxCDbHZyQkdMZnhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFPbHFnbVpoNTJ3c2pRbkpZV2wwYmg5K0hSbi9YeXowaXI2NDBjVVAzRWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY5bmVadnRKZTNxYktBZ0FqcTd3TCtTSnhCVzJibTRVYzZYU0Z2eXN3U0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUt4U3lPUVRTYkxOWjM2dTJ3enVaS3lxdGpIOGkvUThKZzByZGVmZDAxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnhteXBKM0haNUpSMWNkR3U3R1JIZ2JrR2RkVU4xWmtrN1ZVdlJKYWd3UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii93NnFzN0RJNlh5NkJYazlSNFFONDhuSEhUVXRGM2ROTGhsdUVVSnlqd2tnWEZmbFVxRjN4a2lPbnExbkpYYnhOMCtydk80UHJIV1F5WG9XeHNDMWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJ2MWdpN2I1NitkbERUZUxkSGdqd2ZLb0Y3djVzejJ2TUc5Qkt3SVVPRE9nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiN0dLUk5kNlNDU2VKaUdwREZhLTRnIiwicGhvbmVJZCI6IjdkYTUyNTVmLTc3NGMtNGIzNS1hYWYyLWZkMGNlMmUwMTIwOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOS2RFTTUvQUhuQ3hyV0tBSnlCUjk3S0MzUlk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpzR1hnb2M2S0JrbXlsdU4yV3FQZEZnM0R3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iko1NlYzM0pMIiwibWUiOnsiaWQiOiIyNTQ3MTcwNjY3NDc6MTZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoifmxveMKlbm9eYnJAaW7Co3IifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BLbnhJVUdFTlAweHJNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IllSV0Q5VUxYSEcxcWlnQWttcW1ybXdzODRCaWk3TWtPZExLbkcxSDJ3UUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im4rMkVBZjBsRUZtRW1ETEhrNkpETXhwVlVqNU5UakZoK1laSW13ZS9MV3dzTW5CN0Q1UjBzNlZNeC8wQkxueGxma212V0s1eEhJdjNaRFpnVlhKMUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoZGpOTnBSaUZNNFpVK1FvaVlFaFlVMHdLSWtHNkh6UFdHc2M4NGpjN3dZL3Q1UnIvb3RsbEtCanBOKzFISGs2R0RhZkZLem5kVHk5a09GTHlhRkpoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcxNzA2Njc0NzoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXRVZnL1ZDMXh4dGFvb0FKSnFwcTVzTFBPQVlvdXpKRG5TeXB4dFI5c0VDIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4NzI5MzE0fQ==" ; // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Aztec_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.2.5.0",
  caption : process.env.CAPTION || "*Pᵒʷᵉʳᵉᵈ ᵇʸ Iᵇʳᵃʰⁱᵐ Aᵈᵃᵐˢ*" , // ```『 ©²⁰²⁴ ɢɪғᴛᴇᴅ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛs 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@giftedtechnexus"),
 
  author : process.env.PACK_AUTHER|| "Pᵒʷᵉʳᵉᵈ ᵇʸ Iᵇʳᵃʰⁱᵐ Aᵈᵃᵐˢ",
  packname: process.env.PACK_NAME || "Pᵒʷᵉʳᵉᵈ ᵇʸ Iᵇʳᵃʰⁱᵐ Aᵈᵃᵐˢ",
  botname : process.env.BOT_NAME  ||"LOXYGAGA 𝙈𝘿",
  ownername:process.env.OWNER_NAME|| "loxyfam",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "ADAM",



};

























global.rank = "updated"
global.isMongodb = false ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
