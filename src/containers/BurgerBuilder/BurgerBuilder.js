import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {
    render() {
        return (
            <Auxiliary>
                <div>Burger visual representation</div>
                <div>Build controls</div> 
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;