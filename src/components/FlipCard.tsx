import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "./ui/scroll-area";

interface propType {
  data: {
    id: number;
    question: string;
    answer: string;
  };
  setIsAnswer: React.Dispatch<React.SetStateAction<boolean>>;
}

export function FlipCard({ data, setIsAnswer }: propType) {
  function handleClick() {
    setIsAnswer((prevState) => {
      return !prevState;
    });
    document.getElementById("inner")?.classList.toggle("rotation");
  }

  return (
    <Card className=" max-w-2xl card bg-background " onClick={handleClick}>
      <div className="card-inner text-white" id="inner">
        <div className="card-front bg-destructive">
          <CardHeader>
            <CardTitle>Question</CardTitle>
            <CardDescription className=" text-white">
              Click to reveal the answer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.question}</div>
          </CardContent>
        </div>
        <div className="card-back bg-slate-600">
          <CardHeader>
            <CardTitle>Answer</CardTitle>
            <CardDescription className=" text-white">
              {data.question}
            </CardDescription>
          </CardHeader>
          <ScrollArea className=" h-44 w-full">
            <CardContent className=" card-back-text text-xl font-bold">
              {data.answer}
            </CardContent>
          </ScrollArea>
        </div>
      </div>
    </Card>
  );
}
