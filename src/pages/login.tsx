
import { OssLight } from "@/components/svg/oss-light";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SectionTitle } from "@/components/ui/section";
import { ChevronRight } from "lucide-react";
import {postLogin} from "@/api";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

function Login() {
const navigate = useNavigate();
  const loginMutation = useMutation(postLogin);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const username = formData.get("email") as string;
    const password = formData.get("password") as string;

    loginMutation.mutate({ email: username, password }, {
      onSuccess(data, variables, context) {
        console.log(data);
        navigate("/");
      },
    });

 
    
    return null;
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <OssLight className="absolute right-0 -top-52 opacity-35  " />
      <OssLight className="absolute left-0 -top-52 opacity-35  " />

      <form
        className="max-w-xl w-full p-10 border rounded-3xl relative overflow-hidden "
        onSubmit={handleSubmit}
      >
        <SectionTitle title="Login" />
        <br />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Label>Email</Label>
            <Input
              placeholder="jhon@gmail.com"
              type="email"
              name="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label>Password</Label>
            <Input placeholder="*******" type="password" name="password" required />
          </div>

          <PrimaryButton
            label="Get me in"
            IconRight={ChevronRight}
            className="w-full justify-center mt-3 text-md cursor-pointer"
            shiny
            type="submit"
            loading={loginMutation.isLoading}
          />
        </div>
      </form>
    </div>
  
  );
}

export default Login;
