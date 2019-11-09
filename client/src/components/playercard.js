import React from 'react';
import axios from 'axios';


class PlayerCard extends React.Component {
    constructor() {
        super();
        this.state={
            player: []
        }
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/api/players`)
            .then(res => {
                this.setState({
                    player: res.data  
                });
                console.log(res.data);
            })
            .catch(err => {
                console.log('NANI?!',err)
            });
    }

    // handleChange = e => {
    //     e.preventDefault();
    //     this.setState({
    //         newPlayer: e.target.value
    //     });
    // };

    // handleNewUser = e => {
    //     e.preventDefault();
    //     axios
    //     .get(`http://localhost:5000/api/${this.state.newPlayer}`)
    //     .then(res => {
    //         this.setState({
    //             player: res.data,  
    //         });
    //         console.log(res.data);
    //     })
    //     .catch(err => {
    //         console.log('NANI?!',err)
    //     });
    // }

    render() {
        return (
            
            <div className='card-container'>
                {/* <input
                    className='search-bar'
                    type="text"
                    value={this.state.newUser}
                    onChange={this.handleChange}
                />
             <button onClick={this.handleNewUser}>Find Player!</button>
              */}
               {this.state.player.map (player => (
                    <div className='cards' key={player.id}>
                        <h1>{player.name}</h1>
                        <h2>From: {player.country}</h2>
                        <h2>Searched: {player.searches}</h2>
                    </div>
               ))}
            </div>
        );
    }


}


export default PlayerCard; 