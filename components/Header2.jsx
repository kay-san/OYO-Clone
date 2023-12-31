import Link from "next/link";

const Header2 = () => {
  const List = [
    {
      name: "Kolkata",
    },
    {
      name: "Mumbai",
    },
    {
      name: "Delhi",
    },
    {
      name: "Banglore",
    },
    {
      name: "Hyderabad",
    },
  ];
  return (
    <div>
      <Link href={"/hotels"}>
        <div className="mobile-header2 flex  py-3 bg-gray-100 justify-around w-full">
          {List.map((e) => {
            return (
              <div className=" hover:bg-gray-500 p-1" key={e.name}>
                {e.name}
              </div>
            );
          })}
        </div>
      </Link>
    </div>
  );
};

export default Header2;
