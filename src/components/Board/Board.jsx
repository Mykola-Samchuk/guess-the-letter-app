import React, { useEffect, useState } from "react";
import "./board.css";
import data from "../../data";
import random from "../../utility/random";
import Cards from "../Card/Cards";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

// array for correct index

const correctArr = []

export default function Board() {
  const [start, setStart] = useState(false);
  const [pointerEvent, setPointerEvent] = useState(false)
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [message, setMessage] = useState(false);
  const [findLetter, setfindLetter] = useState(data.letters[0])
  const [letters, setLetters] = useState(data.letters)
  const [correctMessage, setCorrectMessage] = useState(data.correct[0])
  // modal state
  const [modalActive, setModalActive] = useState(false);

  useEffect(()=>{
    setfindLetter(random(data.letters)[0])
    setLetters(random(data.letters))
    setCorrectMessage(random(data.correct)[0])
  },[])

  // handler Start App
  const handlerStart = () => {
    setStart(true);
    const interval = setInterval(function () {
      setStart(false);
      if (start === false) {
        setPointerEvent(true)
        clearInterval(interval);
      }
    }, 5000);
  };

  // timer-show-message
  const timeMessage = () => {
    setMessage(true);
    const interval = setInterval(function () {
      setMessage(false);
      if (message === false) {
        clearInterval(interval);
      }
    }, 1000);
  };

  // unique array
  const uniqArray = (arr) => {
    const unique = new Set(arr);
    if (unique.size === 3) {
      setModalActive(true);
      setWin(true);
    }
  };

  // handler for cell / Card
  const handlerCard = (letter, index) => {
    if (letter === findLetter) {
      timeMessage();
      correctArr.push(index)
      uniqArray(correctArr);
    } else {
      setLose(true);
      setModalActive(true);
    }
  };

  return (
    <main className="board-wrapp">
      <div className="title-wrapp">
        <h1>Guess Letter App</h1>
        <h2 className="letter-wrapp">
          Find letter: "<span>{findLetter}</span>"
        </h2>
        <div className={message ? "message-wrapp active" : "message-wrapp"}>
          {correctMessage}
        </div>
      </div>
      
      <div className={`${(start || lose) ? "cards active" : "cards"} ${pointerEvent ? 'pointer': ""}`}>
        {letters.map((item, index) => {
          return (
            <Cards
              handlerCard={handlerCard}
              letter={item}
              key={index}
              index={index}
              classActive={item.state}
            />
          );
        })}
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <h3>{win ? "ВІТАЮ!!!" : lose ? "ПРОГРАШ!!!" : ""}</h3>
        <h4>
          {win ? random(data.winner)[0] : lose ? random(data.wrong)[0] : ""}
        </h4>
      </Modal>

      <Button title={"S t a r t"} onClick={handlerStart} />
    </main>
  );
}
