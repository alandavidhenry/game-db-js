import React from 'react'
import GenreList from '../components/GenreList/GenreList';
import GamesList from '../components/GamesList/GamesList';

function Home() {
  return (
    <>
        <div className='grid grid-cols-4 px-5 gap-5'>
            <div className='hidden md:block'>
                <GenreList />
            </div>
            <div className='col-span-4 md:col-span-3'>
                <GamesList />
            </div>
        </div>
    </>
  );
}

export default Home;