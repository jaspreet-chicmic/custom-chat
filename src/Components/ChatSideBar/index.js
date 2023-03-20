import React, {useContext, useEffect, useState } from 'react';
import "react-chat-elements/dist/main.css"
import './styles.css';
import { ChatList, Input } from "react-chat-elements"
import Search from '../Search'
import { ContextObj } from '../../App';
import Config from '../Config';

function ChatSideBar() {
  const {displayChats,setDisplayChats} = useContext(ContextObj);
  useEffect(()=>{
    setDisplayChats(Config.ChatSideBar.dataSource)
    console.log("displayChats in effect ", displayChats)
  },[])
  return (
    <div>
      <Search
        placeholder="Search..."
      />
      <ChatList
        className='chat-list' dataSource = {displayChats}/>
    </div>
  )
}

export default ChatSideBar