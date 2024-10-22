import style from './Sidebar.module.css'

import userProfileCover from '../assets/user-profile-cover.svg'
import userProfileImg from '../assets/user-profile-img.svg'

export function Sidebar() {
    return (
        <aside className={ style.sidebar }>
            <div className={ style.coverContainer }>
                <img src={ userProfileCover } alt="User image cover" />
            </div>
        </aside>
    )
}
