import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface RomanticBuildUpProps {
  onComplete: () => void;
}

export default function RomanticBuildUp({ onComplete }: RomanticBuildUpProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  const lines = [
    "From the moment you came into my life, Jayu...",
    "Everything became softer, brighter, happier...",
    "You turned my ordinary days into extraordinary memories...",
    "Your smile became my favorite view...",
    "Your voice became my favorite sound...",
    "Your presence became my safe haven...",
    "You are my peace and my chaos in the best way...",
    "My favorite distraction and my greatest motivation...",
    "With you, Jayu, forever doesn't seem long enough... 💕"
  ];

  useEffect(() => {
    lines.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index]);
      }, index * 1500);
    });

    setTimeout(() => {
      onComplete();
    }, lines.length * 1500 + 2000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Heart className="w-screen h-screen text-pink-400" />
      </div>

      <div className="max-w-3xl w-full relative z-10">
        <div className="text-center mb-12">
          <div className="text-7xl mb-4 animate-float">
            <span className="inline-block animate-wiggle">🐱</span>
            <span className="inline-block mx-2 text-6xl">💗</span>
            <span className="inline-block animate-wiggle animation-delay-500">🐱</span>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200 space-y-6">
          {lines.map((line, index) => (
            <p
              key={index}
              className={`text-2xl md:text-3xl text-pink-600 font-semibold text-center transition-all duration-1000 ${
                visibleLines.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ fontFamily: 'cursive' }}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Heart className="w-16 h-16 text-pink-500 animate-pulse" fill="currentColor" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}
