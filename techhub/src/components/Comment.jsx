import { useState } from 'react';

import { Trash, ThumbsUp } from '@phosphor-icons/react';
import { formatDistanceToNow, format } from 'date-fns';

import axios from 'axios';

import { Avatar } from './Avatar'

import style from './Comment.module.css'

export function Comment(props) {
    const { comment, onDelete } = props;
    const [likes, setLikes] = useState(comment.likes)

    const handleCommentLike = () => {
        const updatedLikesCount = likes + 1
        setLikes(updatedLikesCount)

        axios.patch(`http://localhost:3000/${comment.id}/likes`);
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
                                title={ format(comment.createdAt, 'LLLL d, yyyy, h:mmaa') } 
                                dateTime={ format(comment.createdAt, 'yyyy/MM/dd HH:mm:ss') }
                            >
                                { formatDistanceToNow(comment.createdAt, { addSuffix: true }) }
                            </time>
                        </div>
                        <button 
                            title={!comment.temporary ? 'Delete comment' : 'Processing comment...'} 
                            className={!comment.temporary ? '' : style.disabled }
                        >
                            <Trash 
                                size={ 24 } 
                                onClick={() => {
                                    if (comment.temporary) return
                                    
                                    onDelete(comment.id)}
                                }
                            />
                        </button>
                    </div>
                    <p>{ comment.content }</p>
                </div>
                <div className={ style.commentInteraction }>
                    <div className={style.likeArea}>
                        <button 
                            title={!comment.temporary ? 'Like comment' : 'Processing comment...'} 
                            className={!comment.temporary ? '' : style.disabled}
                            onClick={handleCommentLike}
                        >
                            <ThumbsUp size={ 20 } />
                            <span>Like</span> 
                        </button>
                    </div>
                    <span>{ likes }</span>
                </div>
            </div>
        </div>
    )
}
