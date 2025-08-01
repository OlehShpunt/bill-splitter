"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavigationBar() {
  const [isEnabled, setIsEnabled] = useState(false);

  function toggleNavigation() {
    setIsEnabled(!isEnabled);
  }

  return (
    <div className="absolute m-0">
      <div
        className={`fixed h-full w-40 bg-amber-500 z-1 transition-normal duration-100 ease-linear ${
          !isEnabled ? "-translate-x-40" : ""
        }`}
      >
        <ul>
          <li>
            <Link href="/scan" onClick={toggleNavigation}>
              Scan bill
            </Link>
          </li>
          <li>
            <Link href="/recent-bills" onClick={toggleNavigation}>
              Recent bills
            </Link>
          </li>
          <li>
            <Link href="/account" onClick={toggleNavigation}>
              Account
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`relative h-16 w-16 z-1 transition-normal duration-100 ease-linear bg-gray-400 flex items-center ${
          isEnabled ? "translate-x-40" : ""
        }`}
      >
        <div
          className="w-fit h-fit pb-3 leading-3.5 text-6xl m-auto"
          onClick={toggleNavigation}
        >
          <p className="block">―</p>
          <p className="block">―</p>
          <p className="block">―</p>
        </div>
      </div>
    </div>
  );
}
