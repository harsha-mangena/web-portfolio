"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import portfolioData from "@/lib/data.json";

export default function Publications() {
    const { publications } = portfolioData;

    return (
        <section id="publications" className="section-padding bg-surface border-t border-gray-100">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-display font-bold mb-4">Research & Publications</h2>
                    <div className="w-12 h-1 bg-black mx-auto" />
                </motion.div>

                <div className="grid gap-6">
                    {publications.map((pub, index) => (
                        <motion.a
                            key={index}
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex gap-6 p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-400 transition-all hover:shadow-md"
                        >
                            <div className="hidden sm:flex h-12 w-12 bg-gray-50 rounded-lg items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors">
                                <FileText className="w-6 h-6 text-gray-600" />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                                        {pub.title}
                                    </h3>
                                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
                                </div>

                                <div className="flex gap-4 text-sm text-gray-500 mt-2 mb-3">
                                    <span className="font-medium px-2 py-0.5 bg-gray-100 rounded text-xs">{pub.platform}</span>
                                    <span>{pub.id}</span>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {pub.description}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
