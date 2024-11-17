import style from './Avatar.module.css';

export function Avatar(props) {
    const { imageUrl, border = true } = props;

    return (
        <img 
            className={`${style.avatar} ${border ? style.border : ''}`} 
            src={imageUrl} 
            alt="User profile image" 
        />
    )
}
