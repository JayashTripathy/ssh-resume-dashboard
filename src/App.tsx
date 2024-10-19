import { ChevronRight } from "lucide-react";
import { OssLight } from "./components/svg/oss-light";
import { PrimaryButton } from "./components/ui/primary-button";

import { Section, SectionTitle } from "./components/ui/section";

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <OssLight className="absolute scale-[2] left-[-70px] sm:left-[70px] md:left-[150px] lg:left-[200px] xl:left-[420px] top-[-250px]" />
      <div className="flex flex-col gap-10 items-center">

      <Section>
        <SectionTitle className="text-6xl max-w-[700px] text-center   tracking-tight ">Access your resume the nerd way</SectionTitle>
      </Section>
      <PrimaryButton label="Get Yours Now" shiny IconRight={ChevronRight} />
      </div>
    </main>
  );
}

export default App;