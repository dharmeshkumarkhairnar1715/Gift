import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface QuestionFlowProps {
  onComplete: () => void;
}

export default function QuestionFlow({ onComplete }: QuestionFlowProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResponse, setShowResponse] = useState(false);
  const [responseText, setResponseText] = useState('');
  const [catEmoji, setCatEmoji] = useState('🐱');

  const questions = [
    {
      question: "How are you feeling today, Jayu? 💖",
      options: [
        { text: "😊 Happy", response: "Your happiness makes my whole world brighter, Jayu!", cat: "😺" },
        { text: "😴 Sleepy", response: "I wish I could be there to let you rest on my shoulder 💕", cat: "😴" },
        { text: "🥰 Missing someone", response: "I'm missing you too, every single moment we're apart...", cat: "🥺" },
        { text: "😌 Calm", response: "You bring such peace to my life, my love", cat: "😌" },
        { text: "😏 Feeling romantic", response: "Perfect! Because I'm about to make it even more romantic 💗", cat: "😻" }
      ]
    },
    {
      question: "What makes your heart skip a beat, Jayu? 💕",
      options: [
        { text: "🍫 Chocolate", response: "You're sweeter than any chocolate could ever be", cat: "😋" },
        { text: "🐱 Cats", response: "Well, I hope this little cat made website makes you smile!", cat: "🐱" },
        { text: "😌 Me", response: "Jayu... you just made my heart explode with happiness! 💗", cat: "😻" },
        { text: "🤗 Hugs", response: "I wish I could hug you right now and never let go", cat: "��" },
        { text: "💌 Love letters", response: "Then this whole website is a love letter just for you, Jayu", cat: "💝" }
      ]
    },
    {
      question: "Do you know how deeply I love you, Jayu? 💝",
      options: [
        { text: "🥺 Yes", response: "But let me keep showing you every single day...", cat: "🥰" },
        { text: "💌 Tell me more", response: "Jayu, you are my favorite hello and my hardest goodbye. You're my safe place, my greatest adventure, and my heart's home.", cat: "😻" },
        { text: "😏 I need proof", response: "This whole website is just the beginning of proving it to you forever 💕", cat: "😽" }
      ]
    },
    {
      question: "What's your favorite thing about us, Jayu? 💗",
      options: [
        { text: "🌙 Late night talks", response: "Those moments with you are pure magic, Jayu", cat: "🌟" },
        { text: "😂 Our laughter", response: "Your laugh is the most beautiful sound in my universe", cat: "😸" },
        { text: "💑 Everything", response: "Jayu, you just melted my heart completely!", cat: "😻" },
        { text: "🤝 How you understand me", response: "You see me like no one else ever has, and I love you for it", cat: "🥰" }
      ]
    },
    {
      question: "If I could give you anything right now, what would make you smile, Jayu? 💖",
      options: [
        { text: "🌹 Flowers", response: "I'd give you a garden of roses, each one representing a reason I love you", cat: "🌺" },
        { text: "⏰ More time together", response: "Jayu, I'd give you forever and it still wouldn't be enough", cat: "⏳" },
        { text: "💋 A kiss", response: "Consider this my virtual kiss, until I can give you a real one 💋", cat: "😘" },
        { text: "🌟 The moon", response: "For you, Jayu, I'd pull down the stars and moon from the sky", cat: "✨" }
      ]
    }
  ];

  const handleAnswer = (option: typeof questions[0]['options'][0]) => {
    const newAnswers = [...answers, option.text];
    setAnswers(newAnswers);
    setResponseText(option.response);
    setCatEmoji(option.cat);
    setShowResponse(true);

    setTimeout(() => {
      setShowResponse(false);
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          onComplete();
        }
      }, 300);
    }, 3000);
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {!showResponse ? (
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200 animate-scale-in">
            <div className="text-center mb-8">
              <div className="text-7xl mb-4 animate-bounce">
                🐱
              </div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-pink-400" />
                <span className="text-pink-400 font-semibold">Question {currentQuestion + 1} of {questions.length}</span>
                <Sparkles className="w-5 h-5 text-pink-400" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 text-center mb-8" style={{ fontFamily: 'cursive' }}>
              {currentQ.question}
            </h2>

            <div className="space-y-4">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full bg-gradient-to-r from-pink-100 to-pink-200 hover:from-pink-200 hover:to-pink-300 text-pink-700 font-semibold text-xl px-6 py-4 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-pink-300"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200 animate-scale-in">
            <div className="text-center">
              <div className="text-8xl mb-6 animate-bounce">
                {catEmoji}
              </div>
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-pink-500 animate-ping" fill="currentColor" />
              </div>
              <p className="text-2xl md:text-3xl text-pink-600 font-semibold" style={{ fontFamily: 'cursive' }}>
                {responseText}
              </p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
