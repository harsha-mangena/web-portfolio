"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import portfolioData from "@/lib/data.json";

export default function Experience() {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="section-padding bg-background">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        Professional <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-16 h-1 bg-black mx-auto" />
                </motion.div>

                <div className="space-y-6">
                    {experience.map((job, index) => (
                        <ExperienceCard key={index} job={job} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ExperienceCard({ job, index }: { job: any; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-gray-50 transition-colors text-left gap-4"
            >
                <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
                        {job.role}
                        <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                            {job.type}
                        </span>
                    </h3>
                    <p className="font-medium text-gray-700">{job.company}</p>
                </div>

                <div className="flex flex-col md:items-end gap-1 text-sm text-gray-500 min-w-40">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {job.duration}
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                    </div>
                </div>

                <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50/50">
                            <div className="pt-4 space-y-4">
                                <ul className="space-y-2">
                                    {job.highlights.map((highlight: string, i: number) => (
                                        <li key={i} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                                            <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {job.technologies.map((tech: string, i: number) => (
                                        <span
                                            key={i}
                                            className="text-xs font-medium px-2 py-1 bg-white border border-gray-200 rounded-md text-gray-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
