"use client";

import { useState } from "react";
import FileSaver from "file-saver";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

const MenuBlock = ({ className }: { className?: string }) => (
  <Menubar
    className={`flex text-gray-400 bg-gray-800 border-none gap-6 ${className}`}
  >
    {[
      { href: "#about", label: "About" },
      { href: "#skills", label: "Skills" },
      { href: "#experience", label: "Experience" },
      { href: "#references", label: "References" },
      { href: "#portfolio", label: "Portfolio" },
    ].map((item) => (
      <MenubarMenu key={item.href}>
        <MenubarTrigger>
          <a href={item.href} className="text-lg md:p-2">
            {item.label}
          </a>
        </MenubarTrigger>
      </MenubarMenu>
    ))}
    <button
      onClick={downloadResume}
      className="md:text-lg text-xl border-2 border-gray-400 rounded-md px-4 py-1 hover:bg-gray-700 hover:text-white"
    >
      Download Resume PDF
    </button>{" "}
  </Menubar>
);

const downloadResume = () => {
  FileSaver.saveAs("/joao2025march.pdf", "My_Resume.pdf");
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-center sticky top-0 z-10 text-gray-400 bg-gray-800 border-none shadow-2xl h-14 md:h-16">
      {/* Desktop Menu (Hidden on Mobile) */}
      <div className="hidden md:flex justify-center">
        <MenuBlock />
      </div>

      {/* Mobile Burger Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="p-6 text-gray-400 bg-gray-800 border-none w-100"
        >
          {/* ✅ Add a Title for Accessibility */}
          <SheetHeader className="hidden">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          {/* Mobile Menu (Only visible inside the Sheet on mobile) */}
          <MenuBlock className="flex-col items-start" />
        </SheetContent>
      </Sheet>
    </nav>
  );
}
