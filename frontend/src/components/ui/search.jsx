import React, { useState } from 'react';

export default function Search({ handleSearch }) {
    const [query, setQuery] = useState('');

    const onSearchChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        handleSearch(value);
    };

    return (
        <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
                <input
                    type="search"
                    value={query}
                    onChange={onSearchChange}
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search by name or email..."
                />
                <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Search
                </button>   
            </div>
        </form>
    );
}
