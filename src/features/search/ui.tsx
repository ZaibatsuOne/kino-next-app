"use client";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/shared/ui";
import { searchIcon } from "@/shared/ui/icon/assets";
import { Input } from "@/shared/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

import { SearchList } from "./searchList";

export const Search: FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  return (
    <Dialog>
      <DialogTrigger className="flex gap-2 items-center">
        <Image alt="search button" src={searchIcon} />
        <span>Поиск</span>
      </DialogTrigger>
      <DialogContent className="p-7 max-w-4xl min-h-[60%]">
        <DialogHeader className="text-2xl font-bold">
          <span>Поиск</span>
          <div className="flex gap-3 items-center">
            <Input
              className="text-black"
              onChange={(e): void => setQuery(e.target.value)}
              placeholder="Введите название фильма"
            />
            <DialogClose>
              <Button
                onClick={(): void => router.push(`/movie/${query}`)}
                size="lg"
                variant="secondary"
              >
                Найти
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
        <DialogDescription>{/* <SearchList /> */}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
