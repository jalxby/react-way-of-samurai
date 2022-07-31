import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let post = React.createRef();
    let newPost = () => {
        let text = post.current.value;
        alert(text);
    }

    let dialogElements = props.state.dialogs
        .map(d => <Dialog name={d.name} num={d.id}/>);

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.txt_area}>
                <textarea ref={post}></textarea>
                <button onClick={newPost}>Send</button>
            </div>
        </div>
    )
};

export default Dialogs;
