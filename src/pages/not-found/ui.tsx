"use client";

import { ArrowLeftFromLine, Undo2 } from "lucide-react";

import { Button } from "@/shared/ui";
import { Icon404 } from "@/shared/ui/icon/assets";
import Image from "next/image";
import { NextPage } from "next";
import { useRouter } from "next/navigation";

export const NotFound: NextPage = () => {
  const router = useRouter();
  return (
    <section className="flex justify-center transform translate-y-1/3">
      <div className="w-[65%] flex gap-20">
        <Image
          src={Icon404}
          alt="Капитан Джек Воробей"
          className="opacity-80"
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1 ">
            <h1 className="text-9xl font-extrabold ">404</h1>

            <h3 className="text-3xl font-base">
              Страница потеряла сценариста. Попробуйте еще раз или перейдите к
              чему-то более захватывающему.
            </h3>
          </div>
          <Button
            variant="secondary"
            size="lg"
            onClick={(): void => router.back()}
            className="gap-2"
          >
            <ArrowLeftFromLine />
            <span>Назад</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
