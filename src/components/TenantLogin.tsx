import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "../utils/variables";

function TenantLogin() {
  const { orgSlug } = useParams();
  const { loginWithRedirect } = useAuth0();

  const [orgId, setOrgId] = useState(null);

  useEffect(() => {
    if (orgSlug) {
      fetchOrgId();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orgSlug]);

  const fetchOrgId = async () => {
    try {
      const response = await axios.get(
        `${BASE_API_URL}/organization/${orgSlug}`
      );
      console.log(response.data.orgId)
      setOrgId(response.data.orgId);
    } catch (error) {
      console.error("Error fetching organization ID:", error);
    }
  };

  const handleLogin = async () => {
    if (!orgId) {
      console.error("Organization ID is not available yet.");
      return;
    }

    await loginWithRedirect({
      authorizationParams: {
        organization: orgId,
      },
    });
  };

  return (
    <div>
      <h1>Welcome to '{orgSlug}' Tenant Login</h1>
      <button onClick={handleLogin} disabled={!orgId}>
        Login
      </button>
    </div>
  );
}

export default TenantLogin;
