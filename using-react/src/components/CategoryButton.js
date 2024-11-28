const Button = (props) => {
    const { category, activeCategory, handleCategoryClick } = props;
    return (
        <button
            className={`mx-4 text-white hover:border-b-2 hover:border-white transition-all ${activeCategory === category ? 'border-b-2 border-white' : ''}`}
            onClick={() => handleCategoryClick(category)}
        >
            {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
    )
}

export default Button;