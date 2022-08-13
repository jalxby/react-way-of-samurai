import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addNewPost, updateDialog} from "../../redux/state";


const Dialogs = (props) => {


    let newPost = () => {
        props.dispatch(addNewPost());

    };

    let onDialogChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateDialog(text));
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
                <div>
                    <textarea onChange={onDialogChange} value={props.state.newDialogText}/>
                </div>
                <div>
                    <button onClick={newPost}>Send</button>
                </div>

            </div>
        </div>
    )

};

export default Dialogs;
