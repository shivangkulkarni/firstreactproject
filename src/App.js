import { useEffect, useState } from 'react';

import MovieCard from './MovieCard';

import React from 'react';

import './App.css';
import SearchIcon from './search.svg';

// f96a246
const API_URL = 'http://www.omdbapi.com?apikey=f96a246';


function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies(''); // display all movies
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div classname="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ?   (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}

                    </div>
                ) : (
                    <div>
                        <h2>No Movies Found</h2>
                    </div>
                )}
        </div>
    );
}


export default App;