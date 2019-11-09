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

    render() {
        return (
            <div className='card-container'>
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