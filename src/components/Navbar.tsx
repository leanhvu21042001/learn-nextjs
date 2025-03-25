import { menuItems } from "@/lib/constants";
import Link from "next/link";
import { Button } from "./tailwind/ui/button";
import Menu from "./tailwind/ui/menu";

export default function Navbar() {
  return (
    <div className="flex w-full max-w-2xl items-center gap-2">
      {menuItems.map((item) => (
        <Link href={item.href} key={item.href}>
          <Button variant="ghost">{item.label}</Button>
        </Link>
      ))}

      <Link href="/editor" className="ml-auto">
        <Button variant="ghost">Editor</Button>
      </Link>
      <Menu />
    </div>
  );
}
