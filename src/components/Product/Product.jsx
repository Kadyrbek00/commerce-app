import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { RiStarFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, removeFromFavorites } from '../Slices/features/favoritesSlice';
import axios from 'axios';
import './Product.css'
import { Button } from '@mui/material';


export default function Product() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.favorites)

    const fetchData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data)

    }

    fetchData()

    const handleClickFavorites = (products) => {
        if (isProductInFavorites(products.id)) {
            dispatch(removeFromFavorites(products))
        } else {
            dispatch(addFavorites(products))
        }
    }

    const isProductInFavorites = (productId) => {
        return favorites.some(item => item.id === productId)
    }

    return (
        <>
            <section className='product-con'>
                <img src={product.image} alt={product.title} />
                <div className="product-body">
                    <h4>
                        {product.category}
                    </h4>
                    <div>
                        Rating {product.rating && product.rating.rate}
                        <RiStarFill />
                    </div>

                    <h2>
                        {product.title}
                    </h2>
                    <h3>
                        $ {product.price}
                    </h3>
                    <p>
                        {product.description}
                    </p>
                    <Button variant='contained' onClick={() => handleClickFavorites(product)}>
                        {isProductInFavorites(product.id) ? "Remove From Favorites" : "Add to Favorites"}
                    </Button>
                </div>
            </section>

        </>

    );
};
