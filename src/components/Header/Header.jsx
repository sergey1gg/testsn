import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.navlink}>
            <a className={s.menu}><svg height="40" viewBox="0 3 21 21" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="white" strokeLinecap="round" strokeLinejoin="round"><path d="m4.5 6.5h12"/><path d="m4.498 10.5h11.997"/><path d="m4.5 14.5h11.995"/></g></svg></a>
            <a className={s.menu2}>Home</a> 
            {props.isAuth ? <button className={s.menu3} onClick={props.logout}>Logout</button>:
            <NavLink to={'/login'} className={s.menu3}><svg xmlns="http://www.w3.org/2000/svg" id="Outline" fill="white" viewBox="0 0 24 24" width="30" height="30"><path d="M7,22H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7A1,1,0,0,0,7,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7a1,1,0,0,0,0-2Z"/><path d="M23,11h0l-15.777.032a2.018,2.018,0,0,1,.326-.446l3.879-3.879a1,1,0,1,0-1.414-1.414L6.133,9.172a4,4,0,0,0,0,5.656l3.879,3.879a1,1,0,1,0,1.414-1.414L7.547,13.414a2.01,2.01,0,0,1-.291-.382L23,13a1,1,0,0,0,0-2Z"/></svg>
            </NavLink> 
            }
            </div>

        </header>
    )
}
export default Header