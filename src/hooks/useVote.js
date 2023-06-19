import React, { useState } from "react";

const useVote = () => {
  // vote(id, delta) {
  //     this.setState((st) => ({
  //       jokes: st.jokes.map((j) =>
  //         j.id === id ? { ...j, votes: j.votes + delta } : j
  //       ),
  //     }));
  //   }
  return [votes, setVotes];
};

export default useVote;
