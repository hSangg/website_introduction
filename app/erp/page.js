"use client";
import ContentMainPageERP from "@/components/ERP/ContentMainPageERP";
import DivisionERP from "@/components/ERP/DivisionERP";
import ExpectERP from "@/components/ERP/ExpectERP";
import PracticalERP from "@/components/ERP/PracticalERP";
import ProgressERP from "@/components/ERP/ProgressERP";
import ScopeERP from "@/components/ERP/ScopeERP";
import SybsystemDeploy from "@/components/ERP/subsystemDeploy";
import TargetERP from "@/components/ERP/TargetERP";
import { useState } from "react";

export default function Home() {
  const [ref, setRef] = useState();

  return (
    <div className="container mx-auto">
      <div className="mx-[20px]">
        <div>
          <ContentMainPageERP />
          <DivisionERP />
          <TargetERP />
          <DivisionERP />
          <ScopeERP />
          <DivisionERP />
          <ExpectERP />
          <DivisionERP />
          <PracticalERP />
          <DivisionERP />
          {/* <SybsystemDeploy />
          <DivisionERP /> */}
          <ProgressERP />
        </div>
      </div>
    </div>
  );
}
