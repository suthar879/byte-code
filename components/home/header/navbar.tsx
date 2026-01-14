import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";
import SearchInput from "./searchInput";
import ToggleMode from "./toggle-mode";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full border border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div>
        <div className="flex h-16 items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl">
                <span className="bg-gradient-to-r from-purple-600 to bg-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Byte
                </span>
                <span className="text-foreground">Code</span>
              </span>
            </Link>
          </div>
          {/* desktop menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={"/articles"}
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
            >
              Articles
            </Link>
            <Link
              href={"/tutorial"}
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
            >
              Tutorial
            </Link>
            <Link
              href={"/about"}
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href={"/dashboard"}
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <SearchInput />
            <ToggleMode />
            <div className="hidden md:flex items-center gap-2">
              <Button className="">Login</Button>
              <Button className="">Signup</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
