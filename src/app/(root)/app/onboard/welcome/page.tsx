"use client";
import { UserContext } from "@/app/context/UserContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";

const Welcome = () => {
  const { user } = useContext(UserContext);
  const [step, setStep] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
  });
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (user) {
      setUsername(user.username ?? "");
    }
  }, [user]);
  return (
    <div className="p-5 pt-10 md:p-5 xl:p-10">
      {step.step1 && (
        <>
          <p className="text-[12px] text-gray-600">Step 1 of 4</p>
          <h1 className="mt-3 text-[20px] font-bold text-gray-800 xl:text-[30px]">
            Welcome to TodoApp!
          </h1>
          <p className="mt-3 text-[12px] text-gray-600">
            We’re excited to help you bring calm back to work and life.
          </p>

          <Card className="mt-5 w-full bg-orange-50/20 p-5 shadow-none xl:w-[500px]">
            <CardHeader className="p-0 text-[14px] font-semibold">
              TodoApp can help you..
            </CardHeader>
            <CardContent className="flex flex-col gap-3 p-0">
              <div className="flex items-center gap-3">
                <img src="/Organise.png" width={120} height={120} />
                <p className="text-[13px] font-light">
                  Organize the everyday chaos
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img src="/focus.png" width={120} height={120} />
                <p className="text-[13px] font-light">
                  Focus on the right things
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img src="/achieve.png" width={120} height={120} />
                <p className="text-[13px] font-light">
                  Achieve goals and finish projects
                </p>
              </div>
            </CardContent>
          </Card>
          <Button
            className="mt-10 px-10 py-5 text-[14px] font-bold"
            onClick={() =>
              setStep({ step1: false, step2: true, step3: false, step4: false })
            }
          >
            Continue
          </Button>
        </>
      )}

      {step.step2 && (
        <>
          <p className="text-[12px] text-gray-600">Step 2 of 4</p>
          <h1 className="mt-3 text-[20px] font-bold text-gray-800 xl:text-[30px]">
            What's your name?
          </h1>
          <p className="text-[12px] text-gray-600">Complete your profile now</p>
          <Card className="p-2 shadow-none mt-5">
            <p className="text-[10px] font-bold">Your name</p>
            <input className="border-none p-0 " value={username} />
          </Card>
        </>
      )}
    </div>
  );
};

export default Welcome;
