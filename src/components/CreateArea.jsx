import React, {useState} from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });



  function trackInputs(event){
    const {value, name} = event.target;

    setNote((preValue) => {
     return{
       ...preValue,
       [name]: value
     }
    })
  }
  
  function submitNote(event){
    props.onAdd(note);
    setNote(
      { 
        title: "",
        content: ""
      
      })
    event.preventDefault();
  }
 
  return (
    <div>
      <form>
        <input value={note.title} name="title" placeholder="Title" onChange={trackInputs} autoComplete="off"/>
        <textarea  value={note.content} name="content" placeholder="Take a note..." rows="3" onChange={trackInputs} 
        autoComplete="off"/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
