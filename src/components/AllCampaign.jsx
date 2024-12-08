import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

export default function AllCampaign() {
  const UserData = useLoaderData([]);
  console.log("test", UserData);
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <>
      {UserData.length > 0 ? (
        <div className=" lg:grid lg:grid-cols-3">
          {UserData?.map((data) => (
            <Card className="w-full max-w-[26rem] shadow-lg">
              <CardHeader className="" floated={false} color="blue-gray">
                <img
                  className="h-64 object-cover"
                  src={data?.url}
                  alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody>
                <div className="mb-3  flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {data?.title}
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="flex items-center gap-1.5 font-normal"
                  >
                    {data?.option}
                  </Typography>
                </div>
                <Typography color="gray">
                  <p className="truncate">{data?.cap?.slice(0, 200)}</p>
                </Typography>
              </CardBody>

              <CardFooter className="pt-3">
                {data?.date ? (
                  data.date < currentDate ? (
                    <button>Sorry,Last Date Was {data.date}</button>
                  ) : (
                    <div className="flex justify-between">
                      <h1>{data.date}</h1>
                      <Link to={`/campaignDetails/${data._id}`}>Donate</Link>
                    </div>
                  )
                ) : null}
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-4xl text-center mt-20 p-10">
          <h1>Sorry,No Campaign Running Right Now.</h1>
          <h1>
            You can add Your campaign <Link to={"/AddNewCampaign"}>Here</Link>
          </h1>
        </div>
      )}
    </>
  );
}
