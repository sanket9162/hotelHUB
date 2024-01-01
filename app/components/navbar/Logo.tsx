'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
<h1     onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer py-2 px-5 bg-rose-500 rounded-md font-black text-white" > HotelHUB </h1>
   );
}
 
export default Logo;
