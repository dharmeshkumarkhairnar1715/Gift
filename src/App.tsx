import { useState, useEffect } from 'react';
import LandingSection from './components/LandingSection';
import QuestionFlow from './components/QuestionFlow';
import RomanticBuildUp from './components/RomanticBuildUp';
import PhotoGallery from './components/PhotoGallery';
import FinalQuestion from './components/FinalQuestion';
import Celebration from './components/Celebration';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [currentSection, setCurrentSection] = useState<'landing' | 'questions' | 'buildup' | 'gallery' | 'final' | 'celebration'>('landing');
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    document.title = "For My Love Jayu 💕";
  }, []);

  const handleStart = () => {
    setCurrentSection('questions');
    setMusicPlaying(true);
  };

  const handleQuestionsComplete = () => {
    setCurrentSection('buildup');
  };

  const handleBuildUpComplete = () => {
    setCurrentSection('gallery');
  };

  const handleGalleryComplete = () => {
    setCurrentSection('final');
  };

  const handleYes = () => {
    setCurrentSection('celebration');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100 relative overflow-x-hidden">
      <FloatingHearts />

      {currentSection === 'landing' && (
        <LandingSection onStart={handleStart} />
      )}

      {currentSection === 'questions' && (
        <QuestionFlow onComplete={handleQuestionsComplete} />
      )}

      {currentSection === 'buildup' && (
        <RomanticBuildUp onComplete={handleBuildUpComplete} />
      )}

      {currentSection === 'gallery' && (
        <PhotoGallery onComplete={handleGalleryComplete} />
      )}

      {currentSection === 'final' && (
        <FinalQuestion onYes={handleYes} />
      )}

      {currentSection === 'celebration' && (
        <Celebration />
      )}
    </div>
  );
}

export default App;
