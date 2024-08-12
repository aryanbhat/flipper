import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

import { EditCard } from "./EditCard";
import { data } from "@/constants/data";

type User = {
  id: number;
  question: string;
  answer: string;
};

export function TableDemo() {
  const [arr, setArr] = useState<User[]>(data);

  useEffect(() => {
    setArr(data);
  }, []);

  function handleDelete(id: number) {
    const newArr = arr.filter((elem) => {
      return elem.id != id;
    });
    setArr(newArr);
  }

  function handleSave(id: number, question: string, answer: string) {
    const updatedData = data.map((elem) => {
      return elem.id == id
        ? {
            id,
            question,
            answer,
          }
        : elem;
    });
    setArr(updatedData);
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Question</TableHead>
          <TableHead>Answer</TableHead>
          <TableHead>Edit</TableHead>
          <TableHead>Delete</TableHead>
          <Button>Add</Button>
        </TableRow>
      </TableHeader>
      <TableBody>
        {arr.map((data) => (
          <TableRow key={data.id}>
            <TableCell className="font-medium">{data.id}</TableCell>
            <TableCell>{data.question}</TableCell>
            <TableCell>{data.answer}</TableCell>
            <TableCell>
              <EditCard id={data.id} onSave={handleSave} />
            </TableCell>
            <TableCell>
              <Button
                onClick={() => {
                  handleDelete(data.id);
                }}
                variant={"destructive"}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {arr.length == 0 && <TableCaption>No Flash Cards found</TableCaption>}
    </Table>
  );
}
