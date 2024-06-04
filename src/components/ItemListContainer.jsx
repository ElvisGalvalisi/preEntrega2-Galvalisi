import { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import datos from '../data/photos.json'
import cat from '../data/categorias.json'
import { useParams } from 'react-router-dom'


//recibe la prop del padre por parámetro.
export const ItemListContainer = ({ greeting }) => {

  //se recibe el id de categoria por parámetro en el useParams
  let { deporteID } = useParams();

  const [titulo, setTitulo] = useState("FOTOS")

  let [fotos, setFotos] = useState([])

  const buscarFotos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(datos)
      }, 1500);
    })
  }

  useEffect(() => {
    buscarFotos()
      .then((res) => {
        if (!deporteID) {
          setTitulo("FOTOS")
          setFotos(res)


        } else {
          setTitulo(cat.find((categ)=> categ.id === deporteID).nombre)
          setFotos(res.filter((ph) => ph.evento.nombre === deporteID))

        }

      })



  }, [deporteID]);



  return (

    <div className="photo-container">
      {/*<h1> {greeting} </h1>*/}
      <h2 className='titulo-foto'>{titulo}</h2>

      <ItemList fotos={fotos} />

    </div>
  )
}
