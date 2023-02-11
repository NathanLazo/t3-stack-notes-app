import Logo from "@images/the-zen-logo.png";
import Image from "next/image";
import Link from 'next/link';

const LogoComponent: React.FC = () => {
    return (
        <>
            <Link href="/" className="w-12 h-12">
                <Image src={Logo} alt="logo" width={40} height={40} />
            </Link>
        </>
    );
}

export default LogoComponent;