import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import Detail from "./components/Detail";
import "./App.css";

function App() {
    const [state, setState] = useState({
        s: "sherlock",
        results: [],
        selected: {},
        favorites: [], // New state to store favorite movies
    });

    const apiurl = "https://www.omdbapi.com/?apikey=a2526df0";

    // Function to fetch search results
    const fetchResults = () => {
        if (state.s.trim()) {
            axios(apiurl + "&s=" + state.s).then(({ data }) => {
                let results = data.Search || [];
                setState((prevState) => ({ ...prevState, results }));
            });
        }
    };

    const searchInput = (e) => {
        const s = e.target.value;
        setState((prevState) => ({ ...prevState, s }));
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            fetchResults();
        }, 500); // Adjust debounce time as needed

        return () => clearTimeout(delayDebounce);
    }, [state.s]);

    const openDetail = (id) => {
        axios(apiurl + "&i=" + id).then(({ data }) => {
            let result = data;
            setState((prevState) => ({ ...prevState, selected: result }));
        });
    };

    const closeDetail = () => {
        setState((prevState) => ({ ...prevState, selected: {} }));
    };

    const addToFavorites = (movie) => {
        setState((prevState) => {
            // Prevent duplicate favorites
            const isAlreadyFavorite = prevState.favorites.some(
                (fav) => fav.imdbID === movie.imdbID
            );
            if (isAlreadyFavorite) return prevState;

            return {
                ...prevState,
                favorites: [...prevState.favorites, movie],
            };
        });
    };

    const removeFromFavorites = (imdbID) => {
        setState((prevState) => ({
            ...prevState,
            favorites: prevState.favorites.filter((fav) => fav.imdbID !== imdbID),
        }));
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Movie Picker</h1>
            </header>
            <main>
                <Search searchInput={searchInput} />
                    <h2 class="resultsearch">Search Results</h2>
                <div className="container">
                    {state.results.map((e) => (
                        <div key={e.imdbID} className="item">
                            <img
                                style={{ width: "200px" }}
                                src={e.Poster}
                                alt={e.Title}
                            />
                            <h3 style={{ color: "white" }}>{e.Title}</h3>
                            <button class="favbtn" onClick={() => addToFavorites(e)}>
                                Add to Favorites
                            </button>
                            <button class="favbtn" onClick={() => openDetail(e.imdbID)}>
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
                    <h2 class="favoritetext">Favorites</h2>
                <div className="container">
                    {state.favorites.map((fav) => (
                        <div key={fav.imdbID} className="item">
                            <img
                                style={{ width: "200px" }}
                                src={fav.Poster}
                                alt={fav.Title}
                            />
                            <h3 style={{ color: "white" }}>{fav.Title}</h3>
                            <button class="favbtn" onClick={() => removeFromFavorites(fav.imdbID)}>
                                Remove from Favorites
                            </button>
                        </div>
                    ))}
                </div>
                {state.selected.Title ? (
                    <Detail selected={state.selected} closeDetail={closeDetail} />
                ) : null}
            </main>
        </div>
    );
}

export default App;
