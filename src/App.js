import Note from './Note.js'
import { useState } from 'react'


function App(props) {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleClick = (event) => {
    console.log('crear nota')
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    setNotes([...notes, noteToAddToState])
    setNewNote('')
  }
  
  return (
    <div>
      <h1>Notes</h1>
      <ol className="App">
        {
          notes.map(note => <Note key={note.id} content={note.content} date={note.date} />)
        }
      </ol>
      <div>
          <input onChange={handleChange} type='text' value={newNote}/>
          <button type='submit' onClick={handleClick}>
            Crear Nota
          </button>
        </div>
    </div>
  );
}

export default App;
