import Projects from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Sai Ranga M",
    description: "Featured AI/ML projects and case studies by Sai Ranga M.",
};

export default function ProjectsPage() {
    return <Projects />;
}
