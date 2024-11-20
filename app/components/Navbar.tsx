import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function Navbar() {
  return (
    <Menubar className="sticky top-0 z-10 justify-center text-gray-400 bg-gray-800 h-10 sm:h-12 gap-6 rounded-none border-none">
      <MenubarMenu>
        <MenubarTrigger>
          <a href="#home">Home</a>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <a href="#about">About</a>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <a href="#resume">Resume</a>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <a href="#portfolio">Works</a>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
