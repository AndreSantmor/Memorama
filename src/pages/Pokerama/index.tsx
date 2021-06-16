import React, { Fragment } from "react";
import { VscDebugRestart } from "react-icons/vsc";

import { Board, Restart } from "./styles";
import { Popup } from "../../components/Popup";
import { GameEnd } from "../../components/GameEnd";
import { useGame } from "../../hooks/usePokerama";
import { PokeCard } from "../../components/PokeCard";
import { PokeBoard } from "../../components/PokeBoard";

export const Pokerama = () => {
  const cardNumber = 20;
  const {
    callback,
    loadCount,
    loaded,
    onCardLoad,
    numbers,
    score,
    attempts,
    gameEnded,
    restartGame,
  } = useGame(cardNumber);

  const links = [
    "https://i.imgur.com/S8hvBWb.jpg",
    "https://i.imgur.com/oNu2mVw.jpg",
    "https://i.imgur.com/I0lJu48.jpg",
    "https://i.imgur.com/FYqf7jn.jpg",
    "https://i.imgur.com/RBvTIal.jpg",
    "https://i.imgur.com/6txmkow.jpg",
    "https://i.imgur.com/7iAirpC.jpg",
    "https://i.imgur.com/F5xG2YP.jpg",
    "https://i.imgur.com/LWdgxH6.jpg",
    "https://i.imgur.com/7patg4k.jpg",
  ];
  console.log(links.length);

  return (
    <Fragment>
      <Restart>
        <VscDebugRestart onClick={() => restartGame()} />
      </Restart>
      <Board columns={10}>
        <Popup
          active={!loaded || gameEnded}
          component={
            <GameEnd
              callback={restartGame}
              title="Congratulations, you had won"
              message={`attempts: ${attempts}`}
            />
          }
          end={cardNumber}
          gameEnded={gameEnded}
          progress={loadCount}
        />

        <PokeBoard score={score} attempts={attempts} />
        {numbers.map((item, i) => (
          <PokeCard
            key={`${i}`}
            pokeId={i < links.length ? i : i - links.length}
            cardId={i}
            callback={callback}
            onLoad={onCardLoad}
            url={`${i < links.length ? links[i] : links[i - links.length]}`}
          />
        ))}
      </Board>
    </Fragment>
  );
};
