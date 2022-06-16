import { useEffect, useState } from "react";
import { useVideos } from "../hooks/useVideos";
import { SearchBar } from "./SearchBar";
import { VideoDetail } from "./VideoDetail";
import { video } from "./VideoItem";
import { VideoList } from "./VideoList";

export const App = () => {
  const [selectedVideo, setSelectedVideo] = useState<video | null>(null);
  const { videos, search } = useVideos("");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container" style={{ paddingTop: "2rem" }}>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};
