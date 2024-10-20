import { ChevronRight } from "lucide-react";
import { OssLight } from "@/components/svg/oss-light";
import { PrimaryButton } from "@/components/ui/primary-button";
import DemoGif from "@/assets/demo.gif";
import { Section, SectionTitle } from "@/components/ui/section";
   



function Landing() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
    <OssLight className="absolute scale-[2] left-[-70px] sm:left-[70px] md:left-[150px] lg:left-[200px] xl:left-[420px] top-[-250px]" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div className="flex flex-col gap-10 items-center">
      <Section className="z-10 flex flex-col gap-10 justify-center items-center">
        <SectionTitle className="text-6xl max-w-[700px] text-center font-semibold   tracking-tight bg-gradient-stop  to-white/30  bg-gradient-to-br text-pretty text-transparent bg-gradient-stop bg-clip-text from-white via-white via-30%">
          Your Resume via SSH!
        </SectionTitle>
        <PrimaryButton label="Get Yours Now" shiny IconRight={ChevronRight} />
        <img
          src={DemoGif}
          alt="placeholder"
          className="max-w-4xl rounded-xl border z-10 bg-background"
        />
      </Section>

    </div>
  </main>
  )
}

export default Landing