import React from 'react';
import { useState } from 'react';
import Note from './Note';

function Create(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  
  const [zoom, setZoom] = useState(false);

function expand() {
  setZoom(true);
}

  function handleEffect(event) {
   
  const names = event.target.name;
  const values = event.target.value;

     setNote(prevValue => {
        return {
          ...prevValue,
          [names]: values
        };
     });
  }

 function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
     });  
   event.preventDefault();
 }

  return (
    <div>
        <form>
        {zoom && <input name='title' onChange={handleEffect} type='text' placeholder='Title' 
            value={note.title} 
            />}
            
            <textarea name='content' onChange={handleEffect} type='text' placeholder='Take a note...' rows={zoom ? 4 : 1} 
            value={note.content} onClick={expand}
            />
            <button onClick={submitNote}>+</button>
        </form>
        
        
    </div>
  )  
}


  
 
export default Create;
