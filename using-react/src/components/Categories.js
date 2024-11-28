import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../redux/categorySlice";
import Button from "./CategoryButton";

const Categories = () => {

    const activeCategory = useSelector((state) => state.category.activeCategory)
    const categories = ["all", 'men', 'women', 'children'];
    const dispatch = useDispatch();

    const handleCategoryClick = (category) => {
        dispatch(setActiveCategory(category));
    }

    return (
        <div className="mb-4">
            {/* Dynamically generate filter buttons */}
            {categories.map((category) => (
                <Button
                    category={category}
                    activeCategory={activeCategory}
                    handleCategoryClick={handleCategoryClick}
                    key={category}
                />
            ))}
        </div>
    )
}

export default Categories;