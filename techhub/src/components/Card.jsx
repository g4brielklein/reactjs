import React, { useState } from 'react';

import { Comment } from './Comment'

import style from './Card.module.css'

export function Card() {
    // mocked data
    const posts = [
        {
            user: {
                name: 'Gabriel Klein',
                role: 'Software Developer',
                profileImageUrl: 'https://github.com/g4brielklein.png',
            },
            content: `Hey everybody, I want to let you guys know that I've just started at a new position as a Software Developer at TechHub! 🚀 #softwareEngineering #development`,
            publishTimeText: 'Published 1hr ago',
            publishTimeTitle: 'November 7, 2024, 3:11PM',
            publishTime: '2024-11-07 15:11:25',
            comments: [
                {
                    user: {
                        name: 'Gabriel Klein',
                        role: 'Software Developer',
                        profileImageUrl: 'https://github.com/g4brielklein.png',
                    },
                    content: 'Congrats, man! 👏',
                    likes: 3,
                    publishTimeText: 'About 2hrs ago',
                    publishTimeTitle: 'November 14, 2024, 6:53PM',
                    publishTime: '2024-11-14 18:53:43',
                }
            ]
        }
    ]

    const [hasComment, setHasComment] = useState(false)

    const onChangeTextArea = event => {
        setHasComment(event.target.value.length > 0)
    }

    return (
        <>
            { posts.map((post, index) => (
                <div key={ index } className={ style.card }>
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
            )) }
        </>
    )
}
