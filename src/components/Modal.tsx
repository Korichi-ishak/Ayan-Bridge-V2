import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../contexts/ModalContext';

export const Modal = () => {
  const { isModalOpen, modalContent, hideModal } = useModal();

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={hideModal}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={hideModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-20"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.43 5.43a.996.996 0 00-1.41 0L12 10.59 5.98 4.57a.996.996 0 10-1.41 1.41L10.59 12l-6.02 6.02a.996.996 0 101.41 1.41L12 13.41l6.02 6.02a.996.996 0 101.41-1.41L13.41 12l6.02-6.02a.996.996 0 000-1.55z" />
              </svg>
            </button>
            <div>
              <AnimatePresence mode="wait">
                {modalContent}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 