"use client";
import { Toaster } from "react-hot-toast";
export default function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: { borderRadius: "10px", background: "#1e293b", color: "#fff", fontSize: "14px" },
        success: { iconTheme: { primary: "#4f46e5", secondary: "#fff" } },
        error: { iconTheme: { primary: "#ef4444", secondary: "#fff" } },
      }}
    />
  );
}
