const Discord = require("discord.js");
const config = require("./config.json");
//const speak = require("speak.js");
//import {Speak} from 'speak';

//addlink: https://discordapp.com/oauth2/authorize?client_id=280102775017439232&scope=bot&permissions=8

let bot = new Discord.Client();
// config
let TOKEN=config.token;
let PREFIX=config.prefix;
let botVersion=config.version;
let botName=config.name;
let mainChannel = config.geralChannel;
let spamChannel = config.botChannel;
let memeChannel = config.memeChannel;
let memes=config.memeArry;
let regras="" +
    "\n\n**__Bem-vindo(a) ao servidor YKNO!__**\n\n" +
    "**__Regras Gerais__**\n\n" +
    " - O text-channel principal é o <#193120204010684428>.\n" +
    " - Faz `--help` em <#316012604948480000> para comandos do bot\n" +
    " - O servidor tem ranks e a cada rank que passas tens mais acesso a mais channels.\n" +
    " - Os ranks são atribuidos ao participar no servidor\n" +
    "\n**__AJUDA__**<:thonk:357508268094128129>\n\n" +
    " - Para mais ajudas lê as regras em <#316013248904298496>\n" +
    " - Se mesmo assim não ajudar, fala com algum Mod/Admin\n" +
    "" +
    "\n**__ACESSO A CANAIS NSFW:__**  `--nsfw` no <#316012604948480000>\n\n" +
    "Podes convidar quem quiseres, não há regras sobre quem convidar.\n" +
    "`PERMA INVITE` https://discord.gg/Qnm44T9\n";

//Quando estiver pronto
bot.on("ready",function(){
   console.log("" +
       "########################################\n" +
       "#                 TO-DO                #\n" +
       "#   - Music                            #\n" +
       "#   x attachments                      #\n" +
       "#   - Lyrics                           #\n" +
       "#   - Profile                          #\n" +
       "#                                      #\n" +
       "########################################");
    console.log("Pronto.");
    setInterval(function () {
       bot.user.setActivity('(--help) no #bot-spam para comandos').catch(()=>{});
            //console.log("Jogo atual: --help");
    }, 150000);

});
let b=1;

//Novo membro
bot.on("guildMemberAdd",function(member){
    member.guild.channels.find("name",mainChannel).send("Bem-vindo(a) " + member.toString() + " à **YKNO**, aqui temos **putas** e **vinho verde**, fica à vontade mas não à vontadinha. Qualquer coisa lê as regras.");
    member.addRole(member.guild.roles.find("name","Normie 😂"))
        .then(()=>{
            console.log("NOVO MEMBRO: " + member.username);
        }).catch(()=>{
            console.log("ERRO NO ROLE DO NOVO MEMBRO");
    });
    member.send(regras);
});
bot.on("remove",function(member){
    console.log("SAIDA DO SERVIDOR | " + member.username + " saiu.");
});

