import React from 'react'
import './hatspage.styles.scss'
import ItemsContainer from '../../component/items-container/items-container.component';
import SHOP_DATA from '../shop/shop.data';

class HatsPage extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div>
                {
                    collections.map(({id, ...otherProps})=>{
                        <ItemsContainer key={id} {...otherProps} />
                    })
                }
            </div>
            )

    }

    
}

export default HatsPage;