import React from 'react'

import MyButton from './UI/button/MyButton'

const PostItem = ({ num, post, remove }) => {
  return (
    <div className={'post'}>
      <div className={'post-content'}>
        <strong>
          {post.id}. {post.title}
        </strong>
        <p>{post.body}</p>
      </div>
      <div className={'post-btns'}>
        <MyButton onClick={() => remove(post)}>Remove</MyButton>
      </div>
    </div>
  )
}

export default PostItem
