import ContentMainPage from "@/components/ContentMainPage";
import Division from "@/components/Division";
import Introduce from "@/components/Introduce";
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
          <Introduce />
        </div>
      </div>
    </div>
  );
}
