import { Heart } from 'lucide-react';

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-up"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        >
          <Heart
            className="text-pink-300 opacity-40"
            fill="currentColor"
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`
            }}
          />
        </div>
      ))}

      <style>{`
        @keyframes float-up {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-float-up {
          animation: float-up 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
