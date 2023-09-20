"use client";

import { stripHtmlTags } from "@/widgets/facts/model";
import { motion } from "framer-motion";
import { FC } from "react";

interface Props {
  fact: string;
}

export const Fact: FC<Props> = (props) => {
  const { fact } = props;

  return (
    <motion.li
      animate={{ opacity: 1 }}
      className="before:content-['•'] flex gap-2"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 4 }}
    >
      <p>{stripHtmlTags(fact)}</p>
    </motion.li>
  );
};
