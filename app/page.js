import ContentMainPage from "@/components/ContentMainPage";
import Division from "@/components/Division";
import IntroduceProject from "@/components/IntroduceProject";
import MemberList from "@/components/MemberList";
import Navigator from "@/components/Navigator";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="mx-[20px]">
        <div className="header">
          <Navigator />
        </div>

        <div>
          <ContentMainPage />
          <Division />
          <IntroduceProject />
          <Division />
          <MemberList />
        </div>
      </div>
    </div>
  );
}
