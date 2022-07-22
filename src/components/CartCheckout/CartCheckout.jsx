import React, { useState, useContext } from 'react'
import CartContext from '../Utils/CartContext'
import './CartCheckout.css'

import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import db from '../services/firebase'
import { useNavigate } from 'react-router-dom'

function CartCheckout() {
  const { cart, totalPrice, setCart } = useContext(CartContext)
  const total = totalPrice()

  let navigate = useNavigate()
  function handleSubmit(e){
    e.preventDefault()
  const myOrder = {
    buyer:{
      name:e.target.elements.nombre.value,
      email:e.target.elements.email.value,
      phone:e.target.elements.telefono.value,
      address:e.target.elements.direccion.value,
    },
    items:cart,
    total:total
  }
  handleOrder(myOrder)
  }
  //######################
  const handleOrder = (order)=>{

    const collectionRef = collection(db, 'orders')

    addDoc(collectionRef, order).then(({ id }) =>{
    console.log(id)
    
    const batch = writeBatch(db)

    const ids = cart.map(prod => prod.id)

    const outOfStock = []

    const productsInOrderRef = collection(db, 'items')
    getDocs(query(productsInOrderRef, where(documentId(), 'in', ids))).then(response=>{
      response.docs.forEach(doc =>{
        const dataDoc = doc.data()
        const item = cart.find(prod => prod.id === doc.id)
        const itemQantity = item.quantity

        if(dataDoc.stock >= itemQantity){
          batch.update(doc.ref, { stock: dataDoc.stock - itemQantity})
        } else{
          outOfStock.push({id: doc.id, ...dataDoc})
        }
      })
    })
    // .then(()=>{
    //   if(outOfStock.length ===0){
    //     const collectionRef = collection(db, 'orders')

    //     return addDoc(collectionRef, order)
    //   } else {
    //     return Promise.reject({
    //       type: 'out_of_stock',
    //       products: outOfStock
    //     })
    //   }
    // })
    .then(()=>{
      batch.commit()
      alert("realizado con exito")
      setCart([])
      navigate("/")
    }). catch(error=>{
      if(error.type === 'out_of_stock'){
        alert('No hay stock de ese producto')
      } else{
        console.log(error)
      }
    })
    })
  }
  //######################

  return (
    <div className='form_container'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Please fill this form so we can send the product/s to your galaxy</h2>
        <input className='form_input' type="text" name='nombre' placeholder='nombre'/>
        <input className='form_input' type="text" name='email' placeholder='email'/>
        <input className='form_input' type="text" name='telefono' placeholder='telefono'/>
        <input className='form_input' type="text" name='direccion' placeholder='direccion'/>
        <input className='form_input submit' type="submit" value="CONFIRMAR" />
      </form>
    </div>
  )
}

export default CartCheckout