"use client";

import { Button } from "@/shared/ui";
import { Icon404 } from "@/shared/ui/icon/assets";
import { ArrowLeftFromLine } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const NotFound: NextPage = () => {
  const router = useRouter();
  return (
    <section className="flex justify-center my-32">
      <div className="w-[65%] flex gap-20">
        <Image
          alt="Капитан Джек Воробей"
          className="opacity-80"
          src={Icon404}
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
            className="gap-2"
            onClick={(): void => router.back()}
            size="lg"
            variant="secondary"
          >
            <ArrowLeftFromLine />
            <span>Назад</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
