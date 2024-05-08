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
    <Card className="mt-6 w-full max-w-xs md:max-w-none h-auto md:h-96 flex flex-col">
      <CardHeader color="blue-gray" className="relative h-40">
        <div>
          <Image
            src={foodImage}
            alt="card-image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardBody className="flex-grow">
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
          {props.title}
        </Typography>
        <Typography>{props.description}</Typography>
      </CardBody>
      <CardFooter className="flex justify-center mt-auto">
        <Button ripple={true}>Select Recipe</Button>
      </CardFooter>
    </Card>
  );
}
