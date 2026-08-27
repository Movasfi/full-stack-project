import { Link } from "react-router";
import { Input } from "../ui/input";
import type { IFormSingUp } from "@/types/Form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import useSignup from "@/modules/signup/hooks/useSignup";
import Dialog from "../Dialog";
import useTheme from "@/hooks/useTheme";

const Signup = () => {
    const {theme} = useTheme()
    const { formState, register, handleSubmit, reset } = useForm<IFormSingUp>({ reValidateMode: "onChange" })
    const { isSubmitting } = formState
    const { mutate, error, isError, reset: resetRequest } = useSignup()
    const onSubmit = (data: IFormSingUp) => {
        console.log(data);
        mutate(data)

    };

    return (
        <div className={`min-h-screen w-full flex items-center justify-center p-4 ${theme} from-purple-100/50 via-white to-emerald-100/40 font-sans`}>
            {/* Main Card */}
            <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-xl shadow-black/5 border border-gray-100/80 overflow-hidden">

                {/* Top Header Section */}
                <div className="p-8 pb-6 text-center">
                    {/* Logo Icon */}


                    <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                        Sign Up
                    </h1>
                    <p className="text-xs text-gray-400 mt-1.5 font-normal">
                        Get started for free. No credit card required.
                    </p>
                </div>

                {/* Section Divider */}
                <div className="border-b border-gray-100" />

                {/* Form Section */}
                <div className="p-8 pt-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">
                        <div>
                            <label className="block text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1.5">
                                FULL NAME
                            </label>
                            <Input {...register('name', { required: "pelase enter a valid username" })} />
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1.5">
                                EMAIL ADDRESS
                            </label>
                            <Input  {...register('email', { required: "pelase enter a valid email" })} />
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1.5">
                                PASSWORD
                            </label>
                            <Input {...register('password', { required: "pelase enter a valid password" })} />
                            <p>{error?.response?.data?.errors?.email?.[0] === "email"}</p>
                        </div>

                        <Button disabled={isSubmitting} className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2.5 px-4 rounded-md text-xs transition-colors duration-150 shadow-sm mt-2 cursor-pointer" type="submit">
                            {isSubmitting ? " loading" : "Create an account"}
                        </Button>
                    </form>

                    {/* Footer Text */}
                    <div className="flex text-sm justify-center items-center gap-1 text-gray-400 text-center mt-5">
                        <p>Already registered?</p>
                        <Link to='/login' className="font-semibold text-blue-500 hover:underline">
                            Sign in
                        </Link>
                        <p>to your account.</p>
                    </div>
                </div>
                <Dialog resetFields={reset} errorType="signup" closeError={resetRequest} errorMessage={error?.message} isError={isError} />
            </div>
        </div>
    );
}

export default Signup