// src/App.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 50,
            once: true,
        });
    }, []);

    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
            >
                <source src={process.env.PUBLIC_URL + "/star.mov"} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            {/* Nav Bar */}
            <nav
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "1rem",
                    padding: "1rem",
                }}
            >
                <a href="/" style={{ color: "#b8a4ff", textDecoration: "none" }}>
                    Portfolio
                </a>
                <a href="#about" style={{ color: "#b8a4ff", textDecoration: "none" }}>
                    About
                </a>
                <a href="#projects" style={{ color: "#b8a4ff", textDecoration: "none" }}>
                    Work
                </a>
                <a href="#skills" style={{ color: "#b8a4ff", textDecoration: "none" }}>
                    Skills
                </a>
                <a href="#contact" style={{ color: "#b8a4ff", textDecoration: "none" }}>
                    Contact
                </a>
            </nav>

            {/* HERO SECTION */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "70vh",
                    textAlign: "center",
                    color: "#fff",
                }}
            >
                <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem", marginTop: "2rem" }}>
                    Hello, I'm <span style={{ color: "#b8a4ff" }}>Ayesha Irum</span>
                </h1>

                <p
                    style={{
                        fontSize: "1.3rem",
                        marginBottom: "2rem",
                        color: "#d8ccff",
                        maxWidth: "700px",
                        lineHeight: "1.7",
                    }}
                >
                    Product-Focused Software Engineer & Full-Stack Developer
                </p>

                <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
                    <a
                        href={process.env.PUBLIC_URL + "/ayesha_resume.pdf"}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: "0.75rem 1.5rem",
                            borderRadius: "30px",
                            backgroundColor: "#b8a4ff",
                            border: "none",
                            color: "#000",
                            cursor: "pointer",
                            textDecoration: "none",
                        }}
                    >
                        View Resume
                    </a>

                    <button
                        onClick={handleScrollToAbout}
                        style={{
                            padding: "0.75rem 1.5rem",
                            borderRadius: "30px",
                            backgroundColor: "transparent",
                            border: "2px solid #b8a4ff",
                            color: "#b8a4ff",
                            cursor: "pointer",
                        }}
                    >
                        About Me
                    </button>
                </div>

                <div
                    style={{
                        width: "180px",
                        height: "180px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "3px solid #b8a4ff",
                        marginTop: "1rem",
                    }}
                >
                    <img
                        src={process.env.PUBLIC_URL + "/ayesha.PNG"}
                        alt="Ayesha"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            </div>

            {/* ABOUT SECTION */}
            <div
                id="about"
                data-aos="fade-up"
                style={{
                    padding: "2rem",
                    textAlign: "center",
                    color: "#fff",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    borderRadius: "15px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                    margin: "2rem auto",
                    maxWidth: "850px",
                }}
            >
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#b8a4ff" }}>
                    About Me
                </h2>

                <p
                    style={{
                        maxWidth: "700px",
                        margin: "0 auto",
                        lineHeight: "1.9",
                        fontSize: "1.05rem",
                    }}
                >
                    I’m a Computer Science graduate with experience in full-stack development,
                    product coordination, customer operations, and user-focused web applications.
                    I enjoy building products that are scalable, accessible, and easy to use.
                    My background includes React, SQL, PostgreSQL, UI/UX improvements,
                    database systems, and cross-functional teamwork.
                </p>
            </div>

            {/* PROJECTS SECTION */}
            <div
                id="projects"
                data-aos="fade-up"
                style={{
                    padding: "2rem",
                    color: "#fff",
                }}
            >
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#b8a4ff", textAlign: "center" }}>
                    Projects
                </h2>

                <p style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto" }}>
                    Selected projects showcasing full-stack development, product thinking,
                    database systems, and scalable application design.
                </p>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "2rem",
                        justifyContent: "center",
                        marginTop: "2rem",
                    }}
                >
                    {[
                        {
                            title: "CrisisRelief Platform",
                            description:
                                "Built a full-stack disaster relief platform helping users locate shelters, hospitals, food banks, and emergency resources using Google Maps and weather APIs.",
                            github: "https://github.com/sfsu-joseo/csc648-848-05-sp25-T05",
                        },
                        {
                            title: "Appointment Booking System",
                            description:
                                "Designed and implemented a database-driven appointment scheduling platform with normalized schemas, ER/EER diagrams, and optimized SQL queries.",
                            github: "https:"//github.com/AyeshaIrum/Appointment-Booking",
                        },

                        {
                            title: "File System Implementation",
                            description:
                                "Developed a simulated file system in C with free-space management, metadata handling, file operations, and Unix-style shell commands.",
                            github: "https://github.com/AnshajVats/Filesystem",
                        },

                        {
                            title: "Real-Time Multiplayer Bingo Game",
                            description:
                                "Created a multiplayer Bingo game using Node.js, Express, Socket.io, and PostgreSQL with real-time gameplay and persistent sessions.",
                            github: "https://github.com/AyeshaIrum/majora-mask-project",
                        },

                    ].map((proj, i) => (
                        <div
                            key={i}
                            style={{
                                width: "260px",
                                backgroundColor: "rgba(255, 255, 255, 0.08)",
                                borderRadius: "14px",
                                padding: "1.2rem",
                                boxShadow: "0px 4px 14px rgba(0,0,0,0.35)",
                            }}
                        >
                            <h3 style={{ fontSize: "1.2rem", color: "#b8a4ff", marginBottom: "0.5rem" }}>
                                {proj.title}
                            </h3>

                            <p style={{ fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "1rem" }}>
                                {proj.description}
                            </p>

                            <a
                                href={proj.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    backgroundColor: "#b8a4ff",
                                    color: "#000",
                                    padding: "0.5rem 0.9rem",
                                    borderRadius: "20px",
                                    textDecoration: "none",
                                    fontSize: "0.85rem",
                                    fontWeight: "bold",
                                }}
                            >
                                View Project &rsaquo;
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* SKILLS SECTION */}
            <div
                id="skills"
                data-aos="fade-up"
                style={{
                    padding: "2rem",
                    textAlign: "center",
                    color: "#fff",
                }}
            >
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#b8a4ff" }}>
                    Skills
                </h2>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "2rem",
                        flexWrap: "wrap",
                        maxWidth: "1000px",
                        margin: "0 auto",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "rgba(255,255,255,0.08)",
                            borderRadius: "14px",
                            padding: "1.5rem",
                            minWidth: "280px",
                        }}
                    >
                        <h3 style={{ color: "#b8a4ff", marginBottom: "1rem" }}>
                            Frontend & Design
                        </h3>

                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {["React", "JavaScript", "TailwindCSS", "HTML/CSS", "Figma", "Git/GitHub"].map((skill) => (
                                <div key={skill} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <span style={{ color: "#b8a4ff" }}>✔</span>
                                    <strong>{skill}</strong>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        style={{
                            backgroundColor: "rgba(255,255,255,0.08)",
                            borderRadius: "14px",
                            padding: "1.5rem",
                            minWidth: "280px",
                        }}
                    >
                        <h3 style={{ color: "#b8a4ff", marginBottom: "1rem" }}>
                            Backend & Database
                        </h3>

                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {["Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB", "REST APIs"].map((skill) => (
                                <div key={skill} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <span style={{ color: "#b8a4ff" }}>✔</span>
                                    <strong>{skill}</strong>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        style={{
                            backgroundColor: "rgba(255,255,255,0.08)",
                            borderRadius: "14px",
                            padding: "1.5rem",
                            minWidth: "280px",
                        }}
                    >
                        <h3 style={{ color: "#b8a4ff", marginBottom: "1rem" }}>
                            Product & Operations
                        </h3>

                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {["Agile", "Jira", "Trello", "User Feedback", "Documentation", "Cross-Functional Teamwork"].map((skill) => (
                                <div key={skill} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <span style={{ color: "#b8a4ff" }}>✔</span>
                                    <strong>{skill}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTACT SECTION */}
            <div
                id="contact"
                data-aos="fade-up"
                style={{
                    padding: "2rem",
                    color: "#fff",
                    maxWidth: "1000px",
                    margin: "0 auto",
                }}
            >
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#b8a4ff", textAlign: "center" }}>
                    Contact Me
                </h2>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "2rem",
                        marginTop: "2rem",
                        alignItems: "stretch",
                    }}
                >
                    <div
                        style={{
                            flex: "1 1 300px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <h3 style={{ marginBottom: "0.5rem" }}>Talk to me</h3>

                        <div
                            style={{
                                flex: 1,
                                backgroundColor: "rgba(255,255,255,0.08)",
                                borderRadius: "10px",
                                padding: "1rem",
                            }}
                        >
                            <h4>Email</h4>
                            <p style={{ opacity: 0.8 }}>ayeshairum18@gmail.com</p>
                            <a
                                href="mailto:ayeshairum18@gmail.com"
                                style={{ color: "#b8a4ff", textDecoration: "none", fontSize: "0.9rem" }}
                            >
                                Write Me &rsaquo;
                            </a>
                        </div>

                        <div
                            style={{
                                flex: 1,
                                backgroundColor: "rgba(255,255,255,0.08)",
                                borderRadius: "10px",
                                padding: "1rem",
                            }}
                        >
                            <h4>LinkedIn</h4>
                            <p style={{ opacity: 0.8 }}>Ayesha Irum</p>
                            <a
                                href="https://www.linkedin.com/in/ayesha-irum-a817471b2/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#b8a4ff", textDecoration: "none", fontSize: "0.9rem" }}
                            >
                                Connect &rsaquo;
                            </a>
                        </div>

                        <div
                            style={{
                                flex: 1,
                                backgroundColor: "rgba(255,255,255,0.08)",
                                borderRadius: "10px",
                                padding: "1rem",
                            }}
                        >
                            <h4>GitHub</h4>
                            <p style={{ opacity: 0.8 }}>AyeshaIrum</p>
                            <a
                                href="https://github.com/AyeshaIrum"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#b8a4ff", textDecoration: "none", fontSize: "0.9rem" }}
                            >
                                View GitHub &rsaquo;
                            </a>
                        </div>
                    </div>

                    <div
                        style={{
                            flex: "1 1 500px",
                            backgroundColor: "rgba(255,255,255,0.08)",
                            borderRadius: "10px",
                            padding: "1.5rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <h3 style={{ marginBottom: "1rem" }}>Write Me Your Message</h3>

                        <form
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                flex: 1,
                                justifyContent: "space-between",
                            }}
                        >
                            <div>
                                <input
                                    type="text"
                                    placeholder="Enter name"
                                    style={{
                                        width: "100%",
                                        marginBottom: "0.5rem",
                                        padding: "0.8rem",
                                        borderRadius: "5px",
                                        border: "1px solid #b8a4ff",
                                        background: "transparent",
                                        color: "#fff",
                                    }}
                                />

                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    style={{
                                        width: "100%",
                                        marginBottom: "0.5rem",
                                        padding: "0.8rem",
                                        borderRadius: "5px",
                                        border: "1px solid #b8a4ff",
                                        background: "transparent",
                                        color: "#fff",
                                    }}
                                />

                                <textarea
                                    placeholder="Write your message"
                                    rows={14}
                                    style={{
                                        width: "100%",
                                        padding: "0.8rem",
                                        borderRadius: "5px",
                                        border: "1px solid #b8a4ff",
                                        background: "transparent",
                                        color: "#fff",
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    padding: "0.8rem",
                                    width: "100%",
                                    borderRadius: "5px",
                                    border: "none",
                                    backgroundColor: "#b8a4ff",
                                    color: "#000",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <footer
                style={{
                    backgroundColor: "#b8a4ff",
                    padding: "3rem",
                    marginTop: "2rem",
                    textAlign: "center",
                }}
            >
                <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "1.5rem" }}>
                    <a href="/" style={{ color: "#000", textDecoration: "none" }}>
                        Home
                    </a>
                    <a href="#about" style={{ color: "#000", textDecoration: "none" }}>
                        About
                    </a>
                    <a href="#skills" style={{ color: "#000", textDecoration: "none" }}>
                        Skills
                    </a>
                    <a href="#projects" style={{ color: "#000", textDecoration: "none" }}>
                        Work
                    </a>
                    <a href="#contact" style={{ color: "#000", textDecoration: "none" }}>
                        Contact
                    </a>
                </div>

                <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "1.5rem" }}>
                    <a
                        href="https://www.linkedin.com/in/ayesha-irum-a817471b2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#000", fontSize: "2rem" }}
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>

                    <a
                        href="https://github.com/AyeshaIrum"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#000", fontSize: "2rem" }}
                    >
                        <i className="fab fa-github"></i>
                    </a>

                    <a
                        href="mailto:ayeshairum18@gmail.com"
                        style={{ color: "#000", fontSize: "2rem" }}
                    >
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>

                <p style={{ color: "#000", marginTop: "1rem", fontSize: "0.9rem" }}>
                    © 2025 Ayesha Irum. All rights reserved.
                </p>
            </footer>
        </div>
    );
}

export default App;