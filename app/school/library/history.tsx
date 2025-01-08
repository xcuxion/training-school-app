import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export const HistorySkeleton = () => {
  return (
    <Skeleton className="rounded-md shadow-md w-full flex">
      <Skeleton className="max-w-[300px] h-[200px] " />
      <span className="">
        <Skeleton className="w-[150px] h-[10px]" />
        <Skeleton className="w-[80px] h-[10px]" />
      </span>
    </Skeleton>
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
      <div className="bg-white rounded-md shadow-md w-full flex mt-4">
        <div className="h-full mr-4">
          <Image
            src={image}
            alt="Image 1"
            width={82}
            height={16}
            className=""
          />
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold mb-2">{title}</h2>
          <p className="text-gray-600">{new Date(date).toISOString()}</p>
        </div>
      </div>
    </>
  );
};

export default BookHistory;
