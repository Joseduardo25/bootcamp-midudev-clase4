const Note = ( {content, date} ) => {
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

export default Note