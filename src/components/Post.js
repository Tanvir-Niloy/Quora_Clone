import React from 'react';
import { Avatar } from '@material-ui/core';
import '../css/Post.css'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, RepeatOutlined, ShareOutlined } from '@material-ui/icons';

function Post({Id,question,imageUrl,timestamp,users}) {


    return (
        <div className='post'>
            <div className="post__info">
                <Avatar src={
            users.photo
              ? users.photo
              : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          }/>
                <h5>{users.displayName ? users.displayName :users.email}</h5>
                <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            </div>
            <div className="post__body">
                <div className="post__question">
                    <p>{question}</p>
                    <button className='post__btnAnswer'>Answer</button>
                </div>
                <div className="post__answer">
                    <p></p>
                </div>
                <img src={imageUrl} alt="postimage" />
            </div>
            <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <RepeatOutlined />
        <ChatBubbleOutlineOutlined/>
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined/>
        </div>
      </div>
        </div>
    )
}

export default Post
