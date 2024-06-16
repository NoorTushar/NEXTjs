import Link from "next/link";

const AboutPage = () => {
   return (
      <div>
         <h2 className="text-center text-2xl">This is the about page.</h2>

         <div>
            <ul>
               <li>
                  <Link className="my-btn w-min" href={"/about/history"}>
                     History
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default AboutPage;
