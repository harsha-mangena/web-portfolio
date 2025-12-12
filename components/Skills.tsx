"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Code, Database, Layers, Shield } from "lucide-react";
import portfolioData from "@/lib/data.json";

const iconMap = {
    languages: Code,
    frameworks: Layers,
    aiml: Brain,
    cloud: Cloud,
    databases: Database,
    tools: Shield,
    security: Shield,
};

const labels = {
    languages: "Languages",
    frameworks: "Frontend/Backend",
    aiml: "AI & Machine Learning",
    cloud: "Cloud & DevOps",
    databases: "Databases",
    tools: "Tools & Platforms",
    security: "Security",
};

export default function Skills() {
    const { skills, certifications } = portfolioData;

    return (
        <section id="skills" className="section-padding bg-surface">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        Technical <span className="gradient-text">Arsenal</span>
                    </h2>
                    <div className="w-16 h-1 bg-black mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => {
                        const Icon = iconMap[category as keyof typeof iconMap] || Code;

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-lg">{labels[category as keyof typeof labels] || category}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {(items as string[]).map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm text-gray-600 hover:border-gray-400 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <h3 className="text-xl font-bold mb-8">Certifications</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {certifications.map((cert) => (
                            <div
                                key={cert}
                                className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium shadow-sm"
                            >
                                {cert}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
