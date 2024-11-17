import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="flex flex-wrap justify-between items-center  md:mx-8 p-6 ">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/logo/logo.svg" className="h-8" alt="Flowbite Logo" />
                    </a>
                    <div className="flex items-center space-x-2 md:space-x-6 rtl:space-x-reverse">
                        <a href="#">
                            <Button variant="link" className="text-lightPurple text-2xl font- hover:text-purple transition-all">About</Button>
                        </a>
                        <a href="#">
                            <Button variant="link" className="text-lightPurple text-2xl font-medium hover:text-purple transition-all">Projects</Button>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
