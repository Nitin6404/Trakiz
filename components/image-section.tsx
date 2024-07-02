import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ImageSection() {
  return (
    <div className="flex flex-col items-center p-6 text-white mt-12">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:mr-5">
          <h1 className="text-4xl font-bold text-center md:text-start text-zinc-500">
            WHY CHOOSE TRAKIZ <br /> AS <span className="text-[#ff8c00]">YOUR TODO PARTNER</span>
          </h1>
        </div>
        <div className="mt-4 md:mt-0 md:ml-5">
          <p className="text-center md:text-start text-zinc-500 max-w-2xl">
            We are committed to continuously enhancing <br /> our AI and features, ensuring you get the best <br /> productivity
            experience with each interaction.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-3 mt-16">
  <div className="flex justify-center items-center">
    <Card className="flex flex-col justify-center items-center rounded-lg shadow-lg w-full max-w-sm h-[350px] bg-white text-black">
      <CardHeader>
        <ListTodoIcon className="w-12 h-12 text-[#ff8c00]" />
      </CardHeader>
      <CardTitle className="text-xl font-semibold text-center">
        Chat with Your To-Do List
      </CardTitle>
      <CardContent className="text-center text-lg text-gray-600">
        Say goodbye to boring lists! Chat with your tasks, get suggestions, & turn your to-do list into a productivity partner.
      </CardContent>
    </Card>
  </div>
  <div className="flex justify-center items-center">
    <Card className="flex flex-col justify-center items-center rounded-lg shadow-lg w-full max-w-sm h-[350px] bg-white text-black">
      <CardHeader>
        <TimerIcon className="w-12 h-12 text-[#ff8c00]" />
      </CardHeader>
      <CardTitle className="text-xl font-semibold text-center">
        Focused Timer Sessions
      </CardTitle>
      <CardContent className="text-center text-lg text-gray-600">
        Trakiz helps you stay on track with focused timer sessions, boosting your productivity with short, effective sprints.
      </CardContent>
    </Card>
  </div>
  <div className="flex justify-center items-center">
    <Card className="flex flex-col justify-center items-center rounded-lg shadow-lg w-full max-w-sm h-[350px] bg-white text-black">
      <CardHeader>
        <WaypointsIcon className="w-12 h-12 text-[#ff8c00]" />
      </CardHeader>
      <CardTitle className="text-xl font-semibold text-center">
        Progress Tracking
      </CardTitle>
      <CardContent className="text-center text-lg text-gray-600">
        Track your progress with engaging charts and graphs. See how far you&apos;ve come.
      </CardContent>
    </Card>
  </div>
</div>

    </div>
  )
}


function ListTodoIcon(props: any) {
  return (
    <Image
      src="/todoList.png"
      alt="Todo List"
      width={48}
      height={48}
      {...props}
    />
  )
}


function TimerIcon(props: any) {
  return (
    <Image
      src="/timerIcon.png"
      alt="Todo List"
      width={48}
      height={48}
      {...props}
    />
  )
}


function WaypointsIcon(props: any) {
  return (
    <Image
      src="/upArrow.png"
      alt="Todo List"
      width={48}
      height={48}
      {...props}
    />
  )
}
