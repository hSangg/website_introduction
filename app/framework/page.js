"use client";
import Division from "@/components/Division";
import MemberListFrameWork from "@/components/FRAMEWORK/MemberListFrameWork";
import TeamManagement from "@/components/TeamManagement";
import ContentMainPageWeb from "@/components/WEB/ContentMainPageWeb";
import ProgressWeb from "@/components/WEB/ProgressWeb";
import TargetWeb from "@/components/WEB/TargetWeb";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="mx-[20px]">
        <div>
          <ContentMainPageWeb />
          <Division />
          <MemberListFrameWork />
          <Division />
          <TargetWeb />
          <Division />
          <ProgressWeb />
          <Division />
          <TeamManagement />
        </div>
      </div>
    </div>
  );
}
