import useJokes from "../../hooks/useJokes";
import SingleJoke from "./SingleJoke/SingleJoke";
import "./Jokes.css";

function Jokes() {
  const [jokes, getNewJokes] = useJokes();
  if (jokes === null) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="jokes">
      <button onClick={getNewJokes} className="btn">
        Show new jokes
      </button>
      {jokes.map((joke) => (
        <SingleJoke key={joke.id} joke={joke} />
      ))}
    </div>
  );
}

export default Jokes;
