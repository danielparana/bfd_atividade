import { useState } from 'react'
import { WelcomeCard, SubmitButton, ItemList } from './components/Animations'
import { Toast } from './components/Toast'

function App() {
  const [showToast, setShowToast] = useState(false)

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Estudos de Framer Motion 🚀</h1>
      
      <WelcomeCard />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <SubmitButton />
        
        <button onClick={() => setShowToast(true)}>
          Testar Toast (AnimatePresence)
        </button>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Minha Lista (Variants)</h3>
        <ItemList />
      </div>

      <Toast isVisible={showToast} onClose={() => setShowToast(false)} />
    </div>
  )
}

export default App
