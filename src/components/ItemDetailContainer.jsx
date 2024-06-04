import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import datos from '../data/photos.json'
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = () => {

    //se recibe el itemID por parametro
    let { itemID } = useParams();

    let [foto, setFoto] = useState();

    useEffect(() => {
        setTimeout(() => {
            setFoto(datos.find((ph) => ph.id === parseInt(itemID)));
          }, 1500);
        

    }, [itemID])




    return (

        <div>
            {foto ? <ItemDetail photo={foto} /> : "Ampliando Fotografía..."}
        </div>
    )
}
