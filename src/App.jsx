import { useState, useEffect } from "react";
import "./App.css";
import placeholderheadshot from "./assets/headshot.jpg";
import scrollbg from "./assets/scrollbg.jpg";
import arisepicture from "./assets/ariseaf.png";
import resbookmark from "./assets/resbookmark.png";
import todopic from "./assets/todopic.png";
// import doublebnobg from "./assets/doubleb-nobg.png";
// import headshot from "./assets/headshot.jpg";
import placeholder from "./assets/placeholder.jpg";
import {
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaHome,
    FaInfoCircle,
    FaThumbsUp,
    FaBrain,
    FaArrowRight,
    FaPhoneAlt,
} from "react-icons/fa";
import {
    MdKeyboardDoubleArrowUp,
    MdLightMode,
    MdDarkMode,
    MdContacts,
    MdChecklist,
    MdMenu,
    MdEmail,
} from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase, SiMongodb, SiVite } from "react-icons/si";
import { IoMdClose } from "react-icons/io";

function App() {
    const [activeSection, setActiveSection] = useState("home");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setIsDarkMode(true);
            console.log("dark");
        } else {
            setIsDarkMode(false);
            console.log("light");
        }
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -20% 0px",
            threshold: [0],
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("scrollanimate");
                    console.log("Section in view:", entry.target.id);
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);
        navItems.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
                console.log(element);
            } else {
                observer.unobserve;
            }
        });
        // return () => {
        //     observer.disconnect();
        //     console.log("Observer disconnected"); // Debug log
        // };
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);

        if (!isDarkMode) {
            document.documentElement.classList.add("darkMode");
        } else {
            document.documentElement.classList.remove("darkMode");
        }
    };
    const toggleNavMenu = () => {
        setIsNavMenuOpen(!isNavMenuOpen);
    };
    const closeNavMenu = () => {
        setIsNavMenuOpen(false);
    };
    document.querySelectorAll(".nav-item").forEach((item) => {
        item.addEventListener("click", () => {
            if (window.innerWidth <= 750) {
                closeSidebar();
            }
        });
    });
    document.querySelectorAll(".nav-item").forEach((item) => {
        item.addEventListener("click", () => {
            if (window.innerWidth <= 750) {
                closeSidebar();
            }
        });
    });

    // Close sidebar on escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeSidebar();
        }
    });
    const navItems = [
        { id: "home", label: "Home", icon: <FaHome /> },
        { id: "about", label: "About", icon: <FaInfoCircle /> },
        { id: "skills", label: "Skills", icon: <FaBrain /> },
        { id: "projects", label: "Projects", icon: <MdChecklist /> },
        { id: "Testimonials", label: "Testimonials", icon: <FaThumbsUp /> },
        { id: "contact", label: "Contact", icon: <MdContacts /> },
    ];
    const skills = [
        { name: "HTML", progress: 90 },
        { name: "CSS", progress: 85 },
        { name: "Javascript", progress: 80 },
        { name: "React Js", progress: 80 },
        { name: "Next js", progress: 75 },
        { name: "NodeJs", progress: 40 },
    ];
    const tools = [
        {
            name: "Github",
            icon: <FaGithub />,
        },
        {
            name: "Tailwind",
            icon: <RiTailwindCssFill />,
        },
        {
            name: "firebase",
            icon: <SiFirebase />,
        },
        {
            name: "Vite",
            icon: <SiVite />,
        },
        {
            name: "mongoDB",
            icon: <SiMongodb />,
        },
    ];
    const services = [
        "Enhancing website performance through optimization techniques and best practices.",
        "Developing dynamic and interactive applications with React.js and Next.js.",
        "Setting up and managing databases using Firebase and MongoDB.",
        "Creating smooth transitions and animations for engaging user experiences.",
        "Integrating applications with RESTful and GraphQL APIs for seamless data exchange.",
    ];
    const projects = [
        {
            id: 1,
            title: "Ariseafrica Clone",
            image: arisepicture,
            githubUrl:
                "https://github.com/Oklogit/Ariseafrica-website-clone.git",
            liveDemoUrl: "https://ariseafrica-website-clone.vercel.app/",
            details:
                "This project is a clone of an AriseAfrica’s landing page, constructed with semantic HTML for structure and modern CSS for layout and styling.The result is a static but dynamic-feeling landing page that mirrors professional design quality while remaining performant and responsive.",
        },
        {
            id: 2,
            title: "Resource Bookmarker",
            image: resbookmark,
            githubUrl:
                "https://github.com/Oklogit/Simple-Resource-Bookmarker.git",
            liveDemoUrl: "https://simple-resource-bookmarker.vercel.app/",
            details:
                " This is a bookmarking utility that implements localStorage for persistence. Bookmarks are stored as key–value pairs in the browser, with JavaScript handling CRUD operations: users can add URLs through a form, validate input, display the saved sites in a list, and remove them when no longer needed. On page reload, data is retrieved from localStorage to restore the session, ensuring persistence without the need for a backend.",
        },
        {
            id: 3,
            title: "To-do List App",
            image: todopic,
            githubUrl: "https://github.com/Oklogit/To-do-List-App.git",
            liveDemoUrl: "https://to-do-list-app-drab-eta.vercel.app/",
            details:
                "The to-do list application is implemented with plain HTML, CSS, and JavaScript, using DOM manipulation and event listeners to manage task creation, completion, and deletion. Tasks are appended dynamically to the DOM when a user submits input, and class toggling is used to visually mark items as done.",
        },
        {
            id: 4,
            title: "Clone 2",
            image: placeholder,
            githubUrl: "#",
            liveDemoUrl: "#",
            details:
                "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore enim sequi mollitia ab magni laboriosam, iusto ducimus doloribus optio sint ratione nihil neque, tempora doloremque?",
        },
    ];

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Product Manager",
            company: "TechCorp",
            testimony:
                "Oklo delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and professional.",
            photo: placeholderheadshot,
        },

        {
            id: 2,
            name: "Michael Chen",
            role: "CEO",
            company: "StartupHub",
            testimony:
                "Working with Oklo was a fantastic experience. He transformed our vision into a stunning, responsive website that perfectly represents our brand.",
            photo: placeholderheadshot,
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Marketing Director",
            company: "Creative Solutions",
            testimony:
                "Oklo's React expertise is outstanding. He built us a dynamic web application that has significantly improved our user engagement and conversion rates.",
            photo: placeholderheadshot,
        },
    ];
    const profiles = [
        {
            platform: "Github",
            link: "https://github.com/Oklogit",
            icon: FaGithub,
        },
        {
            platform: "Linkedin",
            link: "https://linkedin.com/in/yourusername",
            icon: FaLinkedin,
        },
        {
            platform: "Twitter",
            link: "https://Twitter.com/yourusername",
            icon: FaTwitter,
        },
    ];

    // Smooth scroll function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setActiveSection(sectionId);
        }
    };

    return (
        <div className="portfolio-container">
            <header className="header">
                <h2 className="fascinatefont">PORTFOLIO</h2>
                <div className="togglediv">
                    <input
                        type="checkbox"
                        id="togglecheckbox"
                        title="On/Off dark Theme"
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                    />
                    <label htmlFor="togglecheckbox" className="toggler">
                        <span className="toggleball">
                            <MdLightMode className="lightIcon" />
                            <MdDarkMode className="moonIcon" />
                        </span>
                    </label>
                </div>
            </header>
            {isNavMenuOpen && (
                <div className="overlay" onClick={closeNavMenu}></div>
            )}
            <nav className={`navbar ${isNavMenuOpen ? "visible" : ""}`}>
                <button
                    onClick={closeNavMenu}
                    title="close"
                    id="closeBurger"
                    className={`close burger ${isNavMenuOpen ? "visible" : ""}`}
                >
                    <IoMdClose />
                </button>

                <ul className="nav-menu">
                    {navItems.map((item) => (
                        <li key={item.id} className="nav-item">
                            <button
                                className={`nav-link ${
                                    activeSection === item.id ? "active" : ""
                                }`}
                                onClick={() => scrollToSection(item.id)}
                            >
                                <span>{item.label}</span>
                                <span className="nav icons">{item.icon}</span>
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="contact-items">
                    <div>
                        <MdEmail className="contact-icon" />
                        <span>solomonoklo9@gmail.com</span>
                    </div>
                    <div>
                        <FaPhoneAlt className="contact-icon" />
                        <span>+234 905 756 702</span>
                    </div>
                </div>
            </nav>

            <div className="main-content">
                <button
                    className={`burger ${isNavMenuOpen ? "" : "visible"}`}
                    onClick={toggleNavMenu}
                    title="menu"
                >
                    <MdMenu />
                </button>
                <section id="home" className="homepage">
                    {/* <div className="brand">
                        <img
                            src={headshot}
                            className="headshot"
                            alt="headshot photo of developer Oklo Solomon"
                        />
                    </div> */}
                    <h1 className="name">OKLO SOLOMON</h1>
                    <h2 className="title"></h2>
                    <button
                        className="contactmebtn"
                        onClick={() => scrollToSection("contact")}
                    >
                        CONTACT ME
                        <FaArrowRight />
                    </button>
                </section>

                {/* About Section */}
                <section id="about" className="about">
                    {/* <div className="dbimage">
                        <img src={dbnobg} />
                    </div> */}
                    {isDarkMode && <div className="aboutoverlay"></div>}{" "}
                    <div className="aboutContent">
                        <h2>About Me</h2>
                        <h5>WHO AM I?</h5>
                        <p>
                            I’m a <strong>Frontend Web Developer</strong> with a
                            passion for building sleek, user-friendly, and
                            performant web applications. My specialty lies in{" "}
                            <strong>React</strong>, where I enjoy transforming
                            ideas into interactive interfaces that are both
                            functional and visually engaging.
                        </p>
                        <p>
                            With a strong foundation in{" "}
                            <strong>HTML, CSS, and JavaScript</strong>, I create
                            responsive designs that adapt seamlessly across
                            devices. I’m experienced in using modern tools and
                            frameworks within the React ecosystem — from state
                            management to component libraries — to deliver
                            clean, maintainable code.
                        </p>
                        <p>
                            Beyond coding, I value{" "}
                            <strong>collaboration and problem-solving</strong>.
                            Whether it’s working with designers to bring
                            concepts to life or optimizing performance for a
                            smoother user experience, I thrive on crafting
                            solutions that improve both usability and
                            aesthetics.
                        </p>
                    </div>
                </section>

                {/* Skillset Section */}
                <section id="skills" className="skillset">
                    <div className="sectionHeader">
                        <h2>Skillset</h2>
                    </div>
                    <ul className="skill-list">
                        {skills.map((skill, index) => (
                            <li
                                key={index}
                                style={{
                                    position: "relative",
                                }}
                            >
                                <h4 style={{ marginBottom: ".4rem" }}>
                                    {skill.name}
                                </h4>
                                <div className="barAligner">
                                    <span
                                        className="progressBarEnd"
                                        id={skill.name.split(" ")[0] + "BarEnd"}
                                        style={{
                                            placeContent: "center",
                                            left: `calc(${skill.progress}% - .5rem)`,
                                            position: "absolute",
                                        }}
                                    ></span>
                                    <span
                                        className="progressBarDigits"
                                        id={skill.name.split(" ")[0] + "BarEnd"}
                                        style={{
                                            backgroundColor: "inherit",
                                            left: `calc(${skill.progress}% - .6rem)`,
                                            position: "absolute",
                                            fontFamily:
                                                "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                                            top: ".5rem",
                                            fontSize: ".8rem",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {skill.progress}%
                                    </span>
                                    <progress
                                        className="progressBar"
                                        id={skill.name.split(" ")[0] + "bar"}
                                        value={skill.progress}
                                        max="100"
                                    ></progress>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="tools">
                        <ul>
                            {tools.map((tool) => (
                                <li>
                                    <span className="icons">{tool.icon}</span>
                                    <h3>{tool.name}</h3>
                                </li>
                            ))}
                        </ul>
                        <ul>
                            {tools.map((tool) => (
                                <li>
                                    <span className="icons">{tool.icon}</span>
                                    <h3>{tool.name}</h3>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {
                        <div className="services">
                            <h2 className="">Services</h2>
                            <ul className="serviceList">
                                {services.map((service, index) => (
                                    <li key={index} className="sevice">
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </section>

                <section id="projects" className="projects">
                    <div className="sectionHeader">
                        <h5> MY WORK</h5>
                        <h2>Projects</h2>
                    </div>
                    <div className="projects-list">
                        {projects.map((project) => (
                            <div key={project.id} className="project">
                                <h2>{project.title}</h2>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="buttonsContainer">
                                    <button
                                        className="project-button"
                                        onClick={() =>
                                            window.open(
                                                project.githubUrl,
                                                "_blank"
                                            )
                                        }
                                    >
                                        Github
                                    </button>
                                    <button
                                        className="project-button"
                                        onClick={() =>
                                            window.open(
                                                project.liveDemoUrl,
                                                "_blank"
                                            )
                                        }
                                    >
                                        Live Demo
                                    </button>
                                </div>
                                <p className="project-details">
                                    <span>{project.details}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="Testimonials" className="testimonials">
                    <div className="sectionHeader">
                        <h5>TESTIMONIALS</h5>
                        <h2>What People Say</h2>
                    </div>

                    <div className="testimonials-list">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="testimonial-card"
                            >
                                <div className="testimonial-header">
                                    <img
                                        src={testimonial.photo}
                                        alt={testimonial.name}
                                        className="testimonial-photo"
                                    />
                                    <div className="testimonial-info">
                                        <h4 className="testimonial-name">
                                            {testimonial.name}
                                        </h4>
                                        <p className="testimonial-role">
                                            {testimonial.role}
                                        </p>
                                        <p className="testimonial-company">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <p className="testimonial-text">
                                        "{testimonial.testimony}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section id="contact" className="contactSection">
                    <div className="sectionHeader">
                        <h2>CONTACT ME</h2>
                        <h5>Send a message</h5>
                    </div>
                    <div className="contactDiv">
                        <form className="contactForm" action="">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Your Name"
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="your mail"
                            />
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                placeholder="Your Subject"
                            />
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Message"
                            ></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                        <div className="profilesDiv">
                            <h4>find me across platforms</h4>
                            <div className="profiles-list">
                                {profiles.map((profile, index) => {
                                    const Icon = profile.icon; // store the component reference
                                    return (
                                        <a
                                            key={index}
                                            href={profile.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icon className="icons" />
                                            <h3>{profile.platform}</h3>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <MdKeyboardDoubleArrowUp
                    className="scroll-to-top-btn"
                    onClick={() => scrollToSection("home")}
                    aria-label="Scroll to top"
                />
            </div>
        </div>
    );
}

export default App;
