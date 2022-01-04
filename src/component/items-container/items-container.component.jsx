import React from "react";
import './items-container.styles.scss'
import CollectionItem from "../collection-item/collection-item.component";


const ItemsContainer = ({title, items})=>{
    return(
        <div>
            {
            <div className='collection-preview'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <div className='preview'>
                    {items.map(({id, ...otherItemProps}) => (
                        <CollectionItem key={id} {...otherItemProps}  />
                    ))}
                </div>
            </div>
            }
        </div>
    )
}

export default ItemsContainer;