import React, { useState } from 'react';
import { formatDistanceToNow, format } from 'date-fns';

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import style from './Card.module.css'

export function Card(props) {
    const { post } = props;
    const [isTyping, setIsTyping] = useState(false)
    const [comments, setComments] = useState([{
        id: 1,
        content: 'Congrats, man! 👏',
        createdAt: new Date('2024-11-01'),
        likes: 33,
        user: {
            name: 'Kyle Simpson',
            profileImageUrl: 'https://github.com/getify.png'
        }
    }])
    const [comment, setComment] = useState('')

    const onChangeTextArea = event => {
        const newValue= event.target.value

        setComment(newValue)
        
        setIsTyping(newValue.length > 0)
    }

    const onPostComment = () => {
        setComments([{
            id: comments[comments.length - 1].id++,
            content: comment,
            createdAt: new Date(),
            likes: 0,
            user: {
                name: 'Gabriel Klein',
                profileImageUrl: 'https://github.com/g4brielklein.png'
            }
        }, ...comments])

        setIsTyping(false)
        setComment('')
    }

    return (
        <div className={ style.card }>
            <div className={ style.header }>
                <div className={ style.userContainer }>
                    <Avatar imageUrl={ post.user.profileImageUrl } />
                    <div className={ style.userInfo }>
                        <strong>{ post.user.name }</strong>
                        <span>{ post.user.role }</span>
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
                        value={ comment }
                    ></textarea>
                    { isTyping && <button onClick={onPostComment}>Publish</button> }
                </div>
                <div className={ style.commentListArea }>
                    { comments?.map(comment => (
                        <Comment key={comment.id} comment={comment} />
                    )) }
                </div>
            </div>
        </div>
    )
}
