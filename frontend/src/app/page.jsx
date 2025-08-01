import App from "../components/core/App.jsx";
import NavigationBar from "@/components/shared/NavigationBar.jsx";
import "./globals.css";
import Link from "next/link.js";

export default function Root() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <p>asdasd</p>
      <p>asdasd</p>
      <p>asdasd</p>
      <p>asdasd</p>
      <img className="block m-auto w-70" src="assets/logo.png" alt="logo"></img>
      <button className="block p-3 m-auto mt-20 text-4xl border-1 rounded-2xl hover:bg-gray-100">
        <Link href="/scan">GET STARTED</Link>
      </button>
    </>
  );
}
