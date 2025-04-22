import { useEffect } from "react";
import style from "@/app/work/[id]/page.module.css";

const VideoEmbed = ({ videoId, title }) => {
  useEffect(() => {
    // Dynamically load the Vimeo Player API script
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
      className={style.iFrameVimeo}
    ></iframe>
  );
};

export default VideoEmbed;
