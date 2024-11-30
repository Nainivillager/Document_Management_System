"use client";
import Header from "@/components/header/header";
import Sider from "@/components/sider/Sider";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      
      <Sider />
      
      {children}
    </>
  );
}












