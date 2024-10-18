import { Shield, Zap, Lock } from "lucide-react";

export default function OGImage() {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(to bottom right, #3b82f6, #8b5cf6)", // from-blue-500 to-purple-600
        color: "white",
        padding: "32px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <svg
          style={{ width: "96px", height: "96px", marginRight: "16px" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2l8 4v6a8 8 0 11-16 0V6l8-4z"
          ></path>
        </svg>

        {/* Zap SVG */}
        <svg
          style={{ width: "96px", height: "96px", marginRight: "16px" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      </div>
      <h1
        style={{
          fontSize: "5rem", // 7xl equivalent
          fontWeight: "bold",
          marginBottom: "16px",
          textAlign: "center",
        }}
      >
        SecurityFa.st
      </h1>
      <p
        style={{
          fontSize: "2.25rem", // 3xl equivalent
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        Where speed trumps security, always!
      </p>
      <div
        style={{
          fontSize: "1.5rem", // 2xl equivalent
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.2)", // white/20 equivalent
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        Discover our top security tips that will leave hackers scratching their
        heads!
      </div>
    </div>
  );
}