//Enquanto estiver on
bot.on("message", async function(message){

    //se o bot falar
   if(message.author.equals(bot.user))return;
   let args;
    //memeland bot
    let channelName=message.channel.name;
    if(channelName===memeChannel){
        //console.log(message);
        let attachmentsArray=(message.attachments).array();
        if(!attachmentsArray[0])return;
        console.log("MEMELAND | " + message.author.username + ": " + attachmentsArray[0].filename);
        let Extension=attachmentsArray[0].filename.substring(attachmentsArray[0].filename.length-3);
        if (Extension==="jpg" ||
            Extension==="png" ||
            Extension==="gif"){
            await message.react("⬆");
            await message.react("⬇");
        }
    }

   //se o bot for tagged
    let PREFIX_TAG="<@280102775017439232>";
   if(message.content.startsWith(PREFIX_TAG)){
       args=message.content.substring(PREFIX_TAG.length);
       args=args.toLowerCase();
       console.log(message.author.username + ": " + args);
       switch(args) {
           case " realizas-me os desejos?":
               message.channel.send("<@" + message.author.id + ">" + " não.");
               break;
           case " vai para o caralho":
           case " vai po caralho":
               message.channel.send("<@" + message.author.id + ">" + " no u");
               break;
           case " o que achas do goku?":
               message.channel.send("<@" + message.author.id + ">" + " esse cabr*o não me deixa em paz, mas se não fosse ele, eu não estava aqui");
               break;
           case " all woman are queens":
               message.channel.send("<@" + message.author.id + ">" + " if she breaths, shes a THOOOOOOOOOOOOT");
               break;
           case " ei seu bunda mole":
               message.channel.send("<@" + message.author.id + ">" + " falou comigo?");
               break;
           case " não gracinha falei com a puta que te pariu":
           case " nao gracinha falei com a puta que te pariu":
           case " não, gracinha falei com a puta que te pariu":
           case " nao, gracinha falei com a puta que te pariu":
               message.channel.send("<@" + message.author.id + ">" + " ainda bem, até um outro dia");
               break;
           case " um momento amigo":
               message.channel.send("<@" + message.author.id + ">" + " fala o que você quer de uma vez, caralho");
               break;
           case " que levas nesse caixão?":
           case " que levas nesse caixao":
           case " que levas nesse caixão":
           case " que levas nesse caixao?":
               message.channel.send("<@" + message.author.id + ">" + " um monte de bosta");
               break;
           case " e quem foi o cagão?":
           case " e quem foi o cagao?":
           case " e quem foi o cagão":
           case " e quem foi o cagao":
               message.channel.send("<@" + message.author.id + ">" + " aposto que não foi o c* de sua mãe");
               break;
           case " vou comer seu cu":
               message.channel.send("<@" + message.author.id + ">" + " meu c* não");
               break;
           case " dude are you five?":
           case "dude are you 5?":
                message.channel.send("<@" + message.author.id + ">" + " yeah five inches deep in you MOM");
                break;
           case " i'm lesbian":
           case " im lesbian":
           case " hey i'm lesbian":
           case " hey im lesbian":
               message.channel.send("<@" + message.author.id + ">" + " i thought you were american");
               break;
           case " what's nine plus ten":
           case " whats nine plus ten":
           case " what's 9+10":
           case " whats 9+10":
               message.channel.send("<@" + message.author.id + ">" + " 21");
               break;
           case " psycho mantis?":
           case " psycho mantis":
           case " revolver ocelot":
           case " revolver ocelot?":
                message.channel.send("<@" + message.author.id + ">" + " you're that ninja...");
           break;
           case " you're that ninja":
           case " youre that ninja":
               message.channel.send("<@" + message.author.id + ">" + " you were killed in Zanzibar");
               break;
           case " i'm you":
           case " im you":
               message.channel.send("<@" + message.author.id + ">" + " what");
               break;
           default:
               if(!args.startsWith(" manda"))message.channel.send("<@" + message.author.id + ">" + " usa "+PREFIX+"help para ajuda");
               break;
       }
       //deep shoutouts
       args=message.content.split(" ");
       switch (args[1]) {
           case "manda":
               if((args[3]==="para" && args[4]==="o" && args[5]==="caralho") ||
                   (args[3]==="po" && args[4]==="caralho")) {
                   message.channel.send("<@" + message.author.id + ">" + " " + args[2] + " vai para o caralho cabrão da piça");
                   console.log(message.author.username + "-> " + bot.users.find("id", args[2].replace(/[<@!>]/g, '')).username + " caralho");
               }
               if((args[3]==="à" || args[3]==="a") && args[4]==="merda"){
                   message.channel.send("<@" + message.author.id + ">" + " " + args[2] + " vai à merda");
                   console.log(message.author.username + "-> " + bot.users.find("id", args[2].replace(/[<@!>]/g, '')).username + " merda");
               }
           break;

       }
       return;
   }


   //se não tiver prefixo
   if(!message.content.startsWith(PREFIX))return;

   //se tiver prefixo
   args=message.content.substring(PREFIX.length).split(" ");
   console.log(message.author.username + ": " + args[0]);
    if(channelName!==spamChannel && channelName!==mainChannel){
       wrongChannel(message);
       message.delete();
       return;
   }
   //se for geral ou bot-spam
    if(channelName===spamChannel || channelName===mainChannel){
        switch(args[0].toLowerCase()){
            case "lenny":
                message.channel.send("( ͡° ͜ʖ ͡°)");
                break;
            case "shrug":
                message.channel.send("¯\\_(ツ)_/¯");
                break;
            case "dusk":
                Speak("dusk",message);
                break;
            case "invite":
                message.channel.send("<@" + message.author.id + ">: `PERMA INVITE` https://discord.gg/Qnm44T9");
                break;
            case "meme":
                let memeMessage;
                if(args[1]) memeMessage=memeCatcher(args[1]);
                else memeMessage=Math.floor(Math.random()*memes.length);
                message.channel.send(message.author.username + ": \"" + memes[memeMessage]+"\"");
                break;
            case "poll":
                await embedPoll(message);
                message.then(function () {
                        console.log(message.author.username + ": poll");
                    })
                    .catch(function () {
                    console.log("dasse cá estou eu");
                });
                break;
            default:
                if(channelName===mainChannel){
                    wrongChannel(message);
                    message.delete();
                    return;
                }
        }
    }
    //se for bot-spam
   if(channelName===spamChannel) {
       switch (args[0].toLowerCase()) {
           case "regras":
               message.author.send(regras);
               message.channel.send("<@" + message.author.id + ">" + " regras gerais enviadas por PM");
               break;
           case "nsfw":
               rolesGiver("nsfw", message);
               break;
           case "ranks":
               Speak("ranks", message);
               break;
           case "help":
               Speak("help", message);
               break;
           case "profile":
               /*UPDATE*/Speak(profile,message);
               break;
           case "play":
               message.channel.send("<@" + message.author.id + ">" + " pensas que eu vou cantar ou o caralho");
               break;
           case "role":
               if (args[1]) rolesGiver(args[1], message);
               else Speak("role", message);
               break;
           case "info":
               message.channel.send(botName + " v"+botVersion+".\n\tCriado por **Fiano**" +
                   /*"\n\t\"Não sei porque fiz, apenas apeteceu-me\" - *Fiano, 2018*" +*/
                   "\n\tCriado para aumentar a interactividade do utilizador do servidor e para automatizá-lo");
               break;
       }
   }
});

