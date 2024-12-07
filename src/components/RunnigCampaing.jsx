import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RunnigCampaing({ User }) {
  const [user, setuser] = useState(User);
  const LearnMore = (e) => {
    console.log(e);
  };

  return (
    <>
      {user.map((user) => (
        <Card
          shadow={false}
          className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center  text-center  mx-auto"
        >
          <CardHeader
            floated={false}
            shadow={true}
            color="transparent"
            className="absolute border-2 border-red inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
            style={{ backgroundImage: `url(${user.url})` }}
          >
            {" "}
            <Typography
              variant="h2"
              color="white"
              className="  mt-9   font-medium p-2 "
            >
              {user.cap?.slice(0, 70)}
              {user.cap?.length > 70 && "..."}
            </Typography>
            <div className="to-bg-black-10 border-2 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative  py-14 md:px-12">
            <button onClick={() => LearnMore(user?._id)} className="btn mb-8">
              <Link to={`/campaignDetails/${user?._id}`}>Learn More </Link>
            </button>

            <Typography
              variant="h1"
              className="mb-4 text-2xl font-extrabold text-gray-400"
            >
              {user?.title}
            </Typography>
          </CardBody>
        </Card>
      ))}
    </>
  );
}

export default RunnigCampaing;
