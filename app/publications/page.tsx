import Publications from "@/components/Publications";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Research & Publications | Sai Ranga M",
    description: "Research papers and academic publications by Sai Ranga M.",
};

export default function PublicationsPage() {
    return <Publications />;
}
