import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
} from "@clerk/clerk-react";
import { PenBox } from "lucide-react";

const Header = () => {

  const [showSignIn, setShowSignIn] = useState(false);
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
    }
  }
  return (
    <>
      <nav className="py-2 flex justify-between items-center">
        <Link>
          <img className="h-20" src="/logo.png" alt="" />
        </Link>
        <div className="flex gap-8">
          <SignedOut>
            <Button onClick={() => setShowSignIn(true)} variant="outline">
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            <Link to="/post-job">
              <Button variant="destructive" className="rounded-full">
                <PenBox size={20} />
                Post a Job
              </Button>
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      {showSignIn && (
        <div className="fixed flex items-center justify-center inset-0 bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;
