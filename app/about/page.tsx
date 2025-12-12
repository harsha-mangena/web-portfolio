import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me | Sai Ranga M",
    description: "Learn more about Sai Ranga M's background, achievements, and metrics.",
};

export default function AboutPage() {
    return <About />;
}
