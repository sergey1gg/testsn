import { Navigate } from 'react-router-dom'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import {Formik, Form, Field} from "formik";
const Dialogs = (props) => {

   
    let state=props.dialogsPage
    let dialogsElements = state.dialogs.map((d) => {
        return  <DialogItem name={d.name} key={d.id} id={d.id} />
    }) 

    let messagesElements = state.messages.map((m) => { 
        return <Message message={m.message} key={m.id} />
    })
    let newMessageBody=state.newMessageBody
    if(!props.isAuth) return <Navigate to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            {dialogsElements}

            <AddMessageForm sendMessage={props.sendMessage}/>
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
               
            </div>
        </div>
        
    )
}

const AddMessageForm = (props) => {
    return (
        <Formik initialValues={{newMessageBody: ""}}
                onSubmit={(values) => {
                    props.sendMessage(values.newMessageBody);
                    
                }
                }>
            {() => (
                <Form>
                    <div>
                        <Field component={'textarea'}
                               name={'newMessageBody'}
                               placeholder={'Enter your message'}/>
                    </div>

                    <div>
                        <button type={'submit'}>Send</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}


export default Dialogs