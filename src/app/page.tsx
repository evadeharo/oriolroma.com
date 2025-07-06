"use client";

import Grid from "@/components/Grid";
import Image from "next/image";
import Link from "next/link";
import image from "../../public/images/home_oriol.jpg"

export default function Home() {
  const tags = ["Photo Assistant", "Digital Tech", "Retoucher", "Photographer"];
  const navigation = [
    { title: "Find me", href: "/contact" },
    { title: "Assistant", href: undefined },
    { title: "Photographer", href: undefined },
  ];

  return (
    <Grid className="h-[95dvh]">
      <div className="col-span-4 lg:col-span-12 pb-[0.9375rem]">
        <h1 className="text-title-xl">Oriol Roma</h1>
      </div>

      <div className="col-span-4 lg:col-span-5 lg:col-start-7 row-start-2 flex flex-col gap-10 h-full">
        <nav className="flex gap-10 font-subtitle uppercase">
          {navigation.map((navItem, index) => (
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
            <h2 className="text-title-s" key={index}>
              {tag}
              <span className="px-1.5">{index !== tags.length - 1 && "|"}</span>
            </h2>
          ))}
        </div>

        <p className="text-subtitle w-[85%]">
          I am a photo assistant, digital tech and photographer based in
          Barcelona. I grew up between the Catalan Pyrinees and Barcelona.
          Sports and mountains are my other passions.
        </p>
      </div>

      <div className="col-span-4 lg:col-span-4 pr-[16%] col-start-1 flex items-end">
        <Image src={image} alt="Oriol Roma home image" className="object-cover w-full h-auto" />
      </div>
    </Grid>
  );
}
