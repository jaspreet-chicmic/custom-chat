import "react-chat-elements/dist/main.css"
import { MessageBox,ChatItem } from "react-chat-elements"
import logo from './logo.svg';
import './App.css';
import ChatSideBar from "./Components";
function App() {
  return (
    <div className="App">
      <ChatSideBar/>
      
      <MessageBox
        position={"left"}
        type={"text"}
        title={"Message Box Title"}
        text="Here is a text type message box"
      />
      
      
      <ChatItem
        avatar={'https://facebook.github.io/react/img/logo.svg'}
        alt={'Reactjs'}
        title={'Facebook'}
        subtitle={'What are you doing?'}
        date={new Date()}
        unread={0}
        onDragOver={console.log(90)}
      />


    <MessageBox
      position={"left"}
      type={"text"}
      title={"Message Box Title"}
      text="Here is a text type message box"
    />
    </div>
  );
}

export default App;
