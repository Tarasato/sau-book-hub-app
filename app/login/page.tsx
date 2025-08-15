export default function Login() {
  return (
    <div className="my-[0px] flex items-center justify-center bg-gray-100 h-[850px]">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Username or Email"
            className="border border-gray-300 rounded-lg p-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600"
          >
            Login
          </button>

          <p className="text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
