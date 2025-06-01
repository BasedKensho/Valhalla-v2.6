import { BorderBeam } from "@/components/ui/border-beam";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";

export function BorderBeamDemo() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  return (
    <div className="relative flex min-h-[500px] w-full max-w-5xl mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-black p-8 md:p-12">
      <div 
        ref={ref}
        className="w-full h-full bg-black flex items-center justify-center rounded-lg overflow-hidden aspect-video"
      >
        <ReactPlayer
          url="https://player.vimeo.com/video/1089404942?h=dc386a8b93"
          playing={inView}
          controls={true}
          width="100%"
          height="100%"
          style={{ borderRadius: 'inherit' }}
          config={{
            vimeo: {
              playerOptions: {
                background: false,
                quality: 'auto',
                dnt: true,
                playsinline: true
              }
            }
          }}
        />
      </div>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}