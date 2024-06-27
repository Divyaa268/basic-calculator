import React from 'react'
import { useState } from 'react';

const PollManager = () => {

    const [votes, setVotes] = useState({ superman: 0, batman: 0 });
  const [winner, setWinner] = useState('');
  const [showWinner, setShowWinner] = useState(false);

  const handleVote = (candidate) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [candidate]: prevVotes[candidate] + 1,
    }));
  };

  const determineWinner = () => {
    if (!showWinner) {
      if (votes.superman > votes.batman) {
        setWinner('Superman');
      } else if (votes.batman > votes.superman) {
        setWinner('Batman');
      } else {
        setWinner('It\'s a tie!');
      }
    }
    setShowWinner(!showWinner);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Who is your favorite superhero?</h1>
      <div className="flex space-x-4">
        <div className="flex flex-col items-center">
          <h2 className="text-xl mb-2">Superman</h2>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
            onClick={() => handleVote('superman')}
            disabled={showWinner}
          >
            Vote
          </button>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl mb-2">Batman</h2>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
            onClick={() => handleVote('batman')}
            disabled={showWinner}
          >
            Vote
          </button>
        </div>
      </div>
      <p className="mt-4">
        Superman is leading by {votes.superman - votes.batman} vote(s)
      </p>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded mt-4"
        onClick={determineWinner}
      >
        {showWinner ? 'Hide Winner' : 'View Winner'}
      </button>
      {showWinner && (
        <p className="mt-4 text-xl font-bold">
          {winner}
        </p>
      )}
    </div>
  );
}

export default PollManager;