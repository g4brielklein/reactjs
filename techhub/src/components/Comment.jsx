import { Trash, ThumbsUp } from '@phosphor-icons/react';

import style from './Comment.module.css'

export function Comment(props) {
    const { comment } = props;

    const onClickDelete = () => {
        console.log('clicked delete')
    }

    const onClickLike = () => {
        console.log('clicked like')
    }

    return (
        <div className={ style.comment }>
            <img 
                className={ style.commentUserPicture } 
                src={ comment.user.profileImageUrl } 
                alt="User profile picture" 
            />
            <div className={ style.commentSection }>
                <div className={ style.commentContent }>
                    <div className={ style.commentDetails }>
                        <div className={ style.commentDetailsAuthor }>
                            <strong>{ comment.user.name }</strong>
                            <time 
                                title={ comment.publishTimeTitle} 
                                dateTime={ comment.publishTime }>
                                { comment.publishTimeText }
                            </time>
                        </div>
                        <Trash 
                            className={ style.trashIcon } 
                            size={ 24 } 
                            onClick={ onClickDelete }
                        />
                    </div>
                    <p>{ comment.content }</p>
                </div>
                <div className={ style.commentInteraction }>
                    <div className={ style.likeArea }>
                        <ThumbsUp size={ 20 } onClick={ onClickLike }/>
                        <span>Like</span> 
                    </div>
                    <span>• { comment.likes }</span>
                </div>
            </div>
        </div>
    )
}
