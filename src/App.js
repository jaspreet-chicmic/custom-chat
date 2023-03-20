import './App.css';
import Config from './Components/Config';
import ChatSideBar from './Components/ChatSideBar';
import Navbar from './Components/NavbarChat';
import { createContext, useState } from 'react';
import CurrentChat from './Components/CurrentChat';
export const ContextObj = createContext();
//props:

function App() {
  let [displayChats,setDisplayChats] = useState(Config.ChatSideBar.dataSource);
  return (
    // displayChats = Config.ChatSideBar.dataSource}
    <div className="App">
      <ContextObj.Provider value={{displayChats, setDisplayChats}}>
        <ChatSideBar/>
        <CurrentChat/>
      </ContextObj.Provider>
    </div>
  );
}

export default App;
