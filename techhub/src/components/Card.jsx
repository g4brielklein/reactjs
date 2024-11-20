import React, { useState } from 'react';
import { formatDistanceToNow, format } from 'date-fns';

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import style from './Card.module.css'

export function Card(props) {
    const { post } = props;
    const [hasComment, setHasComment] = useState(false)

    const onChangeTextArea = event => {
        setHasComment(event.target.value.length > 0)
    }

    return (
        <div className={ style.card }>
            <div className={ style.header }>
                <div className={ style.userContainer }>
                    {/* <Avatar imageUrl={ post.user.profileImageUrl } /> */}
                    <div className={ style.userInfo }>
                        {/* <strong>{ post.user.name }</strong> */}
                        {/* <span>{ post.user.role }</span> */}
                    </div>
                </div>
                <time 
                    title={ format(post.createdAt, 'LLLL d, yyyy, h:mmaa') } 
                    dateTime={ format(post.createdAt, 'yyyy/MM/dd HH:mm:ss') }
                >
                    Published { formatDistanceToNow(post.createdAt, { addSuffix: true }) }
                </time>
            </div>
            <div className={ style.content }>
                <p>{ post.content }</p>
            </div>
            <div className={ style.comments }>
                <div className={ style.commentWriteArea }>
                    <strong>Leave your feedback</strong>
                    <textarea 
                        placeholder="Write down a comment..." 
                        onChange={ onChangeTextArea }
                    ></textarea>
                    { hasComment && <button>Publish</button> }
                </div>
                <div className={ style.commentListArea }>
                    {/* { post.comments.map((comment, index) => (
                        <Comment key={ index } comment={comment} />
                    )) } */}
                </div>
            </div>
        </div>
    )
}
