import React from "react";

import './directory.component.scss';

import {CategoryItemInterface} from "../../types/category-item.interface";
import CategoryItemComponent from "../category-item/category-item.component";

interface DirectoryProps {
    categories: CategoryItemInterface[]
}

const DirectoryComponent = ({ categories }: DirectoryProps) => {
    return(
        <div className={'directory-container'}>
            {categories.map((category) => {
                return(
                    <CategoryItemComponent key={category.id} title={category.title} imageUrl={category.imageUrl} />
                )
            })}
        </div>
    )
}

export default DirectoryComponent;