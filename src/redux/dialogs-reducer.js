let initialState = {
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
      ]
}

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages,{ id: 6, message: body }],
                
            }
        default:
            return state
    }
}
export const sendMessageCreator = (newMessageBody) => {
    return {
        type: 'SEND-MESSAGE',
        newMessageBody 
        
    }

}
export default dialogsReducer