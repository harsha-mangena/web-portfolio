"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import portfolioData from "@/lib/data.json";
import NeuralBackground from "./NeuralBackground";

export default function Hero() {
    const { personal } = portfolioData;

    return (
        <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden bg-background">
            {/* Neural Network Background */}
            <NeuralBackground />

            {/* Abstract Background Element - Minimalist Blob (Kept as fallback/layer) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="max-w-5xl mx-auto w-full z-10 pointer-events-none"> {/* content wrapper */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 pointer-events-auto" // Re-enable pointer events
                >
                    <div className="space-y-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-secondary font-medium tracking-wider uppercase text-sm"
                        >
                            Building Intelligence at Scale
                        </motion.p>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary leading-tight">
                            {personal.name}
                            <br />
                            <span className="text-3xl md:text-5xl lg:text-6xl text-gray-400 font-light block mt-2">
                                {personal.title}
                            </span>
                        </h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-2xl text-lg md:text-xl text-secondary leading-relaxed backdrop-blur-sm"
                    >
                        {personal.tagline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <a
                            href="/contact"
                            className="group flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                        >
                            Contact Me
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-gray-200 bg-white/80 backdrop-blur-sm px-8 py-3 rounded-full font-medium hover:border-gray-400 transition-colors"
                        >
                            <FileText className="w-4 h-4" />
                            Resume
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex gap-6 pt-8 items-center"
                    >
                        <SocialLink href={personal.github} icon={<Github />} label="GitHub" />
                        <SocialLink href={personal.linkedin} icon={<Linkedin />} label="LinkedIn" />
                        <SocialLink href={`mailto:${personal.email}`} icon={<Mail />} label="Email" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 z-10"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-gray-400" />
                <span className="text-xs uppercase tracking-widest">Scroll</span>
            </motion.div>
        </section>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
            aria-label={label}
        >
            <div className="w-6 h-6">
                {icon}
            </div>
        </a>
    );
}
