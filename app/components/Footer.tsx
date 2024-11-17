import { Button } from "@/components/ui/button"

const Footer = () => {
    return (
        <>
            <nav>
                <div className=" flex flex-wrap justify-center items-center md:mx-8 p-6 ">
                    <div className="flex items-center space-x-2 md:space-x-6 rtl:space-x-reverse">
                        <a href="#">
                            <Button variant="link" className="text-lightPurple text-[20px] font- hover:text-purple transition-all">LinkedIn</Button>
                        </a>
                        <a href="#">
                            <Button variant="link" className="text-lightPurple text-[20px] font-medium hover:text-purple transition-all">Github</Button>
                        </a>
                        <a href="#">
                            <Button variant="link" className="text-lightPurple text-[20px] font-medium hover:text-purple transition-all">Dribbble</Button>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Footer
