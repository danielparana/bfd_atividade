import { motion, AnimatePresence } from "framer-motion";

export const Toast = ({ isVisible, onClose }) => (
  //precisa do AnimatePresence em volta pro "exit" funcionar [cite: 47]
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        [cite_start]//o exit faz o slide pra fora antes do React tirar ele do DOM [cite: 47]
        exit={{ opacity: 0, x: 100 }}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '15px 25px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <span> Deu tudo certo!</span>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          >
            X
          </button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
