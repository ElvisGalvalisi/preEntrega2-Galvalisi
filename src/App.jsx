
import { ItemListContainer } from './components/ItemListContainer'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemList } from './components/ItemList';
import { SobreMi } from './components/SobreMi';
import { NotFound } from './components/NotFound';
import { ItemDetailContainer } from './components/ItemDetailContainer';


function App() {

  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/deporte/:deporteID' element={<ItemListContainer />} />  {/* deporte/:deporteID es lo que en la consigna es /categoria/:categoryId */}
        <Route path='/item/:itemID' element={<ItemDetailContainer />} />
        <Route path='/*' element={<NotFound />} />

        

      </Routes>

      {/*<ItemListContainer greeting="Hola, soy una prop" />*/}

      <Footer />
    </BrowserRouter>
  )
}

export default App
