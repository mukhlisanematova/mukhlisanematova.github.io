import { Github, Linkedin } from "lucide-react";

export const Hero = () => {
    return (
    <section className="relative flex items-center overflow-hidden"
        aria-label="Introduction">
        {/* Background */}
            <div className="absolute inset-0">
                {/* <img src="/hero-background.jpg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" /> */}
                <img src="/hero-background.jpg" alt="" className="w-full h-full object-cover opacity-40" aria-hidden="true"/>
                <div className="absolute inset-0 backdrop-blur-[0.5px] bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
            </div>
            {/* Animated floating dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
                {[...Array(30)].map((_, i) => (
                    <div 
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "var(--color-primary)",
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
            <div className="w-full px-6 pt-32 pb-20 relative z-10 flex justify-center">
                <div className="flex flex-col lg:flex-row gap-12 items-center max-w-3xl w-full">
                    {/* Left column - profile image */}
                    <div className="flex justify-center lg:justify-start shrink-0">
                        <img src="/mukhlisa-image.jpg" alt="Profile Picture" className="w-64 h-64 rounded-full object-cover border-4 border-primary animate-fade-in animation-delay-600" />
                    </div>
                    {/* Right column - text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm color-primary">
                                {/* <span className="w-2 h-2 bg-primary rounded-full"/> */}
                                Software Engineer • Research Engineer
                                <br/>
                                Human Centered Engineering & Responsible Systems
                            </span>
                        </div>

                        {/* headline */}
                        {/* #to fix: no visible H1 on the page — restore the <h1> below; it anchors the page visually and is required for screen reader navigation */}
                        <div className="space-y-4">
                            {/* <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight animate-fade-in delay-300">
                                Research-to-Product<span className="color-primary glow-text"> builder </span>
                                <br />
                                with experience
                                <br />
                                shipping <span className="font-serif italic font-normal color-primary">reliable</span> systems for <span className="font-serif italic font-normal color-primary">real</span> people.
                            </h1> */}

                            <p class = "text-lg text-muted-foreground animate-fade-in animation-delay-500 px-4 mt-4 mb-2">
                            Hi, I'm Mukhlisa, an explorer, builder, and researcher. Born in Uzbekistan and raised in Brooklyn, NY.

                            {/* Fields of Interests: Responsible AI, Human-Centered and Engaging Learning Systems, AI Ethics & Policy, Product Design, HCI Research, UX/UI Design
                            Interests : Privacy, Accessibility, Collaboration, Organization
                            Tech expertise: Unity, Full Stack Development, AI/ML, HCI Research, UX/UI Design, Google Cloud, Data Analysis, Research and Design

                            Tools: Figma, Github, Miro, Google Workspace
                            Languages: C#, Python */}
                            <br />
                            {/* When I'm not coding, you can find me doing henna, making new recipes, drinks, baking, cooking, working on small business. */}
                            </p>
                        </div>

                        {/* Tools / Skills / Languages */}

                        {/*social links */}
                        {/* #to fix: icon-only links have no accessible label — add aria-label="GitHub profile" and aria-label="LinkedIn profile" to each <a> */}
                        {/* #to fix: no call-to-action in the Hero — add buttons like "Get In Touch" and "View My Work" to give visitors a prompted next step */}
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
                        {/* View Projects Button */}
                        {/* View Resume  Button */}
                    </div>
                </div>
            </div>
        </section>
    );
}
