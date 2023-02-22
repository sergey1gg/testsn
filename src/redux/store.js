import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store={
_state:{
    profilePage: {
        posts: [
            {id:1, message: 'posttest1', likesCount: 12},
            {id:2, message: 'posttest2', likesCount: 11}
          
          ],
          newPostText: 'fff'
       
    },
    dialogsPage: {
        messages: [
            {id:1, message: 'ewf'},
            {id:2, message: 'hih'},
            {id:3, message:'ewdd'},
            {id:4, message:'dsxcs'},
            {id:5, message:'ovdm'}
          ],
          dialogs: [
            {id:1, name: 'User name1'},
            {id:2, name: 'User name2'},
            {id:3, name:'User name3'},
            {id:4, name:'User name4'},
            {id:5, name:'User name5'}
          ],
          newMessageBody: ''
    },
    sidebar: {}

},
getState(){
return this._state
},

subscribe (observer){
  this._rerenderEntireTree = observer
},
rerenderEntireTree (){

},

dispatch(action){
  this._state.profilePage=profileReducer(this._state.profilePage,action)
  this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
  this._state.sidebar=sidebarReducer(this._state.sidebar,action)
  this._rerenderEntireTree(this._state)
}
}




export default store;
window.store=store