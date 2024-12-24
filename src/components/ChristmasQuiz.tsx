import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronRight } from 'lucide-react';

interface Story {
  question: string;
  options: string[];
  correctAnswer: number;
  anecdote: string;
}

const stories: Story[] = [
  {
    question: "¿Cuál fue la comida especial que preparó papá este año?",
    options: [
      "Asado en familia",
      "Lechón",
      "Pizza casera",
      "Todo lo anterior, porque siempre da lo mejor"
    ],
    correctAnswer: 1,
    anecdote: "¡Cristian es el chef oficial de la casa! No importa si es asado, lechón o pizza, siempre pone su amor en cada plato. El lechón navideño es su obra maestra anual. 🐷"
  },
  {
    question: "¿Cuál es el plato navideño favorito de Cristian?",
    options: [
      "Vitel Toné clásico",
      "Asado al aire libre",
      "Pan dulce",
      "Ensalada rusa"
    ],
    correctAnswer: 1,
    anecdote: "Cuando se trata de asado, papá puede convertir cualquier lugar en una parrilla. ¡Es su manera favorita de celebrar y unir a la familia!"
  },
  {
    question: "¿Qué es lo que más valora papá en Navidad?",
    options: [
      "Una remera de Boca",
      "Un reloj",
      "Su familia: hijos y nietos",
      "Un espejo para admirar su cara"
    ],
    correctAnswer: 2,
    anecdote: "Hace más de 30 años, papá comenzó su travesía como padre. Hoy, con cinco hijos y dos nietos, su amor por la familia sigue creciendo. Catalina y Valentino son la luz de sus ojos. 💝"
  }
];

const ChristmasQuiz = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnecdote, setShowAnecdote] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setTimeout(() => {
      setShowAnecdote(true);
    }, 1000);
  };

  const nextStory = () => {
    if (currentStory < stories.length - 1) {
      setCurrentStory(currentStory + 1);
      setSelectedAnswer(null);
      setShowAnecdote(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto mt-16"
    >
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <MessageCircle className="w-6 h-6" />
        Anécdotas Navideñas
      </h3>

      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h4 className="text-xl text-white mb-4">{stories[currentStory].question}</h4>

            <div className="space-y-3">
              {stories[currentStory].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 rounded-lg text-left transition-colors ${
                    selectedAnswer === null
                      ? 'bg-white/20 hover:bg-white/30 text-white'
                      : index === stories[currentStory].correctAnswer
                      ? 'bg-green-500/50 text-white'
                      : selectedAnswer === index
                      ? 'bg-red-500/50 text-white'
                      : 'bg-white/20 text-white/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {showAnecdote && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-white/20 rounded-lg text-white"
              >
                <p>{stories[currentStory].anecdote}</p>
                {currentStory < stories.length - 1 && (
                  <button
                    onClick={nextStory}
                    className="mt-4 flex items-center gap-2 text-white/80 hover:text-white"
                  >
                    Siguiente anécdota <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ChristmasQuiz;