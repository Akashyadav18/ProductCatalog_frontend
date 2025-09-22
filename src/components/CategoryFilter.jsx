
const CategoryFilter = ({ categories, onSelect }) => {
    
    return (
        <div>
            <div className="relative">
                <select
                    onChange={(e) => onSelect(e.target.value)}
                    
                    className="w-full h-14 px-5 pr-12 rounded-xl border border-gray-600 bg-gray-800/50 text-white 
                           focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:bg-gray-800 
                           transition-all duration-300 hover:border-purple-400 appearance-none cursor-pointer"
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option value={category.id} key={category.id}>{category.name}</option>
                    ))}
                </select>

            </div>
        </div>
    )
}

export default CategoryFilter
