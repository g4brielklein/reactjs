import style from './Sidebar.module.css'

import editIcon from '../assets/edit-icon.svg'

export function Sidebar() {
    // mocked data
    const user = {
        name: 'Gabriel Klein',
        role: 'Software Developer',
        profileCoverImg: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        profilePicImg: 'https://github.com/g4brielklein.png',
    }

    return (
        <aside className={ style.sidebar }>
            <div className={ style.coverContainer }>
                <img 
                    src={ user.profileCoverImg } 
                    alt="User image cover" 
                />
            </div>
            <div className={ style.mainContainer }>
                <div className={ style.profilePictureContainer }>
                    <img src={ user.profilePicImg } alt="User profile image" />
                </div>
                <strong className={ style.userName }>{ user.name }</strong>
                <span className={ style.userRole }>{ user.role }</span>
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
