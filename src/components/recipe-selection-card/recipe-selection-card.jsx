"use client";

import { useState } from "react";
import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function CardDefault({ props }) {

    return (
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRksC5BptofSNheVVuyQhbEnLQD14yD824zNXOoyYNyylfC3oh0ruCjdPPbHb80Kl_I2nhx9xmOx_vS4liFl9tKpEDJLZjf2rHiV0662EzA8DQkPqL_gTz9UPjImIvAnUqix2iwlH8PSxD/s800/food_moritsuke_good.png"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-center text-2xl">
            {props.title}
          </Typography>
          <Typography className="text-xl">
            {props.description}
        </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-center">
          <Button ripple={true} className="text-sm">Select Recipe</Button>
        </CardFooter>
      </Card>
    );
  }