import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router"
import { useForm } from "react-hook-form";
import type { IFormLogin } from "@/types/Form";
import useLogin from "@/modules/login/hooks/useLogin";
import Dialog from "../Dialog";
import useTheme from "@/hooks/useTheme";
const Login = () => {
    const { theme } = useTheme()
    const { mutate, isError, error, isSuccess, reset: closeError } = useLogin()
    const { formState, handleSubmit, register, reset, setError } = useForm<IFormLogin>();
    const { isSubmitting, isSubmitted, errors } = formState;
    const navgaite = useNavigate()

    const onSubmit = (data: IFormLogin) => {
        mutate(data);
        isSuccess ? navgaite('/') : "error"

    }
    return (
        <div className={`min-h-screen ${theme}  flex items-center justify-center p-4 font-sans`}>
            <div className={`w-full  max-w-[420px] bg-white rounded-2xl shadow-sm border border-gray-100 p-8`}>

                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Log In
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Welcome back, please enter your details.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5 text-black"
                >
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Email
                        </label>

                        <Input
                            id="email"
                            type="email"
                            className={`h-11 rounded-xl ${errors.email
                                ? "border-red-500 focus-visible:ring-red-200"
                                : ""
                                }`}
                            {...register("email", {
                                required: "Please fill in your email",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Please enter a valid email",
                                },
                            })}
                        />

                        {errors.email && (
                            <p className="mt-1.5 text-xs text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>

                            <Link
                                to="/forget-password"
                                className="text-xs text-blue-500 hover:text-blue-600 hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <Input
                            id="password"
                            type="password"
                            className={`h-11 rounded-xl ${errors.password
                                ? "border-red-500 focus-visible:ring-red-200"
                                : ""
                                }`}
                            {...register("password", {
                                required: "Please enter your password",
                            })}
                        />

                        {errors.password && (
                            <p className="mt-1.5 text-xs text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-11 rounded-xl"
                    >
                        {isSubmitting ? "Loggin In..." : "Log In"}
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    <span>Don't have an account? </span>

                    <Link
                        to="/signup"
                        className="font-medium text-blue-500 hover:text-blue-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
            <Dialog resetFields={reset} errorType="login" errorMessage={error?.message} closeError={closeError} isError={isError} />
        </div>

    )
}

export default Login