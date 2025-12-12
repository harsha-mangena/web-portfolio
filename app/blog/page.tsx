import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog & Insights | Sai Ranga M",
    description: "Latest thoughts on AI, ML, and Software Engineering by Sai Ranga M.",
};

export default async function BlogPage() {
    return <Blog />;
}
