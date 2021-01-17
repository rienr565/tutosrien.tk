(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{427:function(e,t,o){e.exports=o.p+"assets/img/BbcuyJ6.9ae33cf3.png"},461:function(e,t,o){"use strict";o.r(t);var n=o(5),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"installing-node-js-and-discord-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-node-js-and-discord-js"}},[e._v("#")]),e._v(" Installing Node.js and discord.js")]),e._v(" "),n("h2",{attrs:{id:"installing-node-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-node-js"}},[e._v("#")]),e._v(" Installing Node.js")]),e._v(" "),n("p",[e._v("To use discord.js, you'll need to install Node.js. You can do so by going to "),n("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Node.js website"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"installing-on-windows"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-on-windows"}},[e._v("#")]),e._v(" Installing on Windows")]),e._v(" "),n("p",[e._v("If you're developing on Windows, it's as simple as installing any other program. Go to "),n("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Node.js website"),n("OutboundLink")],1),e._v(", download the latest version, open up the downloaded file, and follow the steps from the installer.")]),e._v(" "),n("h3",{attrs:{id:"installing-on-macos"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-on-macos"}},[e._v("#")]),e._v(" Installing on macOS")]),e._v(" "),n("p",[e._v("If you're developing on macOS, you have a few options. You can go to "),n("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Node.js website"),n("OutboundLink")],1),e._v(", download the latest version, double click the package installer, and follow the instructions. Or you can use a package manager like "),n("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew"),n("OutboundLink")],1),e._v(" with the command "),n("code",[e._v("brew install node")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"installing-on-linux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-on-linux"}},[e._v("#")]),e._v(" Installing on Linux")]),e._v(" "),n("p",[e._v("If you're developing on Linux, you may consult "),n("a",{attrs:{href:"https://nodejs.org/en/download/package-manager/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),n("OutboundLink")],1),e._v(" to determine how you should install Node."),n("br"),e._v("On that note, there's a possibility that you may already have Node (e.g. if you're using a VPS). You can check by running the "),n("code",[e._v("node -v")]),e._v(" command. If it outputs something like "),n("branch",{attrs:{version:"11.x",inline:""}},[n("code",[e._v("v8.0.0")])]),n("branch",{attrs:{version:"12.x",inline:""}},[n("code",[e._v("v12.0")])]),e._v(" or higher, then you're good to go! Otherwise, take a look at the page linked above for instructions on installing Node on your OS.")],1),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("If you "),n("em",[e._v("do")]),e._v(" have Node installed, but have an older version (i.e. anything below "),n("branch",{attrs:{version:"11.x",inline:""}},[e._v("8.0.0")]),n("branch",{attrs:{version:"12.x",inline:""}},[e._v("12.0")]),e._v("), you should upgrade to the latest version. "),n("branch",{attrs:{version:"11.x",inline:""}},[e._v("Discord.js v11")]),n("branch",{attrs:{version:"12.x",inline:""}},[e._v(" Discord.js v12")]),e._v(" requires Node "),n("branch",{attrs:{version:"11.x",inline:""}},[e._v("8.0.0")]),n("branch",{attrs:{version:"12.x",inline:""}},[e._v("12.0")]),e._v(" or higher.")],1)]),e._v(" "),n("hr"),e._v(" "),n("h2",{attrs:{id:"preparing-the-essentials"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preparing-the-essentials"}},[e._v("#")]),e._v(" Preparing the essentials")]),e._v(" "),n("p",[e._v("To install and use discord.js, you'll need to install it via npm (Node's package manager). npm comes with every Node installation, so you don't have to worry about installing that. However, before you install anything, you should set up a new project folder.")]),e._v(" "),n("h3",{attrs:{id:"setting-up-a-project-folder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-project-folder"}},[e._v("#")]),e._v(" Setting up a project folder")]),e._v(" "),n("p",[e._v("Like any other project, you should have a dedicated folder for this, in order to keep it organized and manageable.")]),e._v(" "),n("p",[e._v("Navigate to a place on your machine that's easy to find and reopen in the future, for convenience purposes. Create a new folder like you normally would (for Linux, you can use "),n("code",[e._v("mkdir project-name")]),e._v(" inside your terminal). If you already have a name you want to use for your bot, you can use that as the folder name. Otherwise, you may name it something like "),n("code",[e._v("discord-bot")]),e._v(" for the time being (or anything else you have in mind).")]),e._v(" "),n("p",[e._v("Once you're done making the folder, open it up (for Linux, you can use "),n("code",[e._v("cd project-name")]),e._v(" inside your terminal).")]),e._v(" "),n("h3",{attrs:{id:"opening-the-command-prompt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#opening-the-command-prompt"}},[e._v("#")]),e._v(" Opening the command prompt")]),e._v(" "),n("p",[e._v("If you're on Linux, you can quickly open up the terminal with "),n("code",[e._v("Ctrl + Alt + T")]),e._v(".")]),e._v(" "),n("p",[e._v("If you're on Windows and aren't familiar with opening up the command prompt, simply do the following:")]),e._v(" "),n("ol",[n("li",[e._v("Open your bot project folder.")]),e._v(" "),n("li",[e._v("Hold down the "),n("code",[e._v("Shift")]),e._v(" key and right-click inside of the folder.")]),e._v(" "),n("li",[e._v('Choose the "Open command window here" option.')])]),e._v(" "),n("p",[e._v("It should then open up a window with a black background. It's a bit unattractive, but we'll talk about using better, more powerful tools in a different part of the guide.")]),e._v(" "),n("h3",{attrs:{id:"using-the-command-prompt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-the-command-prompt"}},[e._v("#")]),e._v(" Using the command prompt")]),e._v(" "),n("p",[e._v("With the command prompt open, run the "),n("code",[e._v("node -v")]),e._v(" command to make sure you've successfully installed Node.js. If you see something like "),n("branch",{attrs:{version:"11.x",inline:""}},[n("code",[e._v("v8.0.0")])]),n("branch",{attrs:{version:"12.x",inline:""}},[n("code",[e._v("v12.0")])]),e._v(", great! If not, go back and try installing again.")],1),e._v(" "),n("p",[e._v("The next command you'll be running is "),n("code",[e._v("npm init")]),e._v(". This command creates a "),n("code",[e._v("package.json")]),e._v(" file for you, which is what will be used to keep track of the dependencies your bot uses, as well as other info. If you're a bit confused by that, you can simply ignore it for the time being.")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("npm init")]),e._v(" command will ask you a sequence of questions - you should fill them out as you see fit. If you're not sure of something or just want to skip it as a whole, simply leave it blank and press enter.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("Want to get started quickly? Use "),n("code",[e._v("npm init -y")]),e._v(" to have it fill out everything for you!")])]),e._v(" "),n("p",[e._v("Once you're done with that, you're ready to install discord.js!")]),e._v(" "),n("hr"),e._v(" "),n("h2",{attrs:{id:"installing-discord-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-discord-js"}},[e._v("#")]),e._v(" Installing discord.js")]),e._v(" "),n("p",[e._v("Now that you've installed Node.js and know how to open up your console and run commands, you can finally install discord.js!")]),e._v(" "),n("p",[e._v("To install discord.js, simply run the "),n("code",[e._v("npm install discord.js")]),e._v(". This can take a bit of time, but should be done fairly quickly.")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("Once the installation is complete, you'll see something like this:\n"),n("img",{attrs:{src:o(427),alt:"npm warnings"}}),n("br"),e._v(" "),n("strong",[e._v("This is perfectly normal and means that it worked.")]),e._v(" You don't need to install any of the items listed in order to use discord.js; they are 100% optional.")])]),e._v(" "),n("p",[e._v("And that's it! With all the necessities installed, you're almost ready to start coding your bot.")]),e._v(" "),n("hr"),e._v(" "),n("h2",{attrs:{id:"installing-a-linter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-a-linter"}},[e._v("#")]),e._v(" Installing a linter")]),e._v(" "),n("p",[e._v("While you are coding, you may find that you run into numerous syntax errors, or just code in an inconsistent style. It's highly urged that you install a linter to ease these troubles. While code editors generally are able to point out syntax errors, with a linter, you can coerce your coding to be in a specific style as you define in the configuration. While this is not required, it's strongly recommended. "),n("RouterLink",{attrs:{to:"/preparations/setting-up-a-linter.html"}},[e._v("Click here for the linter guide!")])],1)])}),[],!1,null,null,null);t.default=a.exports}}]);