import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";

function TenantLogin() {
  const { orgSlug } = useParams();
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      authorizationParams: {
        organization: orgSlug,
      },
    });
  };

  return (
    <div>
      <h1>Welcome to '{orgSlug}' Tenant Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default TenantLogin;
