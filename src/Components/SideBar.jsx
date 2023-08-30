// import contact from "../utils/contact-book.png";
// import bar from "../utils/bar-chart.png";
// import { Link } from "react-router-dom";
// export default function Sidebar() {
//   return (
//     <div className="flex border-r-2">
//       <div className="flex pt-16 flex-col h-screen p-3 bg-white shadow w-32 md:w-60">
//         <div className="space-y-3">
//           <div className="flex items-center justify-center">
//             <h2 className="text-xl mt-8 font-bold text-center">Dashboard</h2>
//           </div>
//           <div className="flex-1">
//             <ul className="pt-8 pb-4 space-y-1 text-sm">
//               <li className="rounded-sm">
//                 <Link
//                   to="/"
//                   className="flex items-center p-2 md:space-x-3 rounded-md"
//                 >
//                   <img src={contact} className="hidden md:block"/>
//                   <span className="font-semibold text-[16px] md:text-xl">Contacts</span>
//                 </Link>
//               </li>
//               <li className="rounded-sm">
//                 <Link
//                   to="/dashboard"
//                   className="flex items-center p-2 text-start md:space-x-3 rounded-md"
//                 >
//                   <img src={bar} className="hidden md:block" alt="" />
//                   {/* Hide image on small screens */}
//                   <span className="font-semibold text-[16px] md:text-xl">Charts And Maps</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import contact from "../utils/contact-book.png"; // Import contact book icon
import bar from "../utils/bar-chart.png"; // Import bar chart icon
import { Link } from "react-router-dom";

// Sidebar component definition
export default function Sidebar() {
  // JSX rendering starts here
  return (
    <div className="flex border-r-2">
      <div className="flex pt-16 flex-col h-screen p-3 bg-white shadow w-32 md:w-60">
        <div className="space-y-3">
          {/* Header section */}
          <div className="flex items-center justify-center">
            <h2 className="text-xl mt-8 font-bold text-center">Dashboard</h2>
          </div>

          {/* Navigation links */}
          <div className="flex-1">
            <ul className="pt-8 pb-4 space-y-1 text-sm">
              {/* Contacts link */}
              <li className="rounded-sm">
                <Link
                  to="/"
                  className="flex items-center p-2 md:space-x-3 rounded-md"
                >
                  <img src={contact} className="hidden md:block" alt="" />
                  <span className="font-semibold text-[16px] md:text-xl">Contacts</span>
                </Link>
              </li>

              {/* Charts and Maps link */}
              <li className="rounded-sm">
                <Link
                  to="/dashboard"
                  className="flex items-center p-2 text-start md:space-x-3 rounded-md"
                >
                  <img src={bar} className="hidden md:block" alt="" />
                  {/* Hide image on small screens */}
                  <span className="font-semibold text-[16px] md:text-xl">Charts And Maps</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
