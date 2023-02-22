import s from './users.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { usersAPI } from '../../api/api'
let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        let slicedPages;
        let curPage = props.currentPage;
        if (curPage - 3 < 0) {
            slicedPages = pages.slice(0, 5);
        } else {
            slicedPages = pages.slice(curPage - 3, curPage + 2);
        }
    return <div>
        <div className={s.pagination}>
            {slicedPages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div className={s.users} key={u.id}>

                <img src={u.photos.small != null ? u.photos.small : 'https://bazametrov.ru/uploads/new-agency/default_logo_user.jpg'} className={s.userPhoto} alt='' />
                <div className={s.discription}>

                <NavLink className={s.toProfile} to={'/profile/'+ u.id}> <span className={s.name}>{u.name}</span></NavLink>
                <span className={s.status}>{u.status}</span>

                </div>


                    {u.followed ? <button disabled={props.followingInProgress.some(id => id===u.id)} className={s.unfollow} onClick={() => {
                        props.unfollow(u.id)
                         }}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id===u.id)} className={s.follow} onClick={() => {
                        props.follow(u.id)
                        }}>Follow</button>}
                        
            </div>)
        }
    </div>
}

export default Users