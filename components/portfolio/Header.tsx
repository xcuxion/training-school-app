import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { emojis } from "@/constants";

const Header = () => {
  return (
    <div className="w-full h-16 sticky top-0 left-0 flex flex-between py-2 px-10 bg-primary-light z-50">
      <div className="flex items-center">
        <Image
          src={"/icons/tw-logo.png"}
          alt=""
          width={45}
          height={45}
          className="mr-2 w-[45px] h-[45px]"
        />
        <h1 className="text-2xl font-bold md:visible">XCUXION</h1>
      </div>
      <Button variant={"default"} className="rounded-full h-10">
        Open Portal {emojis.crystalBall}{" "}
      </Button>
    </div>
  );
};

export default Header;
