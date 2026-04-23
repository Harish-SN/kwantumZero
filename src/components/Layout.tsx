import { Outlet } from "react-router-dom";
import QuantumBackground from "./QuantumBackground";

export default function Layout() {
  return (
    <>
      <QuantumBackground />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Outlet />
      </main>
    </>
  );
}