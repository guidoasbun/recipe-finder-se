import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import foodImage from "@/assets/images/food_moritsuke_good.png";

export function CardDefault({ props }) {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image src={foodImage} alt="card-image" width={400} height={400} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
          {props.title}
        </Typography>
        <Typography>{props.description}</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-center">
        <Button ripple={true}>Select Recipe</Button>
      </CardFooter>
    </Card>
  );
}
