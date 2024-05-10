"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function InstructionsCard({ instructions }) {
  console.log("InstructionsCard:", instructions);

  const renderInstructions = instructions.map(
    ({ instructionNumber, instruction }, key) => (
      <Typography key={key} color="gray" className="mb-2 font-normal">
        {instructionNumber}. {instruction}
      </Typography>
    ),
  );

  return (
    <Card className="w-full max-w-[48rem] mt-6">
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          Instructions
        </Typography>
        {renderInstructions}
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Search another recipe</Button>
      </CardFooter>
    </Card>
  );
}
