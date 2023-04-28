function SingleJoke({ joke }) {
  return (
    <article className="joke-outer">
      {joke.joke ? (
        <p className="single-part-joke">{joke.joke}</p>
      ) : (
        <div className="tow-part-joke">
          <p className="setup">{joke.setup}</p>
          <p className="delivery"> joke.delivery</p>
        </div>
      )}
    </article>
  );
}

export default SingleJoke;
