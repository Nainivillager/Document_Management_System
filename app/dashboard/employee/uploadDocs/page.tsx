"use client";
import React from "react";
import FileUploader from "@/components/fileUploader/FileUploader";
import { Card } from "@/components/ui/card";
export default function page() {
  return (
    <>
      <Card className="">
      <FileUploader />
      </Card>
    </>
  );
}
