import React from 'react'
import { House } from './House'
import { housesApi } from '../rest/HousesApi.js'

export class HousesList extends React.Component {
    state = {
        houses: []
    }


componentDidMount() {
    this.fetchHouses()

}

fetchHouses = async () => {
    const houses = await housesApi.get()
    houses.slice(0, 1)
    this.setState({ houses })
    console.log(this.state.houses)
}

updateHouse = async (updatedHouse) => {
    await housesApi.put(updatedHouse)
    this.fetchHouses()
}

render() {
    return (
        <div className='house-list'>
            
            {this.state.houses.filter((house, index) => index < 1).map((house) => (
                <House
                    house={house}
                    key={house._id}
                    updateHouse={this.updateHouse}
                    />

            ))}
        </div>
    )
}
}

