import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { data } from "@/constants/data";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function EditCard({
  id,
  onSave,
}: {
  id: number;
  onSave: (id: number, question: string, answer: string) => void;
}) {
  const [question, setQuestion] = useState<string>(data[id - 1].question);
  const [answer, setAnswer] = useState<string>(data[id - 1].answer);
  const [isOpen, setIsOpen] = useState(false);

  function handleSaveChange() {
    onSave(id, question, answer);
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Edit Card
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Flash Card</DialogTitle>
          <DialogDescription>
            Make changes to your card here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Question
            </Label>
            <Input
              id="name"
              value={question}
              className="col-span-3"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setQuestion(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Answer
            </Label>
            <Textarea
              rows={6}
              id="username"
              value={answer}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setAnswer(e.target.value);
              }}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSaveChange}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
