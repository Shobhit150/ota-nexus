
import { getAllPosts } from "@/lib/blogs";
import BlogListing from "./BlogListing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "IoT & OTA Insights | OTA Nexus Blog",
  description:
    "Explore practical guides on OTA firmware updates, IoT device management, firmware security, and connected-device infrastructure.",
  alternates: {
    canonical: "https://otanexus.in/blog",
  },
  openGraph: {
    title: "IoT & OTA Insights | OTA Nexus Blog",
    description:
      "Practical insights on OTA firmware updates, IoT security, and device management.",
    url: "https://otanexus.in/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <>
    <Navbar/>
    <BlogListing posts={posts} />
    <Footer/>
  </>;
}
