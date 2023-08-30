// import { Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import markerIcon from "../utils/marker_icon.png";
// const WorldMap = (countries) => {
//   const { countriesData } = countries;
//   const customMarker = L.icon({
//     iconUrl: markerIcon,
//     iconSize: [20, 25],
//     iconAnchor: [15, 30],
//   });

//   return (
//     <div>
//       {countriesData?.map((country) => (
//         <Marker
//           icon={customMarker}
//           key={country.countryInfo._id}
//           position={[country.countryInfo.lat, country.countryInfo.long]}
//         >
//           <Popup>
//             <div>
//               <h2>{country.country}</h2>
//               <p>
//                 Active Cases: {country.active} <br />
//                 Recovered Cases: {country.recovered} <br />
//                 Deaths: {country.deaths}
//               </p>
//             </div>
//           </Popup>
//         </Marker>
//       ))}
//     </div>
//   );
// };

// export default WorldMap;



import { Marker, Popup } from "react-leaflet"; // Importing Marker and Popup components from react-leaflet
import L from "leaflet"; // Importing Leaflet library
import markerIcon from "../utils/marker_icon.png"; // Importing custom marker icon

// WorldMap component definition
const WorldMap = (countries) => {
  const { countriesData } = countries; // Destructure the 'countriesData' prop
  // Creating a custom marker icon using Leaflet's L.icon()
  const customMarker = L.icon({
    iconUrl: markerIcon, // Custom marker icon image URL
    iconSize: [20, 25], // Size of the icon
    iconAnchor: [15, 30], // Anchor point of the icon
  });

  // JSX rendering starts here
  return (
    <div>
      {/* Mapping through the 'countriesData' and rendering markers */}
      {countriesData?.map((country) => (
        <Marker
          icon={customMarker} // Applying the custom marker icon
          key={country.countryInfo._id} // Unique key for each marker
          position={[country.countryInfo.lat, country.countryInfo.long]} // Marker position
        >
          {/* Popup content for the marker */}
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>
                Active Cases: {country.active} <br />
                Recovered Cases: {country.recovered} <br />
                Deaths: {country.deaths}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};

export default WorldMap;
