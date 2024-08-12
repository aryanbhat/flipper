import ButtonGroup from "@/components/ButtonGroup";
import { FlipCard } from "@/components/FlipCard";
import { data } from "@/constants/data";
import { useState } from "react";

function Landing() {
  const [idx, setIdx] = useState(0);
  const [isAnswer, setIsAnswer] = useState(false);

  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center">
      <div>
        <FlipCard setIsAnswer={setIsAnswer} data={data[idx]} />
        <ButtonGroup
          idx={idx}
          setIdx={setIdx}
          length={data.length}
          isAnswer={isAnswer}
          setIsAnswer={setIsAnswer}
        />
      </div>
    </div>
  );
}

export default Landing;
