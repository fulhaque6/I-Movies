import navbarStyles from "@/app/styles/navbar.module.css"
import Link from "next/link";

const Nav = () => {
    return (
        <nav className={navbarStyles.navbar}>
            <div>
                <ul className={navbarStyles.navbarList}>
                    <li className={navbarStyles.navbarItem}>
                        <Link href="/" className={navbarStyles.navbarLink}>
                            Home
                        </Link>
                    </li>
                    <li className={navbarStyles.navbarItem}>
                        <Link href="/about" className={navbarStyles.navbarLink}>
                            About
                        </Link>
                    </li>
                    <li className={navbarStyles.navbarItem}>
                        <Link href="/movies" className={navbarStyles.navbarLink}>
                            Movies
                        </Link>
                    </li>
                    <li className={navbarStyles.navbarItem}>
                        <Link href="/contact" className={navbarStyles.navbarLink}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;