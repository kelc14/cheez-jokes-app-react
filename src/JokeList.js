import React, { useEffect } from "react";
import Joke from "./Joke";
import useGetJokes from "./hooks/useGetJokes";
import "./JokeList.css";

/** List of jokes. */

const JokeList = ({ numJokesToGet }) => {
  const [jokes, getJokes, setJokes, generateNewJokes, isLoading] =
    useGetJokes(numJokesToGet);

  // only get jokes the first time:
  useEffect(() => getJokes, []);

  // jokes get sorted on every render as votes change:
  let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);

  // change vote in current state of jokes object
  // function passed to <Joke/> as prop
  const vote = (id, delta) => {
    setJokes(() => {
      const newJokes = jokes.map((j) =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      );
      return newJokes;
    });
  };

  return (
    //show loading screen when jokes not fetched yet
    <div className="JokeList">
      {isLoading && (
        <div className="loading">
          <i className="fas fa-4x fa-spinner fa-spin" />
        </div>
      )}

      {/* // if the page is not loading, display jokes */}
      {!isLoading && (
        <div className="JokeList">
          <button className="JokeList-getmore" onClick={generateNewJokes}>
            Get New Jokes
          </button>

          {sortedJokes.map((j) => (
            <Joke
              text={j.joke}
              key={j.id}
              id={j.id}
              votes={j.votes}
              vote={vote}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default JokeList;
