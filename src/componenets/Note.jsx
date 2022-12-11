import React from 'react';

function Note(props) {

function deleteEffect() {
    props.onDelete(props.id);   
}

 return  <div className='note'>
    <h1>{props.titles}</h1>
    <p>{props.contents}</p>
    <button onClick={deleteEffect} > - </button>
 </div> 
}

export default Note;