import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "CREATIVE",
  description =
    "Student & Designer, Based in Vancouver, Canada",
  image,
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) {
  return (
    <nav class="lg:container lg:mx-auto mx-4 scroll-smooth fadeInUp-animation" id="hero">
      <div class="flex flex-col items-center gap-8">
        <div
          class={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 ${
            image
              ? PLACEMENT[placement]
              : "flex-col items-center justify-center text-center"
          } lg:py-36 gap-12 md:gap-20 items-center`}
        >
          {image && (
            <Image
              width={640}
              class="w-full lg:w-1/2 object-fit"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
          )}
    <video
    autoplay
    loop
    muted
    class="absolute z-0 w-auto min-w-full min-h-full h-[50vw] max-w-none bg-opacity-50"
  >
    <source
      src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
          <div
            class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 z-10 ${
              image
                ? "lg:w-1/2 lg:max-w-xl"
                : "flex flex-col items-center justify-center lg:max-w-3xl"
            }`}
          >
            <div class="flex flex-col gap-0 mt-[-2vw]">
              <div class="flex flex-row">
                <div
                  className="text-[12vw] leading-none font-Rosarivo text-white"
                  dangerouslySetInnerHTML={{
                    __html: "CREATIVE"
                  }}
                >
                </div>
                <div class="w-[15vw] h-[10vw] overflow-hidden rounded-xl ">
                  <img class="w-[15vw] h-[10vw] rounded-xl transition-all ease-in-out delay-300 duration-500	hover:scale-110 cursor-custom" src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
              </div>
              <div class="flex flex-row">
                <div class="w-[15vw] h-[10vw] ml-[12vw] overflow-hidden rounded-xl ">
                  <img class="w-[15vw] h-[10vw] rounded-xl transition-all ease-in-out delay-300 duration-500	hover:scale-110 cursor-custom" src="https://images.pexels.com/photos/9984838/pexels-photo-9984838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
                <div
                  className="lg:text-[12vw] text-[12vw] leading-none font-Oswald mt-[-1.5rem] text-white"
                  dangerouslySetInnerHTML={{
                    __html: "DESIGNER"
                  }}
                >
                </div>
              </div>
            </div>
            <p class="text-3xl md:text-md leading-[150%] text-extrabold mt-[1rem] text-white">
              {description}
            </p>
            <div class="text-9xl font-extrabold text-white">
              ↓
            </div>
            <div class="flex items-center gap-3">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-normal btn btn-primary ${
                    item.outline && "btn-outline"
                  }`}
                >
                  {item?.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
