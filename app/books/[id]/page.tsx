import Link from "next/link";

export default function BookDetailPage({ params }: { params: { id: string } }) {
  // This is a placeholder — fetch book, lessons, and dictionary using the id
  const book = {
    title: "Book Title",
    author: "Author",
    createdAt: "April 10, 2024",
    lessons: ["Lesson 1", "Lesson 2", "Lesson 3"],
    dictionary: [
      { word: "Word", meaning: "Meaning" },
      { word: "Word", meaning: "Meaning" },
      { word: "Word", meaning: "Meaning" },
    ],
  };

  return (
    <div className="min-h-screen bg-[#fbdca9] text-[#4a3222] p-6 md:p-16 font-serif">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">{book.title}</h1>
          <p className="mt-1 text-lg">{book.author} | Reading started on {book.createdAt}</p>
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
          <button className="bg-[#a95f20] text-white px-4 py-2 rounded-lg font-semibold border border-[#4a3222] hover:bg-[#8b5a2b]">
            + Add Lesson
          </button>
        </div>
        <div className="space-y-3">
          {book.lessons.map((lesson, index) => (
            <div key={index} className="p-3 border border-[#4a3222] rounded-lg bg-[#fcdda9]">
              {lesson}
            </div>
          ))}
        </div>
        {/* Pagination (static placeholder) */}
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
          <button className="bg-[#a95f20] text-white px-4 py-2 rounded-lg font-semibold border border-[#4a3222] hover:bg-[#8b5a2b]">
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
            {book.dictionary.map((entry, index) => (
              <tr key={index} className="border-b border-[#4a3222]">
                <td className="py-2">{entry.word}</td>
                <td className="py-2">{entry.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination (static placeholder) */}
        <div className="flex justify-center space-x-4 mt-4 text-xl">
          <button>{"<"}</button>
          <button className="font-bold">1</button>
          <button>2</button>
          <button>3</button>
          <button>{">"}</button>
        </div>
      </div>
    </div>
  );
}
