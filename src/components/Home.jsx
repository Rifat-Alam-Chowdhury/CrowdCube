import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import RunnigCampaing from "./RunnigCampaing";
import { Link } from "react-router-dom";

function Home() {
  const data = useLoaderData();

  const [User, setUser] = useState(data);
  console.log(User);

  return (
    <>
      {/* slider */}
      <Carousel
        autoplay={true}
        autoplayDelay={4000}
        transition={{ duration: 1 }}
        loop={true}
        className=""
      >
        {User?.map((user) => (
          <div className="relative   w-full h-64 lg:h-96">
            <img
              src={user.url}
              alt="image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4  text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-xs lg:text-5xl"
                >
                  {user.title}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 lg:text-4xl text-xs opacity-80"
                >
                  {user?.cap?.slice(0, 70)}
                  {user?.cap?.length > 70 && "..."}
                </Typography>
                <div className="flex justify-center gap-2">
                  <Button size="lg" color="white">
                    <Link to={`/campaignDetails/${user?._id}`}>Explore</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      {/* slider */}
      {/* running campaing selection */}
      <h1 className="text-center lg:text-5xl p-5">Running Campaign</h1>
      <div className=" gap-5 grid lg:grid-cols-3 ">
        <RunnigCampaing User={User} />
      </div>
      {/* running campaing selection */}
    </>
  );
}

export default Home;
