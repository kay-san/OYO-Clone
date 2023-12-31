import Image from "next/image";

const Block = ({ title, para, icon }) => {
  return (
    <div className="hide-mobile border-r border-gray-300 md:w-60 sm:w-20 h-full flex items-center px-3 ">
      <Image
        src={icon}
        alt="demo"
        width={200}
        height={200}
        className="w-10 h-10 rounded-full mr-5"
      />
      <div>
        <h3 className="hide-tablet font-bold  ">{title}</h3>
        <p className="hide-tablet text-gray-400 text-xs line-clamp-1 ">
          {para}
        </p>
      </div>
    </div>
  );
};

export default Block;
