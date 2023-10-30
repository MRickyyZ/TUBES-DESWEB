import { Link } from "react-router-dom";
import wave from "../assets/Vector.svg";
import Navbar from "../component/Navbar";
import { useState } from "react";
import eyeIcon from "../assets/eye.svg";
import hideEye from "../assets/hide-eye.svg";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen relative flex  items-center justify-center bg-gradient-to-b from-[#B4C0D1] to-[#092850] z-20">
        <div className="absolute inset-0 overflow-hidden">
          <img src={wave} alt="Wave" className="absolute bottom-0 left-0 right-0 w-full -z-10 " />
        </div>
        <div className=" bg-[#fff] sm:w-96 rounded p-8 shadow-md md:w-96 w-auto text-center z-30 mt-20 mb-10">
          <h2 className=" md:text-xl text-base  font-poppins font-semibold p-1 mb-5 -mt-3">Pendaftaran Akun</h2>
          <form>
            <div className="-mt-5">
              <label htmlFor="firstName" className="block text-black py-7 text-left font-poppins -mb-5">
                Nama Depan <span className="text-red-500">*</span>
              </label>
              <input type="text" id="firstName" className="w-full border rounded border-slate-800 py-1.5 px-3 md:w-80 lg:w-80 sm:w-80" />
            </div>
            <div className="-mt-5">
              <label htmlFor="lastName" className="block text-black py-7 text-left  font-poppins -mb-5 md:text-justify">
                Nama Belakang <span className="text-red-500">*</span>
              </label>
              <input type="text" id="lastName" className="w-48 border rounded border-slate-800 py-1.5 px-3 md:w-80 lg:w-80 sm:w-80" />
            </div>
            <div className="-mt-5">
              <label htmlFor="email" className="block text-black py-7  text-left font-poppins -mb-5">
                Email <span className="text-red-500">*</span>
              </label>
              <input type="email" id="email" className="w-full border rounded border-slate-800 py-1.5 px-3 md:w-80 lg:w-80 sm:w-80" />
            </div>
            <div className="-mt-5">
              <label htmlFor="phoneNumber" className="block text-black py-7  text-left font-poppins -mb-5">
                Nomor Telepon <span className="text-red-500">*</span>
              </label>
              <input type="tel" id="phoneNumber" className="w-full border rounded border-slate-800 py-1.5 px-3 md:w-80 lg:w-80 sm:w-80" />
            </div>
            <div className="-mt-5">
              <label htmlFor="password" className="block text-black py-7 font-poppins text-left -mb-4">
                Password <span className="text-red-600"> * </span>
              </label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} id="password" className="w-full border rounded border-slate-800 py-1.5 px-3 md:w-80 lg:w-80 sm:w-80" />
                <span className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
                  {showPassword ? <img src={eyeIcon} alt="eyes" /> : <img src={hideEye} alt="hide" />}
                </span>
              </div>
            </div>
            <div className="-mt-5">
              <label htmlFor="confirmPassword" className="block text-black py-7 font-poppins text-left -mb-4">
                Konfirmasi Password <span className="text-red-600"> * </span>
              </label>
              <div className="relative">
                <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" className="w-full border rounded border-slate-800 py-1.5 px-3 md:w-80 lg:w-80 sm:w-80" />
                <span className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? <img src={eyeIcon} alt="eyes" /> : <img src={hideEye} alt="hide" />}
                </span>
              </div>
            </div>
            <div className="mb-4 flex items-center mt-3 ml-2">
              <label htmlFor="agreeToTerms" className="text-gray-800 lg:text-sm sm:text-sm mr-4 font-poppins text-xs text-start flex items-center">
                <input type="checkbox" id="agreeToTerms" className="bg-black mr-3 " />
                <div>
                  Saya setuju dengan <a href="" className="text-blue-500 cursor-pointer">Syarat & Ketentuan </a>
                  <a href=" " className="text-blue-500 cursor-pointer">Kebijakan Privasi</a>
                </div>
              </label>
            </div>
              <button type="submit" className="bg-slate-800 hover:bg-slate-900 hover:text-slate-200 text-white  hover:border-slate-900 py-3 px-4 rounded w-full font-poppins font-bold mb-2">
                Daftar
              </button>
            <Link as={Link} to={"/login"}>
              <button className="bg-white hover:bg-slate-800 hover:text-white text-primary py-2 px-4 border rounded border-slate-800 w-full font-poppins font-bold">
                <a href=""> Masuk Ke Akunmu </a>
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;