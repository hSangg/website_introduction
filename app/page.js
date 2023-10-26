"use client";
import ContentMainPage from "@/components/ContentMainPage";
import Division from "@/components/Division";
import IntroduceProject from "@/components/IntroduceProject";
import MemberList from "@/components/MemberList";
import Navigator from "@/components/Navigator";
import Progress from "@/components/Progress";
import Target from "@/components/Target";
import { createContext, useState } from "react";

export const TargetContext = createContext();

export default function Home() {
  const [ref, setRef] = useState();

  return (
    <div className="container mx-auto">
      <div className="mx-[20px]">
        <TargetContext.Provider value={{ ref, setRef }}>
          <div className="header">
            <Navigator />
          </div>

          <div>
            <ContentMainPage />
            <Division />

            <IntroduceProject />
            <Division />
            <Target />
            <Division />
            <MemberList />
            <Division />
            <Progress />
          </div>
        </TargetContext.Provider>
      </div>
    </div>
  );
}
