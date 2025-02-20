export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-4xl font-semibold text-blue-600 mb-4">Home</h1>
            <p className="text-lg text-gray-700 text-center mb-6 max-w-3xl">
                Sportsman spirit is basically associated with behaviour and conducts that are within the rules of that particular sport. Sportsperson spirit wants athletes to lose graciously and be normal in winning. The other terms that are used for sportsman spirit are etiquicy and sportsmanship.
            </p>
            <button className="bg-cyan-500 text-white font-semibold rounded-lg py-2 px-4 hover:bg-cyan-600 transition duration-300">
                <a href="/">Back</a>
            </button>
        </div>
    )
}
