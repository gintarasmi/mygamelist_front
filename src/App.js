import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    games {
      _id
      name
    }
  }
`;


function App() {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  
  return (
    <div className="App">
      <ul>
        {data.games.map((game) => (
          <li key={game._id}>{game.name}</li>
        ))}
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
