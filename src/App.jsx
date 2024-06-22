
import { ItemListContainer } from './components/ItemListContainer'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from './components/NotFound';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Carrito } from './components/Carrito';
import { CartProvider} from './context/CartContext';


function App() {


  return (
   
    <CartProvider> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/deporte/:deporteID' element={<ItemListContainer />} />  {/* deporte/:deporteID es lo que en la consigna es /categoria/:categoryId */}
          <Route path='/item/:itemID' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>

        {/*<ItemListContainer greeting="Hola, soy una prop" />*/}

        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
