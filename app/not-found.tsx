import React from "react";
import Link from "next/link";
import Image from "next/image";
import nfImg from '../../Portfolio/public/Notfound.png'
const NotFound = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-[#0E1016] text-[#e4ded7] gap-5">
      <p className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px]">Either you mistyped the url or we deleted that page, but let's agree to blame this on you!</p>
      <div>
        <Link href="/" className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px]">
          Let's go back to {" "} 
          <span className="underline underline-offset-2">HomePage</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
