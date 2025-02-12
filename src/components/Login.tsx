import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Login() {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, [params]);

  const handleLogin = async () => {
    // Pass the slug in the organization parameter if using Auth0 organizations
    // or in the custom param if you're storing it differently.
    // await loginWithRedirect({ organization: orgSlug });
  };

  return (
    <div>
      <h1>Welcome to General Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
