import { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import datos from '../data/photos.json'

//recibe la prop del padre por parámetro.
export const ItemListContainer = ({ greeting }) => {

  let [fotos, setFotos] = useState([])

  const buscarFotos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(datos)

      }, 2000);
    })
  }
  
  useEffect(() => {
    buscarFotos()
      .then((res) => {
        setFotos(res)
      })

  }, []);



  return (

    <div className="photo-container">
      {/*<h1> {greeting} </h1>*/}
      <h2>FOTOS</h2>
      <ItemList fotos={fotos} />
     
    </div>
  )
}
