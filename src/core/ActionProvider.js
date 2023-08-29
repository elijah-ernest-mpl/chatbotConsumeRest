class ActionProvider {

    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet = () => {
        const message = this.createChatBotMessage(
            `Hi`
        );
        this.addMessageToState(message);
    };

    opener = () => {
        const message = this.createChatBotMessage(
            `Hi`
        );
        this.addMessageToState(message);
    };

    guide = () => {
        const message = this.createChatBotMessage(
            "Here's the guideline on how to reformat the desktop",
            {
                widget: "reformat"
            }
        );
        this.addMessageToState(message);
    }


    menuHndlr = () => {
    const message = this.createChatBotMessage(
        'Welcome back! here is the list of the topics that you my get interest .',
        {
            widget: "menu"
        }
    );
    this.addMessageToState(message);    
    }


    Optionhandler = (msg) => {
        if(msg === "Reformat PC") {
            const message = this.createChatBotMessage(
                "Here is the procedure on how to reformat the PC",
                {
                    widget: "reformat"
                }
            );
            this.addMessageToState(message);
        }
    }

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }));
    };
   
};

export default ActionProvider;