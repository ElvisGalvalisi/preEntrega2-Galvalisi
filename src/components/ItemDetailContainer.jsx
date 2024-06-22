import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail';
import { doc, getDoc} from 'firebase/firestore'
import { db } from '../firebase/config';


export const ItemDetailContainer = () => {

    //se recibe el itemID por parametro
    let { itemID } = useParams();

    let [foto, setFoto] = useState();




    useEffect(() => {

        const docRef = doc(db, 'photos', itemID)

        getDoc(docRef)
        .then( (res)=>{
            setFoto({...res.data(), id: res.id })
        })   

    }, [itemID])




    return (

        <div>
            {foto ? <ItemDetail photo={foto} /> : "Ampliando Fotografía..."}
        </div>
    )
}
