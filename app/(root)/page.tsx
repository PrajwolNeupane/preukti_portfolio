import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center bg-light-500 overflow-x-hidden">
      <div className="flex flex-col  lg:w-[50%] md:w-[60%] sm:w-[70%] w-[90%] items-center">
        <Image
          src={"/assets/me.jpg"}
          alt="Profile Photo"
          width={200}
          height={200}
          className="object-cover  md:w-[35%] w[40%]- aspect-square rounded-[100%] mb-5"
        />
        <h2 className="text-primary-700 font-b md:text-lg sm:text-md text-sm">
          Hi, I am Preukti Parajuli
        </h2>
        <h3 className="font-r md:text-2xs text-3xs text-center text-dark-500">
          A passionate UI/UX Designer based in Kathmandu, Nepal. I began my
          designing journey since 2023. This space is where creativity and
          functionality unite. I believe that design is not just about making
          things look pretty, but it's also about crafting seamless and
          meaningful user experiences. Here you'll find a collection of my
          latest projects. Feel free to explore my work and get in touch if
          you'd like to collaborate. Let's create exceptional experiences
          together!
        </h3>
        <hr className="w-[60%] h-[1px] my-2 bg-primary-700" />
        <div className="flex items-center gap-5">
          <Link href={"https://www.instagram.com/__preukti__/"} target="blank">
            <i className="uil uil-instagram lg:text-lg md:text-md text-sm"></i>
          </Link>
          <Link
            href="https://www.linkedin.com/in/preukti-parajuli-633964259/"
            target="blank"
          >
            <i className="uil uil-linkedin-alt lg:text-lg md:text-md text-sm"></i>
          </Link>
          <Link href={"mailto:parajulipreukti@gmail.com"} target="blank">
            <i className="uil uil-envelope lg:text-lg md:text-md text-sm"></i>
          </Link>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-10 gap-1 items-center">
          <div className="flex gap-2 items-center">
            <i className="uil uil-phone-alt md:text-xs text-2xs"></i>
            <p className="font-r md:text-2xs text-3xs text-center text-dark-500">
              +977- 9741814412
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <i className="uil uil-map-marker md:text-xs text-2xs"></i>
            <p className="font-r md:text-2xs text-3xs text-center text-dark-500">
              Thali, Kageshwori Manohara -05
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
