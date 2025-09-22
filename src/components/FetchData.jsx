import React, { createContext, useEffect, useState } from 'react'

export const dataContext = createContext();

export const FetchData = ({children}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("http://localhost:8080/api/products");
                if (!res.ok) {
                    throw new Error(`HTTP error! status :${res.status}`)
                }
                const result = await res.json();
                setProducts(result);
                console.log(products);

            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();

        const fetchCategoryData = async () => {
            try {
                const res = await fetch("http://localhost:8080/api/categories");
                if (!res.ok)
                    throw new Error(`HTTP Error! status :${res.status}`);
                const result = await res.json();
                console.log("CategoryData :", categoryData);
                setCategoryData(result);
            } catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }

        fetchCategoryData();

    }, [])


    return (
        <dataContext.Provider value={{products, categoryData, loading, error}}>
            {children}
        </dataContext.Provider>
    )
}

