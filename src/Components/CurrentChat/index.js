import React from 'react'
import { Button, Input } from 'react-chat-elements'

function CurrentChat() {
  return (
    <div>
      <Input
        className='input'
        placeholder='Send your message...'
        defaultValue=''
        rightButtons={<Button text='Submit' />}
        onChange={(e) => console.log(e.target.value)}
        multiline={true}
      />
    </div>
  )
}

export default CurrentChat