import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail';
import { doc, getDoc } from 'firebase/firestore'
import { dataBase } from '../firebase/config';


export const ItemDetailContainer = () => {

    //se recibe el itemID por parametro
    let { itemID } = useParams();

    let [foto, setFoto] = useState(undefined);

    let [cargando, setCargando] = useState(true);



    useEffect(() => {

        const docRef = doc(dataBase, 'photos', itemID)

        getDoc(docRef)
            .then((res) => {
                if (res.data()) {
                    setFoto({ ...res.data(), id: res.id });
                }
                setCargando(false);

            })

    }, [itemID])



    if (cargando) {
        return (
            <h2>Ampliando Fotografía...</h2>
        )
    } else if (foto) {
        return <ItemDetail photo={foto} />
    } else {
        return (
            <>
                <h2>La foto no se encuentra en el catálogo. </ h2>
                <Link to='/'>Volver</Link>
            </>
        )
    }

}
