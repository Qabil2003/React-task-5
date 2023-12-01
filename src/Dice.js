import React, { useState } from "react";
import PropTypes from "prop-types";

const Dice = ({ sides }) => {
  const [value, setValue] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * sides) + 1;
    setValue(randomNumber);
  };

  return (
    <div className="dice" onClick={rollDice}>
      {value}
    </div>
  );
};

Dice.propTypes = {
  sides: PropTypes.number.isRequired
};

export default Dice;