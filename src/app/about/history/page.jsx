import Link from "next/link";

const HistoryPage = () => {
   return (
      <div>
         <h2 className="text-center text-2xl">This is the history page.</h2>

         <div>
            <ul className="space-y-4">
               <li>
                  <Link
                     className="my-btn w-min"
                     href={"/about/history/mission"}
                  >
                     Mission
                  </Link>
               </li>
               <li>
                  <Link className="my-btn w-min" href={"/about/history/vision"}>
                     Vision
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default HistoryPage;
