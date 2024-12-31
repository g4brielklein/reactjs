import React, { useState } from 'react';
import { formatDistanceToNow, format } from 'date-fns';

import axios from 'axios';

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import style from './Card.module.css'

const baseApiUrl = 'http://localhost:3000'

export function Card(props) {
    const { post } = props;
    const [isTyping, setIsTyping] = useState(false)
    const [comments, setComments] = useState(post.comments)
    const [comment, setComment] = useState('')

    const isCommentEmpty = comment.length === 0

    const onChangeTextArea = event => {
        const newValue= event.target.value

        setComment(newValue)
        
        setIsTyping(newValue.length > 0)
    }

    function reloadPostComments() {
        axios.get(`${baseApiUrl}/${post.id}/comments`)
            .then(comments => {
                setComments(comments.data)
            })
    }

    const handlePostComment = () => {
        if (!comment) {
            return alert('Please fill the comment section first')
        }

        axios.post(`${baseApiUrl}/${post.id}/comment`, {
            content: comment,
            authorId: '1'
        }).then(() => {
            reloadPostComments()
        })

        setIsTyping(false)
        setComment('')
    }

    const handleDeleteComment = async (commentId) => {
        const itemToRemove = comments.findIndex(item => item.id === commentId)

        const response = await axios.delete(`${baseApiUrl}/${commentId}`)

        if (itemToRemove !== -1 && response.status === 204) {
            comments.splice(itemToRemove, 1)
    
            setComments([...comments])
        }
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
                    { isTyping && <button disabled={isCommentEmpty} onClick={handlePostComment}>Publish</button> }
                </div>
                <div className={ style.commentListArea }>
                    { comments?.map(comment => (
                        <Comment 
                            key={comment.id} 
                            comment={comment} 
                            post={post}
                            onDelete={handleDeleteComment}
                        />
                    )) }
                </div>
            </div>
        </div>
    )
}
