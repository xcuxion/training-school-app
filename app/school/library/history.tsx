import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export const HistorySkeleton = () => {
  return (
    <div className="flex flex-col">
      <Skeleton className="w-[300px] h-[200px] " />
      <span className="">
        <Skeleton className="w-[200px] h-[24px] mb-2" />
        <Skeleton className="w-[80px] h-[16px] " />
      </span>
    </div>
  );
};

export interface IHistroy {
  image: string;
  title: string;
  date: Date;
}

const BookHistory = ({image, title, date}: IHistroy) => {
  return (
    <>
      <div className=" rounded-md border w-full flex items-center ">
        <div className="h-full mr-4">
          <Image
            src={image}
            alt="Image 1"
            width={82}
            height={16}
            className="w-20 h-20 object-cover"
          />
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold my-2">{title}</h2>
          <p className="text-gray-600">{new Date(date).toDateString()}</p>
        </div>
      </div>
    </>
  );
};

export default BookHistory;
