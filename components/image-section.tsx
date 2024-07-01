import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ImageSection() {
  return (
    <div className="flex flex-col items-center p-6 text-white mt-12">
      <div className="flex justify-between">
        <div className="mr-5">
          <h1 className="text-4xl font-bold text-start text-zinc-500">
            WHY CHOOSE TRAKIZ <br /> AS <span className="text-[#ff8c00]">YOUR TODO PARTNER</span>
          </h1>
        </div>
        <div className="ml-5">
          <p className="text-start text-zinc-500 max-w-2xl">
            We are committed to continuously enhancing <br /> our AI and features, ensuring you get the best <br /> productivity
            experience with each interaction.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-24 md:grid-cols-3 mt-16">
        <div>
          <Card className="flex justify-center items-center rounded-lg shadow-lg w-[350px] h-[350px] bg-white text-black">
            <div className="flex flex-col justify-center items-center">
              <CardHeader>
                <ListTodoIcon className="w-12 h-12 text-[#ff8c00]" />
              </CardHeader>
              <CardTitle className="text-xl font-semibold text-start">
                Chat with Your To-Do List
              </CardTitle>
              <CardContent className="text-center text-lg text-gray-600">
                Say goodbye to boring lists! Chat with your tasks, get suggestions, & turn your to-do list into a productivity partner.
              </CardContent>
            </div>
          </Card>
        </div>
        <div>
          <Card className="flex justify-center items-center rounded-lg shadow-lg w-[350px] h-[350px] bg-white text-black">
            <div className="flex flex-col justify-center items-center">
              <CardHeader>
                <TimerIcon className="w-12 h-12 text-[#ff8c00]" />
              </CardHeader>
              <CardTitle className="text-xl font-semibold text-start">
                Focused Timer Sessions
              </CardTitle>
              <CardContent className="text-center text-lg text-gray-600">
                Trakiz helps you stay on track with focused timer sessions, boosting your productivity with short, effective sprints.
              </CardContent>
            </div>
          </Card>
        </div>
        <div>
          <Card className="flex justify-center items-center rounded-lg shadow-lg w-[350px] h-[350px] bg-white text-black">
            <div className="flex flex-col justify-center items-center">
              <CardHeader>
                <ListTodoIcon className="w-12 h-12 text-[#ff8c00]" />
              </CardHeader>
              <CardTitle className="text-xl font-semibold text-start">
                Progress Tracking
              </CardTitle>
              <CardContent className="text-center text-lg text-gray-600">
                Track your progress with engaging charts and graphs. See how far you've come.
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}


function ListTodoIcon(props) {
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


function TimerIcon(props) {
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


function WaypointsIcon(props) {
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
