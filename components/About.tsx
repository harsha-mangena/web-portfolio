"use client";

import { motion } from "framer-motion";
import { Award, Code2, Users, Zap } from "lucide-react";
import portfolioData from "@/lib/data.json";

export default function About() {
    const { summary } = portfolioData;

    const metrics = [
        { label: "Years Experience", value: "4+", icon: <Award className="w-5 h-5" /> },
        { label: "Daily Transactions", value: "2M+", icon: <Zap className="w-5 h-5" /> },
        { label: "System Uptime", value: "99.9%", icon: <Code2 className="w-5 h-5" /> },
        { label: "Clients Served", value: "500+", icon: <Users className="w-5 h-5" /> },
    ];

    return (
        <section id="about" className="section-padding bg-surface">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-display font-bold">
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <div className="w-16 h-1 bg-black mb-8" />

                        <p className="text-secondary text-lg leading-relaxed">
                            {summary.extended}
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-6">
                            {metrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                                >
                                    <div className="flex items-center gap-3 mb-2 text-primary">
                                        {metric.icon}
                                        <span className="font-bold text-2xl">{metric.value}</span>
                                    </div>
                                    <p className="text-sm text-gray-500">{metric.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements / Highlights */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-transparent rounded-2xl -rotate-3 transform" />
                        <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                Key Achievements
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Reduced production latency by 40% processing 2M+ txns",
                                    "Architected multi-agent systems with 95% accuracy",
                                    "Saved $300K+ annually via optimization"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-secondary">
                                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
