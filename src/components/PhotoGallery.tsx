import { useState, useEffect } from 'react';
import { Heart, Image } from 'lucide-react';
import myImage1 from "../assets/img1.jpg";
import myImage2 from "../assets/img2.jpg";
import myImage3 from "../assets/img3.jpg";

interface PhotoGalleryProps {
  onComplete: () => void;
}

export default function PhotoGallery({ onComplete }: PhotoGalleryProps) {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [
    {
      url: myImage1,
      caption: "Every moment with you is special, Jayu"
    },
    {
      url: myImage2,
      caption: "You make my heart smile"
    },
    {
      url: myImage3,
      caption: "Forever grateful for you"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 15000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-pink-600 mb-4" style={{ fontFamily: 'cursive' }}>
            Our Beautiful Memories, Jayu 💕
          </h2>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border-4 border-pink-200 animate-scale-in">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 bg-pink-100 px-6 py-3 rounded-full">
              <Image className="w-5 h-5 text-pink-500" />
              <span className="text-pink-600 font-semibold">Photo Gallery Space</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-pink-200 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <img
  src={photo.url}
  alt={photo.caption}
  className="w-full h-full object-cover"
/>

                </div>
                <div className="mt-3 text-center">
                  <p className="text-pink-600 font-semibold" style={{ fontFamily: 'cursive' }}>
                    {photo.caption}
                  </p>
                </div>
                <div className="absolute -top-2 -right-2">
                  <Heart className="w-8 h-8 text-pink-500 animate-pulse" fill="currentColor" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-pink-500 text-lg">
              <span className="animate-bounce">💕</span>
              <span style={{ fontFamily: 'cursive' }}>You’re not just pretty… you’re peace.</span>
              <span className="animate-bounce animation-delay-200">💕</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-pink-600 text-lg" style={{ fontFamily: 'cursive' }}>
          Creating more memories to fill this gallery... 💗
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}
