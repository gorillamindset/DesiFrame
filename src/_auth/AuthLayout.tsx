import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  const [source, setSource] = useState("../../assets/images/SignupImage.jpg");

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/collections/8390411/photos?client_id=7MCW-yK50nchg2VbGcACypS88xVJk2t5n3fwLPYnfmQ"
    )
      .then((response) => (response ? response.json() : null))
      .then((response) =>
        response
          ? setSource(response[Math.round(Math.random() * 10)].urls.full)
          : false
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 items-center justify-center py-10">
            <Outlet />
          </section>

          <img
            src={source}
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );

  //return <div>AuthLayout</div>;
};

export default AuthLayout;
