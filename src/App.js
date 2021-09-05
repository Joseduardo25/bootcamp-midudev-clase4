import './App.css';

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

function App() {

  const Note = ({content, date}) => {
    return(
      <li>
      <p>
        {content}
        <small>
          <time>{date}</time>
        </small>
      </p>
    </li>
    )
  }

  return (
    <ul className="App">
      {
        notes.map(note => <Note key={note.id} content={note.content} date={note.date}/>)
      }
    </ul>
  );
}

export default App;
