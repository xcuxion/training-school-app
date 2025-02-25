"use client";
import { Button } from "@/components/ui/button";
import { logOut } from "@/lib/actions/user.action";
import { useUserStore } from "@/store/user-store";
import Image from "next/image";
import Banner from "./banner";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  const { update, logout } = useUserStore();
  const router = useRouter();

  const handleLogOut = async () => {
    logout();
    await logOut();
    router.push("/");
  };
  return (
    <div className="h-screen flex flex-col flex-center md:w-4/5 mx-auto p-10">
      <header className=" w-4/5 mx-auto flex flex-between">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt=""
            width={125}
            height={60}
            className="w-[125px] h-[60px]"
          />
        </Link>
        <Button className="" onClick={() => handleLogOut()}>
          Log out
        </Button>
      </header>
      <Banner />
    </div>
  );
};

export default page;
