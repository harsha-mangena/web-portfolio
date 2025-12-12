import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Me | Sai Ranga M",
    description: "Get in touch with Sai Ranga M for opportunities.",
};

export default function ContactPage() {
    return <Contact />;
}
