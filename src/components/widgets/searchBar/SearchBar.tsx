import { useRef, useState } from 'react';
import ExpandmoreIcon from '../../../assets/icons/ExpandmoreIcon';
import BingIcon from '../../../assets/icons/search-engines/BingIcon';
import DuckduckgoIcon from '../../../assets/icons/search-engines/DuckduckgoIcon';
import GoogleIcon from '../../../assets/icons/search-engines/GoogleIcon';
import SearchIcon from '../../../assets/icons/SearchIcon';
import searchEngines from '../../../data/searchEngines.json';
import Button from '../../ui/button/Button';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
    // TODO: Add a way to change the search engine and save it to local storage
    const [searchEngine, setSearchEngine] = useState(searchEngines[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const searchQuery = useRef<HTMLInputElement>(null);

    const renderSearchEngineIcon = (engineName: string) => {
        switch (engineName) {
            case 'Google':
                return <GoogleIcon />;
            case 'DuckDuckGo':
                return <DuckduckgoIcon />;
            case 'Bing':
                return <BingIcon />;
            default:
                break;
        }
    };

    const handleSearch = () => {
        window.open(`${searchEngine.url}?q=${searchQuery.current?.value}`, '_blank');
    };

    const handleSearchEngineChange = (engine: any) => {
        setSearchEngine(engine);
        setDropdownOpen(false);
    };

    return (
        <form id={styles.container} onSubmit={(e) => e.preventDefault()}>
            <Button
                type='icon'
                onClick={handleSearch}
                sx={{ paddingLeft: 0, paddingRight: '0.25em', fill: '#c9d1d9' }}
            >
                <SearchIcon />
            </Button>
            <div id={styles.inputContainer}>
                <input
                    id={styles.input}
                    autoComplete='off'
                    type='text'
                    ref={searchQuery}
                />
                <div id={styles.dropdownContainer}>
                    <Button
                        type='icon'
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        sx={{ paddingRight: 0 }}
                    >
                        {renderSearchEngineIcon(searchEngine.name)}
                        <ExpandmoreIcon width={14} height={14} />
                    </Button>
                    {dropdownOpen && (
                        <div id={styles.dropdownContent}>
                            {searchEngines.map((engine, index) => (
                                <Button
                                    key={index}
                                    type='icon'
                                    onClick={() => handleSearchEngineChange(engine)}
                                    sx={{ gap: '0.25rem' }}
                                >
                                    {renderSearchEngineIcon(engine.name)}
                                    {engine.name}
                                </Button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </form >
    );
};

export default SearchBar;