import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HeaderDefault() {
  return (
    <div className="flex justify-between p-2 items-center ">
      <div>
        <Logo></Logo>
      </div>
      <div>
        <Link href="/login">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        {/* <DropdownMenu>
          <DropdownMenuTrigger className="mr-1">
            <FontAwesomeIcon icon={faUser} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-1 bg-(--header-dropdown-bg)">
            <DropdownMenuItem className="mb-1 bg-(--header-dropdown-item-bg) text-(--header-dropdown-item-text-color)">
              Profil
            </DropdownMenuItem>
            <DropdownMenuItem className="mb-1 bg-(--header-dropdown-item-bg) text-(--header-dropdown-item-text-color)">
              Deposit QR
            </DropdownMenuItem>
            <DropdownMenuItem className="mb-0 bg-(--header-dropdown-item-bg) text-(--header-dropdown-item-text-color)">
              Deposit Bank
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
    </div>
  );
}
