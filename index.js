const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const path = require('path');
const Time = require('date-and-time');
const time = require('time');
var filePath = path.join(__dirname, 'secret.txt');
var token = fs.readFileSync(filePath, "utf8");
var now = new time.Date();
const PREFIX = '?';
//const guild = bot.guilds.get("491014592688947220");


//console.log(token);

/*
fs.readFile(filePath, 'utf8', function(err, contents) {
    if(err){
        console.log('error!');
    }
    else{ 
        token = contents;
        console.log(contents);
    }
});
*/

bot.on('ready', function() {
    console.log("Its Working");
});

bot.on('message', function(msg) {
    /*
    if (msg.content == "Testing") {
        msg.reply("Looks Good!");
    }
    */
    now.setTimezone("America/New_York");
    let args = msg.content.substring(PREFIX.length).split(" "); //returns the text after the prefix
    //console.log(args);
    var arg = ((args[0].toString()).toLowerCase());
    if (arg == 'date') {
        var hours = now.getHours() % 12;
        var spec;
        if (now.getHours >= 12) {
            spec = "pm";
        } else {
            spec = "am";
        }
        var date = now.getDate();

        msg.channel.sendMessage("The date is the " + now.getDate() + "th \nThe hour is " + hours + spec);
        //console.log(args[0]);
    }
    if (arg == 'test') {
        msg.channel.sendMessage("Nice bruh");
    }
    if (arg == 'help') {
        msg.channel.sendMessage("Availible commands are scuffed(?date, ?test, ?git). This was a waste of my time. If you do ?(Insert Who Question) it will return a person from server. So scuffed smh.");
    }
    if (arg == 'git') {
        msg.channel.sendMessage("https://github.com/amruth21")
    }
    if (arg == "who" || args[0] == "whose" || args[0] == "which") {
        var GuildMembers = msg.guild.members;
        //console.log(lengthy);
        var mems = [];
        var nicks = GuildMembers.map(g => g.nickname)
        var lengthy = nicks.length;
        var i;
        for (i = 0; lengthy > i; i++) {
            if (typeof(nicks[i]) === "string") {
                //console.log("test");
                if (nicks[i] != "oRgAnIc BeAnA" && nicks[i] != "irrelevant") {
                    mems.push(nicks[i]);
                }
            }
        }
        console.log(mems);
        var person = mems[Math.floor(Math.random() * mems.length)];
        msg.channel.sendMessage(person);
    }
    if (arg == "is") {
        var answer;
        if (Math.floor(Math.random() * 10) >= 5) {
            answer = "yes";
        } else {
            answer = "no";
        }
        msg.channel.sendMessage(answer);
    }


    //code is trash
    /*
    switch (args[0]) {
        case 'date':
            var hours = now.getHours() % 12;
            var spec;
            if (now.getHours >= 12) {
                spec = "pm";
            } else {
                spec = "am";
            }
            var date = now.getDate();

            msg.channel.sendMessage("The date is the " + now.getDate() + "th \nThe hour is " + hours + spec);
            //console.log(args[0]);
            break;
        case 'test':
            msg.channel.sendMessage("Nice bruh");
            break;
        case 'help':
            msg.channel.sendMessage("Availible commands are scuffed(?date, ?test, ?git). This was a waste of my time. If you do ?(Insert Who Question) it will return a person from server. So scuffed smh.");
            break;
        case 'git':
            msg.channel.sendMessage("https://github.com/amruth21")
            break;
        default:
            var person = "Datta"
            msg.channel.sendMessage(person)
            break;
    }
    */
});

bot.login(token);