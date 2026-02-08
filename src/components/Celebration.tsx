import { useEffect, useState } from 'react';
import { Heart, Sparkles, Download } from 'lucide-react';

export default function Celebration() {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const newConfetti = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2
    }));
    setConfetti(newConfetti);

    setTimeout(() => setShowMessage(true), 500);

    const audio = new Audio();
    audio.play().catch(() => {});
  }, []);

  const downloadCertificate = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.fillStyle = '#FDF2F8';
      ctx.fillRect(0, 0, 800, 600);

      ctx.fillStyle = '#EC4899';
      ctx.font = 'bold 48px cursive';
      ctx.textAlign = 'center';
      ctx.fillText('💕 Valentine Certificate 💕', 400, 100);

      ctx.font = '32px cursive';
      ctx.fillStyle = '#DB2777';
      ctx.fillText('Jayu', 400, 200);
      ctx.fillText('is officially', 400, 250);
      ctx.fillText('My Valentine', 400, 300);
      ctx.fillText('Forever & Always', 400, 350);

      ctx.font = '24px cursive';
      ctx.fillStyle = '#F472B6';
      ctx.fillText(`Date: 14-02-2026`, 400, 450);
      ctx.fillText('Signed with all my love 💖', 400, 500);

      const link = document.createElement('a');
      link.download = 'Valentine-Certificate-Jayu.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200">
      {confetti.map((item) => (
        <div
          key={item.id}
          className="absolute w-3 h-3 animate-confetti"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            backgroundColor: ['#EC4899', '#F472B6', '#FBBF24', '#A78BFA'][Math.floor(Math.random() * 4)]
          }}
        />
      ))}

      <div className="max-w-4xl w-full relative z-10 text-center">
        {showMessage && (
          <div className="animate-bounce-in">
            <div className="mb-8">
              <div className="text-9xl mb-4 animate-spin-slow">
                💖
              </div>
              <div className="flex justify-center gap-4 mb-4">
                <span className="text-7xl animate-jump">🐱</span>
                <span className="text-7xl animate-jump animation-delay-200">🎉</span>
                <span className="text-7xl animate-jump animation-delay-400">🐱</span>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 border-4 border-pink-300">
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl font-bold text-pink-600 mb-6 animate-pulse-slow" style={{ fontFamily: 'cursive' }}>
                  YAYYYY! 💕
                </h1>

                <div className="flex justify-center gap-3 mb-6">
                  {[...Array(7)].map((_, i) => (
                    <Heart
                      key={i}
                      className="w-8 h-8 text-pink-500 animate-ping"
                      fill="currentColor"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <p className="text-3xl md:text-4xl text-pink-600 font-bold" style={{ fontFamily: 'cursive' }}>
                  Jayu, you just made me the happiest person alive!
                </p>

                <p className="text-2xl md:text-3xl text-pink-500" style={{ fontFamily: 'cursive' }}>
                  Happy Valentine's Day, My Love! 💖
                </p>

                <div className="flex justify-center gap-2 my-6">
                  <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
                  <Sparkles className="w-6 h-6 text-pink-400 animate-pulse animation-delay-200" />
                  <Sparkles className="w-6 h-6 text-pink-400 animate-pulse animation-delay-400" />
                </div>

                <p className="text-3xl md:text-4xl text-pink-600 font-bold italic" style={{ fontFamily: 'cursive' }}>
                  Forever sounds perfect with you... 💗
                </p>
              </div>

              <div className="mt-12 space-y-4">
                <p className="text-xl text-pink-500" style={{ fontFamily: 'cursive' }}>
                  Every love story is beautiful, but ours is my favorite
                </p>

                <button
                  onClick={downloadCertificate}
                  className="group bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-bold text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
                >
                  <Download className="w-6 h-6" />
                  Download Valentine Certificate
                  <Heart className="w-6 h-6 group-hover:animate-ping" fill="currentColor" />
                </button>
              </div>

              <div className="mt-8 pt-8 border-t-2 border-pink-200">
                <p className="text-2xl text-pink-600 italic" style={{ fontFamily: 'cursive' }}>
                  To infinity and beyond with you, Jayu 🚀💕
                </p>
              </div>
            </div>

            <div className="mt-8 text-pink-600 text-lg" style={{ fontFamily: 'cursive' }}>
              Here's to creating a lifetime of beautiful memories together... 💖
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes confetti {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes jump {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-confetti {
          animation: confetti linear infinite;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }

        .animate-jump {
          animation: jump 1s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
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
