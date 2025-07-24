"use client";
import { Button } from "@/components/ui/button";
import React, { useContext, useMemo, useState } from "react";
import { Clock, Dot, MapPin, Plus, PlusIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ChartAreaInteractive } from "@/components/Chart";
import { UserContext, UserProvider } from "@/app/context/UserContext";
import { Card } from "@/components/ui/card";

const Todo = [
  {
    id: 1,
    emoji: "🚀",
    task: "Study",
    time: "10:00",
    location: "Library",
    isCompleted: false,
  },
  {
    id: 2,
    emoji: "🛒",
    task: "Go to the Mall",
    time: "10:00",
    location: "Library",
    isCompleted: true,
  },
  {
    id: 3,
    emoji: "🙏",
    task: "Pray",
    time: "10:00",
    location: "Library",
    isCompleted: false,
  },
];

const Home = () => {
  const { user, getFirstName } = useContext(UserContext);
  const [FirstName, setFirstName] = useState("");
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const getTime = useMemo(() => {
    const date = new Date().getTime();
    if (date < 12) return "morning";
    if (date < 18) return "afternoon";
    return "evening";
  }, []);

  const TodaysDate = useMemo(() => {
    const date = new Date();
    const formatted = format(date, "dd MMM yyyy"); // e.g. '17-07-2025'
    return formatted;
  }, []);

  return (
    <>
      {Todo.length === 0 ? (
        <div className="flex min-h-screen w-full items-center justify-center p-5 xl:px-20 xl:py-20">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <img src="/Organise.png" width={200} height={200} />
            <h1 className="text-[14px] font-bold">Capture now, plan later</h1>
            <p className="font-semilight max-w-[300px] text-[12px]">
              Inbox is your go-to spot for quick task entry. Clear your mind
              now, organize when you’re ready.
            </p>
          </div>

          <Button>
            <PlusIcon /> Add Task
          </Button>
        </div>
      ) : (
        <div className=" w-full px-[20%] py-20">
          <h1 className="text-start text-[20px] font-bold text-gray-800">
            Today's Tasks
          </h1>

          <div className="mt-5">
            <Card className="shadow-0 p-3">
              <input placeholder="Go to the store today" className="text-[12px]" />
              <textarea placeholder="Enter description" className="text-[11px]"></textarea>
              <div className="flex gap-2 items-center">
                <Badge variant="outline">Date</Badge>
                <Badge variant="outline">Priority</Badge>
                <Badge variant="outline">Reminders</Badge>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

/** <div className="flex flex-col gap-5 py-10 px-20  xl:gap-10 w-full">
      {/**Welcome and calender 
      <div className="flex w-auto flex-col gap-3 sm:w-full xl:max-w-[350px]">
        <h1 className="text-[25px] font-semibold">
          Good {getTime}, {getFirstName} 👋
        </h1>
        <p className="text-[13px]">{TodaysDate}</p>
        <Button className="w-full rounded-full py-3">
          <Plus /> New Habits
        </Button>
      </div>

     Todo 
      <div className="w-auto">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-semibold">Today's Todo</h1>{" "}
          <>
            <p className="text-[12px]">View details</p>
          </>
        </div>
        <div className="mt-5 w-full">
          <div className="flex flex-col gap-6 w-full">
            {Todo.map((item) => (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2" key={item.id}>
                  <Badge className="py-2 text-[14px]" variant="secondary">
                    {item.emoji}
                  </Badge>{" "}
                  <div className="flex flex-col gap-1">
                    <p className={`${item.isCompleted && "line-through"}`}>
                      {item.task}
                    </p>
                    <div className="flex items-center gap-2">
                      <>
                        <p className="flex items-center gap-1 text-[10px]">
                          <Clock className="text-[10px]" size={10} />{" "}
                          {item.time}
                        </p>
                      </>
                      <Dot className="text-gray-400" size={10} />
                      <>
                        <p className="flex items-center gap-1 text-[10px]">
                          <MapPin className="text-[10px]" size={10} />{" "}
                          {item.location}
                        </p>
                      </>
                    </div>
                  </div>
                </div>{" "}
                <Checkbox checked={item.isCompleted} />
              </div>
            ))}
          </div>
        </div>
      </div>

     
    </div> */
