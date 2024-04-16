import { Link, useNavigate } from "react-router-dom";
import { Button } from "../button.tsx";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations.ts";
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext.tsx";
import logo2 from "/assets/images/logo2.svg";
import logout from "/assets/icons/logout.svg";

const Topbar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) navigate("/sign-in");
  }, [isSuccess, navigate]);

  return (
    <section className="topbar">
      <div className="flex-between py-1 px-4 ml-3">
        <Link to="/" className="flex gap-3 items-center">
          <img src={logo2} alt="logo" width={110} height={125} />
        </Link>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => signOut()}
          >
            <img src={logout} alt="logout" />
          </Button>
          <Link to={`/profile/${user.id}`} className="flex-center gap-3">
            <img
              src={
                user.imageUrl || "/public/assets/icons/profile-placeholder.svg"
              }
              alt="profile picture"
              className="h-8 w-8 rounded-full mr-5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
