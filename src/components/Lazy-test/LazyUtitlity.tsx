// import React, { useEffect, useState } from 'react';

// const LazyUtitlity = () => {
//   const [utility, setUtility] = useState(null);

//   useEffect(() => {
//     // Dynamically import the npm package
//     import('date-fns').then((module) => {
//       setUtility(module); // Assuming the library has a default export
//     })
//   }, []);

//   if (!utility) {
//     return <div>Loading utility...</div>;
//   }

// //   return utility

//   return (
//     <div>
//       <button>{utility?.format(new Date(), "'Today is a' eeee")}</button>
//     </div>
//   );
// };

// export default LazyUtitlity;