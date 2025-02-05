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

  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <>
      {UserData.length > 0 ? (
        <div className=" lg:grid  mb-5 lg:grid-cols-3">
          {UserData?.map((data) => (
            <div className="card mx-auto bg-base-100 w-11/12 p-5 shadow-xl">
              <figure>
                <img className="h-96 w-full object-cover" src={data?.url} />
              </figure>
              <div className=" flex justify-between  w-full  ">
                <div className="w-1/2 h-full ">
                  <h1 className="card-title my-5">{data?.title}</h1>{" "}
                  <h1>{data?.option}</h1>
                  <p className="line-clamp-2">{data?.cap?.slice(0, 600)}</p>
                </div>
                <div className=" mt-10 grid p-2 gap-2   mx-auto">
                  <div className="badge badge-primary">{data?.date}</div>
                  <div>
                    {" "}
                    {data?.date ? (
                      data.date < currentDate ? (
                        <div>
                          {" "}
                          <h1 className="text-xs">
                            Sorry,
                            <br />
                            Last Date Was{" "}
                            <span className="font-extrabold text-red-300">
                              {data.date}
                            </span>
                          </h1>
                          <button disabled className=" btn  bg-transparent">
                            <Link to={`/campaignDetails/${data._id}`}>
                              Donate
                            </Link>
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-end">
                          <button className=" btn">
                            <Link to={`/campaignDetails/${data._id}`}>
                              Donate
                            </Link>
                          </button>
                        </div>
                      )
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="card-actions justify-end"></div>
            </div>

            // <Card className="w-full bg-transparent max-w-[26rem] shadow-lg">
            //   <CardHeader className="" floated={false} color="blue-gray">
            //     <img
            //       className="h-64 object-cover"
            //       src={data?.url}
            //       alt="ui/ux review check"
            //     />
            //     <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            //   </CardHeader>
            //   <CardBody>
            //     <div className="mb-3  flex items-center justify-between">
            //       <Typography
            //         variant="h5"
            //         color="blue-gray"
            //         className="font-medium"
            //       >
            //         {data?.title}
            //       </Typography>
            //       <Typography
            //         color="blue-gray"
            //         className="flex items-center gap-1.5 font-normal"
            //       >
            //         {data?.option}
            //       </Typography>
            //     </div>
            //     <Typography color="gray">
            //       <p className="truncate">{data?.cap?.slice(0, 600)}</p>
            //     </Typography>
            //   </CardBody>

            //   <CardFooter className="pt-3">
            //     {data?.date ? (
            //       data.date < currentDate ? (
            //         <div>
            //           {" "}
            //           <h1>
            //             Sorry,Last Date Was{" "}
            //             <span className="font-extrabold text-red-300">
            //               {data.date}
            //             </span>
            //           </h1>
            //           <button disabled className=" btn">
            //             <Link to={`/campaignDetails/${data._id}`}>Donate</Link>
            //           </button>
            //         </div>
            //       ) : (
            //         <div className="flex justify-end">
            //           <button className=" btn">
            //             <Link to={`/campaignDetails/${data._id}`}>Donate</Link>
            //           </button>
            //         </div>
            //       )
            //     ) : null}
            //   </CardFooter>
            // </Card>
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
