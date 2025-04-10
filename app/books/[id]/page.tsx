"use client";

import Link from "next/link";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function BookDetailPage() {
  const params = useParams();
  const bookId = params?.id as string;
  const { data, error, isLoading, mutate } = useSWR(`/api/books/${bookId}/details`, fetcher);

  const [isLessonOpen, setLessonOpen] = useState(false);
  const [isDictOpen, setDictOpen] = useState(false);
  const [lessonContent, setLessonContent] = useState("");
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleAddLesson = async () => {
    await fetch(`/api/books/${bookId}/lessons`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: lessonContent }),
    });
    setLessonOpen(false);
    setLessonContent("");
    mutate();
  };

  const handleAddDictionary = async () => {
    await fetch(`/api/books/${bookId}/dictionary`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ word, meaning }),
    });
    setDictOpen(false);
    setWord("");
    setMeaning("");
    mutate();
  };

  if (isLoading) return <p className="p-6 text-center">Loading...</p>;
  if (error) return <p className="p-6 text-center text-red-600">Failed to load book details</p>;

  const { lessons, dictionary, book } = data;

  return (
    <div className="min-h-screen bg-[#fbdca9] text-[#4a3222] p-6 md:p-16 font-serif">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">{book.title}</h1>
          <p className="mt-1 text-lg">{book.author || 'Unknown Author'} | Reading started on {new Date(book.createdAt).toLocaleDateString()}</p>
        </div>
        <Link href="/dashboard">
          <button className="bg-[#a95f20] text-white px-4 py-2 rounded-lg font-semibold border border-[#4a3222] hover:bg-[#8b5a2b]">
            Back
          </button>
        </Link>
      </div>

      {/* Lessons Section */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Lessons</h2>
          <button onClick={() => setLessonOpen(true)} className="bg-[#a95f20] text-white px-4 py-2 rounded-lg font-semibold border border-[#4a3222] hover:bg-[#8b5a2b]">
            + Add Lesson
          </button>
        </div>
        <div className="space-y-3">
          {lessons.map((lesson: any, index: number) => (
            <div key={lesson.id || index} className="p-3 border border-[#4a3222] rounded-lg bg-[#fcdda9]">
              {lesson.content}
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mt-4 text-xl">
          <button>{"<"}</button>
          <button className="font-bold">1</button>
          <button>2</button>
          <button>3</button>
          <button>{">"}</button>
        </div>
      </div>

      {/* Dictionary Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Dictionary</h2>
          <button onClick={() => setDictOpen(true)} className="bg-[#a95f20] text-white px-4 py-2 rounded-lg font-semibold border border-[#4a3222] hover:bg-[#8b5a2b]">
            + Add Word
          </button>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#4a3222]">
              <th className="py-2">Word</th>
              <th className="py-2">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {dictionary.map((entry: any, index: number) => (
              <tr key={entry.id || index} className="border-b border-[#4a3222]">
                <td className="py-2">{entry.word}</td>
                <td className="py-2">{entry.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center space-x-4 mt-4 text-xl">
          <button>{"<"}</button>
          <button className="font-bold">1</button>
          <button>2</button>
          <button>3</button>
          <button>{">"}</button>
        </div>
      </div>

      {/* Lesson Modal */}
      {isLessonOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 z-50">
          <div className="bg-[#fbdca9] p-4 md:p-6 rounded-lg max-w-[90%] md:w-96 shadow-lg relative">
            <button onClick={() => setLessonOpen(false)} className="absolute top-3 right-3 text-brown-800 text-xl font-bold">×</button>
            <h2 className="text-3xl text-brown-800 mb-4 text-center">Add Lesson</h2>
            <textarea value={lessonContent} onChange={(e) => setLessonContent(e.target.value)} className="w-full p-2 border border-brown-600 rounded-lg mb-3 bg-[#fcdda9]" placeholder="Lesson content" />
            <button onClick={handleAddLesson} className="mt-4 px-6 py-2 bg-[#a95f20] text-white font-semibold rounded-lg shadow-md hover:bg-brown-700 w-full">Save Lesson</button>
          </div>
        </div>
      )}

      {/* Dictionary Modal */}
      {isDictOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 z-50">
          <div className="bg-[#fbdca9] p-4 md:p-6 rounded-lg max-w-[90%] md:w-96 shadow-lg relative">
            <button onClick={() => setDictOpen(false)} className="absolute top-3 right-3 text-brown-800 text-xl font-bold">×</button>
            <h2 className="text-3xl text-brown-800 mb-4 text-center">Add Dictionary Entry</h2>
            <label className="block text-brown-800 font-semibold">Word</label>
            <input value={word} onChange={(e) => setWord(e.target.value)} className="w-full p-2 border border-brown-600 rounded-lg mb-3 bg-[#fcdda9]" />
            <label className="block text-brown-800 font-semibold">Meaning</label>
            <input value={meaning} onChange={(e) => setMeaning(e.target.value)} className="w-full p-2 border border-brown-600 rounded-lg mb-3 bg-[#fcdda9]" />
            <button onClick={handleAddDictionary} className="mt-4 px-6 py-2 bg-[#a95f20] text-white font-semibold rounded-lg shadow-md hover:bg-brown-700 w-full">Save Word</button>
          </div>
        </div>
      )}
    </div>
  );
}
