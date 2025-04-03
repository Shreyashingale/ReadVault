"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const books = [
    "Book 1", "Book 2", "Book 3", "Book 4", "Book 5", "Book 6", "Book 7", "Book 8"
];

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    const booksPerPage = 4;

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    const totalPages = Math.ceil(books.length / booksPerPage);

    return (
        <div className="bg-[#fbdca9] min-h-screen p-8 font-serif">
            <Navbar />
            <div className="max-w-4xl mx-auto flex flex-wrap justify-between items-start">
                {/* Left Section - Dashboard */}
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <h1 className="text-4xl md:text-6xl text-brown-800">Dashboard</h1>
                    <hr className="my-2 border-brown-600" />

                    {/* Your Books Section */}
                    <h2 className="text-xl md:text-2xl font-semibold text-brown-700 mt-4">Your Books</h2>
                    <div className="mt-4 space-y-2">
                        <button className="mt-2 mb-3 px-6 py-3 bg-[#a95f20] text-white rounded-lg shadow-md hover:bg-brown-700" onClick={() => setIsOpen(true)}>
                            Add Book
                        </button>
                        {currentBooks.map((book, index) => (
                            <button
                                key={index}
                                className="block w-full text-left px-4 py-2 bg-[#fcdda9] border border-brown-600 rounded-lg text-brown-900 hover:bg-brown-300"
                            >
                                {book}
                            </button>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-5 flex justify-center items-center space-x-4 text-brown-900 text-lg font-semibold">
                        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="disabled:opacity-50">&lt;</button>
                        {[currentPage, currentPage + 1].map((page) => page <= totalPages ? (<span key={page} className="px-2">{page}</span>) : null)}
                        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="disabled:opacity-50">&gt;</button>
                    </div>
                </div>

                {/* Right Section - Bookshelf Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image src="/bookshelf.png" alt="Bookshelf" width={300} height={250} />
                </div>
            </div>

            {/* Divider */}
            <hr className="my-8 border-[#5e533a] border-t-2 mx-auto w-3/4" />

            {/* Open Lessons Section */}
            <div className="bg-[#fbdca9] p-8">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div className="w-1/2">
                        <h2 className="text-3xl font-bold text-brown-800">Open Lessons</h2>
                        <button className="mt-4 px-6 py-3 bg-[#a95f20] text-white rounded-lg shadow-md hover:bg-brown-700">
                            Open Lessons
                        </button>
                    </div>
                    <div className="w-1/2 flex justify-center">
                        <Image
                            src="/browse-books.png"
                            alt="Book"
                            width={350}
                            height={300}
                        />
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-8 border-[#5e533a] border-t-2 mx-auto w-3/4" />

            {/* Open Dictionary Section */}
            <div className="bg-[#fbdca9] p-8">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div className="w-1/2">
                        <h2 className="text-3xl font-bold text-brown-800">Open Dictionary</h2>
                        <button className="mt-4 px-6 py-3 bg-[#a95f20] text-white rounded-lg shadow-md hover:bg-brown-700">
                            Open Dictionary
                        </button>
                    </div>
                    <div className="w-1/2 flex justify-center">
                        <Image
                            src="/dictionary.png"
                            alt="Book"
                            width={250}
                            height={200}
                        />
                    </div>
                </div>
            </div>
            <div className="relative">

                {/* Popup Modal */}
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
                        <div className="bg-[#fbdca9] p-4 md:p-6 rounded-lg max-w-[90%] md:w-96 shadow-lg relative">

                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 right-3 text-brown-800 text-xl font-bold"
                            >
                                ×
                            </button>

                            <h2 className="text-3xl text-brown-800 mb-4 text-center">Add a Book</h2>

                            {/* Book Name */}
                            <label className="block text-brown-800 font-semibold">Book Name</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-brown-600 rounded-lg mb-3 bg-[#fcdda9]"
                            />

                            {/* Author Name */}
                            <label className="block text-brown-800 font-semibold">Author Name</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-brown-600 rounded-lg mb-3 bg-[#fcdda9]"
                            />

                            {/* Reading Start Date */}
                            <label className="block text-brown-800 font-semibold">Reading Start Date</label>
                            <input
                                type="date"
                                className="w-full p-2 border border-brown-600 rounded-lg mb-3 bg-[#fcdda9]"
                            />

                            {/* Status Dropdown */}
                            <label className="block text-brown-800 font-semibold">Status</label>
                            <select className="w-full p-2 border border-brown-600 rounded-lg mb-3 bg-[#fcdda9]">
                                <option>Not Started</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                            </select>

                            {/* Notes */}
                            <label className="block text-brown-800 font-semibold">Notes</label>
                            <textarea
                                className="w-full p-2 border border-brown-600 rounded-lg bg-[#fcdda9]"
                            ></textarea>

                            {/* Submit Button */}
                            <button className="mt-4 px-6 py-2 bg-[#a95f20] text-white font-semibold rounded-lg shadow-md hover:bg-brown-700 w-full">
                                Save Book
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Dashboard;
