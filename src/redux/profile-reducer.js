import { profileAPI, usersAPI } from "../api/api"

let initialState={
  posts: [
      {id:1, message: 'posttest1', likesCount: 12},
      {id:2, message: 'posttest2', likesCount: 11}
    
    ],
    profile: null,
    status: ''
}

const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case "ADD-POST": {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      }
      return{
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }
    case "SET_USER_PROFILE": {
      return {
        ...state,
        profile: action.profile
      }
    }
    case "SET_STATUS": {
      return {
      ...state,
      status: action.status
      }
    }
    case "DELETE_POST": {
      return {
        ...state,
        posts: [state.posts.filter(p =>p.id !== action.postId)]
      }
    }
    default:
      return state
  }

}

export const addPostActionCreator = (newPostText) => {
  return {
    type: 'ADD-POST',
    newPostText
  }
}

export const setUserProfile = (profile) =>({type: 'SET_USER_PROFILE',profile})
export const setStatus =(status) => ({type: 'SET_STATUS',status})
export const deletePost=(postId)=>({type: 'DELETE_POST', postId})

export const getUserProfile = (userId) =>async(dispatch)=>{
  let res= await usersAPI.getProfile(userId)
    dispatch(setUserProfile(res.data));
}
export const getStatus = (userId) =>async(dispatch)=>{
  let res= await profileAPI.getStatus(userId)
    dispatch(setStatus(res.data));
}  
export const updateStatus = (status) =>async(dispatch)=>{
  let res = await profileAPI.updateStatus(status)
    if(res.data.resultCode===0){
    dispatch(setStatus(status));
    }
}  
export default profileReducer
