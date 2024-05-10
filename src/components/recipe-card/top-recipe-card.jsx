"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function TopRecipeCard({ image, title, ingredients }) {
  const renderIngredients = ingredients.map(({ measurement, name }, key) => (
    <Typography key={key} color="gray" className="mb-2 font-normal">
      {measurement} {name}
    </Typography>
  ));

  return (
    <Card className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          Ingredients
        </Typography>

        {renderIngredients}
      </CardBody>
    </Card>
  );
}
