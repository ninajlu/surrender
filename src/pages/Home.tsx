import { Link } from 'react-router-dom';
import { HelpBuoyOutline } from 'react-ionicons'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white">
      <nav className="bg-green-600 p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl font-bold text-center">Surrender</h1>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-20 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Make Better Decisions
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-20 max-w-2xl mx-auto leading-relaxed">
            Let friends or fate guide your choices. Stop overthinking and start deciding.
          </p>
          
          <div className="flex justify-center items-center mb-20">
            <div className="p-8 rounded-full bg-white/50 backdrop-blur-sm shadow-xl">
              <HelpBuoyOutline
                height="160px"
                width="160px"
                color="#16a34a"
                className="animate-bounce"
              />
            </div>
          </div>
          
          <div className="space-y-6 max-w-md mx-auto">
            <button 
              className="w-full bg-green-600 text-white text-lg font-bold py-5 px-8 rounded-xl hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Ask Friends
            </button>
            <button 
              className="w-full bg-white text-green-600 text-lg font-bold py-5 px-8 rounded-xl hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-green-600"
            >
              Roll the Dice
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all">
            <div className="text-5xl mb-6">🤝</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Friend Polling</h3>
            <p className="text-gray-600 text-lg">Get trusted opinions from your friends when you're stuck with a decision.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all">
            <div className="text-5xl mb-6">🎲</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Random Choice</h3>
            <p className="text-gray-600 text-lg">Let fate decide when you can't choose between equally good options.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all">
            <div className="text-5xl mb-6">⚡</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Decisions</h3>
            <p className="text-gray-600 text-lg">Stop overthinking and make decisions faster with confidence.</p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-24 bg-white p-12 rounded-2xl shadow-lg">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h3>
          <div className="space-y-12">
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl font-bold shrink-0">1</div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Enter Your Decision</h4>
                <p className="text-gray-600 text-lg">Type in the decision you're struggling with and your options.</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl font-bold shrink-0">2</div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Choose Your Method</h4>
                <p className="text-gray-600 text-lg">Select whether to ask friends or let the dice decide for you.</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl font-bold shrink-0">3</div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Get Your Answer</h4>
                <p className="text-gray-600 text-lg">Receive instant feedback and make your decision with confidence.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-600 border-t pt-8">
          <Link to="/privacy-policy" className="text-green-600 hover:text-green-700 underline">
            Privacy Policy
          </Link>
          <p className="mt-4">© 2024 Surrender. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}