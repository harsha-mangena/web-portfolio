import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { getBlogPosts } from "@/lib/hashnode";
import portfolioData from "@/lib/data.json";
import { format } from "date-fns";

export default async function Blog() {
    // Fetch data on the server
    const posts = await getBlogPosts(portfolioData.personal.hashnode);

    return (
        <section id="blog" className="section-padding bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-display font-bold">
                            Latest <span className="gradient-text">Insights</span>
                        </h2>
                        <div className="w-16 h-1 bg-black" />
                    </div>

                    <a
                        href={`https://${portfolioData.personal.hashnode}.hashnode.dev`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-sm font-medium border-b border-black pb-1 hover:text-gray-600 transition-colors"
                    >
                        View All Posts
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {posts.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((edge: any) => {
                            const post = edge.node;
                            return (
                                <article
                                    key={post.id}
                                    className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden card-hover h-full"
                                >
                                    {post.coverImage?.url && (
                                        <div className="h-48 overflow-hidden bg-gray-100">
                                            <img
                                                src={post.coverImage.url}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    )}

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex gap-4 text-xs text-gray-500 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {post.publishedAt ? format(new Date(post.publishedAt), 'MMM d, yyyy') : ''}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTimeInMinutes} min read
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 line-clamp-2 bg-gradient-to-r from-black to-gray-700 bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-300 pb-1">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-1">
                                            {post.brief}
                                        </p>

                                        <a
                                            href={post.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-bold flex items-center gap-2 mt-auto"
                                        >
                                            Read Article
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                        <p className="text-gray-500">
                            Unable to load blog posts. Check out my <a href={`https://${portfolioData.personal.hashnode}.hashnode.dev`} className="underline decoration-black decoration-2 underline-offset-4">Hashnode Profile</a>.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
