"use client";

import Button from "./components/Button";

export default function Home() {
  const onButtonClick = (name) => {
    alert(`${name} button clicked!`);
  };

  return (
    <div class="container">
      <h1 class="header">React Custom Button</h1>
      <div class="inner-container">
        <Button
          color="blue"
          name="square"
          size="medium"
          type="square"
          autofocus
          onClick={onButtonClick}
          // styleOverrides={}
        />
        <Button
          color="green"
          name="circle"
          size="medium"
          type="circle"
          disabled
          // disabled={true}
          // buttonIsDisabled
        />
        <Button
          color="red"
          name="normal"
          size="medium"
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
}
