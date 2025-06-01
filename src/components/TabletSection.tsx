import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function TabletSection() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Experience the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                AI-Driven Content
              </span>
            </h1>
          </>
        }
      >
        <div className="h-full w-full">
          <div style={{ height: "100%", position: "relative", overflow: "hidden" }}>
            <iframe
              src="https://player.vimeo.com/video/1089404942?h=dc386a8b93&badge=0&autopause=0&autoplay=1&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{ 
                position: "absolute", 
                top: "50%", 
                left: "50%", 
                width: "110%", 
                height: "110%",
                transform: "translate(-50%, -50%)",
                objectFit: "cover"
              }}
              title="$30m Pitch"
              allowFullScreen
            />
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}