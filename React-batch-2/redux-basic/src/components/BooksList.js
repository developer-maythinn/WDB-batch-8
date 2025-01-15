import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/booksSlice';

function BooksList() {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const books = useSelector(state => state.books);
    console.log(books)
    const dispatch = useDispatch();

    const handleAdd = () => {
        if(name && author){
            dispatch(addBook({name, author}))
            setName("")
            setAuthor("")
        }
    }
  return (
   <>
    <h1>Books</h1>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Please add a book title' />
    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required placeholder='Please add author name' />
    <button onClick={handleAdd}>Add Book</button><br />
    {
        books.map((book, index) => {
            return(
                <React.Fragment key={index}>
                   <strong>{book.name}</strong>
                   <p>{book.author}</p>
                </React.Fragment>
            )
        })
    }
   </>
  )
}

export default BooksList