import React from "react";

import './category-item.style.scss';

interface CategoryItemProps {
    title: string,
    imageUrl: string,
}

const CategoryItemComponent = (category: CategoryItemProps) => {
    const { imageUrl, title } = category;

    return (
        <div className={'category-container'}>
            <div
                className={'background-image'}
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className={'category-body-container'}>
                <h2>{title}</h2>
                <p>Shop now</p>
            </div>
        </div>
    )
}

export default CategoryItemComponent;