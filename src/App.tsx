import { DemoHeroGeometric } from '@/components/Hero';
import { TimelineDemo } from '@/components/TimelineDemo';
import { BorderBeamDemo } from '@/components/ui/border-beam-demo';
import { BackgroundPaths } from '@/components/ui/background-paths';
import { BackToTop } from '@/components/BackToTop';

function App() {
  return (
    <div className="w-full h-full">
      <DemoHeroGeometric />
      <BorderBeamDemo />
      <TimelineDemo />
      <BackgroundPaths />
      <BackToTop />
    </div>
  );
}

export default App;