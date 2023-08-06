import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PiBagLight } from 'react-icons/pi'
import './Favorite.css'
import { removeFromFavorites } from '../Slices/features/favoritesSlice'

export default function Favorite() {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites)

    const handleRemoveFromFavorites = (product) => {
        dispatch(removeFromFavorites(product))
    }

    return (
        <div className='favorite'>
            <h3 className='title'><PiBagLight /> My Cart</h3>
            {favorites.favorites.length > 0 ? (
                favorites.favorites.map((product) => {
                    return (
                        <div key={product.id} className='fav-content'>
                            <div className="first-part">
                                <h4>{product.category}</h4>
                                <img src={product.image} alt={product.title} />
                            </div>

                            <div className="second-part">
                                <h5>{product.title}</h5>
                                <p>Rate: {product.rating.rate}</p>
                            </div>

                            <div className="third-part">
                                <h4>Quantity</h4>
                                <p>1</p>
                            </div>

                            <div className="fourth-part">
                                <h4>Total</h4>
                                <p>${product.price}</p>
                            </div>
                            <button onClick={() => handleRemoveFromFavorites(product)}>Remove from favorites</button>
                        </div>

                    )
                })
            ) : (
                <h2>
                    List of favorite products is empty
                </h2>
            )}

            <div className="result">
                <p> <span> {favorites.favorites.length}</span> Items</p>
                <p>Total price of favorites: <span> ${favorites.totalPrice}</span></p>
            </div>


        </div>
    )
}
