
import { Item } from "./Item"



export const ItemList = ({ fotos }) => {


  return (

    <div className='fotos-cuadricula'>
      {
        fotos.length > 0 ?
          fotos.map(foto => {
            return <Item key={foto.id} foto={foto} />
         
          })
          : <h3>Cargando fotografías...</h3>
      }
    </div>

  )
}
