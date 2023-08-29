import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Reformat from "../components/Reformat";
import Menu from "../components/Menu";

const botName = "Woffy";

const config = {
    botName: botName,
    initialMessages: [
        createChatBotMessage(`Hello!, I'm ${botName}.`),
        createChatBotMessage(`Here is the list of topics that I may help you:`,
        {
            widget: "menu"
        }
        )                        
    ],
    customStyle: {
        botMessageBox: {
            backgroundColor: "#376B7E"
        },
        chatButton: {
            backgroundColor: "#376B7E"
        }
    },

    widgets: [
        {
            widgetName: "reformat",
            widgetFunc: (props) => <Reformat {...props} />
        },
        {
            widgetName: "menu",
            widgetFunc: (props) => <Menu {...props} />
        },
    ]
};

export default config;