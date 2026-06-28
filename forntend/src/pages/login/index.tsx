import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center w-96">
          <img
            src={user?.picture}
            alt={user?.name}
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />

          <h2 className="text-2xl font-bold">{user?.name}</h2>
          <p className="text-gray-600">{user?.email}</p>

          <button
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin,
                },
              })
            }
            className="mt-6 w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[380px]">
        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to continue
        </p>

        <button
          onClick={() => loginWithRedirect()}
          className="w-full flex items-center justify-center gap-3 border rounded-lg py-3 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-6 h-6"
          />

          <span className="font-medium">
            Continue with Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;