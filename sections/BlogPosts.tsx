import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Post {
  title: string;
  author: string;
  excerpt: string;
  image: ImageWidget;
  date: string;
  readingTime?: string;
  tags: string[];
}

export interface Props {
  title?: string;
  description?: string;
  posts?: Post[];
}

const DEFAULT_IMAGE =
  "https://images.pexels.com/photos/17243420/pexels-photo-17243420/free-photo-of-deco-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

export default function BlogPosts({
  title = "Blogs",
  posts = [
    {
      title: "Design Trends Shaping the Future",
      author: "Simar",
      excerpt:
        "Explore the latest design trends influencing modern creativity and innovation.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["design", "trends", "uiux"],
    },
    {
      title: "Mastering Typography for Impactful Designs",
      author: "Simar",
      excerpt:
        "Learn how to use typography effectively to enhance visual communication.",
      image: "https://images.pexels.com/photos/5220022/pexels-photo-5220022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "22 Apr 2024",
      readingTime: "10 min",
      tags: ["typography", "design", "uiux"],
    },
    {
      title: "Creating a Cohesive Brand Identity",
      author: "Simar",
      excerpt:
        "Discover strategies for designing a strong and consistent brand presence.",
      image: "https://images.pexels.com/photos/7129086/pexels-photo-7129086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "24 Apr 2024",
      readingTime: "10 min",
      tags: ["identity", "designer", "brand"],
    },
  ],
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28 fadeInUpBlog-animation" id="blogs">
      <div class="space-y-16">
        <div class="flex flex-col lg:flex-row gap-4 justify-between">
          <div class="space-y-6 lg:w-1/2 my-[5rem] text-center">
            <h2 class="font-Oswald text-[8rem] mb-[5rem] text-center">
              {title}
            </h2>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts?.map((post) => (
            <div class="border border-secondary rounded-lg overflow-hidden">
              <Image
                width={640}
                class="w-full object-fit z-10 transition-all ease-in-out delay-300 duration-500	hover:scale-110 cursor-pointer"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={post.image}
                alt={post.image}
                decoding="async"
                loading="lazy"
              />
              <div class="p-6 space-y-4">
                <div class="font-semibold">{post.readingTime}</div>
                <div class="space-y-2">
                  <h3 class="text-2xl hover:text-gray-400 transition-all ease-in duration-300 cursor-pointer">{post.title}</h3>
                  <p class="text-base">{post.excerpt}</p>
                </div>
                <div class="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <div class="badge badge-lg badge-primary text-xs">
                      {tag}
                    </div>
                  ))}
                </div>
                <div class="flex flex-wrap gap-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
