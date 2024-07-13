import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  style?: "Outline" | "Ghost";
}

export interface Props {
  title?: string;
  /** @format textarea */
  description?: string;
  tagline?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
}

const PLACEMENT = {
  left: "flex-col md:flex-row-reverse",
  right: "flex-col md:flex-row",
};

const DEFAULT_IMAGE =
  "https://images.pexels.com/photos/20791048/pexels-photo-20791048/free-photo-of-top-view-of-yellow-red-bull-energy-drink.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

export default function ImageWithParagraph({
  title = "Quixotic Whimsy",
  description =
    "Quixotic Whimsy embodies a whimsical journey through an imagined world where reality bends at the touch of dreams. Each creation invites viewers to suspend disbelief and embrace the impossible, redefining boundaries of creativity and sparking curiosity in the unexpected.",
  tagline = "Tagline",
  image = DEFAULT_IMAGE,
  placement = "left",
  disableSpacing,
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", style: "Outline" },
    { id: "change-me-2", href: "/", text: "Change me", style: "Ghost" },
  ],
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm fadeInUpBlog-animation" id="project">
      <div class="">
        <h1 class="font-Oswald text-[8rem] my-[10rem] text-center">PROJECTS</h1>
      </div>
      <div
        class={`flex ${
          PLACEMENT[placement]
        } gap-12 md:gap-20 text-left items-center z-10 ${
          disableSpacing?.top ? "" : "pt-12 lg:pt-28"
        } ${disableSpacing?.bottom ? "" : "pb-12 lg:pb-28"}`}
      >
        <div class="w-full md:w-1/2 border border-secondary rounded-lg overflow-hidden">
          <Image
            width={1200}
            height={1200}
            class="object-fit z-10 transition-all ease-in-out delay-300 duration-500	hover:scale-110 sticky cursor-custom"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image}
            alt={image}
            decoding="async"
            loading="lazy"
            /* style={{ cursor: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fwriting-circle&psig=AOvVaw1UKyjNRGamzn4aqXfXLmxR&ust=1720964553218000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNixitqSpIcDFQAAAAAdAAAAABAE), auto' }} */
          />
        </div>
        <div class="w-full md:w-1/2 space-y-2 md:space-y-4 md:max-w-xl gap-4 z-10">
          {/* <p class="text-sm font-semibold">
            {tagline}
          </p> */}
          <a class="text-7xl leading-snug font-Rosarivo underline underline-animation transition-all duration-300 cursor-custom">
            {title}
          </a>
          <p class="leading-normal font-Rosarivo font-bold">
            {description}
          </p>
        </div>
      </div>
      <div
        class={`flex ${
          PLACEMENT[placement]
        } gap-12 md:gap-20 text-left items-center z-10 ${
          disableSpacing?.top ? "" : "pt-12 lg:pt-28"
        } ${disableSpacing?.bottom ? "" : "pb-12 lg:pb-28"}`}
      >
        <div class="w-full md:w-1/2 border border-secondary rounded-lg overflow-hidden">
          <Image
            width={1200}
            height={1200}
            class="object-fit z-10 transition-all ease-in-out delay-300 duration-500	hover:scale-110 sticky cursor-custom"
            sizes="(max-width: 640px) 100vw, 30vw"
            src="https://images.pexels.com/photos/24709245/pexels-photo-24709245/free-photo-of-light-city-people-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt={image}
            decoding="async"
            loading="lazy"
            /* style={{ cursor: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fwriting-circle&psig=AOvVaw1UKyjNRGamzn4aqXfXLmxR&ust=1720964553218000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNixitqSpIcDFQAAAAAdAAAAABAE), auto' }} */
          />
        </div>
        <div class="w-full md:w-1/2 space-y-2 md:space-y-4 md:max-w-xl gap-4 z-10">
          {/* <p class="text-sm font-semibold">
            {tagline}
          </p> */}
          <a class="group text-7xl leading-snug font-Rosarivo underline underline-animation transition-all duration-300 cursor-custom">
          
            Baston Village Co.
          </a>
          <p class="leading-normal font-Rosarivo font-bold">
          Collaborating with Baston Village was inspiring, as their innovative vision, community spirit, sustainable practices, and dedication to preserving heritage greatly impressed me.
          </p>
        </div>
      </div>
    </div>
  );
}
