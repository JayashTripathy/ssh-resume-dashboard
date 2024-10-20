import { OssLight } from "@/components/svg/oss-light";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SectionTitle } from "@/components/ui/section";
import { ChevronRight } from "lucide-react";

function Login() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    return null;
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <OssLight className="absolute right-0 -top-52 opacity-35  " />
      <OssLight className="absolute left-0 -top-52 opacity-35  " />

      <div className="max-w-xl w-full p-10 border rounded-3xl relative overflow-hidden ">
        <SectionTitle title="Login" />
        <br />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Label>Email</Label>
            <Input placeholder="jhon@gmail.com" type="email" />
          </div>
          <div className="flex flex-col gap-3">
            <Label>Password</Label>
            <Input placeholder="*******" type="password" />
          </div>
          
          <PrimaryButton label="Get me in" IconRight={ChevronRight} className="w-full justify-center mt-3 text-md cursor-pointer" shiny/>
        </div>
      </div>
    </div>
    // <form className="grid gap-2" onSubmit={handleSubmit}>
    //   <div className="grid gap-1">
    //     <Input
    //       name="email"
    //       placeholder="name@example.com"
    //       type="email"
    //       // defaultValue={props.emailValue}
    //       autoCapitalize="none"
    //       autoComplete="email"
    //       autoCorrect="off"
    //       required
    //       className="h-10 text-white duration-500 bg-transparent focus:text-black border-white/20 focus:bg-white focus:border-white hover:bg-white/20 hover:border-white/40 placeholder:white/20 "
    //     />
    //   </div>
    //   <button
    //     type="submit"
    //     className="relative flex items-center justify-center h-10 gap-2 px-4 text-sm font-semibold text-black duration-200 bg-white border border-white rounded-lg hover:border-white/30 hover:bg-black hover:text-white"
    //     //   disabled={isLoading}
    //   >
    //     {/* {isLoading ? <Loading className="w-4 h-4 animate-spin" /> : "Sign In with Email"}
    //       {lastUsed === "email" ? <LastUsed /> : null} */}
    //   </button>
    // </form>
  );
}

export default Login;
