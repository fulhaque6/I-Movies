import navbarStyles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav.js";

const Header = () => {
    return (
        <header className={navbarStyles.main_header}>
            <div className={navbarStyles.navbar_brand}>
               <Link href="/">
                   <Image src="/logo.png" alt="This is my Logo" width={100} height={100}/>
               </Link>
            </div>
            <Nav/>
        </header>
    );
};

export default Header;