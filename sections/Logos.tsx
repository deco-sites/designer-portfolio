import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Logo {
  src?: ImageWidget;
  /** @description text alternative */
  altText?: string;
}

export interface Props {
  title?: string;
  logos?: Logo[];
}

const IMG_PLACEHODLER = Array(30).fill(0).map(() => ({
  src:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/03fbcc78-ca86-4616-a59a-b8aa18331a9c",
  altText: "Logo",
}));

export default function Logos({
  title = "Creating Experiences, Crafting Emotions",
  logos = IMG_PLACEHODLER,
}: Props) {
  const slideContent = (
    <div class="flex items-center gap-20">
      {logos?.map((logo) => {
        return (
          <Image
            src={logo.src || ""}
            alt={logo.altText || ""}
            width={110}
            height={25}
          />
        );
      })}
    </div>
  );
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 py-6 lg:py-14 mt-[5rem] fadeInUp-animation">
      <div class="flex flex-col gap-12">
        <p class="text-center text-4xl font-extrabold font-Rosarivo">{title}</p>
        <div class="relative w-full">
          <div class="animate-sliding absolute top-0 left-0 flex flex-nowrap text-[4rem] font-extrabold whitespace-nowrap">
          UI/UX Design     |     Branding | Illustration | Motion Graphics
          </div>
        </div>
      </div>
    </div>
  );
}
