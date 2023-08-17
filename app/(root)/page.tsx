import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex w-[100%] min-h-[190vh] relative overflow-hidden">
        <div className="w-[48%] min-h-[190vh] items-end pl-[10%] pr-[5%]  py-[10%] flex flex-col justify-between bg-light-400">
          <Image
            src={
              "https://images.unsplash.com/photo-1581281863883-2469417a1668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            }
            alt="Profile Photo"
            width={600}
            height={100}
            className="object-cover h-[450px] w-[350px] rounded-lg"
          />
          <div className="flex flex-wrap gap-10 min-h-[100vh] py-[48%]">
            <div className="flex flex-col items-center">
              <Image
                src={
                  "https://images.unsplash.com/photo-1581281863883-2469417a1668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                }
                alt="Profile Photo"
                width={600}
                height={100}
                className="object-cover h-[120px] w-[120px] rounded-lg"
              />
              <p className="text-xs font-mb text-dark-700">Figma</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={
                  "https://images.unsplash.com/photo-1581281863883-2469417a1668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                }
                alt="Profile Photo"
                width={600}
                height={100}
                className="object-cover h-[120px] w-[120px] rounded-lg"
              />
              <p className="text-xs font-mb text-dark-700">Figma</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={
                  "https://images.unsplash.com/photo-1581281863883-2469417a1668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                }
                alt="Profile Photo"
                width={600}
                height={100}
                className="object-cover h-[120px] w-[120px] rounded-lg"
              />
              <p className="text-xs font-mb text-dark-700">Figma</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={
                  "https://images.unsplash.com/photo-1581281863883-2469417a1668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                }
                alt="Profile Photo"
                width={600}
                height={100}
                className="object-cover h-[120px] w-[120px] rounded-lg"
              />
              <p className="text-xs font-mb text-dark-700">Figma</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={
                  "https://images.unsplash.com/photo-1581281863883-2469417a1668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                }
                alt="Profile Photo"
                width={600}
                height={100}
                className="object-cover h-[120px] w-[120px] rounded-lg"
              />
              <p className="text-xs font-mb text-dark-700">Figma</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={
                  "https://images.unsplash.com/photo-1581281863883-2469417a1668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                }
                alt="Profile Photo"
                width={600}
                height={100}
                className="object-cover h-[120px] w-[120px] rounded-lg"
              />
              <p className="text-xs font-mb text-dark-700">Figma</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between py-[10%] px-7 w-[70%] absolute left-[48%] min-h-[190vh] bg-primary-700 gap-[15px] rounded-bl-[50%]">
          <Image
            src={"/assets/full_pattern.svg"}
            width={600}
            height={600}
            alt="Hi"
            className="absolute translate-x-[-40%] right-0 top-[0%] opacity-[0.2]"
          />
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
              I am a passionate UI/UX Designer based in Kathmandu, Nepal. I
              began my designing journey since 2023. This space is where
              creativity and functionality unite. I believe that design is not
              just about making things look pretty, but it's also about crafting
              seamless and meaningful user experiences. Here you'll find a
              collection of my latest projects. Feel free to explore my work and
              get in touch if you'd like to collaborate. Let's create
              exceptional experiences together!
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
                Familarity with wireframes and interactive prototypes to
                visualize design concepts and demonstrate functionality.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center h-[202vh] relative overflow-hidden">
        <div className="flex flex-col items-center py-[5%] h-[195vh] w-[120vw] absolute px-[50%] bg-primary-700 rounded-b-[100%]">
          <h2 className="font-sb text-light-400 text-[70px] leading-[130%]">
            Designs
          </h2>
          <hr className="bg-light-400 w-[75%] h-[2px]" />
          <div className="flex w-[80vw] px-10 py-5 gap-5 h-[500px] my-[50px] bg-light-500 rounded-[30px] z-[2]">
            <Image
              src={
                "https://images.unsplash.com/photo-1581281863883-2469417a1668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              }
              alt="Profile Photo"
              width={600}
              height={100}
              className="object-cover h-[450px] w-[50%] rounded-lg"
            />
            <div className="flex flex-col w-[50%] gap-5">
              <h2 className="text-lg font-sb text-primary-700">
                UI Visuals Website
              </h2>
              <p className="text-2xs">
                UI Visuals is a student led community at Herald College
                Kathmandu. I am one of the core members in the community and I
                designed the website for the community. Here is a figma design
                for our community’s website. I have incorporated different
                features like: autolayout,components, variants as well as
                prototyping from basic to intermediate and advanced in some
                sections.
              </p>
              <Link href={"/"}>
                <button className="w-[150px] py-[8px] text-light-400 rounded-md bg-primary-700 font-r text-2xs">
                  View on Figma
                </button>
              </Link>
            </div>
          </div>
          <Image
            src={"/assets/full_side_pattern.svg"}
            alt="Pattern Photo"
            width={1300}
            height={1300}
            className="object-cover absolute mt-[150px] opacity-[0.3]"
          />
          <div className="flex flex-col items-center gap-2 w-[80vw]">
            <Image
              src={"/assets/half_down_pattern.svg"}
              alt="Pattern Photo"
              width={1100}
              height={1100}
              className="object-cover absolute mt-[300px] opacity-[0.3]"
            />
            <h2 className="font-sb  text-light-400 text-[70px] leading-[90%]">
              Contact
            </h2>
            <hr className="bg-light-400 w-[200px] h-[2px]" />
            <h4 className="font-l text-light-500 text-rg tracking-[1px] leading-[90%] mt-5">
              Let's get connected
            </h4>
            <div className="flex gap-8 items-center">
              <i className="uil uil-envelope text-light-400 text-lg"></i>
              <i className="uil uil-instagram  text-light-400 text-lg"></i>
              <i className="uil uil-linkedin-alt  text-light-400 text-lg"></i>
            </div>
            <div className="flex gap-4 items-center">
              <i className="uil uil-phone text-light-400 text-lg"></i>
              <p className=" text-light-400 text-sm font-l">+977- 9741814412</p>
              <i className="uil uil-location-point  text-light-400 text-lg ml-10"></i>
              <p className=" text-light-400 text-sm font-l">
                Thali, Kageshwori Manohara -05
              </p>
            </div>
            <input
              placeholder="Enter your full name"
              type="text"
              className="w-[60%] p-3 focus:outline-none rounded-md placeholder:font-l mt-3 z-[2]"
            />
            <input
              placeholder="Enter your email address"
              type="email"
              className="w-[60%] p-3 focus:outline-none rounded-md placeholder:font-l my-3  z-[2]"
            />
            <textarea
              placeholder="Enter your message"
              rows={4}
              className="w-[60%] p-3 focus:outline-none rounded-md placeholder:font-l resize-none  z-[2]"
            ></textarea>
            <button className="bottom-[-20px] absolute w-[200px] py-[8px] text-light-400 rounded-md bg-primary-700 font-r text-2xs">
              Send message
            </button>
          </div>
        </div>
        <div className="h-[50vh] bg-light-500"></div>
      </div>
    </>
  );
}
