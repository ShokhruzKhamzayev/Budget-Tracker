import LoginForm from "@/components/loginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex justify-between items-center h-screen">
      <div className="w-1/2 mx-auto">
        <LoginForm />
      </div>
      <div className="relative w-1/2 h-full">
        <Image
          src={"/login_content.png"}
          alt="expense tracker banner"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
