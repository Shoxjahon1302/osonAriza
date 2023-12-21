import { FaEyeSlash, FaEye, FaChevronDown } from "react-icons/fa";
import { BiLoaderCircle } from "react-icons/bi";
import { useState } from "react";
import { RiUserAddLine } from "react-icons/ri";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const api = "http://localhost:5000/api/users/login";
export default function Login() {
  const [auth, setAuth] = useState("signin");
  const [errors, setErrors] = useState({
    phone: "",
    password: "",
  });
  const [userData, setUserData] = useState({
    phone: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState();
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrors({
      phone: "",
      password: "",
    });
    let hasErrors = false;
    if (!userData.phone) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Please enter your phone number",
      }));
      hasErrors = true;
    }
    if (!userData.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Please enter your password",
      }));
      hasErrors = true;
    }
    if (hasErrors) {
      return;
    }
    try {
      const response = await fetch(`${api}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, password }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return errorData;
      }
      const userData = await response.json();
      navigate("/");
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const toggleAuth = (state) => {
    setAuth(state);
  };
  return (
    <form onSubmit={handleSignUp}>
      <div className="flex flex-col m-auto w-[371px] justify-center mt-3 h-full">
        <h1 className="text-[#000] text-center font-['Inter'] mt-10 text-4xl not-italic font-medium leading-normal tracking-[-0.36px]">
          {auth === "signup" ? "Регистрация" : "Tizimga kirish"}
        </h1>
        <p className="text-blue-gray-200 mt-3 text-center font-['Inter'] text-base not-italic font-medium leading-normal tracking-[-0.16px]">
          Tizimga kirish ma'lumotlaringizni kiriting
        </p>
        <label className={`${auth === "signup" ? "" : "hidden"}`}>
          <p className="text-[#111] text-start font-['Inter'] text-base not-italic font-normal tracking-[-0.16px] mt-5">
            Ism{" "}
            <span className="text-[#FF3535] font-['Inter'] text-base not-italic font-norm al tracking-[-0.16px]">
              *
            </span>
          </p>
          <input
            onChange={(e) =>
              setUserData((d) => ({ ...d, firstname: e.target.value }))
            }
            type="text"
            placeholder="Ваше имя"
            className={`bg-[#F8F8F8] w-full mt-3 outline-none rounded-[10px] h-14 pl-[14px] text-[#989898] font-['Inter'] text-base not-italic font-normal tracking-[-0.26px] ${
              errors.firstname ? "border border-[#FF3535]" : "border-none"
            }`}
          />
        </label>
        <div className="pb-5">
          <p className="text-[#111] text-start font-['Inter'] text-base not-italic font-normal tracking-[-0.16px] mt-[24px]">
            Telefon raqami{" "}
            <span className="text-[#FF3535] font-['Inter'] text-base not-italic font-norm al tracking-[-0.16px]">
              *
            </span>
          </p>
          <input
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
            type="string"
            placeholder="+99890 123 45 67"
            className={`bg-[#F8F8F8] w-full outline-none mt-3 rounded-[10px] h-14 pl-[14px] text-[#989898] font-['Inter'] text-base not-italic font-normal tracking-[-0.26px]
              ${errors.phone ? "border border-[#FF3535] " : "border-none"}`}
          />
        </div>
        <label className={auth == "singup" ? "" : ""}>
          <p className="text-[#111] text-start font-['Inter'] text-base not-italic font-normal tracking-[-0.16px] mt-3">
            Parol{" "}
            <span className="text-[#FF3535] font-['Inter'] text-base not-italic font-norm al tracking-[-0.16px]">
              *
            </span>
          </p>
          <div
            className={`flex items-center justify-between pr-4 bg-[#F8F8F8] w-full mt-3 rounded-[10px] ${
              errors.password ? " border border-[#FF3535]" : "border-none"
            }`}
          >
            <input
              onChange={(e) =>
                setUserData((d) => ({ ...d, password: e.target.value }))
              }
              type={passwordShown ? "text" : "password"}
              placeholder="Введите пароль"
              className={`rounded-[10px] w-full outline-none bg-[#F8F8F8] h-14 pl-[14px] text-[#989898] font-['Inter'] text-base not-italic font-normal tracking-[-0.26px]`}
            />
            <p
              className="cursor-pointer text-[#989898]"
              onClick={handleTogglePassword}
            >
              {passwordShown ? <FaEye /> : <FaEyeSlash />}
            </p>
          </div>
        </label>
        <button
          onClick={handleSignUp}
          type="submit"
          className="
      bg-[#08A284] text-white p-[12px_24px]
      w-full rounded-[32px] mt-6 font-['Inter'] text-lg not-italic font-medium leading-normal tracking-[-0.18px]"
        >
          {isLoading ? (
            <p className="flex items-center justify-center gap-[6px]">
              <BiLoaderCircle />
              Yuklanmoqda...
            </p>
          ) : (
            <div className="flex items-center justify-center gap-[6px]">
              {auth === "signup" ? (
                <div className="flex items-center gap-[6px]">
                  <RiUserAddLine />
                  Roʻyxatdan oʻtish
                </div>
              ) : (
                <div className="flex items-center gap-[6px]">
                  <IoExitOutline /> Kirish
                </div>
              )}
            </div>
          )}
        </button>
        {errors.password && (
          <p className="border-2 border-dashed border-[#FF3535] mt-[14px] bg-[#FFF5F5] rounded-xl p-[16px] text-[#111] font-['Inter'] text-base not-italic font-normal leading-6 tracking-[-0.16px]">
            Ba'zi qismlarni to'ldirishda xato qildingiz
          </p>
        )}
      </div>
    </form>
  );
}
