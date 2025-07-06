"use client";

import Link from "next/link";
import Grid from "./Grid";
import Image from "next/image";
import image from "../../public/images/find_oriol.jpg";

type Props = {
  tags?: string[];
  navigation?: { title: string; href?: string }[];
};

export default function ContactLayout({ tags, navigation }: Props) {
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

        <div>
          <p className="text-l-mobile lg:text-subtitle w-[85%]">
            Languages: Catalan, Spanish, English
          </p>
          <p className="text-l-mobile lg:text-subtitle w-[85%]">
            Class B car license and car owner
          </p>
        </div>

        <div className="w-full flex flex-wrap">
          <h2 className="text-title-s-mobile lg:text-title-s">
            Do you have a project?
          </h2>
        </div>

        <div>
          <p className="text-l-mobile lg:text-subtitle w-[85%]">
            Write me <a href="mailto:o.romatufoto@gmail.com">o.romatufoto@gmail.com</a>
          </p>
          <p className="text-l-mobile lg:text-subtitle w-[85%]">
            Assistant work:{" "}
            <a href="https://www.instagram.com/o.romatu" target="_blank">
              @o.romatu
            </a>
          </p>
          <p className="text-l-mobile lg:text-subtitle w-[85%]">
            Photography work:{" "}
            <a href="https://www.instagram.com/o.romatu_ph" target="_blank">
              @o.romatu_ph
            </a>
          </p>
        </div>
      </div>

      <div className="col-span-3 col-start-2 lg:col-span-4 lg:pr-[16%] lg:col-start-1 flex items-end lg:pt-0 pt-[10%] pb-5 lg:pb-0">
        <Image
          src={image}
          alt="Oriol Roma home image"
          className="object-cover w-full h-auto"
        />
      </div>
    </Grid>
  );
}
