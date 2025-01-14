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
                <source src="/star.mov" type="video/mp4" />
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
                <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
                    Website Developer and UI/UX Designer
                </p>
                <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
                    {/* "Download resume" opens resume.pdf in a new tab */}
                    <a
                        href="/resume.pdf"
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
                        Download resume
                    </a>
                    {/* "About Me" scrolls down to the About section */}
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

                {/* Circular photo container */}
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
                        src="/ayesha.PNG"
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
                    maxWidth: "800px",
                }}
            >
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#b8a4ff" }}>About Me</h2>
                <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
                    I'm a skilled{" "}
                    <span style={{ color: "#b8a4ff", fontWeight: "bold" }}>full-stack developer</span> with
                    experience in JavaScript, React, Node, MySQL, and Python. I'm a{" "}
                    <strong>quick learner</strong> and a <strong>team player</strong>, passionate about creating{" "}
                    <span style={{ color: "#b8a4ff" }}>user-friendly</span> and functional websites and
                    applications.
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
                <p style={{ textAlign: "center" }}>
                    My personal projects demonstrating my skills...
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
                            title: "Portfolio",
                            description:
                                "Built this portfolio with React, which demonstrates my projects, experience, " +
                                "skills in responsive design, and modern web development practices.",
                            github: "https://github.com/AyeshaIrum/react-portfolio",
                        },
                        {
                            title: "Calculator Project",
                            description:
                                "A full-featured calculator in Java. Showcases arithmetic logic, " +
                                "user-friendly interface, and clean, efficient code design.",
                            github: "https://github.com/AyeshaIrum/calculator-project",
                        },
                        {
                            title: "Tank Game",
                            description:
                                "A 2D tank game built in Java. Two-player split-screen, with collision detection, " +
                                "power-ups, and breakable terrain.",
                            github: "https://github.com/AyeshaIrum/TankGame",
                        },
                        {
                            title: "Full-Stack App",
                            description:
                                "A MERN-based app with user auth & real-time data updates. " +
                                "Users can create accounts, post, like, comment, and chat via socket.io.",
                            github: "https://github.com/AyeshaIrum/full-stack-app",
                        },
                    ].map((proj, i) => (
                        <div
                            key={i}
                            style={{
                                width: "240px",
                                backgroundColor: "rgba(255, 255, 255, 0.05)",
                                borderRadius: "10px",
                                padding: "1rem",
                            }}
                        >
                            <h3 style={{ fontSize: "1.2rem", color: "#b8a4ff", marginBottom: "0.3rem" }}>
                                {proj.title}
                            </h3>
                            <p style={{ fontSize: "0.9rem", lineHeight: "1.4", marginBottom: "0.5rem" }}>
                                {proj.description}
                            </p>
                            {proj.github ? (
                                <a
                                    href={proj.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        backgroundColor: "#b8a4ff",
                                        color: "#000",
                                        padding: "0.4rem 0.8rem",
                                        borderRadius: "5px",
                                        textDecoration: "none",
                                        fontSize: "0.8rem",
                                    }}
                                >
                                    Demo &rsaquo;
                                </a>
                            ) : (
                                <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>No repo yet</span>
                            )}
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
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#b8a4ff" }}>Skills</h2>

                {/* Two big columns container */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "2rem",
                        flexWrap: "wrap",
                        maxWidth: "900px",
                        margin: "0 auto",
                    }}
                >
                    {/* Frontend Card */}
                    <div
                        style={{
                            backgroundColor: "rgba(255,255,255,0.05)",
                            borderRadius: "10px",
                            padding: "1.5rem",
                            minWidth: "300px",
                        }}
                    >
                        <h3 style={{ color: "#b8a4ff", marginBottom: "1rem" }}>Frontend Development</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {["HTML/CSS", "JavaScript", "React", "Git"].map((skill) => (
                                <div key={skill} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <span style={{ color: "#b8a4ff" }}>✔</span>
                                    <strong>{skill}</strong>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend Card */}
                    <div
                        style={{
                            backgroundColor: "rgba(255,255,255,0.05)",
                            borderRadius: "10px",
                            padding: "1.5rem",
                            minWidth: "300px",
                        }}
                    >
                        <h3 style={{ color: "#b8a4ff", marginBottom: "1rem" }}>Backend Development</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {["Node JS", "Python", "MongoDB", "MySQL"].map((skill) => (
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

                {/* Align items stretch => both columns same height */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "2rem",
                        marginTop: "2rem",
                        alignItems: "stretch",
                    }}
                >
                    {/* Left: "Talk to me" cards */}
                    <div
                        style={{
                            flex: "1 1 300px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <h3 style={{ marginBottom: "0.5rem" }}>Talk to me</h3>

                        {/* Email */}
                        <div
                            style={{
                                flex: 1,
                                backgroundColor: "rgba(255,255,255,0.05)",
                                borderRadius: "10px",
                                padding: "1rem",
                            }}
                        >
                            <h4>Email</h4>
                            <p style={{ opacity: 0.8 }}>airum@sfsu.edu</p>
                            <a
                                href="mailto:airum@sfsu.edu"
                                style={{ color: "#b8a4ff", textDecoration: "none", fontSize: "0.9rem" }}
                            >
                                Write Me &rsaquo;
                            </a>
                        </div>

                        {/* Instagram */}
                        <div
                            style={{
                                flex: 1,
                                backgroundColor: "rgba(255,255,255,0.05)",
                                borderRadius: "10px",
                                padding: "1rem",
                            }}
                        >
                            <h4>Instagram</h4>
                            <p style={{ opacity: 0.8 }}>@iayeshairum</p>
                            <a
                                href="https://www.instagram.com/iayeshairum/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#b8a4ff", textDecoration: "none", fontSize: "0.9rem" }}
                            >
                                Write Me &rsaquo;
                            </a>
                        </div>

                        {/* Discord */}
                        <div
                            style={{
                                flex: 1,
                                backgroundColor: "rgba(255,255,255,0.05)",
                                borderRadius: "10px",
                                padding: "1rem",
                            }}
                        >
                            <h4>Discord</h4>
                            <p style={{ opacity: 0.8 }}>@ayeshairum</p>
                            <a
                                href="https://discord.gg/7b6Askp7"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#b8a4ff", textDecoration: "none", fontSize: "0.9rem" }}
                            >
                                Write Me &rsaquo;
                            </a>
                        </div>
                    </div>

                    {/* Right: Contact Form => same height as left side */}
                    <div
                        style={{
                            flex: "1 1 500px",
                            backgroundColor: "rgba(255,255,255,0.05)",
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

                            <div>
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
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <footer
                style={{
                    backgroundColor: "#b8a4ff",
                    padding: "3rem", // bigger
                    marginTop: "2rem",
                    textAlign: "center",
                }}
            >
                {/* Nav links in the footer */}
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

                {/* Social Icons, bigger size */}
                <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "1.5rem" }}>
                    <a
                        href="https://www.linkedin.com/in/ayesha-irum-a817471b2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#000", fontSize: "2rem" }} // bigger icon
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/iayeshairum/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#000", fontSize: "2rem" }}
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a
                        href="https://www.facebook.com/ayesha.irum.16"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#000", fontSize: "2rem" }}
                    >
                        <i className="fab fa-facebook"></i>
                    </a>
                </div>

                <p style={{ color: "#000", marginTop: "1rem", fontSize: "0.9rem" }}>
                    © 2024. All rights reserved.
                </p>
            </footer>
        </div>
    );
}

export default App;
