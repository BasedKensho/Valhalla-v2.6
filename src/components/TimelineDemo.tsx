import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Content",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Implemented the 10%+ ad CTR strategy
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg"
              alt="AI technology"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,_0,_0,_0.3)]"
            />
            <img
              src="https://images.pexels.com/photos/8728558/pexels-photo-8728558.jpeg"
              alt="Data analytics"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,_0,_0,_0.3)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "BM",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Expanded our services by introducing Oracle to the market
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/8728410/pexels-photo-8728410.jpeg"
              alt="Business analytics"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,_0,_0,_0.3)]"
            />
            <img
              src="https://images.pexels.com/photos/8728384/pexels-photo-8728384.jpeg"
              alt="Digital transformation"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,_0,_0,_0.3)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Achievements",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-4">
            Key achievements of the last quarter
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ 200% increase in business productivity
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ 10%+ CTR achievement with AI-powered ads
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Fully integrated Oracle
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Added cutting edge AI image/video creation on our ads
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <Timeline data={data} />
    </div>
  );
}