import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../Button";
import Hamburger from "../icons/Hamburger";
import Buttons from "./Buttons";
import NavBar from "./NavBar";

interface Props {
  categories: string[];
}

const Header = ({ categories }: Props) => {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  return (
    <header className="bg-black text-white rounded-b-lg sticky top-0 left-0 right-0 z-40">
      <div className="container py-4 flex items-center justify-between gap-4 relative">
        <Button icon={<Hamburger active={checked} />} color="transparent" size="sm" onClick={() => setChecked(current => !current)} />
        <span className="flex-1 lg:flex-initial">
          <Link href="/" passHref>
            <h1 className="cursor-pointer w-fit font-bold">Canadian Souq</h1>
          </Link>
        </span>
        <NavBar
          categories={categories}
          checked={checked}
          setChecked={setChecked}
        />
        <Buttons router={router} />
      </div>
    </header>
  );
};

export default Header;
