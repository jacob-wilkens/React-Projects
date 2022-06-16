import React, { useState, useEffect } from "react";
import youtube from "../apis/youtube";
import { video } from "../components/VideoItem";

export const useVideos = (defaultSearchTerm: string) => {
  const [videos, setVideos] = useState<video[]>([]);
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term: string) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(res.data.items);
  };

  return { videos, search };
};
