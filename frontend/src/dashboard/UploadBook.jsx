import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea, FileInput } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [ "Fantasy Books", "History Books", "Horror Books", "Romance Novels", "Science Fiction Books"];
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData();
    formData.append("bookTitle", form.bookTitle.value);
    formData.append("authorName", form.authorName.value);
    formData.append("category", selectedBookCategory);
    formData.append("bookDescription", form.bookDescription.value);
    formData.append("price", form.price.value);
    formData.append("fileupload", form.fileupload.files[0]);

    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        alert("Book uploaded successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Error uploading book:", error);
      });
  };

  return (
    <div className='px-4 my-6 bg-gray-400 mb-2 block'>
      <h2 className='mb-8 text-3xl font-bold  font-family-Times New Roman'>Upload A Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1150px] flex-col flex-wrap gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
          </div>
        </div>

        <div className='lg:w-1/6'>
          <div className="mb-2 block">
            <Label htmlFor="fileupload" value="Upload file" />
          </div>
          <FileInput id="fileupload" name="fileupload"  accept=".svg, .png, .jpg, .gif, .jpeg" required />
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput id="price" name='price' type="number" placeholder="Price" step="0.01" required />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="category" value="Category" />
            </div>
            <Select id='category' name='category' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {bookCategories.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Select>
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea className='w-half' id="bookDescription" name="bookDescription" placeholder="comment..." required rows={2}  />
        </div>

        <div>
          <Button type="submit" className="mt-5 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-3 py-1 text-center w-full">
            Upload Book
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UploadBook;
