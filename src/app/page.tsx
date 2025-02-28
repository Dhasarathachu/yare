import Image from "next/image";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-semibold text-blue-600 mb-6">App Pages</h1>
        <p className="text-lg text-gray-800 text-center mb-8 max-w-4xl">
          Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football generally means the form of football that is the most popular where the word is used. Sports commonly called football include association football (known as soccer in Australia, Canada, South Africa, the United States, and sometimes in Ireland and New Zealand); Australian rules football; Gaelic football; gridiron football (specifically American football, arena football, or Canadian football); International rules football; rugby league football; and rugby union football. These various forms of football share, to varying degrees, common origins and are known as "football codes".
        </p>
        <button className="bg-cyan-500 text-white font-semibold rounded-lg py-2 px-6 hover:bg-cyan-600 transition duration-300">
          <a href="/home">Home aaa</a>
        </button>
      </div>
    </>
  );
}
