"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
   {
      name: "About",
      to: "/about",
   },
   {
      name: "Service",
      to: "/service",
   },
   {
      name: "Contact",
      to: "/contact",
   },
   {
      name: "Blogs",
      to: "/blogs",
   },
];

const NavBar = () => {
   const pathName = usePathname();
   const router = useRouter();

   if (pathName.includes("/dashboard")) {
      return (
         <nav className="bg-blue-900 p-4 text-center">
            <ul className="text-white">
               <li>
                  <Link href={"/dashboard/salesStats"}>Sales-Stats</Link>
               </li>
            </ul>
         </nav>
      );
   }

   return (
      <>
         <nav className="flex items-center justify-between py-2">
            <h2>
               <Link href={"/"}>NEXTjs</Link>
            </h2>
            <ul className="flex items-center gap-4">
               {navLinks.map((link) => (
                  <li key={link.to}>
                     <Link
                        className={`${
                           pathName === link.to && "text-orange-300"
                        }`}
                        href={link.to}
                     >
                        {link.name}
                     </Link>
                  </li>
               ))}
            </ul>
            <button onClick={() => router.push("/login")} className="my-btn">
               Login
            </button>
         </nav>
      </>
   );
};

export default NavBar;
