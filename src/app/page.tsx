// "use client";
// import styles from "./page.module.css";
// import {
//   QueryClient,
//   QueryClientProvider,
// } from "https://esm.sh/@tanstack/react-query";

// import styles from "./page.module.css";
// import { lazy, Suspense, useState } from "react";
// export const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: false,
//       staleTime: 0,
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: true,
//     },
//   },
// });

// const AnotherComp = lazy(() => {
//   return import("@/components/homeworks/homework_2");
// });

// const AnotherCompLoadash = lazy(() => {
//   return import("lodash");
// });

export default function Home() {
  // const [isPack, setIsPack] = useState(false);
  return (
    <div>
      <h1>home</h1>
      {/* <h1 onClick={() => setIsPack(true)}>Package usage</h1> */}

      {/* {is && (
        <Suspense fallback={`Is loading !!!`}>
          <AnotherComp />
        </Suspense>
      )} */}
    </div>
  );
}

// <QueryClientProvider client={queryClient}>
//   <h1>home</h1>
//   <ReactQueryDevtools initialIsOpen={false} />
// </QueryClientProvider>
