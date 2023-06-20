import Modal from "./_modalComponent"
import useModal from "./_modalComponent/useModal"

function App() {
  const {isOpen, toggle} = useModal()

  return (
    <>
    <button onClick={()=> toggle()}>Open Modal</button>
    <Modal hide={toggle} isOpen={isOpen} modalTitle="Eu sou um modal" hasFooter >
     Eu sou um modal
    </Modal>
     </>
  )
}

export default App
