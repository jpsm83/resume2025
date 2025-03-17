import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function Navbar() {
  return (
    <Menubar className="sticky top-0 z-10 justify-center text-gray-400 bg-gray-800 h-12 sm:h-14 gap-6 rounded-none border-none shadow-2xl">
      <MenubarMenu>
        <MenubarTrigger>
          <a href="#about" className="md:text-lg text-xl">
            About
          </a>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <a href="#skills" className="md:text-lg text-xl">
            Skills
          </a>
        </MenubarTrigger>
      </MenubarMenu>
      
      <MenubarMenu>
        <MenubarTrigger>
          <a href="#experience" className="md:text-lg text-xl">
            Experience
          </a>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <a href="#references" className="md:text-lg text-xl">
            References
          </a>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <a href="#portfolio" className="md:text-lg text-xl">
            Portofolio
          </a>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
