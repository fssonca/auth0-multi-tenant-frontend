import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSearchParams } from "react-router-dom";

function Login() {
  const { loginWithRedirect } = useAuth0();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const invitation = searchParams.get("invitation");
    const organization = searchParams.get("organization");

    if (invitation && organization) {
      loginWithRedirect({
        authorizationParams: {
          invitation,
          organization,
        },
      });
    } else {
      loginWithRedirect();
    }
  }, [searchParams, loginWithRedirect]);

  return <div>Redirecting to login...</div>;
}

export default Login;
