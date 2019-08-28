import React, { Component } from 'react'
import axios from 'axios';

export class Menu extends Component {

    state = {
        values: []
    }

    componentDidMount() {

        axios.get('https://localhost:44371/api/products/').then((response) => {
            console.log(response);
            this.setState({
                values: response.data
            })
        });
    }

    render() {
        return (
            <div>
                { this.state.values.map((item: any) => <li key={item.id}>{item.name}</li>) }
            </div>
        )
    }
}

export default Menu
