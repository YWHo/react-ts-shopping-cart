import { LogInIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div className="vw-100 vh-100">
      <div
        className="position-absolute text-center"
        style={{
          right: "50%",
          bottom: "50%",
          transform: "translate(50%, 50%)",
        }}
      >
        <h1>Welcome to this site</h1>
        <NavLink to="/store">
          Continue <LogInIcon />
        </NavLink>
      </div>

      <video
        aria-hidden="true"
        muted
        autoPlay
        loop
        playsInline
        className="position-absolute"
        style={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: -1,
        }}
      >
        <source src="./videos/Sky-and-cloud-background.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
