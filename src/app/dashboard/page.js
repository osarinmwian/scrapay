
"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook, editBook } from '../../store/redux/boookSlice';
import {MdDelete} from 'react-icons/md'
export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editingBook, setEditingBook] = useState(null);
  const bookValues = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  const handleAddBook = () => {
    const newBook = {
      id: editingBook|| bookValues.length + 1,
      title: title,
      author: author,
      dateCreated: new Date().toLocaleDateString(),
      timeCreated: new Date().toLocaleTimeString(),
    };
    dispatch(addBook(newBook));
    setTitle("");
    setAuthor("");
    setEditingBook(null)
 
  };
  const handleEditBook = (book) => {
    setTitle(book.title);
    setAuthor(book.author);
    setEditingBook(book.id);
    dispatch(editBook({ id: book.id, title, author }));
  };
  return (
    <div className="flex min-h-screen bg-white flex-col items-center justify-between p-24">
      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className='bg-green-500 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl '> 
          <div className=' w-2/5 p-5'>
            <div className='py-2'>
              <h1 className= 'text-1xl font-bold text-left text-white '>
                DASHBOARD
              </h1>
              <div className='border-2 border-white inline-block mb-2 w-full'/>
              <div>
              <input
   className='bg-gray-100 py-3 outline-none text-sm text-black w-full mb-4 rounded pl-4'
   id="title"
   type="text"
   placeholder="Title"
   value={title}
   onChange={(e) => setTitle(e.target.value)}
 />
              </div>
              <div>
                <input
                 className='bg-gray-100 py-3 outline-none text-sm text-black w-full mb-4 rounded pl-4' 
                 id="author"
                 type="text"
                 placeholder="Author"
                 value={author}
   onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <button
                className="bg-white inline-block font-semibold 
                 text-green-500 hover:bg-green-500 
                 hover:text-white py-2 px-4 mb-4 rounded"
                onClick={() => handleAddBook(document.getElementById('title').value, document.getElementById('author').value)}
              >
                Add Book
              </button>
            </div>
          </div>
          <div className='w-2/3 bg-white text-black rounded-tr-2xl rounded-br-2xl px-0 flex-grow'>
 
            <table>
              <thead>
                <tr >
                <th className="px-4">Title</th>
               <th className="px-4">Author</th>
                < th className="px-4">Time</th> 
                 <th className="px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {bookValues?.map((book, index) => (
                 <tr key={index}>
                   <td className="mr-2">{book.title}</td>
                   <td className="mr-2">{book.author}</td>
                   <td className="mr-4">{book.dateCreated}</td>
                   <td className="ml-4">{book.timeCreated}</td>
                   <td className="mr-2">
      <div className="flex">
         <button
       className="bg-black hover-bg-blue-700 text-white ml-8 font-bold px-3 rounded text-1xl"
       onClick={() => handleEditBook(book)}
     >
       Edit
     </button>
     <MdDelete onClick={() => handleRemoveBook(index)} size={30} color='bg-green-500'/>
   </div>
 </td>
 
                 </tr>
                 
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}