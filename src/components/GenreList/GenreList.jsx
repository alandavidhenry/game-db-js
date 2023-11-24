import React, { useEffect, useState } from 'react'
import { getGenres } from '../../API';

function GenreList() {

    const [genreList, setGenreList] = useState([]);

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        getGenreList();
    }, []);

    const getGenreList = async () => {
        try {
            const res = await getGenres();
            console.log(res.data.results);
            setGenreList(res.data.results);
        } catch (error) {
            console.error('Error fetching genre list', error);
        }
    };

  return (
    <div>
        <h2>Genre</h2>
        { genreList.map((item, index) => (
            <div 
                key={ item.id }
                className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg ${ activeIndex === index && 'bg-gray-300' }`}
                onClick={() => setActiveIndex(index)} 
            >
                <img 
                    src={ item.image_background } 
                    alt={ item.name } 
                    className='w-10 h-10 object-cover rounded-lg'
                />
                <h3>{ item.name }</h3>
            </div>
        ))}
    </div>
  )
}

export default GenreList;