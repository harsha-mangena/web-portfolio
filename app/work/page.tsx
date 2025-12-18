import Projects from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work | Sai Ranga M",
    description: "Featured work, open source contributions, and case studies by Sai Ranga M.",
};

export default function ProjectsPage() {
    return <Projects />;
}
