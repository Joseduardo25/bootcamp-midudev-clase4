import Note from './Note.js'
import { useState } from 'react'


function App(props) {

  const [notes, setNotes] = useState(props.notes)

  return (
    <div>
      <h1>Notes</h1>
      <ol className="App">
        {
          notes.map(note => <Note key={note.id} content={note.content} date={note.date} />)
        }
        <div>
          <input type='text'/>
          <button type='submit'>
            Crear Nota
          </button>
        </div>
      </ol>
    </div>
  );
}

export default App;
