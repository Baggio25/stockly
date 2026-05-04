"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ISidebarButton {
  href: string;
  children: React.ReactNode;
}

const SidebarButton = ({ href, children }: ISidebarButton) => {
  const pathname = usePathname();

  return (
    <Button
      className="justify-start gap-2 text-gray-500"
      variant={pathname === `${href}` ? "secondary" : "ghost"}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default SidebarButton;
