import React, { useState } from "react";
import axios from "axios";

const useGetJokes = (numJokesToGet) => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /* retrieve jokes from API */

  const getJokes = async () => {
    try {
      // load jokes one at a time, adding not-yet-seen jokes
      let jokesData = [];
      let seenJokes = new Set();

      while (jokesData.length < numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" },
        });
        let { ...joke } = res.data;

        if (!seenJokes.has(joke.id)) {
          seenJokes.add(joke.id);
          jokesData.push({ ...joke, votes: 0 });
        } else {
          console.log("duplicate found!");
        }
      }

      setIsLoading(() => false);
      setJokes(() => jokesData);
    } catch (err) {
      console.error(err);
    }
  };

  /* empty joke list, set to loading state, and then call getJokes */

  const generateNewJokes = () => {
    setIsLoading(() => true);
    getJokes();
  };

  return [jokes, getJokes, setJokes, generateNewJokes, isLoading];
};

export default useGetJokes;
