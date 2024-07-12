import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CardSection = () => {
  const card = [
    {
      title: "Chat with Your To-Do List",
      content:
        "Say goodbye to boring lists! Chat with your tasks, get suggestions, & turn your to-do list into a productivity partner.",
      icon: "/todoList.png",
    },
    {
      title: "Focused Timer Sessions",
      content:
        "Trakiz helps you stay on track with focused timer sessions, boosting your productivity with short, effective sprints.",
      icon: "/timerIcon.png",
    },
    {
      title: "Progress Tracking",
      content:
        "Visualize your progress and achievements with engaging charts and graphs to see how far you've come on your journey.",
      icon: "/upArrow.png",
    },
  ];

  return (
    <>
      <section className="bg-black pt-32 md:pt-28 flex flex-col">
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="md:mr-5 font-manrope">
            <h1 className="text-5xl font-bold text-center md:text-start text-[#585858]">
              WHY CHOOSE TRAKIZ
              <br className="hidden md:block" /> AS{" "}
              <br className="block md:hidden" />
              <span className="text-[#fb9333] text-5xl">
                {" "}
                YOUR TODO PARTNER
              </span>
            </h1>
          </div>
          <div className="mt-16 text-[20px] md:mt-0 md:ml-5">
            <p className="text-center md:text-start text-[#585858] max-w-2xl">
              We are committed to continuously{" "}
              <br className="block md:hidden" /> enhancing{" "}
              <br className="hidden md:block" /> our AI and features, ensuring{" "}
              <br className="block md:hidden" /> you get the best{" "}
              <br className="hidden md:block" />
              productivity experience <br className="block md:hidden" />
              with each interaction.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-6 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 my-[64px] md:mx-28 md:mt-16">
          {card.map((item, index) => (
            <div key={index} className="flex justify-evenly items-center">
              <Card className="flex flex-col justify-center rounded-[50px] shadow-lg max-w-sm w-[300px] h-[400px] space-y-8 px-3 bg-white text-black z-[1]">
                <div>
                  <CardHeader className="w-[122px] h-[122px]">
                    <Image
                      src={item.icon}
                      alt="Icon"
                      width={122}
                      height={122}
                    />
                  </CardHeader>
                </div>
                <div>
                  <CardTitle className="text-xl text-[#2b2b2b] font-semibold text-start pl-6">
                    {item.title}
                  </CardTitle>
                  <CardContent className="text-start text-lg mt-3 text-gray-600 font-manrope">
                    {item.content}
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
          <div className="absolute z-0 left-[60px] bottom-[500px] md:bottom-[275px] md:left-[535px] h-72 w-80 blur-3xl bg-gradient-to-t from-transparent to-[#fb9300] opacity-50" />
        </div>
      </section>
    </>
  );
};

export default CardSection;
