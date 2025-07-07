import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <main className=" min-h-screen  text-white px-6 py-12 flex flex-col items-center justify-center ">
        {/* Hero Section */}
        <div className=" w-32 h-32 ">
          <img
            src="/fab.png"
            alt="app logo"
            className="w-full h-full object-center"
          />
        </div>
        <section className="text-center max-w-2xl mb-12">
          <div className=" items-center gap-x-5 ">
            <h1 className="text-5xl md:text-6xl pt-2 font-extrabold mb-4 tracking-tight leading-tight">
              Secure User's Authentication System
            </h1>
          </div>
          <p className="text-lg text-gray-400 leading-relaxed">
            A production-ready authentication system using JWT, bcrypt, cookies,
            and Express. Built with security in mind — no tokens in
            localStorage, no compromises.
          </p>
        </section>

        {/* Action Buttons */}
        <section className="flex gap-6 mb-16">
          <Link
            to="/auth/login"
            className="bg-violet-500 hover:bg-violet-700 px-6 py-3 rounded-xl text-white text-lg font-semibold transition"
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className="bg-gray-700 hover:bg-violet-500 px-6 py-3 rounded-xl text-white text-lg font-semibold transition"
          >
            Register
          </Link>
        </section>

        {/* Security Overview */}
        <section className="max-w-3xl bg-black/30 p-6 rounded-xl text-sm text-left text-gray-300 shadow-md border border-gray-700 mb-10">
          <h2 className="text-white font-bold text-lg mb-2">
            🔐 Auth Flow Overview
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>bcrypt:</strong> Passwords hashed before saving in
              MongoDB.
            </li>
            <li>
              <strong>JWT + cookie-parser:</strong> JWT stored in HTTP-only
              cookie for session auth.
            </li>
            <li>
              <strong>CORS:</strong> Controlled frontend-to-backend access.
            </li>
            <li>
              <strong>cookie-parser:</strong> Secure handling of tokens in
              backend.
            </li>
            <li>
              <strong>Context API:</strong> React manages the user state
              globally.
            </li>
            <li>
              <strong>Protected Routes:</strong> Only accessible if JWT cookie
              is valid.
            </li>
            <li>
              <strong>.env:</strong> Secrets like JWT key and DB URI are
              environment protected.
            </li>
          </ul>
        </section>

        {/* Stack Badges */}
        <section className="text-center">
          <p className="text-sm uppercase text-gray-400 mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-3 justify-center text-xs text-white font-semibold">
            <span className="bg-sky-700 px-3 py-1 rounded-full">React</span>
            <span className="bg-green-700 px-3 py-1 rounded-full">Express</span>
            <span className="bg-yellow-600 px-3 py-1 rounded-full">JWT</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">bcrypt</span>
            <span className="bg-indigo-700 px-3 py-1 rounded-full">
              Mongoose
            </span>
            <span className="bg-purple-700 px-3 py-1 rounded-full">
              cookie-parser
            </span>
            <span className="bg-blue-500 px-3 py-1 rounded-full">Axios</span>
            <span className="bg-lime-600 px-3 py-1 rounded-full">.env</span>
            <span className="bg-teal-700 px-3 py-1 rounded-full">CORS</span>
          </div>
        </section>
      </main>
      <footer className=" px-[15%] py-2 text-sm text-gray-500 bg-gray-900 flex justify-between">
        <div>
          <p> &copy; 2025 copyright </p>
        </div>
        <div>
          <ul className="flex gap-x-4">
            <p>Follow on: </p>
            <li className="">
              <i className="block bi bi-github"></i>
            </li>
            <li>
              <i className="bi bi-linkedin"></i>
            </li>
            <li>
              <i className="bi bi-twitter-x"></i>
            </li>
          </ul>
        </div>
        <div>
          <p> Developed By: Mohammad Asif</p>
        </div>
      </footer>
    </>
  );
};

export default Landing;
