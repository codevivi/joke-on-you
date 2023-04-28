import useJokes from "../../hooks/useJokes";
import SingleJoke from "../SingleJoke/SingleJoke";

function Jokes() {
  const [jokes] = useJokes();
  if (jokes === null) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="jokes">
      {jokes.map((joke) => (
        <SingleJoke key={joke.id} joke={joke} />
      ))}
    </div>
  );
}

export default Jokes;
