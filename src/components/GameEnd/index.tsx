import React from "react";
import { VscDebugRestart } from "react-icons/vsc";

import { Button, Congrats, GameEndMenu, Message } from "./styles";

export const GameEnd = (props: {
  title: string;
  message?: string;
  callback: Function;
}) => {
  const { callback, title, message } = props;
  return (
    <GameEndMenu>
      <Congrats>{title}</Congrats>
      {message ? <Message>{message} </Message> : ""}
      <Button onClick={() => callback()}>
        play again <VscDebugRestart />
      </Button>
    </GameEndMenu>
  );
};
