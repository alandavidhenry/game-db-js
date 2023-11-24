import React, { useEffect, useState } from 'react'
import { getAllGames } from '../../API';

function GamesList() {

    const [allGames, setAllGames] = useState([]);

    useEffect(() => {
        getAllGamesList();
    }, []);

    const getAllGamesList = async () => {
        try {
            const res = await getAllGames();
            console.log(res.data.results);
            setAllGames(res.data.results);
        } catch (error) {
            console.error('Error fetching all games list', error);
        }
    };

    return (
        <div>
            <h2>All Games</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 px-5 gap-5'>
                { allGames.map((item, index) => (
                    <div key={ item.id }>
                        <img
                            src={ item.background_image }
                            alt={ item.name }
                            className='h-64 w-80 object-cover rounded-t-lg'
                        />
                        <p className='bg-black text-white w-80 px-4 py-4 rounded-b-lg'>{ item.name }</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default GamesList;