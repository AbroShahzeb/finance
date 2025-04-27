import {
  IconHidePassword,
  IconShowPassword,
  LogoLarge,
} from "@/assets/svgAssets";
import { Button } from "@/components";
import { Input } from "@/components/input";
import ROUTES from "@/constants/routes";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/lib/validations";
import { useForm } from "react-hook-form";
import { useState } from "react";

import illustrationAuthentication from "@/assets/images/illustration-authentication.svg";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <main className="bg-beige-100 w-full min-h-screen flex flex-col lg:flex-row">
      {/* Top Part Smaller Screens  */}
      <div className="bg-grey-900 py-6 px-10 rounded-b-lg lg:hidden  w-full flex items-center justify-center">
        <LogoLarge />
      </div>

      {/* Left Part Bigger Screens  */}
      <div className="h-screen hidden lg:block p-5 relative object-contain overflow-hidden max-w-[580px] w-full">
        <img
          src={illustrationAuthentication}
          alt="Authentication Illustration"
          className="h-full w-full object-cover rounded-xl"
        />

        <div className="absolute top-12 left-12">
          <LogoLarge />
        </div>

        <div className="absolute bottom-12 left-12 right-12 text-white flex flex-col gap-6">
          <h1 className="text-preset-1 font-bold">
            Keep track of your money and save for your future
          </h1>
          <p className="text-preset-4">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </div>

      {/* Main Content  */}
      <div className="px-6 py-4 flex-1 flex items-center justify-center">
        <form
          className="max-w-[560px] py-6 px-5 sm:p-8 bg-white rounded-xl  w-full flex flex-col gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="text-preset-1 text-primary-text font-bold">Login</div>
          <div className="flex flex-col gap-4">
            <Input
              label="Email"
              registerProps={register("email")}
              error={errors?.email?.message}
            />
            <Input
              label="Password"
              type={isPasswordVisible ? "text" : "password"}
              registerProps={register("password")}
              error={errors?.password?.message}
              postIcon={
                <span
                  className="text-primary-text h-full"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? (
                    <IconHidePassword />
                  ) : (
                    <IconShowPassword />
                  )}
                </span>
              }
            />
          </div>
          <Button label="Login" type="submit" />
          <div className="text-preset-4 text-secondary-text text-center w-full">
            Need an account?{" "}
            <Link
              to={ROUTES.SIGNUP}
              className="text-primary-text underline font-bold "
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};
