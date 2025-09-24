import { useContext, useState } from 'react'
import CategoryFilter from './CategoryFilter'
import { dataContext } from './FetchData';
import Products from './Products';

const Category = () => {

    const [selectedCategory, setSelectCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const {categoryData, error, loading, products} = useContext(dataContext);

    if (loading) return <h2>LoadingData...</h2>
    if (loading) return <h2>Please wait for few seconds because Backend is deployed on Render and it take to start</h2>
    if(loading) return <h2>If after few seconds it not started simply refresh the page.</h2>
    if (error) return <p>Error : ${error.message}</p>

    const handleCategorySelect = (categoryId) => {
        setSelectCategory(categoryId ? Number(categoryId) : null)
    }

    const filteredProducts = products.filter((product) => {
        return (
            selectedCategory ? product.category.id === selectedCategory : true
            &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }).sort((a,b) =>{
        if(sortOrder === "asc"){
            return a.price - b.price;
        } else {
            return b.price - a.price
        }
    })

    return (
        <>
            <div className="bg-white/10 mt-4 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                <div className="flex items-center gap-6">

                    <div className="flex-1">
                        <CategoryFilter categories={categoryData} onSelect={handleCategorySelect} />
                    </div>

                    {/* Search Input */}
                    <div className="flex-1">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full h-14 pl-12 pr-1 rounded-xl border border-gray-600 bg-gray-800/50 text-white text-xl placeholder-gray-400 
                           focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:bg-gray-800 
                           transition-all duration-300 hover:border-purple-400"
                            />

                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="relative">
                            <select
                                onChange={(e) => setSortOrder(e.target.value)}

                                className="w-full h-14 px-5 pr-12 rounded-xl border border-gray-600 bg-gray-800/50 text-white 
                           focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:bg-gray-800 
                           transition-all duration-300 hover:border-purple-400 appearance-none cursor-pointer"
                            >
                                <option value="asc">Sort By Price: Low to High</option>
                                <option value="desc">Sort By Price: High to Low</option>
                            </select>

                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Products filteredProducts={filteredProducts}/>
            </div>
        </>
    )
}

export default Category
