import Login from "../components/Login";
import { FaTasks } from "react-icons/fa";
import bg from "../assets/bg.jpg";

const Home = () => {
  return (
    <section
      className="relative flex flex-col items-center py-16 px-6 bg-cover bg-center 
        bg-no-repeat min-h-screen "
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="max-w-2xl text-center relative mt-52 lg:mt-96 2xl:mt-80">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 italic">Schedify</h1>
        <p className="text-xl md:text-2xl font-semibold">
          Stay Organized, Stay Ahead
        </p>
        <p className="text-sm lg:text-lg opacity-90 my-4">
          Manage your tasks efficiently with <strong>drag & drop</strong>,
          real-time updates, and an <strong>intuitive workflow</strong>—all in
          one place.
        </p>

        {/* login btn  */}
        <Login />
      </div>

      {/* todo icon */}
      <div className="absolute top-6 right-6 justify-center items-center text-5xl opacity-20">
        <FaTasks />
      </div>
    </section>
  );
};

export default Home;
