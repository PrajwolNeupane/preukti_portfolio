import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div className="flex w-[100%] min-h-[200vh] relative overflow-hidden">
      <div className="min-w-[48%] min-h-[100vh] bg-light-400"></div>
      <div className="flex flex-col justify-between py-[10%] px-7 w-[70%] absolute left-[48%] min-h-[190vh] bg-primary-700 gap-[15px] rounded-bl-[50%]">
        <Image src={"/assets/full_pattern.svg"} width={600} height={600} alt="Hi" className="absolute translate-x-[-40%] right-0 top-[0%] opacity-[0.2]"/>
        <div className="flex flex-col justify-center gap-[15px] px-[5%]">
          <Image
            src={"/assets/HI.png"}
            alt="Hi Photo"
            width={120}
            height={120}
          />
          <h2 className="font-libra font-eb text-light-400 text-3xl tracking-[1px]">
            Preukti Parajuli
          </h2>
          <p className="text-light-400 font-l text-2xs w-[70%] leading-[180%]">
            I am a passionate UI/UX Designer based in Kathmandu, Nepal. I began
            my designing journey since 2023. This space is where creativity and
            functionality unite. I believe that design is not just about making
            things look pretty, but it's also about crafting seamless and
            meaningful user experiences. Here you'll find a collection of my
            latest projects. Feel free to explore my work and get in touch if
            you'd like to collaborate. Let's create exceptional experiences
            together!
          </p>
          <Link href={"/"}>
            <button className="w-[150px] py-[8px] bg-light-400 hover:bg-light-500 rounded-md text-primary-700 font-sb text-2xs">
              View my CV
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center w-[70%] pl-[10%] pb-[10%]">
          <h2 className="font-sb text-light-400 text-[70px] leading-[90%]">
            Skills
          </h2>
          <hr className="bg-light-400 w-[25%] h-[2px]" />
          <ol className="w-[80%] ml-[5%] mt-[50px]">
            <li className="text-light-400 font-l text-2xs leading-[120%]">
              Great communication skills, teamwork capability, leadership
              traits, prioritizing of tasks and confident.
            </li>
            <li className="text-light-400 font-l mt-[20px] text-2x leading-[120%]">
              Proficient in creating visually appealing and intuitive user
              interfaces along with seamless user experience through
              user-centered designs.
            </li>
            <li className="text-light-400 font-l mt-[20px] text-2xs leading-[120%]">
              Familarity with wireframes and interactive prototypes to visualize
              design concepts and demonstrate functionality.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default About;
