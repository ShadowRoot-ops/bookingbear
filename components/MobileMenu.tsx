import { type MenuItem } from "@/types/types";
import Button from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { Separator } from "./ui/separator";

type MobileMenuProps = {
  navMenu: MenuItem[];
};

const MobileMenu = ({ navMenu }: MobileMenuProps) => {
  return (
    <div>
      <ul className="mb-3">
        {navMenu.map(({ href, label, submenu }, index) => (
          <li key={index}>
            {submenu ? (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="w-full justify-between text-white hover:text-gray-300 hover:bg-gray-800/50"
                  >
                    {label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="ps-2">
                  <ul className="border-l border-l-gray-600/50 space-y-1">
                    {submenu.map((item, subIndex) => (
                      <li key={subIndex}>
                        <Button
                          asChild
                          variant={"ghost"}
                          className="w-full justify-start text-gray-300 hover:text-white hover:bg-transparent"
                        >
                          <a href={item.href}>{item.label}</a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button
                asChild
                variant={"ghost"}
                className="w-full justify-start text-white hover:text-gray-300 hover:bg-gray-800/50"
              >
                <a href={href}>{label}</a>
              </Button>
            )}
          </li>
        ))}
      </ul>
      <Separator className="bg-gray-600/50" />
      <div className="flex items-center gap-2 mt-2">
        <Button className="w-full bg-white text-black hover:bg-gray-200 font-semibold">
          Book Ad Slot
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
