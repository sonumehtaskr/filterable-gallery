import { useSelector } from "react-redux";
import React from "react";
import Item from "./Item";

// Import images if they're local
import men1 from '../assets/images/men1.jpg';
import men2 from '../assets/images/men2.jpg';
import women1 from '../assets/images/women1.jpg';
import women2 from '../assets/images/women2.jpg';
import children1 from '../assets/images/children1.jpg';
import children2 from '../assets/images/children2.jpg';

const Items = () => {
    const items = [
        { id: 1, category: 'men', imgSrc: men1, alt: 'men' },
        { id: 2, category: 'men', imgSrc: men2, alt: 'men' },
        { id: 3, category: 'women', imgSrc: women1, alt: 'women' },
        { id: 4, category: 'women', imgSrc: women2, alt: 'women' },
        { id: 5, category: 'children', imgSrc: children1, alt: 'children' },
        { id: 6, category: 'children', imgSrc: children2, alt: 'children' },
    ];

    const activeCategory = useSelector((state) => state.category.activeCategory)
    const filteredItems = activeCategory === 'all'
        ? items
        : items.filter(item => item.category === activeCategory);

    return (
        <div className="flex flex-row gap-5 max-w-[960px] justify-center items-center flex-wrap border-white">
            {filteredItems.map((item) => (
                <Item key={item.id} image={item.imgSrc} name={item.alt} />
            ))}
        </div>
    );
}

export default Items;
