import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import db from '../services/firebase'

function ItemListContainer(props) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)


    const { side } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = side ? (
            query(collection(db, 'items'), where('side', '==', side))
        ) : collection(db, 'items')

        getDocs(collectionRef).then(response => {
            const productsFromFS = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setItems(productsFromFS)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [side])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <ul>
                <ItemList items={items} />
            </ul>

        </div>
    )
}

export default ItemListContainer