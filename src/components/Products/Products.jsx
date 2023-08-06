import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Slices/features/dataSlice';
import { filterTitle, clearFilter, searchItems } from '../Slices/features/dataSlice';
import { Button, TextField } from '@mui/material';
import './Products.css';
import { Link } from 'react-router-dom';

export default function Products() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.filteredData);
    const searchResults = useSelector((state) => state.data.searchResults)
    const loading = useSelector((state) => state.data.loading);
    const error = useSelector((state) => state.data.error);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    };

    const handleFilter = (title) => {
        if (title === 'All') {
            dispatch(clearFilter());
        } else {
            dispatch(filterTitle(title));
        }
    };

    console.log(data);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        dispatch(searchItems(event.target.value));
    };

    const productsToShow = searchQuery.trim() !== '' ? searchResults : data

    return (
        <section className="main-container">
            <h1 className="title">Latest Products</h1>
            <div className="buttons">
                <Button variant="outlined" size="small" onClick={() => handleFilter('All')}>All</Button>
                <Button variant="outlined" size="small" onClick={() => handleFilter("men's clothing")}>Men's Clothing</Button>
                <Button variant="outlined" size="small" onClick={() => handleFilter("women's clothing")}>Women's Clothing</Button>
                <Button variant="outlined" size="small" onClick={() => handleFilter('jewelery')}>Jewelery</Button>
                <Button variant="outlined" size="small" onClick={() => handleFilter('electronics')}>Electronic</Button>
            </div>

            <div className='input-con'>
                <TextField
                    value={searchQuery}
                    onChange={handleSearch}
                    type='search'
                    id="standard-basic"
                    label="Search" variant="standard"
                />
            </div>

            <section className="products">
                {productsToShow.map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.title.substring(0, 12)} />
                        <div className="product-body">
                            <h5>{truncate(product.title, 12)}</h5>
                            <p>${product.price}</p>
                            <Link to={`/products/${product.id}`}>
                                <Button className='btn' variant="contained" size="small">Buy Now</Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    );
}
