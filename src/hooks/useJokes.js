import { useEffect, useState } from "react";

function useJokes() {
  const URL = "https://v2.jokeapi.dev/joke/Programming?amount=10";
  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setJokes(data.jokes);
        } else {
          throw new Error();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return [jokes];
}
export default useJokes;
