import s from './Post.module.css'
const Post = (props) => {
  return (
    <div className={s.item}>
      
      {props.message}
      <div>
      <span>like {props.likesCount}</span>
      </div>
    </div>

  )
}
export default Post