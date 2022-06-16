import React from "react";
import { video, VideoItem } from "./VideoItem";

type props = {
  videos: video[];
  onVideoSelect(video: video): void;
};

export const VideoList = ({ videos, onVideoSelect }: props) => {
  const renderedList = videos.map((v) => {
    return <VideoItem key={v.id.videoId} onVideoSelect={onVideoSelect} video={v} />;
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};
