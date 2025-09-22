import { useContext } from 'react';
import ProductList from './ProductList';
import { dataContext } from './FetchData';

const Products = ({filteredProducts}) => {

    const {products, error, loading} = useContext(dataContext);

    if(loading) return <h1>LoadingData...</h1>
    if(error) return <p>Error : ${error.message}</p>

    return (
        <>
            <div>
                {filteredProducts.length ? (
                    <ProductList products={filteredProducts}/>
                ) : (
                    <p>No Product Found</p>
                )}
            </div>
        </>
    )
}

export default Products
