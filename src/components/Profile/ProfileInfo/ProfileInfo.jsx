
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
const ProfileInfo = (props) => {
  if(!props.profile){
    return  <Preloader/>
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.small} alt=""/>

        <p>{props.profile.aboutMe}</p>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  )
}
export default ProfileInfo