import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function FilteredProducts() {
  const products = useSelector((state) => state.filter.filteredProducts);

  const { type, id, name } = useParams();

  const dispatch = useDispatch();

  return (
    <div>
      <div className="pt-15">
        <div className="pl-14">
          <h1 className="text-4xl text-gray-900 font-bold tracking-normal leading-none">
            {type}
          </h1>
        </div>
        <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
          {products
            .filter((item) => item.type === type)
            .map((product, index) => {
              return (
                <Link
                  to={`/filteredProducts/${type}/` + product.id}
                  key={index}
                >
                  <Card
                    className="w-96"
                    
                  >
                    <CardHeader shadow={false} floated={false} className="h-96">
                      <img
                        src={product.img}
                        alt="card-image"
                        className="h-full w-full object-cover"
                      />
                    </CardHeader>
                    <CardBody>
                      <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                          {product.name}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                          {product.price}$
                        </Typography>
                      </div>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                      >
                        {product.text}
                      </Typography>
                    </CardBody>
                    <CardFooter className="pt-0"></CardFooter>
                  </Card>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
