import React, { useState } from "react";
import Confetti from "react-confetti";

const FireworksButton: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 10000);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me for fireworks!</button>
      {showConfetti && <Confetti />}
    </div>
  );
};

export default FireworksButton;
