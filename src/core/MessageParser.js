class MessageParser {

    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }


    parse(message) {
        const lowercase = message.toLowerCase();

        if(lowercase.includes("hello") || lowercase.includes("Hello")) {
            this.actionProvider.greet();
        }


        if(lowercase.includes("menu")) {
            this.actionProvider.opener();
        }


        if(lowercase.includes("reformat guide")) {
            this.actionProvider.guide();
        }
    }

};

export default MessageParser;