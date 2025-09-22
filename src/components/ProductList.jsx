import React from 'react'

const ProductList = ({ products }) => {
    return (
        <>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {products.map((product) => (
                    <div key={product.id} className="group relative bg-white rounded-lg shadow hover:shadow-lg p-3 transition">
                        <img
                            src={product.imageUrl || "https://placehold.co/600x400"}
                            alt={product.name}
                            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                        />
                        <div className="mt-4 flex justify-center items-center">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {product.name}
                                </h3>
                                <h4 className="mt-1 text-lg text-gray-500 line-clamp-2">{product.description}</h4>
                                <p className="text-lg font-bold text-gray-600">${product.price}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default ProductList
