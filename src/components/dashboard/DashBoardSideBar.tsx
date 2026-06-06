import type { ComponentType, SVGProps } from "react";

import {
  Bars,
  Bell,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export function DashBoardSideBar() {
  const navItems: {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    label: string;
    href: string;
  }[] = [
    { icon: House, label: "Home", href: "/dashboard/recruiter" },
    { icon: Magnifier, label: "jobs", href: "/dashboard/recruiter/jobs" },
    { icon: Bell, label: "carate A job", href: "/dashboard/recruiter/jobs/new" },
    { icon: Envelope, label: "Messages", href: "/dashboard/recruiter" },
    { icon: Person, label: "Profile", href: "/dashboard/recruiter" },
    { icon: Gear, label: "Settings", href: "/dashboard/recruiter" },
  ];

  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link
          href={item.href}
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          type="button"
        >
          <item.icon className="size-5 text-muted" />
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      <aside className=" hidden w-64 shrink-0 border-r border-default p-4 lg:block">
        {navContent}
      </aside>
      <Drawer>
        <Button variant="secondary" className={"lg:hidden"}>
          <Bars />
          Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>{navContent}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}
