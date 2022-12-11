import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
// import notes from '../Note';
import Create from './Create';

function App() {
    const [item, setItem] = useState([]);

function clickEffect(note) {
    setItem( (prevItem) => {
        return [...prevItem, note]
       });  
}

    function deleteNote(id) {
        setItem( (prevItem) =>{
          return prevItem.filter( (todo, index) =>{
          return index !== id;
         });
        });
     }

 return <div>
    <Header />
    <Create onAdd={clickEffect} />
    {item.map( (toDo, index) =>{
          return <Note key={index} id={index} titles={toDo.title} contents={toDo.content} onDelete={deleteNote} />
        })}
     <Footer /> 
 </div>  
}
// {notes.map((note) => <Note key = {note.key} title = {note.title} content = {note.content} />)}

export default App;