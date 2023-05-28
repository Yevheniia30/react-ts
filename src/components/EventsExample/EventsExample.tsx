import React, { FC, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");

  // вказуємо дженерік - тип дом-елемента на якому відбувається подія
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // для кліків вказуємо MouseEvent
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("click click", e.target, value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick}>Click click</button>
    </div>
  );
};

export default EventsExample;
