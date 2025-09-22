import {
  BookOpen,
  Bot,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  FileText
} from "lucide-react"

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Zenoflair",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
   
  ],
  navMain: [
  {
  title: "Image Tools",
  url: "#",
  icon: SquareTerminal,
  isActive: true,
  items: [
    {
      title: "Text To Image",
      url: "/tools/image-tools/text-to-image",
    },
    {
      title: "Background Remover",
      url: "/tools/image-tools/background-remover",
    },
    {
      title: "Object Remover",
      url: "/tools/image-tools/object-remover",
    },
    {
      title: "Image Resizer",
      url: "/tools/image-tools/image-resizer",
    },
    {
      title: "Smart Face Crop",
      url: "/tools/image-tools/smart-face-crop",
    },
    {
      title: "Color Filters",
      url: "/tools/image-tools/color-filters",
    },
    {
      title: "Cartoonify & Style",
      url: "/tools/image-tools/cartoonify-style",
    },
    {
      title: "Image Enhancer",
      url: "/tools/image-tools/image-enhancer",
    },
    {
      title: "Text & Logo Overlay",
      url: "/tools/image-tools/text-logo-overlay",
    },
    {
      title: "Outpainting",
      url: "/tools/image-tools/outpainting",
    },
  ],
}
,
{
  title: "Content Tools",
  url: "#",
  icon: FileText,
  isActive: false,
  items: [
    { title: "Article Generator", url: "/tools/content-tools/article-generator" },
    { title: "Blog Title Generator", url: "/tools/content-tools/blog-title-generator" },
    { title: "SEO Meta Generator", url: "/tools/content-tools/seo-meta-generator" },
    { title: "Product Description Generator", url: "/tools/content-tools/product-description-generator" },
    { title: "Social Caption Generator", url: "/tools/content-tools/social-caption-generator" },
    { title: "Ad Copy Generator", url: "/tools/content-tools/ad-copy-generator" },
    { title: "Email Subject Generator", url: "/tools/content-tools/email-subject-generator" },
    { title: "Hashtag Generator", url: "/tools/content-tools/hashtag-generator" },
    { title: "Summarizer", url: "/tools/content-tools/summarizer" },
    { title: "Paraphraser", url: "/tools/content-tools/paraphraser" },
  ],
}
  
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}
