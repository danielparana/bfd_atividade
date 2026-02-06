import { motion } from "framer-motion";

// --- PARTE 1: Card de Boas-vindas ---
export const WelcomeCard = () => (
  <motion.div
    [cite_start]// utilizeei initial e animate pra ele vir de baixo pra cima [cite: 17]
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }}
    [cite_start]// o transition aqui tá com 1.2s cravado como pediu o roteiro [cite: 17]
    transition={{ duration: 1.2 }}
    style={{
      padding: '20px',
      backgroundColor: '#2a2a2a',
      borderRadius: '12px',
      color: 'white',
      marginBottom: '20px'
    }}
  >
    <h2>E aí, beleza?</h2>
    <p>Esse card aqui apareceu usando as props básicas do motion.</p>
  </motion.div>
);

// --- PARTE 2 : Botão de Enviar ---
export const SubmitButton = () => (
  <motion.button
    [cite_start]// usei a seção de Gestures (whileHover e whileTap) pra dar o feedback [cite: 28]
    whileHover={{ scale: 1.05 }} // dá uma crescidinha quando passa o mouse
    whileTap={{ scale: 0.95 }}   // efeito de clique (diminui um pouco)
    style={{
      padding: '10px 25px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: '#646cff',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      marginBottom: '20px'
    }}
  >
    Enviar
  </motion.button>
);

// --- PARTE 3: Orquestração com Variants ---
// criei esse objeto pra não poluir o JSX, bem mais limpo [cite: 35, 37]
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // o staggerChildren é o segredo pro efeito de cascata nos itens [cite: 38]
      staggerChildren: 0.2 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const ItemList = () => {
  const items = ["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4", "Tarefa 5"];

  return (
    <motion.ul
      [cite_start]//passo as variantes do pai pros filhos aqui [cite: 39]
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ listStyle: 'none', padding: 0 }}
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants} 
          style={{
            background: '#444',
            margin: '5px 0',
            padding: '10px',
            borderRadius: '4px'
          }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};
