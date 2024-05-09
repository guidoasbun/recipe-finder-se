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
import Link from "next/link";

export function CardDefault({ props, recipeNumber }) {
  return (
    <Card className="mt-6 w-full max-w-xs md:max-w-none h-auto md:h-96 flex flex-col">
      <CardHeader color="blue-gray" className="relative h-auto">
        <div>
          <Image src={foodImage} alt="card-image" width={400} height={400} />
        </div>
      </CardHeader>
      <CardBody className="flex-grow">
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
          {props.title}
        </Typography>
        <Typography>{props.description}</Typography>
      </CardBody>
      <CardFooter className="flex justify-center mt-auto">
        <Link href={`/recipeSelection/${recipeNumber}`}>
          <Button ripple={true}>Select Recipe</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
