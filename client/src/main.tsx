import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import emailjs from "@emailjs/browser";

// EmailJS'i başlat - environment variable'dan al
const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
if (emailjsPublicKey) {
  emailjs.init(emailjsPublicKey);
}

createRoot(document.getElementById("root")!).render(<App />);
