import { useEffect, useState } from "react";
import axios from "../api/axios";

function useFetchData<T>(path: "chats" | "contacts" | "calls" | "messages") {
  const [data, setData] = useState<T[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const abortController = new AbortController();
    let isMounted = true;

    async function fetchData(path: string) {
      try {
        setLoading(true);
        const { data: infos } = await axios(path, {
          signal: abortController.signal,
        });

        // console.log(infos)
        isMounted && setData(infos);
      } catch (error) {
        console.log("error", error);
        setError("Error occured when fetch " + path);
      } finally {
        setLoading(false);
      }
    }

    fetchData(path);

    return () => {
      abortController.abort();
      isMounted = false;
    };
  }, [path]);

  return { data, error, loading };
}

export default useFetchData;
