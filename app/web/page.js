"use client";
import Division from "@/components/Division";
import ContentMainPageWeb from "@/components/WEB/ContentMainPageWeb";
import MemberListWeb from "@/components/WEB/MemberListWeb";
import ProgressWeb from "@/components/WEB/ProgressWeb";
import TargetWeb from "@/components/WEB/TargetWeb";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="mx-[20px]">
        <div>
          <ContentMainPageWeb />
          <Division />
          <MemberListWeb />
          <Division />
          <TargetWeb />
          <Division />
          <ProgressWeb />
        </div>
      </div>
    </div>
  );
}
