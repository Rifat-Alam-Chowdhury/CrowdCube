import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { useLoaderData } from "react-router";

export default function AllCampaign() {
  const UserData = useLoaderData();
  console.log(UserData);

  return (
    <>
      <div className=" lg:grid lg:grid-cols-3">
        {UserData.map((data) => (
          <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader className="h-48" floated={false} color="blue-gray">
              <img className="" src={data.url} alt="ui/ux review check" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3  flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-medium"
                >
                  {data.title}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  verified not
                </Typography>
              </div>
              <Typography color="gray">
                <p className="truncate">{data.cap.slice(0, 200)}</p>
              </Typography>
            </CardBody>
            <CardFooter className="pt-3">
              <Button size="lg" fullWidth={true}>
                Donate
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
