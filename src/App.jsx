
import { ItemListContainer } from './components/ItemListContainer'
import { Header } from './components/Header'
import { Footer } from './components/Footer'


function App() {

  return (
    <>

      <Header /> 

      <ItemListContainer greeting="Hola, soy una prop" /> 

      <Footer /> 
    </>
  )
}

export default App
