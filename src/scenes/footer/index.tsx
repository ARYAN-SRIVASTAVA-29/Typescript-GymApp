import Logo from "@/assets/Logo.png"


const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} />
                <p className="my-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi iusto soluta est? Illo repudiandae vel, in explicabo non velit deserunt.
                </p>
                <p className="text-xl">&copy; MADE BY ARYAN SRIVASTAVA</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Masa orci sanctaus</p>
                <p className="my-5">Et gravita id et etiam</p>
                <p>Ullamcorper vivamus</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Tempus metus mattis volupist</p>
                <p className="my-5">Et gravida id et etiam</p>
                <p>(+91) 9450-9450</p>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer