import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

import { getDoc, doc } from 'firebase/firestore'
import db from '../services/firebase'

function ItemDetailContainer() {
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams()
  useEffect(() => {
    setLoading(true)

    //DESDE FIREBASE
    const docRef = doc(db, 'items', id)
    console.log(docRef)


    getDoc(docRef).then(doc => {
      const productFB = { id: doc.id, ...doc.data() }
      setItem(productFB)
    }).catch(error => {
      console.log(error)
    }).finally(()=>{
      setLoading(false)
    })

    //DESDE LOCAL

    // getProductsById(param.id).then(response => {
    //   setItem(response)
    // }).catch((error) => {
    //   console.log(error)
    // }).finally(() => {
    //   setLoading(false)
    // })
  }, [id])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <ItemDetail {...item} />
    </div>
  )
}

export default ItemDetailContainer