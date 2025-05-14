import { useState, type SetStateAction } from "react";
import Nav from "../components/nav";

export default function About() {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabClick = (tabId: SetStateAction<string>) => {
        setActiveTab(tabId);
    };

    return (
        <>
            <Nav />
            <section className="section-about" id="About">
                <div className="linkBar">
                    <a href="#up"><img src="./public/img/up-arrow.png" alt="up-arrow icon" /></a>
                    <a href="#learning"><img src="./public/img/audio-book.png" alt="audio-book icon" /></a>
                    <a href="#hobby"><img src="./public/img/skateboard.png" alt="skateboard icon" /></a>
                    <a href="#down"><img src="./public/img/down-arrow.png" alt="down-arrow icon" /></a>
                </div>
                <div className="about">
                    <h4>My story</h4>
                    <p>I discovered programming at 14, fascinated by the magic it seemed to hold. Despite early
                        obstacles like coding on an old, faulty laptop and eventually my phone, my passion only grew stronger.
                        Exploring various areas and languages led me to web development, and ultimately to pursuing a career as a
                        Full-stack developer at Epitech's Web@cademie. Now, at 19, my enthusiasm for coding continues to inspire me daily.</p>
                </div>

                <div id="learning" className="tabs-container">
                    <div className="tabs">
                        <button className={`tab ${activeTab === "tab1" ? "active" : ""}`} onClick={() => handleTabClick("tab1")}>LEARNING PATH</button>
                        <button className={`tab ${activeTab === "tab2" ? "active" : ""}`} onClick={() => handleTabClick("tab2")}>LANGUAGES</button>
                        <button className={`tab ${activeTab === "tab3" ? "active" : ""}`} onClick={() => handleTabClick("tab3")}>HARD SKILLS</button>
                        <button className={`tab ${activeTab === "tab4" ? "active" : ""}`} onClick={() => handleTabClick("tab4")}>SOFT SKILLS</button>
                        <button className={`tab ${activeTab === "tab5" ? "active" : ""}`} onClick={() => handleTabClick("tab5")}>NEXT SKILLS</button>
                    </div>

                    <div className={`tab-content ${activeTab === "tab1" ? "active" : ""}`} id="tab1">
                        <h4 className="title-animation">In progres</h4>
                        <ul>
                            <li> <a className="li-link" href="https://www.webacademie.org/">Web@cademie <b>2024-2026</b></a></li>
                            <li> <a className="li-link" href="https://sql-academy.org/en">Sql-academy <b>2025</b></a></li>
                            <li> <a className="li-link" href="https://itgid.info/ru">JavaScript 2 <b>2025</b></a></li>
                        </ul>
                        <h4 className="title-animation">Finish</h4>
                        <ul>
                            <li> <a className="li-link" href="https://itgid.info/ru">JavaScript <b>2024 (1 month)</b></a></li>
                            <li> <a className="li-link" href="https://itproger.com/">Profession Front-end developper <b>2023 (3 month)</b></a></li>
                        </ul>
                    </div>
                    <div className={`tab-content ${activeTab === "tab2" ? "active" : ""}`} id="tab2">
                        <h4 className="title-animation">Native language</h4>
                        <ul>
                            <li className="li-regular">Roumain(Natif)</li>
                        </ul>
                        <h4 className="title-animation">Languages learned</h4>
                        <ul>
                            <li className="li-regular">Russe(Natif)</li>
                            <li className="li-regular">Français(Intermédiaire)</li>
                            <li className="li-regular">Ukrainien(Intermédiaire)</li>
                            <li className="li-regular">Anglais(Niveau technique)</li>
                        </ul>
                    </div>
                    <div className={`tab-content ${activeTab === "tab3" ? "active" : ""}`} id="tab3">
                        <div className="tab-container">
                            <div className="tab-group">
                                <h4 className="title-animation">Front-end Development</h4>
                                <p><span className="text-actent">HTML, CSS,</span> and <span className="text-actent">JavaScript</span> are my core tools for building adaptive and interactive interfaces.
                                    I also work with technologies like <span className="text-actent">Babel, React Native</span> and <span className="text-actent">SCSS</span> to write clean, modern, and maintainable code.
                                    I’m familiar with frameworks like <span className="text-actent">Bootstrap</span> and <span className="text-actent">Tailwind,</span> and I know how to use them, but they are not
                                    part of my main tech stack — I prefer writing custom styles for greater flexibility and control.</p>
                            </div>
                            <div className="tab-group">
                                <h4 className="title-animation">Back-end Fundamentals</h4>
                                <p>I have a solid understanding of <span className="text-actent">PHP(Laravel), SQL</span> and the basics of <span className="text-actent">REST APIs.</span>
                                    I’m capable of building application logic, handling data, and connecting the back-end with the front-end.</p>
                            </div>
                            <div className="tab-group">
                                <h4 className="title-animation">Debugging & Problem Solving</h4>
                                <p>I’m skilled at identifying and fixing issues. I use the console, browser
                                    <span className="text-actent">DevTools,</span> and efficient search techniques to resolve bugs quickly. I see every bug as a challenge to overcome.
                                </p>
                            </div>
                            <div className="tab-group">
                                <h4 className="title-animation">Version Control</h4>
                                <p><span className="text-actent">Git</span> and <span className="text-actent">GitHub</span> are essential parts of my workflow. I work confidently with branches,
                                    pull requests, and version history to keep my projects clean and organized.</p>
                            </div>
                            <div className="tab-group">
                                <h4 className="title-animation">Responsive & Adaptive Design</h4>
                                <p>I design interfaces that look great on <span className="text-actent">any screen size.</span> From <span className="text-actent">grid systems</span> to the tiniest
                                    spacing — responsiveness is part of my development process from the start.</p>
                            </div>
                            <div className="tab-group">
                                <h4 className="title-animation">UI/UX</h4>
                                <p>I don't just write code — <span className="text-actent">I think about the person using it.</span> I aim to build interfaces that are
                                    intuitive, visually appealing, and pleasant to interact with. I also create my own design mockups,
                                    thoughtfully planning structure, visual style, and user experience before I even start coding.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-content ${activeTab === "tab4" ? "active" : ""}`} id="tab4">
                        <div className="tab-container">
                            <div className="tab-group">
                                <h4 className="title-animation">Self-discipline & Motivation</h4>
                                <p>I know how to organize my learning and work independently. I don’t wait for instructions
                                    — I set goals and move towards them on my own.</p>
                            </div>
                            <div className="tab-group">
                                <h4 className="title-animation">Curiosity & Fast Learning</h4>
                                <p>I genuinely enjoy exploring new technologies and understanding how things work.
                                    I learn quickly, especially when I’m passionate about the subject — and I usually am.</p>
                            </div>
                            <div className="tab-group">
                                <h4 className="title-animation">Teamwork</h4>
                                <p>Even though I enjoy working independently, I have experience in team projects.
                                    I know how to communicate, consider other perspectives, and work toward shared solutions.</p>
                            </div>
                            <div className="tab-group">
                                <h4 className="title-animation">Focus & Independent Work</h4>
                                <p>I’m comfortable working alone and have no trouble concentrating deeply.
                                    I like being fully in control of the process from start to finish.</p>
                            </div>
                            <div className="tab-group">
                                <h4 className="title-animation">Attention to Detail</h4>
                                <p>I aim to write clean, well-structured code and create thoughtful designs.
                                    I believe small details matter — they shape the quality of the entire project.</p>
                            </div>
                            <div className="tab-group">
                                <h4 className="title-animation">Empathy & User-centered Thinking</h4>
                                <p>I always think about the people who will use what I build. It’s not just about making something that
                                    works — I want it to feel intuitive, pleasant, and meaningful to others.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-content ${activeTab === "tab5" ? "active" : ""}`} id="tab5">
                        <h4 className="title-animation">In progres</h4>
                        <ul>
                            <li>PHP(Symfony)</li>
                            <li>Java(Spring, Angular)</li>
                            <li>Python(Django)</li>
                            <li>Go</li>
                            <li>Ruby</li>
                            <li>CMS(Wordpress)</li>
                        </ul>
                    </div>
                </div>
                <div id="hobby" className="hobby">
                    <h2>Hobby</h2>
                    <div className="hobby-group">
                        <div className="hobby-item skateboar">
                            <h3>Skateboard</h3>
                            <p>When the weather is warm, I love skateboarding — it’s really refreshing.</p>
                        </div>
                        <div className="hobby-item manga">
                            <h3>Manga</h3>
                            <p>I've loved anime, manga, and everything related to that culture since childhood
                                — especially the deep meaning behind such beautiful works.</p>
                        </div>
                    </div>
                    <div className="hobby-group">
                        <div className="hobby-item sport">
                            <h3>Sport</h3>
                            <p>I like working out in my free time when I'm not programming — it helps me relax,
                                and the atmosphere in the gym gives me extra motivation.</p>
                        </div>
                    </div>
                </div>
                <div id="down" className="about-me">
                    <h3>About me</h3>
                    <div className="about-item">
                    <div className="about-back"></div>
                        <ul>
                            <li>I love listening to the same song on repeat until I get sick of it.</li>
                            <li>I like it when things are in their place - but I rarely keep it that way.</li>
                            <li>I don't like phone calls. Neither making them nor answering them.</li>
                            <li>Sometimes I feel like there's coffee running through my veins instead of blood.</li>
                            <li>My thoughts are much louder than my voice, that’s why it’s easier for me to write than to speak.</li>
                            <li>I love looking at the night sky after coding, even though I’ve never studied space.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
