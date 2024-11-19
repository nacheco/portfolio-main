import { Button } from "@/components/ui/button"
import Image from "next/image"

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="flex flex-wrap justify-between items-center md:mx-8 p-6 ">
                    <a href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Image src="/logo/logo.svg" width={32} height={32} className="h-8" alt="Logo" />
                    </a>
                    <div className="flex items-center space-x-2 md:space-x-6 rtl:space-x-reverse">
                        <a href="/about">
                            <Button variant="link" className="text-lightPurple text-[20px] font- hover:text-purple transition-all">About</Button>
                        </a>
                        <a href="#">
                            <Button variant="link" className="text-lightPurple text-[20px] font-medium hover:text-purple transition-all">Projects</Button>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
