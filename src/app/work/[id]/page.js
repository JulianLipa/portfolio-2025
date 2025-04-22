"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import ImageHandler from "@/app/work/[id]/ImageHandler/ImageHandler";
import Header from "@/app/components/Work/Header/Header";

const Page = () => {
  const { id } = useParams(); // Get the dynamic route parameter

  return (
    <div>
      <Header></Header>
      <ImageHandler data={id} />
    </div>
  );
};

export default Page;
