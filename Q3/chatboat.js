const events = require("events");
const readline = require("readline");

const chatBot = new events.EventEmitter();

const rl = readline.createInterface(process.stdin,process.stdout);

const responses = {
    hello: "Hi there! How can I help you?",
    hi: "Hello! Nice to meet you!","how are you": "I'm doing great! Thanks for asking.",
    bye: "Goodbye! Have a nice day!",
    help: "I can respond to: hello, hi, how are you, bye, help, joke, time",
    joke: "Why don't scientists trust atoms? Because they make up everything!",
    time: () => `Current time is: ${new Date().toLocaleTimeString()}`
};

chatBot.on("greeting", (message) => {
    console.log("Bot:", responses.hello);
});

chatBot.on("farewell", (message) => {
    console.log("Bot:", responses.bye);
    console.log("Chat ended!");
    rl.close();
});

chatBot.on("help", (message) => {
    console.log("Bot:", responses.help);
});

chatBot.on("joke", (message) => {
    console.log("Bot:", responses.joke);
});

chatBot.on("time", (message) => {
    console.log("Bot:", responses.time());
});

chatBot.on("unknown", (message) => {
    console.log("Bot: I don't understand that. Type 'help' to see what I can do!");
});

function processUserInput(input) {
    const message = input.toLowerCase().trim();
    
    if (message === "hello" || message === "hi") {
        chatBot.emit("greeting", input);
    } 
    else if (message === "bye" || message === "goodbye") {
        chatBot.emit("farewell", message);
    }
    else if (message === "how are you") {
        chatBot.emit("question", message);
    }
    else if (message === "help") {
        chatBot.emit("help", message);
    }
    else if (message === "joke") {
        chatBot.emit("joke", message);
    }
    else if (message === "time") {
        chatBot.emit("time", message);
    }
    else {
        chatBot.emit("unknown", message);
    }
}

console.log("Simple Event Chatbot Started!");
console.log("Bot: Welcome! Type 'help' to see commands or 'bye' to exit.");

function startChat() {
    rl.question("You: ", (input) => {
        if (input.trim() === "") {
            console.log("Bot: Please say something!");
            startChat();
            return;
        }
        
        processUserInput(input);
        
        // Continue chat if not farewell
        if (!input.toLowerCase().includes("bye")) {
            startChat();
        }
    });
}

startChat();

process.on('SIGINT', () => {
    console.log("\n Bot: Chat interrupted. Goodbye!");
    rl.close();
    process.exit(0);
});