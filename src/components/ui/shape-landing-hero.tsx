"use client";

import { motion } from "framer-motion";
import { Circle, Phone, Notebook as Robot } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useEffect } from "react";

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
}: {
    badge?: string;
    title1?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    useEffect(() => {
        const loadCalendly = () => {
            const script = document.createElement('script');
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            document.body.appendChild(script);

            const link = document.createElement('link');
            link.href = 'https://assets.calendly.com/assets/external/widget.css';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        };

        if (!document.querySelector('script[src*="calendly"]')) {
            loadCalendly();
        }
    }, []);

    const openCalendly = (e: React.MouseEvent) => {
        e.preventDefault();
        if ((window as any).Calendly) {
            (window as any).Calendly.initPopupWidget({
                url: 'https://calendly.com/luke-valhallastudios?primary_color=5b00ff'
            });
        }
    };

    return (
        <AuroraBackground>
            <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
                        >
                            <Circle className="h-2 w-2 fill-rose-500/80" />
                            <span className="text-sm text-white/60 tracking-wide">
                                {badge}
                            </span>
                        </motion.div>

                        <motion.div
                            custom={1}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                                <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                    {title1}
                                </span>
                                <AnimatedText />
                            </h1>
                        </motion.div>

                        <motion.div
                            custom={2}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            Apply our 10%+ ad CTR strategy to increase sales and 3x your productivity With Oracle.
                            </p>
                        </motion.div>

                        <motion.div
                            custom={3}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex items-center justify-center gap-4 flex-wrap"
                        >
                            <Button
                                size="lg"
                                className="bg-white text-black hover:bg-white/90"
                                onClick={openCalendly}
                            >
                                <Phone className="mr-2 h-4 w-4" />
                                Schedule a Call
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white text-black hover:bg-white/90"
                                onClick={() => window.open('https://creator.voiceflow.com/prototype/682e4a21cfe8bfe655c0c9d8', '_blank', 'noopener noreferrer')}
                            >
                                <Robot className="mr-2 h-4 w-4" />
                                Oracle Demo
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </AuroraBackground>
    );
}

export { HeroGeometric }