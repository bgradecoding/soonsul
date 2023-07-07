import { useEffect, useRef } from "react";
import CameraBottom from "./components/bottom";
import CameraHeader from "./components/header";
import CameraFrame from "./components/frame";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const CameraPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { height } = useWindowDimensions();
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
        // Handle error or provide fallback behavior
      });
  }, []);

  return (
    <div className="relative">
      <CameraHeader />
      <CameraFrame />
      <video
        ref={videoRef}
        className="object-cover "
        style={{ height: (height ? height : 0) - 88 }}
      />
      <CameraBottom />
    </div>
  );
};

export default CameraPage;
