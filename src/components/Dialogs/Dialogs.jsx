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
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <Dialog name={'Alexander'} num={'1'}/>
                <Dialog name={'Valera'} num={'2'}/>
                <Dialog name={'Ann'} num={'3'}/>
                <Dialog name={'Jennifer'} num={'4'}/>
                <Dialog name={'Andrey'} num={'5'}/>
                <Dialog name={'Witcher'} num={'6'}/>
            </div>

            <div className={s.messages}>
                <Message message={'Hi!'}/>
                <Message message={'How are you?'}/>
                <Message message={'Yo!'}/>
                <Message message={'Go go go'}/>
                <Message message={'React is awesome!'}/>
            </div>
        </div>
    )
};

export default Dialogs;
