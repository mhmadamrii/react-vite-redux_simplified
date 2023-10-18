import React from "react";
import {QueryClientProvider, QueryClient, useQuery} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const Something = () => {
  const {isPending, error, data, isLoading} = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch("https://jsonplaceholder.typicode.com/posts?_limit=20").then((res) => res.json()),
  });

  console.log("data", data);
  console.log("error", error);
  if (isLoading) {
    return <h1>Loading...................</h1>;
  }
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
};

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 1,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Something />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
