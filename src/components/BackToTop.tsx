import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BackToTop() {
  const [showButton, setShowButton] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    setShowButton(!inView);
  }, [inView]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div ref={ref} className="absolute top-0 h-screen pointer-events-none" />
      <Button
        variant="outline"
        size="icon"
        className={`fixed bottom-4 left-4 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 z-50 ${
          showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp className="h-4 w-4 text-white" />
      </Button>
    </>
  );
}