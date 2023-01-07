import { getMessaging } from "firebase/messaging";
import React from 'react';

class Messaging extends React.Component {
    constructor(props) {
        super(props);
        this.messaging = getMessaging(app);
    }
    render() {
        return (
            <div></div>
        );
    }
}
export default Messaging;