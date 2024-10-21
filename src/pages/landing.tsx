import { ChevronRight } from "lucide-react";
import { OssLight } from "@/components/svg/oss-light";
import { PrimaryButton } from "@/components/ui/primary-button";
import DemoGif from "@/assets/demo.gif";
import { Section, SectionTitle } from "@/components/ui/section";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <main className="relative flex  h-screen  w-screen overflow-hidden ">
      <OssLight className="absolute scale-[2] left-[-70px] sm:left-[70px] md:left-[150px] lg:left-[200px] xl:left-[420px] top-[-250px]" />
      <OssLight className="absolute scale-[6] opacity-40 top-[-7px]  xl:-left-[300px] left-[-650px] -rotate-90 blur-lg" />
      
      <div className=" flex flex-1  flex-col items-center justify-center overflow-auto z-10">

      <SectionTitle className="text-8xl max-w-[700px] text-center font-semibold   tracking-tight bg-gradient-stop  to-white/30  bg-gradient-to-br text-pretty text-transparent bg-gradient-stop bg-clip-text from-white via-white via-30%">
        SSH RESUME
      </SectionTitle>

      <div className="flex flex-col gap-10 items-center h-1/2">
        <Section className="z-10 flex flex-col gap-4 justify-center items-center">
          <div className="text-3xl text-muted-foreground ">
            Serve Your Resume via SSH!
          </div>

          <PrimaryButton label="Get Yours Now" shiny IconRight={ChevronRight} onClick={() => navigate("/login")} />
          <div className="bg-gradient-to-br from-foreground/70 via-foreground/20 to-foreground/5 p-px rounded-xl overflow-hidden mt-6">
            <img
              src={DemoGif}
              alt="placeholder"
              className="max-w-4xl  z-10 bg-background  rounded-xl "
            />
          </div>

          <br />
        </Section>
      </div>
      </div>

    </main>
  );
}

export default Landing;
