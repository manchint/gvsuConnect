import React from "react";

import { MessageLeft, MessageRight } from "./Message";
import { TextInput } from "./TextInput";
function Chat() {
    return(
        <div>
            <MessageLeft />
            <MessageLeft />
            <MessageRight />
            <TextInput />
        </div>
    )
}

export default Chat;