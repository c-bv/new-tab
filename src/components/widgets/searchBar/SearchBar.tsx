import { useState } from 'react';
import searchEngines from '../../../data/searchEngines.json';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
    // TODO: Add a way to change the search engine and save it to local storage
    const [searchEngine, setSearchEngine] = useState(searchEngines[0]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        window.open(`${searchEngine.url}?q=${searchQuery}`, '_blank');
    };

    return (
        <div id={styles.container}>
            <form id={styles.searchEngine}>
                <select value={searchEngine.name} onChange={(e) => setSearchEngine(searchEngines.find((engine) => engine.name === e.target.value) as any)}>
                    {searchEngines.map((engine) => (
                        <option key={engine.name} value={engine.name}>{engine.name}</option>
                    ))}
                </select>
                <button type='button' onClick={handleSearch}>Search</button>
            </form>
            <div id={styles.searchBar}>
                <input type='text' placeholder='Search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
        </div>
    );
};

export default SearchBar;