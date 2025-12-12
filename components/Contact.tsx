"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Download } from "lucide-react";
import portfolioData from "@/lib/data.json";

export default function Contact() {
    const { personal } = portfolioData;

    return (
        <section id="contact" className="section-padding bg-black text-white">
            <div className="max-w-4xl mx-auto text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold">
                        Let's <span className="text-gray-400">Collaborate</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-gray-400 text-lg">
                        I'm currently available for Full-time AI/ML Engineering roles.
                        If you're building systems that need to scale, let's talk.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-8">
                        <a href={`mailto:${personal.email}`} className="flex items-center gap-4 text-xl font-light hover:text-gray-300 transition-colors">
                            <span className="p-3 bg-white/10 rounded-full">
                                <Mail className="w-6 h-6" />
                            </span>
                            {personal.email}
                        </a>

                        <div className="flex items-center gap-4 text-xl font-light">
                            <span className="p-3 bg-white/10 rounded-full">
                                <MapPin className="w-6 h-6" />
                            </span>
                            {personal.location}
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <SocialButton href={personal.github} icon={<Github />} label="GitHub" />
                        <SocialButton href={personal.linkedin} icon={<Linkedin />} label="LinkedIn" />
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors"
                        >
                            <Download className="w-5 h-5" />
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-4 rounded-full transition-all"
        >
            {icon}
            <span>{label}</span>
        </a>
    );
}
