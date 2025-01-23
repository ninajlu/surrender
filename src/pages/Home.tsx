import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white">
      {/* Modern Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Surrender
            </h1>
            <Link 
              to="/privacy-policy" 
              className="text-sm text-gray-600 hover:text-green-600 transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
        {/* Hero Section with modern gradient */}
        <div className="text-center mb-20 md:mb-32 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 via-white to-green-100/50 blur-3xl"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Indecisive?
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 md:mb-20">
            Surrender is the <span className="text-green-600">antidote.</span>
          </h2>
          
          <div className="flex justify-center items-center mb-12 md:mb-20">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src={import.meta.env.BASE_URL + "playstore.png"}
                alt="Surrender Icon" 
                className="w-32 h-32 md:w-40 md:h-40 animate-bounce drop-shadow-xl"
              />
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6 max-w-sm mx-auto">
            <button 
              className="w-full bg-green-600 text-white text-base md:text-lg font-semibold py-4 md:py-5 px-6 md:px-8 rounded-2xl hover:bg-green-500 transition-all transform hover:scale-102 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] shadow-lg"
            >
              Ask Friends
            </button>
            <button 
              className="w-full bg-white text-green-600 text-base md:text-lg font-semibold py-4 md:py-5 px-6 md:px-8 rounded-2xl hover:bg-green-50 transition-all transform hover:scale-102 shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] border border-green-200"
            >
              Roll the Dice
            </button>
          </div>
        </div>

        {/* Features Section with glass morphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-32">
          <div className="backdrop-blur-md bg-white/70 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl md:text-5xl mb-4 md:mb-6">🤝</div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Collective Wisdom</h3>
            <p className="text-gray-600 text-base md:text-lg">Let your trusted circle guide you when your mind is clouded with options.</p>
          </div>
          
          <div className="backdrop-blur-md bg-white/70 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl md:text-5xl mb-4 md:mb-6">🎲</div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Surrender to the Universe</h3>
            <p className="text-gray-600 text-base md:text-lg">When all options seem equal, let fate be your guide. Embrace the freedom of letting go.</p>
          </div>
          
          <div className="backdrop-blur-md bg-white/70 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl md:text-5xl mb-4 md:mb-6">⚡</div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Instant Relief</h3>
            <p className="text-gray-600 text-base md:text-lg">Break free from analysis paralysis. Find peace in quick, intuitive choices.</p>
          </div>
        </div>

        {/* Demo Section with floating effect */}
        <div className="mb-20 md:mb-32 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
            See How It <span className="text-green-600">Works</span>
          </h3>
          <div className="relative mx-auto max-w-[280px] md:max-w-[300px] aspect-[1170/2532] animate-float">
            {/* iPhone frame with modern shadow */}
            <div className="absolute inset-0 bg-black rounded-[50px] md:rounded-[60px] shadow-[0_0_40px_rgba(0,0,0,0.2)] transition-transform duration-300">
              {/* Screen content */}
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-white m-[10px] md:m-[12px] rounded-[40px] md:rounded-[48px] overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] md:w-[126px] h-[30px] md:h-[37.33px] bg-black rounded-b-[20px] md:rounded-b-[24px] z-10"></div>
                {/* Video */}
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src={import.meta.env.BASE_URL + "surrender.mp4"} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Problem Statement Section */}
      <div className="relative py-32 md:py-40 overflow-hidden bg-gray-100 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-gray-100 to-white/50"></div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="mb-16 md:mb-20">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-relaxed">
              Endless choices in the modern world are leading to major decision paralysis.
            </p>
          </div>
          
          <p className="text-xl sm:text-2xl max-w-2xl mx-auto font-medium">
            Stop overthinking. <span className="text-green-600 font-semibold">Start surrendering.</span>
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4">
        {/* Footer with subtle styling */}
        <footer className="text-center text-gray-500 border-t border-gray-100 pt-6 md:pt-8">
          <p className="mt-3 md:mt-4 text-sm md:text-base">© 2024 Surrender. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}