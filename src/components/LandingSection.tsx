import { Heart, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

interface LandingSectionProps {
  onStart: () => void;
}

export default function LandingSection({ onStart }: LandingSectionProps) {
  const [catWave, setCatWave] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCatWave(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Heart className="w-96 h-96 text-pink-400 animate-pulse" />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <div className="mb-8 animate-bounce">
          <div className={`text-8xl transition-transform duration-500 ${catWave ? 'rotate-12' : '-rotate-12'}`}>
            🐱
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-pink-600 mb-4 animate-fade-in" style={{ fontFamily: 'cursive' }}>
          Hi Jayu, My Love 💕
        </h1>

        <p className="text-2xl md:text-3xl text-pink-500 mb-8 animate-fade-in-delay" style={{ fontFamily: 'cursive' }}>
          I made something special just for you...
        </p>

        <div className="flex items-center justify-center gap-2 mb-8 text-pink-400 animate-fade-in-delay-2">
          <Sparkles className="w-6 h-6 animate-pulse" />
          <span className="text-lg">Prepare your heart</span>
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>

        <button
          onClick={onStart}
          className="group relative bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-bold text-2xl px-12 py-6 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse-slow"
          style={{ fontFamily: 'cursive' }}
        >
          <span className="relative z-10 flex items-center gap-3">
            Start
            <Heart className="w-6 h-6 group-hover:animate-ping" fill="currentColor" />
          </span>
          <div className="absolute inset-0 rounded-full bg-pink-300 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }

        .animate-pulse-slow {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
