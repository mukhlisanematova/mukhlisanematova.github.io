import { Github, Linkedin } from "lucide-react";

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
        aria-label="Introduction">
        {/* Background */}
            <div className="absolute inset-0">
                {/* <img src="/hero-background.jpg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" /> */}
                <img src="/hero-background.jpg" alt="" className="w-full h-full object-cover opacity-40" aria-hidden="true"/>
                <div className="absolute inset-0 backdrop-blur-[0.5px] bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
            </div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
                {[...Array(30)].map((_, i) => (
                    <div 
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#9B4A2F",
                            left:`${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${
                                15 + Math.random() * 20
                            }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>
            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left column - text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm color-primary">
                                <span className = "w-2 h-2 bg-primary rounded-full"/>
                                Software Engineer • Research Engineer | Human Centered Engineering & Data Systems
                            </span>
                        </div>

                        {/* headline */}
                        {/* <div className="space-y-4">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight animate-fade-in delay-300">
                                Research-to-Product<span className="color-primary glow-text"> builder </span> 
                                <br />
                                with experience 
                                <br /> 
                                shipping <span className="font-serif italic font-normal color-primary">reliable</span> systems for <span className="font-serif italic font-normal color-primary">real</span> people.
                            </h1>

                            <p className="text-lg text-muted-foreground mt-4 animate-fade-in animation-delay-500">
                            Hi, I'm Mukhlisabonu Nematova, a recent CS grad who loves exploring new technologies and building things that make a difference. 
                            I have experience in both research and development, and I'm passionate about creating reliable systems that solve real-world problems. 
                            <br />
                            When I'm not coding, you can find me doing henna, making new recipes drinks baking cooking, working on small business's.
                            </p>
                        </div> */}

                        {/*social links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow: </span>
                            {[
                                {icon: Github, href: "http://github.com/mukhlisanematova/"}, 
                                {icon: Linkedin, href: "https://www.linkedin.com/in/mukhlisabonu-nematova/"},
                            ].map((social, index) => (
                                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    {<social.icon />}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* right column - profile image */}
                </div>
            </div>
        </section>
            );
}
        {/* <section id="hero" className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I'm <span className="text-primary">Mukhlisabonu Nematova</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                    Full Stack Developer & UI/UX Enthusiast
                </p>
                <div className="flex gap-4 justify-center">
                    <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/80 transition-colors">
                        Get In Touch
                    </a>
                    <a href="#projects" className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                        View My Work
                    </a>
                </div>
            </div> */}
    {/* </section> */}
