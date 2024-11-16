import React, { useState } from 'react';

import { Comment } from './Comment'

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
                    <img 
                        className={ style.userPicture } 
                        src={ post.user.profileImageUrl } 
                        alt="User profile picture" 
                    />
                    <div className={ style.userInfo }>
                        <strong>{ post.user.name }</strong>
                        <span>{ post.user.role }</span>
                    </div>
                </div>
                <time title={ post.publishTimeTitle } dateTime={ post.publishTime }>{ post.publishTimeText }</time>
            </div>
            <div className={ style.content }>
                <p>{ post.content }</p>
            </div>
            <div className={ style.comments }>
                <strong>Leave your feedback</strong>
                <textarea 
                    placeholder="Write down a comment..." 
                    onChange={ onChangeTextArea }
                ></textarea>
                { hasComment && <button>Publish</button> }
                { post.comments.map((comment, index) => (
                    <Comment key={ index } comment={comment} />
                )) }
            </div>
        </div>
    )
}
