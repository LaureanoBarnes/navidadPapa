import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { playConfetti } from './utils/audio';
import Snowfall from './components/Snowfall';
import GiftBox from './components/GiftBox';
import ChristmasGarland from './components/ChristmasGarland';
import BackgroundMusic from './components/BackgroundMusic';
import ThemedGallery from './components/ThemedGallery';
import ChristmasCountdown from './components/ChristmasCountdown';
import ChristmasQuiz from './components/ChristmasQuiz';
import type { Photo } from './types';

const photosGrandpa: Photo[] = [
  { src: 'https://i.postimg.cc/7Y89n0Q8/Whats-App-Image-2024-12-19-at-18-22-28-1.jpg', caption: 'Una mañana tipica con la catalina' },
  { src: 'https://i.postimg.cc/Z5QwG2K2/Whats-App-Image-2024-12-19-at-18-22-23.jpg', caption: 'De compras con la Catalina' },
  { src: 'https://i.postimg.cc/GpqNLsJM/Whats-App-Image-2024-12-24-at-15-28-28.jpg', caption: 'Con el titino' },
  { src: 'https://i.postimg.cc/4d0Stk0V/Whats-App-Image-2024-12-24-at-15-28-28-1.jpg', caption: 'Con el titino' },
  { src: 'https://i.postimg.cc/Y0myzDcV/Whats-App-Image-2024-12-24-at-15-28-28-2.jpg', caption: 'Con el titino' },
  { src: 'https://i.postimg.cc/kD3Y1Nq5/Whats-App-Image-2024-12-24-at-15-28-29.jpg', caption: 'Con el titino' },
  { src: 'https://i.postimg.cc/tT1H85Qd/Whats-App-Image-2024-12-24-at-14-30-49.jpg', caption: 'Cumpleaños de Cata' },
  { src: 'https://i.postimg.cc/BbHfnnvX/Whats-App-Image-2024-12-24-at-14-30-49-1.jpg', caption: 'Cumpleaños de Cata' },
  { src: 'https://i.postimg.cc/xTGSr87Z/Whats-App-Image-2024-12-24-at-14-30-49-2.jpg', caption: 'Cumpleaños de Cata' },
  { src: 'https://i.postimg.cc/CxFpwYpx/Whats-App-Image-2024-12-24-at-14-30-50.jpg', caption: 'Cumpleaños de Cata' },
];

const photosDad: Photo[] = [
  { src: 'https://i.postimg.cc/6q2Zqhsj/Whats-App-Image-2024-12-19-at-18-22-20.jpg', caption: 'Con el amor de su vida 💘' },
  { src: 'https://i.postimg.cc/7Z4Bw0gM/Whats-App-Image-2024-12-19-at-18-22-27-2.jpg', caption: 'Asado en las vacaciones🍖' },
  { src: 'https://i.postimg.cc/L5ZPZQMY/Whats-App-Image-2024-12-19-at-18-22-27.jpg', caption: 'Vacaciones en la pileta 🌊' },
  { src: 'https://i.postimg.cc/mDKwqHL9/Whats-App-Image-2024-12-19-at-18-22-28.jpg', caption: 'De cumpleaños 🍾' },
  { src: 'https://i.postimg.cc/rFN1Gbrx/Whats-App-Image-2024-12-19-at-18-22-30-1.jpg', caption: 'En el egreso de sus hijos 👨‍🎓' },
  { src: 'https://i.postimg.cc/VNpnLPxQ/Whats-App-Image-2024-12-19-at-18-22-28-3.jpg', caption: 'En el egreso de sus hijos 👨‍🎓' },
  { src: 'https://i.postimg.cc/QCpvrY67/Whats-App-Image-2024-12-24-at-14-24-52.jpg', caption: 'De vacaciones en mendoza!!' },
];

const photosNietos: Photo[] = [
  { src: 'https://i.postimg.cc/BQ9LVg0p/Whats-App-Image-2024-12-19-at-18-22-23-1.jpg', caption: 'Catalina tomando mates en sus manañas con el abuelo 💝' },
  { src: 'https://i.postimg.cc/8CtL8rH5/Whats-App-Image-2024-12-19-at-18-22-26.jpg', caption: 'Catalina con sus galletas y el abuelo' },
  { src: 'https://i.postimg.cc/7Y3VshpC/Whats-App-Image-2024-12-19-at-18-22-29.jpg', caption: 'Valentino posando para el abuelo' },
  { src: 'https://i.postimg.cc/hvFLMRsb/Whats-App-Image-2024-12-19-at-18-22-29-1.jpg', caption: 'Valentino pasando el rato con el abuelo' },
  { src: 'https://i.postimg.cc/HsgftHx9/Whats-App-Image-2024-12-20-at-18-48-49.jpg', caption: 'Catalina tomando mates con el abuelo' },
  { src: 'https://i.postimg.cc/R0N80Zs4/Whats-App-Image-2024-12-20-at-18-45-03.jpg', caption: 'De viaje con la catalina y el abuelo' },

];

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ 
        width: window.innerWidth, 
        height: window.innerHeight 
      });
    };
    
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  const handleOpenGift = () => {
    playConfetti();
    setIsOpened(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 overflow-x-hidden">
      <BackgroundMusic />
      <Snowfall />
      <ChristmasGarland />

      <main className="container mx-auto px-4 py-12 relative">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white text-center mb-12"
        >
          🎄 ¡Feliz Navidad! 🎄
        </motion.h1>

        <ChristmasCountdown />

        <div className="flex justify-center mb-16">
          <GiftBox isOpened={isOpened} onOpen={handleOpenGift} />
        </div>

        <AnimatePresence>
          {isOpened && (
            <>
              <Confetti
                width={windowSize.width}
                height={windowSize.height}
                recycle={false}
                numberOfPieces={200}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="max-w-2xl mx-auto mb-16"
              >
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl text-center">
                  <h2 className="text-3xl font-bold text-red-600 mb-4">
                    🎉 ¡Sorpresa! 🎉
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Que tus días estén llenos de alegría y amor. 
                    ¡Este regalo viene con todo nuestro cariño para 
                    desearte una Navidad maravillosa Papá!
                  </p>
                </div>
              </motion.div>

              <div className="space-y-12">
                <ThemedGallery 
                  title="Cristian como abuelo baboso ❤️" 
                  photos={photosGrandpa} 
                />
                <ThemedGallery 
                  title="Cristian como papá 💙" 
                  photos={photosDad} 
                />
                <ThemedGallery 
                  title="nietos ❤️" 
                  photos={photosNietos} 
                />
              </div>

              <ChristmasQuiz />
            </>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;