bot.login(TOKEN).then(()=>{}).catch(()=>{console.log("No Token")});


//##################################################
//FUNCTIONS
//##################################################

/*module.exports.help = {
    name:"await"
}*/

//--meme [number]
function memeCatcher(e) {
    switch (e){
        case "italics": return 0;
        case "rari": return 1;
        case "lit": return 2;
        case "succ": return 3;
        case "uh": return 4;
        case "godnanime": return 5;
        case "rina": return 6;
        case "kyle": return 7;
        case "suh": return 8;
        case "wae": return 9;
        case "somebody": return 10;
        case "oldyoutube": return 11;
        case "cowboy": return 12;
        case "richard": return 13;
        case "whoever": return 14;
        case "lettuce": return 15;
        default:return Math.floor(Math.random()*memes.length);
    }
}


async function embedPoll(message){
    let args=message.content.substring(PREFIX.length).split(", ");
    if(args.length<4 || args.length>6) {
        message.delete();
        return;
    }
    let text=":one: " + args[2] +
             "\n:two: " + args[3];
    if(args[4])text=text + "\n:three: " + args[4];
    if(args[5])text=text + "\n:four: " + args[5];

    let embed = new Discord.RichEmbed()
        .setTitle(args[1])
        .setDescription(" ")
        .addField('\u200B',text)
        .setFooter("Invocado por " + message.author.username)
        .setColor(0x369e1d);
    let msg = await message.channel.send(embed).catch(()=>{});
    await msg.react("1⃣");
    await msg.react("2⃣");
    if(args[4])await msg.react("3⃣");
    if(args[5])await msg.react("4⃣");
}

function wrongChannel(message) {
    console.log("WRONG CHANNEL by "+message.author.username+"\n" +
        "\tNome do Canal: "+ message.channel.name + "\n" +
        "\tCanal principal: " + mainChannel + "\n"+
        "\tCanal de Spam: "+spamChannel);
}

function rolesGiver(name,message){
    let roleType;
    switch (name){
        case "nsfw":
             roleType="👀👀👀";
            break;
        case "normie":
             roleType="Normie 😂";
            break;
        case "weeb":
             roleType="Weeb 日本のごみ";
            break;
        default:
            Speak("roles",message);
            return;
    }
    let Role = message.member.guild.roles.find("name",roleType);
    if(!message.member.roles.has(Role.id)) {
        message.member.addRole(message.member.guild.roles.find("name",roleType)).then(()=>{
            message.channel.send("Role adicionado");
        }).catch(()=>{
            console.log("Erro de roles")
        });

    }else{
        message.member.removeRole(message.member.guild.roles.find("name",roleType)).catch(()=>{console.log("Erro de roles")});
        message.channel.send("Role removido");
    }
}
function Speak(name,message){
    switch (name) {
        case "ranks":
            message.channel.send("" +
                "O sistema de ranks funciona da seguinte forma:\n" +
                "            ```\n" +
                "Admin/Mod \n" +
                "└ Meme Master\n" +
                "   └ Great Memer\n" +
                "      ├ Shitposter\n" +
                "      └ Darkmemer\n" +
                "         └ Early Memer\n" +
                "            └ Soft Memer\n" +
                "               ├ Weeb\n" +
                "               └ Normie\n" +
                "                   └ Bot\n" +
                "```\n" +
                "Sobes de rank ao ser ativo");
            break;

        case "help":
            message.channel.send("**Comandos:**\n\n" +
                "`--regras` - Recebes por PM uma lista das regras basicas do servidor\n" +
                "`--ranks` - Lista de hierarquia de ranks\n" +
                //"`--profile` - Informação sobre a tua conta\n" +
                /*"`--lenny`\n" +
                "`--shrug`\n" +*/
                "`--invite` - Perma Invite Link\n" +
                "`--nsfw` - Recebes acesso aos canais nsfw\n" +
                "`--role` - roles disponiveis para auto-atribuição\n" +
                "`--role [role]` - adicionar ou remover roles de auto-atribuição\n" +
                "`--meme` - Memes\n" +
                "`--poll , <titulo>, <opção1>, <opção2>, [opção3], ..., [opção_n]` - Tabela de votação\n" +
                "`--info` - Informação sobre o bot\n");
            break;
        case "profile":
            let embed = new Discord.RichEmbed()
            //.addField("Since",message.author.bot,true) //bot?
                .addField(message.author.username,message.author.presence)
                .addField("Discord criado a",message.author.createdAt,true)
                .setThumbnail(message.author.avatarURL)
                .setFooter("Informação sobre as cenas")
                .setColor(0x00FFFF);
            message.channel.send(embed);
            break;
        case "role":
            message.channel.send("Roles disponiveis no comando: weeb, nsfw e normie.");
            break;
    }
}


