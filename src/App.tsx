import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Book Search Tool</h1>

            <form role="search">
                <label htmlFor="search-bar">
                    <span className="visually-hidden">Search</span>
                </label>
                <input type="text" id="search-bar" />
                <button type="submit">
                    <span className="visually-hidden">Submit Search</span>
                </button>
            </form>
        </div>
    );
}

export default App;
