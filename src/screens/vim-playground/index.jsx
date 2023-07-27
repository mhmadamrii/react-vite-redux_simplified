import React, { useState } from "react";
import Playground from "./Playground";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function PlaygroundContainer() {
  const [state, setState] = useState();
  const myURL = "https://express-creation.vercel.app/api/v1";
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      try {
        const response = await axios.get(`${myURL}/products`);
        setState(response?.data);
        console.log("response get", response);
      } catch (error) {
        console.log({ error });
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Playground dataQuery={state} />;
}
