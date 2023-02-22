import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import {Formik, Form, Field, ErrorMessage, getIn} from "formik";
import { profileFormSchema } from '../../FormValidation/LoginFormSchema';
function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      border: '1px solid red'
    }
  }
}
function CustomInput({ field, form: { errors } }) {
  return <div>
  <textarea {...field} style={getStyles(errors, field.name)} />
  {/*<ErrorMessage name={field.name}/>*/}
  </div>
}
const MyPosts = (props) => {
console.log('RENDER')
let postsElements = props.posts.map( (p )=> {

  return <Post message={p.message} likesCount={p.likesCount} />
})

let onAddPost =(values) =>{
  props.addPost(values)
}

    return (
      
    <div className={s.postsBlock}>
      <h3>My posts</h3> 
      <div>
        <div>
        <AddNewPostForm onAddPost={onAddPost}/>
        <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
      {postsElements}

       
      </div>
    </div>

    )
}

const AddNewPostForm = (props) => {
  return (
      <Formik initialValues={{newPostText: ""}}
              onSubmit={(values) => {
                  props.onAddPost(values.newPostText);        
              }
              }
              validationSchema={profileFormSchema}> 
          {({}) => (
              <Form className={s.form}>
                  <div>
                      <Field component={CustomInput}
                             name={'newPostText'}
                             placeholder={'New post'} 
                             />
                  </div>
                  <div>
                      <button type={'submit'}>Send</button>
                  </div>
              </Form>
          )}
      </Formik>
  )
}
export default MyPosts
