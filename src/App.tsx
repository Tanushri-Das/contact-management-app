// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import './App.css';
import SideBar from './Components/SideBar';
import AllRoutes from './Pages/AllRoutes';

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;
 
  return (
    <div className="App">
      <ToastContainer /> {/* Add the ToastContainer here */}
      <h1 className='z-50 w-full fixed shadow-sm shadow-slate-700 top-0 text-2xl text-white bg-indigo-300 font-bold p-4'>
        {
          currentRoute == "/" ? ' Contact Management App' : "Charts and Maps"
        }
      </h1>
      <div className='flex w-full '>
        <div className='sticky top-0 h-screen'>
          <SideBar />
        </div>
        <div className='w-full'>
          <AllRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
