"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import portfolioData from "@/lib/data.json";

export default function Projects() {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="section-padding bg-background">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        Selected <span className="gradient-text">Work</span>
                    </h2>
                    <div className="w-16 h-1 bg-black mb-8" />
                    <p className="max-w-2xl text-secondary text-lg">
                        Engineering robust AI solutions, from multi-agent orchestration to production-grade RAG systems.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden card-hover flex flex-col"
                        >
                            {/* Gradient Top Border */}
                            <div className="h-1 w-full bg-gradient-to-r from-gray-900 to-gray-500" />

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold group-hover:text-gray-700 transition-colors">
                                        {project.name.split(":")[0]}
                                    </h3>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-primary transition-colors"
                                            aria-label="View Code"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-500 mb-6 flex-1 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-4 mb-6">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Key Features</h4>
                                    <ul className="space-y-2">
                                        {project.highlights.slice(0, 3).map((highlight: string, i: number) => (
                                            <li key={i} className="text-sm text-gray-600 flex gap-2">
                                                <span className="text-primary mt-1">›</span>
                                                <span className="line-clamp-2">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                                    {project.technologies.slice(0, 5).map((tech: string, i: number) => (
                                        <span
                                            key={i}
                                            className="text-xs font-medium px-2 py-1 bg-gray-50 text-gray-600 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 5 && (
                                        <span className="text-xs font-medium px-2 py-1 text-gray-400">
                                            +{project.technologies.length - 5}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
