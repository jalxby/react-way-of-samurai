import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.num;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>)
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogs= [
        {id: 1, name: 'Alexander'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Ann'},
        {id: 4, name: 'Jennifer'},
        {id: 5, name: 'Andrey'},
        {id: 6, name: 'Witcher'}
    ]

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Go go go'},
        {id: 5, message: 'React is awesome!'},
        {id: 6, message: 'And one more'}
    ]

    let dialogElements = dialogs
        .map(d => <Dialog name={d.name} num={d.id}/>);

    let messagesElements = messages
        .map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>

                {
                    dialogElements
                }
                {/*<Dialog name={dialogsData[0].name} num={dialogsData[0].id}/>*/}
                {/*<Dialog name={dialogsData[1].name} num={dialogsData[1].id}/>*/}
                {/*<Dialog name={dialogsData[2].name} num={dialogsData[2].id}/>*/}
                {/*<Dialog name={dialogsData[3].name} num={dialogsData[3].id}/>*/}
                {/*<Dialog name={dialogsData[4].name} num={dialogsData[4].id}/>*/}
                {/*<Dialog name={dialogsData[5].name} num={dialogsData[5].id}/>*/}
            </div>

            <div className={s.messages}>
                {
                    messagesElements
                }
                {/*<Message message={messagesData[0].message}/>*/}
                {/*<Message message={messagesData[1].message}/>*/}
                {/*<Message message={messagesData[2].message}/>*/}
                {/*<Message message={messagesData[3].message}/>*/}
                {/*<Message message={messagesData[4].message}/>*/}
                {/*<Message message={messagesData[5].message}/>*/}
            </div>
        </div>
    )
};

export default Dialogs;
