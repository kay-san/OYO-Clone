import Image from "next/image";
import Link from "next/link";

const Hotel = ({ e }) => {
  return (
    <div className="hotel-mobile h-96 w-full mb-5 p-5  ">
      <div className="hotel-flex-col flex h-72 ">
        <Image
          src={e?.banner}
          alt="hotel"
          width={360}
          height={180}
          className=" mr-3 object-cover"
        />
        <div className="hotel-gallery flex flex-col justify-between">
          {e
            ? e.gallery?.map((ele) => {
                return (
                  <Image
                    key={ele}
                    src={ele}
                    alt="hotel"
                    width={100}
                    height={100}
                    className="hotel-gallery-img h-15 object-cover "
                  />
                );
              })
            : ""}
        </div>
        <div className=" ml-5">
          <h2 className="font-bold text-3xl line-clamp-1">{e?.name}</h2>
          <p className=" text-justify my-5 text-lg ">{e?.location}</p>
          <p className=" text-justify my-5 text-sm line-clamp-2 ">
            {e?.description}
          </p>
          <div className=" text-xl my-5">
            <span className=" font-bold">Facilities : </span>
            <ul className=" flex">
              {e
                ? e.facilities?.map((ele) => {
                    return (
                      <li
                        key={ele.name}
                        className=" mr-10 mb-3 flex items-center"
                      >
                        <span>
                          <Image
                            src={ele.img}
                            width={200}
                            height={200}
                            className="w-8 h-8 border-1 border-gray-300"
                          />
                        </span>
                        <span className="ml-5">{ele.name}</span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
          <div className="flex justify-center items-center mt-10">
            <Link
              href={`/hotels/${e?._id}`}
              className="hotel-price text-xl font-bold text-red-600 "
            >
              Price : &#8377; {e?.price}
            </Link>
            <Link
              href={`/hotels/${e?._id}`}
              className="hotel-see-details ml-10 rounded-lg bg-blue-400 text-lg py-2 px-5"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
