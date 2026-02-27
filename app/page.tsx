import ArrowAnimation from "@/components/ArrowAnimation";
import SectionTitle from "@/components/SectionTitle";
import { PROJECTS, MY_STACK, GENERAL_INFO, EDUCATION, CERTIFICATIONS, AWARDS } from "@/lib/data";
import Image from "next/image";
import { Github, ExternalLink, Mail, Send, Linkedin, Trophy } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section id="home" className="h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
                <h1 className="text-[15vw] lg:text-[200px] font-anton text-center leading-[0.8] mb-10">
                    RONI <br /> DEY
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-roboto-flex text-center max-w-2xl">
                    Full-Stack Developer crafting high-performance, visually stunning digital experiences.
                </p>
                <ArrowAnimation />
            </section>

            {/* About Section */}
            <section id="about-me" className="py-20 container mx-auto px-4">
                <SectionTitle title="About Me" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12 items-center">
                    <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-roboto-flex">
                        I&apos;m an innovative, innovation-driven Full-Stack Developer currently pursuing an M.Sc. in Computer Science at the University of Calcutta. I am passionate about modern web technologies and building scalable systems. My expertise spans React, Node.js, Spring Boot, and Python, allowing me to build end-to-end applications from responsive frontends to robust microservices.
                    </p>
                    <div className="relative aspect-square max-w-[320px] mx-auto w-full group">
                        <div className="absolute inset-0 border-2 border-primary/20 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transition-transform group-hover:scale-105 duration-500"></div>
                        <div className="relative h-full w-full overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-card border border-border/50 transition-all duration-700 hover:grayscale-0 grayscale">
                            <Image
                                src="/profile.jpg"
                                alt="Roni Dey"
                                fill
                                sizes="(max-width: 768px) 100vw, 320px"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="my-skills" className="py-24 container mx-auto px-4">
                <SectionTitle title="My Skills" />
                <div className="mt-12 space-y-24">
                    {Object.entries(MY_STACK).map(([category, skills]) => (
                        <div key={category} className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                            <div className="lg:w-1/4">
                                <h3 className="text-3xl md:text-5xl font-anton text-white uppercase leading-none sticky top-24 opacity-40">
                                    {category}
                                </h3>
                            </div>
                            <div className="lg:w-3/4 pl-4 lg:pl-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                                {skills.map((skill: any) => (
                                    <div key={skill.name} className="flex items-center group">
                                        {skill.icon && (
                                            <div className="relative size-10 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300 mr-4">
                                                <Image
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    fill
                                                    sizes="40px"
                                                    className="object-contain"
                                                />
                                            </div>
                                        )}
                                        <span className="text-lg font-roboto-flex tracking-tight group-hover:text-primary transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="selected-projects" className="py-10 container mx-auto px-4">
                <SectionTitle title="Projects" />
                <div className="mt-12 space-y-20">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="flex flex-col lg:flex-row gap-12 items-center bg-[#0d0d0d] p-8 rounded-3xl border border-white/5">
                            {/* Browser Frame */}
                            <div className="w-full lg:w-1/2 aspect-video relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#1a1a1a]">
                                {/* Browser Header */}
                                <div className="h-8 w-full bg-[#2a2a2a] flex items-center px-4 gap-2 border-b border-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="size-2.5 rounded-full bg-[#ff5f57]"></div>
                                        <div className="size-2.5 rounded-full bg-[#febc2e]"></div>
                                        <div className="size-2.5 rounded-full bg-[#28c840]"></div>
                                    </div>
                                    <div className="flex-1 max-w-[200px] h-5 bg-white/5 rounded-md mx-auto text-[10px] text-white/40 flex items-center px-2">
                                        {project.slug}.com
                                    </div>
                                    <div className="size-5 rounded bg-white/5 flex items-center justify-center">
                                        <div className="size-1 bg-white/40 rounded-full"></div>
                                    </div>
                                </div>
                                {/* Project Image */}
                                <div className="relative h-[calc(100%-2rem)] w-full">
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div>
                                    <h3 className="text-4xl md:text-5xl font-anton tracking-tight text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/40 font-roboto-flex">
                                        {project.year}
                                    </p>
                                </div>

                                <p className="text-white/60 text-lg leading-relaxed font-roboto-flex line-clamp-3">
                                    {project.description.replace(/<[^>]+>/g, '')}
                                </p>
                                <button
                                    className="text-primary hover:underline flex items-center gap-1 font-medium"
                                    suppressHydrationWarning
                                >
                                    <ArrowAnimation /> Read more
                                </button>

                                <div className="space-y-4">
                                    <p className="text-xs font-bold text-white/30 tracking-widest uppercase">Technologies</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, i) => (
                                            <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2 text-sm text-white/80">
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <a href={project.liveUrl} target="_blank" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center gap-2 font-bold transition-all transform hover:scale-105">
                                        View Live <ExternalLink size={18} />
                                    </a>
                                    <a href={project.sourceCode} target="_blank" className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center gap-2 font-bold transition-all transform hover:scale-105">
                                        GitHub <Github size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section id="education" className="py-10 container mx-auto px-4">
                <SectionTitle title="Education" />
                <div className="mt-12 bg-[#0d0d0d] p-8 md:p-12 rounded-3xl border border-white/5 max-w-4xl mx-auto">
                    <div className="space-y-12">
                        {EDUCATION.map((edu, idx) => (
                            <div key={idx} className="relative pl-8 border-l-2 border-primary/30 ml-4 group">
                                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
                                <h4 className="text-3xl font-bold text-white mb-2 font-roboto-flex leading-tight">
                                    {edu.degree}
                                </h4>
                                <h5 className="text-xl text-primary font-medium mb-3">{edu.institution}</h5>
                                <div className="inline-block px-4 py-1.5 bg-white/5 rounded-full text-white/50 text-sm font-semibold tracking-wider mb-4 border border-white/5">
                                    {edu.duration}
                                </div>
                                {edu.details && (
                                    <p className="text-white/70 font-roboto-flex text-lg">{edu.details}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section id="certifications" className="py-10 container mx-auto px-4">
                <SectionTitle title="Certifications" />
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0d0d0d] p-8 md:p-12 rounded-3xl border border-white/5">
                    {CERTIFICATIONS.map((cert, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/10 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50 group">
                            <div className="flex w-full justify-between items-start mb-2">
                                <div className="mt-1 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <ArrowAnimation />
                                </div>
                                <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-white/50 text-xs font-semibold tracking-wider border border-white/10 shrink-0">
                                    {cert.year}
                                </div>
                            </div>
                            <h4 className="text-white/90 font-roboto-flex text-xl md:text-2xl leading-snug font-medium mb-4">
                                {cert.title}
                            </h4>
                            <a href={cert.link} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors font-medium hover:underline">
                                Show credentials <ExternalLink size={16} />
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Awards */}
            <section id="awards" className="py-10 container mx-auto px-4">
                <SectionTitle title="Awards" />
                <div className="mt-12 bg-[#0d0d0d] p-8 md:p-12 lg:p-16 rounded-3xl border border-white/5">
                    <div className="relative">
                        {/* Continuous vertical line */}
                        <div className="absolute left-[27px] md:left-[31px] top-[28px] md:top-[32px] bottom-[28px] md:bottom-[32px] w-[2px] bg-gradient-to-b from-blue-500/30 via-blue-500/20 to-blue-500/30"></div>

                        <div className="space-y-10">
                            {AWARDS.map((award, idx) => (
                                <div key={idx} className="flex items-center gap-8 md:gap-12 group relative z-10">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0d0d0d] border-2 border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 group-hover:border-blue-400/60 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500">
                                        <Trophy size={22} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                                    </div>
                                    <p className="text-white/80 group-hover:text-white font-roboto-flex text-lg md:text-xl leading-relaxed font-medium transition-colors duration-300">
                                        {award}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-4 container mx-auto px-4 overflow-hidden">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-6xl md:text-8xl font-anton text-white">
                            Contact <span className="text-blue-500">me.</span>
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl font-roboto-flex max-w-2xl leading-relaxed">
                            I&apos;m always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[40px] space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white/60 uppercase tracking-widest flex gap-1">Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors text-white"
                                    suppressHydrationWarning
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white/60 uppercase tracking-widest flex gap-1">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    placeholder="john@doe.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors text-white"
                                    suppressHydrationWarning
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white/60 uppercase tracking-widest flex gap-1">Message <span className="text-red-500">*</span></label>
                            <textarea
                                rows={5}
                                placeholder="Hello there, I would like to ask you about..."
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors text-white resize-none"
                                suppressHydrationWarning
                            ></textarea>
                            <div className="text-right text-xs text-white/30">0/500 characters</div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-2xl text-white font-bold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
                                suppressHydrationWarning
                            >
                                <Send size={18} /> Send
                            </button>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-8">
                        <p className="text-white/40 font-roboto-flex text-lg font-medium">Or contact me with ...</p>
                        <div className="flex flex-wrap gap-4">
                            <a href={`mailto:${GENERAL_INFO.email}`} className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center gap-3 transition-all group">
                                <Mail className="group-hover:text-blue-500 transition-colors" size={20} />
                                <span className="font-bold">Email</span>
                                <ArrowAnimation />
                            </a>
                            <a href="https://github.com/RoniDey1819" target="_blank" rel="noreferrer" className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center gap-3 transition-all group">
                                <Github className="group-hover:text-white transition-colors" size={20} />
                                <span className="font-bold">Github</span>
                                <ArrowAnimation />
                            </a>
                            <a href="https://www.linkedin.com/in/ronidey" target="_blank" rel="noreferrer" className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center gap-3 transition-all group">
                                <Linkedin className="group-hover:text-blue-600 transition-colors" size={20} />
                                <span className="font-bold">LinkedIn</span>
                                <ArrowAnimation />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
