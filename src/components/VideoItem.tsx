import React from "react";
import "./VideoItem.css";

export type video = {
  id: {
    videoId: string;
  };
  snippet: {
    description: string;
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
};

type props = {
  video: video;
  onVideoSelect(video: video): void;
};

export const VideoItem = ({ video, onVideoSelect }: props) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
