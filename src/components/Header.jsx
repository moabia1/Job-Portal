import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    if (search.get('sign-in')) {
      setShowSignIn(true)
    }
  }, [search])
  
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({})
    }
  }
  return (
    <>
      <nav className="flex justify-between items-center">
        <Link to="/">
          <img className="h-20" src="/logo.png" alt="" />
        </Link>
        <div className="flex gap-8">
          <SignedOut>
            <Button onClick={() => setShowSignIn(true)} variant="outline">
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            {user?.unsafeMetadata?.role === "recruiter" && (<Link to="/post-job">
              <Button variant="destructive" className="rounded-full">
                <PenBox size={20} />
                Post a Job
              </Button>
            </Link>)}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={20} />}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={20} />}
                  href="/saved-jobs"
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70"
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
