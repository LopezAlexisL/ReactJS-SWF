import React, { useContext } from 'react'
import ItemCart from '../ItemCart/ItemCart'
import CartContext from '../Utils/CartContext'

import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import db from '../services/firebase'
import { Link } from 'react-router-dom'

function ItemCartContainer() {
    const { cart, removeItem, totalPrice } = useContext(CartContext)
    const total = totalPrice()

    // const handleOrder = ()=>{
    //   const order = {
    //     buyer:{
    //       name: 'Alexis',
    //       email: 'ale@lop.com',
    //       phone: '123456',
    //       address: 'matienzo 123'
    //     },
    //     items: cart,
    //     total: total
    //   }
    //   const collectionRef = collection(db, 'orders')
  
    //   addDoc(collectionRef, order).then(({ id }) =>{
    //     console.log(id)
      
    //   const batch = writeBatch(db)

    //   const ids = cart.map(prod => prod.id)

    //   const outOfStock = []

    //   console.log(ids)
    //   const productsInOrderRef = collection(db, 'items')
    //   getDocs(query(productsInOrderRef, where(documentId(), 'in', ids))).then(response=>{
    //     console.log(response)
    //     response.docs.forEach(doc =>{
    //       const dataDoc = doc.data()
    //       const item = cart.find(prod => prod.id === doc.id)
    //       const itemQantity = item.quantity

    //       if(dataDoc.stock >= itemQantity){
    //         batch.update(doc.ref, { stock: dataDoc.stock - itemQantity})
    //       } else{
    //         outOfStock.push({id: doc.id, ...dataDoc})
    //       }
    //     })
    //   })
    //   .then(()=>{
    //     if(outOfStock.length ===0){
    //       const collectionRef = collection(db, 'orders')

    //       return addDoc(collectionRef, order)
    //     } else {
    //       return Promise.reject({
    //         type: 'out_of_stock',
    //         products: outOfStock
    //       })
    //     }
    //   }).then(({id})=>{
    //     batch.commit()
    //   }). catch(error=>{
    //     if(error.type === 'out_of_stock'){
    //       console.log('No hay stock de ese producto')
    //     } else{
    //       console.log(error)
    //     }
    //   })
    //   })
    // }


  return (
    <div>
        {cart.length > 0
                ?<>
                {cart.map(item =>
                    <div>
                      <div>
                        <ItemCart prop={item}/>
                        <button onClick={()=>removeItem(item.id)}>Borrar</button>
                      </div>
                    </div>
                )}
                <div>
                  Total: ${total}
                </div>
                <Link to='/cartcheckout'>End Buy</Link>

                </> 
                : <>
                
                
                <h1>Empty Cart</h1>
                </>
            }
    </div>
  )
}

export default ItemCartContainer