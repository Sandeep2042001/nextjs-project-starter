import React from "react";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "2rem" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Welcome to Web WhatsApp Clone</h1>
      <p style={{ fontSize: "1.25rem", color: "#666" }}>Please login to start chatting.</p>
    </main>
  );
}
