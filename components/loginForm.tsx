"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  login: z.string().min(3).max(25),
  password: z.string().min(3),
});

type FormType = z.infer<typeof formSchema>;

export default function LoginForm() {
  const { handleSubmit, reset, register } = useForm({
    resolver: zodResolver(formSchema),
  });
  const submit = (data: FormType) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="space-y-[20px] bg-[#f0f0f0] dark:bg-[#252525] w-fit mx-auto px-[30px] py-[50px] rounded-[8px]"
    >
      <p className="font-light opacity-80 text-[14px] text-center">
        *Use admin as login and password
      </p>
      <div className="flex flex-col gap-[4px]">
        <label htmlFor="login">
          <span>Login</span>
        </label>
        <input
          className="p-[10px] border border-slate-600 dark:border-slate-100 rounded-[10px] outline-none"
          type="text"
          {...register("login")}
        />
      </div>
      <div className="flex flex-col gap-[4px]">
        <label htmlFor="password">
          <span>Password</span>
        </label>
        <input
          id="password"
          className="p-[10px] border border-slate-600 dark:border-slate-100 rounded-[10px] outline-none"
          type="password"
          {...register("password")}
        />
      </div>
      <button className="dark:bg-slate-100 bg-slate-600 dark:text-black text-white w-full py-[12px] rounded-[8px]">
        Log In
      </button>
    </form>
  );
}
