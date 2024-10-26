import style from './Sidebar.module.css'

import userProfileCover from '../assets/user-profile-cover.svg'
import userProfileImg from '../assets/user-profile-img.svg'
import editIcon from '../assets/edit-icon.svg'

export function Sidebar() {
    const user = {
        name: 'Gabriel Klein',
        role: 'Software Developer'
    }

    return (
        <aside className={ style.sidebar }>
            <div className={ style.coverContainer }>
                <img src={ userProfileCover } alt="User image cover" />
            </div>
            <div className={ style.mainContainer }>
                <div className={ style.profilePictureContainer }>
                    <img src={ userProfileImg } alt="User profile image" />
                </div>
                <p className={ style.userName }>{ user.name }</p>
                <p className={ style.userRole }>{ user.role }</p>
            </div>
            <div className={ style.bottomContainer }>
                <div className={ style.editButton }>
                    <img src={ editIcon } alt="Edit icon" />
                    <p>Edit your profile</p>
                </div>
            </div>
        </aside>
    )
}
