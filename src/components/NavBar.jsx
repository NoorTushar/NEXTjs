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
];

const NavBar = () => {
   const pathName = usePathname();
   const router = useRouter();
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
                        className={pathName === link.to && "text-orange-300"}
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
