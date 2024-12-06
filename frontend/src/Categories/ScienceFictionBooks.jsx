import React, { useEffect, useState } from 'react';
import HeaderContent from '../HomePage/HeaderContent/HeaderContent'
import Footer from '../HomePage/Footer/Footer'
import { Button} from "flowbite-react";
const ScienceFictionBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data))
   
  }, []);
  // filter ScienceFictionBooks
  const ScienceFictionBooks = allBooks.filter(book => book.category === 'Science Fiction Books');
  return (
    <div>
    <HeaderContent/>
    <h1 className='text-center text-5xl text-yellow-300 font-serif'> ScienceFiction Books</h1>
    <div className='px-4 my-12 text-white mb-8 text-5xl  '>    
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
{ScienceFictionBooks.map((book) => (
  <div key={book._id} className="bg-black rounded-xl p-5  duration-300">
    <div className="flex flex-col items-center text-center">
      {book.fileupload ? (
        <img src={`http://localhost:5000/uploads/${book.fileupload}`}className="lg:w-1/2 aspect-square rounded-xl object-cover mb-6"/>
      ) : (null)}
      <h2 className="text-lg font-semibold text-yellow-500">{book.bookTitle}</h2>
      <div className="text-lg ">{book.authorName}</div>
      <p className="text-gray-700 text-lg">{book.bookDescription}</p>
      <div className="text-sm mt-2">{book.category}</div>
      <div className="text-xl font-bold text-red-800 mt-2">${book.price}</div>
      <Button type="submit" className="bg-blue-800 text-white mt-4 py-1 px-3 rounded hover:bg-gray-800 transition-colors duration-200">
        Add to cart
      </Button>
    </div>
  </div>
))}
</div> 
<a href="./BodyContent"><Button type="submit" className="bg-black text-white mt-4 py-1 px-3 r"> Back </Button> </a> 
  </div>
    <Footer/>
  </div>
  )
}

export default ScienceFictionBooks
