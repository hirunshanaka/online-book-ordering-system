import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);

  // Delete book 
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      alert('Book deleted successfully');

      setAllBooks(allBooks.filter(book => book._id !== id));
    });
  };

  return (
    <div className="bg-gray-400 px-3 my-6 mb-2 block" >
    <div className='px-4 my-12 '>
      
      <h2 className='mb-8 text-3xl font-bold  font-family-Times New Roman, Times, serif'>Manage Your Books</h2>
      {/* Table for book data */}
      <Table className='lg:w-[1120px]'>
        <Table.Head className='text-left'>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Edit or Manage</Table.HeadCell>
        </Table.Head>
        
        <Table.Body className="divide-y">
          {allBooks.map((book, index) => (
            <Table.Row key={book._id}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{book.bookTitle}</Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>{book.price}</Table.Cell> {/* Assuming price is static */} 
              <Table.Cell>
                
                <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
          
        </Table.Body>
      </Table>
    </div>
    </div>
  );
}

export default ManageBook;
