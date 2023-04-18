import React, { Component } from 'react'


const RestaurantContext = React.createContext();

export default class RestaurantProvider extends Component {

    state = {
        restaurantes: [],
        loading: true
    };

    render() {
        return (
            <RestaurantContext.Provider
                value={{
                    ...this.state
                }}>
                {this.props.children}
            </RestaurantContext.Provider>
        )
    }
}


const RestaurantConsumer = RestaurantContext.Consumer;

export { RestaurantProvider, RestaurantConsumer, RestaurantContext };