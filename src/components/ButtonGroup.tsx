import React from "react";
import { Button } from "./ui/button";

interface propType {
  idx: number;
  setIdx: React.Dispatch<React.SetStateAction<number>>;
  length: number;
  setIsAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswer: boolean;
}

function handleClick() {
  document.getElementById("inner")?.classList.toggle("rotation");
}

function ButtonGroup({ idx, setIdx, length, setIsAnswer, isAnswer }: propType) {
  function handleNext() {
    if (idx >= length - 1) {
      return;
    }
    if (isAnswer) {
      handleClick();
      setIsAnswer(!isAnswer);
      setTimeout(() => {
        setIdx(idx + 1);
      }, 200);
    } else {
      setIdx(idx + 1);
    }
  }

  function handlePrev() {
    if (idx < 1) {
      return;
    }
    if (isAnswer) {
      handleClick();
      setIsAnswer(!isAnswer);
      setTimeout(() => {
        setIdx(idx - 1);
      }, 200);
    } else {
      setIdx(idx - 1);
    }
  }

  return (
    <div className=" flex items-center w-4/5 mx-auto justify-between my-5">
      <Button disabled={idx == 0} onClick={handlePrev}>
        Previous
      </Button>
      <Button disabled={idx == length - 1} onClick={handleNext}>
        Next
      </Button>
    </div>
  );
}

export default ButtonGroup;
