import { Trash, ThumbsUp } from '@phosphor-icons/react';
import { formatDistanceToNow } from 'date-fns';

import { Avatar } from './Avatar'

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
            <Avatar imageUrl={ comment.user.profileImageUrl } border={false} />
            <div className={ style.commentSection }>
                <div className={ style.commentContent }>
                    <div className={ style.commentDetails }>
                        <div className={ style.commentDetailsAuthor }>
                            <strong>{ comment.user.name }</strong>
                            <time 
                                title={ comment.publishTimeTitle} 
                                dateTime={ comment.publishTime }>
                                { formatDistanceToNow(comment.publishTime, { addSuffix: true }) }
                            </time>
                        </div>
                        <button title="Delete comment">
                            <Trash 
                                size={ 24 } 
                                onClick={ onClickDelete }
                            />
                        </button>
                    </div>
                    <p>{ comment.content }</p>
                </div>
                <div className={ style.commentInteraction }>
                    <div className={ style.likeArea }>
                        <button title="Like comment" onClick={ onClickLike }>
                            <ThumbsUp size={ 20 } />
                            <span>Like</span> 
                        </button>
                    </div>
                    <span>{ comment.likes }</span>
                </div>
            </div>
        </div>
    )
}
