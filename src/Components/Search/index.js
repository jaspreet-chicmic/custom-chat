import React, { useContext, useEffect, useState } from 'react'
import { Button, Input } from 'react-chat-elements'
import { ContextObj } from '../../App';
import Config from '../Config';
import './styles.css'
function Search() {
  const {displayChats,setDisplayChats} = useContext(ContextObj)
  const [searchedTerm,setSearchedTerm] = useState("");
  const [searchResults,setSearchResults] = useState(displayChats);
  const [originalChats,setOriginalChats] = useState(Config.ChatSideBar.dataSource);
  function handleSearch(event){
    setSearchedTerm(event.target.value)
    console.log(event.target.value)
  }

  useEffect(() => {}, [displayChats]);

useEffect(() => {
  let id = setTimeout(() => {
    //searched records
    let filteredArr = originalChats?.filter((originalChat) => {
      let lowerCaseTitle = originalChat.title.toLowerCase() ;
      let lowerCaseSearch = searchedTerm.toLowerCase();
      return lowerCaseTitle.includes(lowerCaseSearch)
    });
    console.log(filteredArr);
    // setLoading(false);
    setSearchResults(filteredArr);
    // setDisplayChats(filteredArr);
  }, 500);
  // console.log(searchResults);

  return () => {
    // setLoading(true);
    clearTimeout(id);
  };

  // setLoading(false);
}, [searchedTerm]);

useEffect(() => {
  if (searchedTerm === "") setDisplayChats(originalChats);
  else setDisplayChats(searchResults);
}, [searchResults]);

  return (
    <>
      {/* <label for="search">Search Contacts</label> 
      search</button>
      */}
      <Input
        className='search'
        placeholder='Search...'
        defaultValue=''
        maxHeight={50}
        onChange={(e)=>handleSearch(e)}
      />
    </>
  )
}

export default Search