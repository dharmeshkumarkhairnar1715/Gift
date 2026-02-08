import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface FinalQuestionProps {
  onYes: () => void;
}

export default function FinalQuestion({ onYes }: FinalQuestionProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonText, setNoButtonText] = useState('No');
  const [noAttempts, setNoAttempts] = useState(0);
  const [scale, setScale] = useState(1);

  const noTexts = [
    'No',
    'Are you sure? 🥺',
    'Really? 😢',
    'Please? 💕',
    'Just click YES! 😊',
    'Come on, Jayu... 💗',
    'You know you want to! 😘'
  ];

  useEffect(() => {
    setScale(1.2);
    const timer = setTimeout(() => setScale(1), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleNoHover = () => {
    const newAttempts = noAttempts + 1;
    setNoAttempts(newAttempts);

    if (newAttempts < noTexts.length) {
      setNoButtonText(noTexts[newAttempts]);
    }

    const randomX = Math.random() * 300 - 150;
    const randomY = Math.random() * 300 - 150;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200 animate-gradient"></div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="w-6 h-6 text-pink-400 opacity-60" />
          </div>
        ))}
      </div>

      <div className="max-w-3xl w-full relative z-10 text-center" style={{ transform: `scale(${scale})`, transition: 'transform 0.5s ease-out' }}>
        <div className="mb-8">
          <div className="text-8xl mb-4 animate-heartbeat">
            💖
          </div>
          <div className="flex justify-center gap-4 mb-4">
            <span className="text-6xl animate-bounce">🐱</span>
            <span className="text-6xl animate-bounce animation-delay-200">💕</span>
            <span className="text-6xl animate-bounce animation-delay-400">🐱</span>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 border-4 border-pink-300 animate-zoom-in">
          <h1 className="text-5xl md:text-7xl font-bold text-pink-600 mb-8 animate-pulse-slow" style={{ fontFamily: 'cursive' }}>
            Jayu, My Love...
          </h1>

          <div className="mb-12">
            <p className="text-3xl md:text-4xl text-pink-500 mb-4" style={{ fontFamily: 'cursive' }}>
              Will you be my Valentine? 💖
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <Heart className="w-8 h-8 text-pink-500 animate-ping" fill="currentColor" />
              <Heart className="w-8 h-8 text-pink-500 animate-ping animation-delay-200" fill="currentColor" />
              <Heart className="w-8 h-8 text-pink-500 animate-ping animation-delay-400" fill="currentColor" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative">
            <button
              onClick={onYes}
              className="group bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-3xl px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                YES 💕
                <Heart className="w-8 h-8 group-hover:animate-ping" fill="currentColor" />
              </span>
              <div className="absolute inset-0 bg-pink-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </button>

            <button
              onMouseEnter={handleNoHover}
              onClick={handleNoHover}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold text-3xl px-16 py-6 rounded-full shadow-lg transition-all duration-300"
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              {noButtonText}
            </button>
          </div>

          <div className="mt-8 text-pink-400 text-lg italic" style={{ fontFamily: 'cursive' }}>
            (Hint: The NO button is shy... it might run away! 😊)
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.1);
          }
        }

        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float-sparkle {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }

        .animate-zoom-in {
          animation: zoom-in 0.8s ease-out;
        }

        .animate-float-sparkle {
          animation: float-sparkle 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
