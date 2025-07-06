"use client";

import Link from "next/link";
import Grid from "./Grid";
import Image from "next/image";
import image from "../../public/images/home_oriol.jpg";

type Props = {
  tags?: string[];
  navigation?: { title: string; href?: string }[];
};

export default function HomeLayout({ tags, navigation }: Props) {
  return (
    <Grid className="min-h-[85dvh] lg:h-[95dvh]">
      <div className="col-span-4 lg:col-span-12 lg:pb-[0.9375rem]">
        <h1 className="text-title-l-mobile lg:text-title-xl">Oriol Roma</h1>
      </div>

      <div className="col-span-4 lg:col-span-5 lg:col-start-7 row-start-2 flex flex-col gap-10 h-full">
        <nav className="flex gap-4 lg:gap-10 font-subtitle uppercase text-l-mobile lg:text-l">
          {navigation?.map((navItem, index) => (
            <Link
              key={index}
              href={String(navItem.href)}
              onClick={(e) => {
                if (!navItem.href) e.preventDefault();
              }}
              className={!navItem.href ? "pointer-events-none opacity-50" : ""}
            >
              [{navItem.title}]
            </Link>
          ))}
        </nav>

        <div className="w-full flex flex-wrap">
          {tags?.map((tag, index) => (
            <h2 className="text-title-s-mobile lg:text-title-s" key={index}>
              {tag}
              <span className="px-1.5">{index !== tags.length - 1 && "|"}</span>
            </h2>
          ))}
        </div>

        <p className="text-l-mobile lg:text-subtitle w-[85%]">
          I am a photo assistant, digital tech and photographer based in
          Barcelona. I grew up between the Catalan Pyrinees and Barcelona.
          Sports and mountains are my other passions.
        </p>
      </div>

      <div className="col-span-3 col-start-2 lg:col-span-4 lg:pr-[16%] lg:col-start-1 pt-[10%] lg:pt-0 lg:flex lg:items-end pb-5 lg:pb-0">
        <Image
          src={image}
          alt="Oriol Roma home image"
          className="object-cover w-full h-auto"
        />
      </div>
    </Grid>
  );
}
