(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{483:function(t,s,e){"use strict";e.r(s);var a=e(5),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"getting-your-bot-up-running"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-your-bot-up-running"}},[t._v("#")]),t._v(" Getting your bot up & running")]),t._v(" "),e("p",[t._v("We're finally getting to the exciting parts! Since your bot is in your server now, the next step is to start coding and get it online!")]),t._v(" "),e("h2",{attrs:{id:"creating-the-bot-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-bot-file"}},[t._v("#")]),t._v(" Creating the bot file")]),t._v(" "),e("p",[t._v("Open up your preferred code editor (whether it be "),e("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio Code"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://atom.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Atom"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://www.sublimetext.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sublime Text"),e("OutboundLink")],1),t._v(", or any other editor of your choice) and create a new file. If you're brand new and aren't sure what to use, go with Visual Studio Code.")]),t._v(" "),e("p",[t._v("It's suggested that you save the file as "),e("code",[t._v("index.js")]),t._v(", but you may name it whatever you wish, as long as it ends with "),e("code",[t._v(".js")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("You can quickly create a new file by using the "),e("code",[t._v("Ctrl + N")]),t._v(" shortcut on your keyboard, and then using "),e("code",[t._v("Ctrl + S")]),t._v(" to save the file.")])]),t._v(" "),e("h2",{attrs:{id:"logging-in-to-discord"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logging-in-to-discord"}},[t._v("#")]),t._v(" Logging in to Discord")]),t._v(" "),e("p",[t._v("Once you've created a new file, do a quick check to see if you have everything setup properly. Copy & paste the following code into your file and save it. Don't worry if you don't understand it right away—it'll be explained a bit more in depth after this.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Discord "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'discord.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" client "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Discord"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nclient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("once")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ready'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ready!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nclient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your-token-goes-here'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Head back to your console window, type in "),e("code",[t._v("node your-file-name.js")]),t._v(", and press enter. If you see the "),e("code",[t._v("Ready!")]),t._v(" message after a few seconds, you're good to go! If not, try going back a few steps and make sure you followed everything correctly.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Don't feel like typing the file name each time? Open up your "),e("code",[t._v("package.json")]),t._v(" file, look for something like "),e("code",[t._v('"main": "index.js"')]),t._v(", and change "),e("code",[t._v('"index.js"')]),t._v(" to whatever your file name is. After saving, you can simply run the "),e("code",[t._v("node .")]),t._v(" shortcut in your console to start the process!")])]),t._v(" "),e("h3",{attrs:{id:"start-up-code-explained"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-up-code-explained"}},[t._v("#")]),t._v(" Start-up code explained")]),t._v(" "),e("p",[t._v("Here's the same code with comments, so it's easier to understand what's going on.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// require the discord.js module")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Discord "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'discord.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create a new Discord client")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" client "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Discord"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// when the client is ready, run this code")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this event will only trigger one time after logging in")]),t._v("\nclient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("once")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ready'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ready!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// login to Discord with your app's token")]),t._v("\nclient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your-token-goes-here'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Although it's not a lot, it's good to know what each bit of your code does. But, as it currently is, this won't really do anything. You probably want to add some commands that run whenever someone sends a specific message, right? Let's get started on that, then!")]),t._v(" "),e("h2",{attrs:{id:"listening-for-messages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#listening-for-messages"}},[t._v("#")]),t._v(" Listening for messages")]),t._v(" "),e("p",[t._v("First, make sure to close the process in your console. You can do so by pressing "),e("code",[t._v("Ctrl + C")]),t._v(" inside the console. Go back to your code editor and add the following piece of code above the "),e("code",[t._v("client.login()")]),t._v(" line.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("message")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Notice how the code uses "),e("code",[t._v(".on")]),t._v(" rather than "),e("code",[t._v(".once")]),t._v(" like in the ready event. This means that it can trigger multiple times. Save the file, go back to your console, and start the process up again. Whenever a message is sent inside a channel your bot has access to, the message's content will be logged to your console. Go ahead and test it out!")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Inside your console, you can press the up arrow on your keyboard to bring up the latest commands you've run. Pressing "),e("code",[t._v("Up")]),t._v(" and then "),e("code",[t._v("Enter")]),t._v(" after closing the process is a nice, quick way to start it up again (as opposed to typing out the name each time).")])]),t._v(" "),e("h2",{attrs:{id:"replying-to-messages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#replying-to-messages"}},[t._v("#")]),t._v(" Replying to messages")]),t._v(" "),e("p",[t._v("Logging to the console is great and all, but it doesn't really provide any feedback for the end user. Let's create a basic ping/pong command before you move on to making real commands. Remove the "),e("code",[t._v("console.log(message.content)")]),t._v(" line from your code and replace it with the following:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!ping'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// send back "Pong." to the channel the message was sent in')]),t._v("\n\tmessage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("channel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Pong.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Restart your bot and then send "),e("code",[t._v("!ping")]),t._v(" to a channel your bot has access to. If all goes well, you should see something like this:")]),t._v(" "),e("discord-messages",{tag:"div"},[e("discord-message",{attrs:{author:"User",avatar:"djs"}},[t._v("\n\t\t!ping\n\t")]),t._v(" "),e("discord-message",{attrs:{author:"Tutorial Bot",avatar:"blue",bot:!0}},[t._v("\n\t\tPong.\n\t")])],1),t._v(" "),e("p",[t._v("You've successfully created your first Discord bot command! Exciting stuff, isn't it? This is only the beginning, so let's move on to making some more commands.")]),t._v(" "),e("h2",{attrs:{id:"resulting-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resulting-code"}},[t._v("#")]),t._v(" Resulting code")]),t._v(" "),e("resulting-code",{attrs:{path:"creating-your-bot/up-and-running"}})],1)}),[],!1,null,null,null);s.default=n.exports}}]);