import { useEffect, useRef } from "react";
import Nav from "../components/nav";

export default function Profil() {
    const typedRef = useRef<HTMLSpanElement>(null);
    const hasTyped = useRef(false); // флаг: уже запускалась анимация или нет

    useEffect(() => {
        if (hasTyped.current) return; // не запускать снова
        hasTyped.current = true;

        const text = "Developer";
        const delay = 230;
        let charIndex = 0;

        if (typedRef.current) {
            typedRef.current.textContent = "";
        }

        function type() {
            if (typedRef.current && charIndex < text.length) {
                typedRef.current.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(type, delay);
            }
        }

        type();
    }, []);

    return (
        <>
            <Nav />
            <section className="section-profil" id="Home">
                <div className="profil">
                    <div className="profil__info">
                        <h1>
                            Full-stack Worlds <span className="violet" ref={typedRef} id="typed"></span>
                        </h1>
                        <p>
                            As a developer and designer, my mission is to craft immersive digital worlds out of words, design,
                            and code—worlds that drift effortlessly through the vast galaxy of the Internet, captivating and inspiring their visitors.
                        </p>
                        <a className="regular-btn" href="/about">About me</a>
                    </div>
                    <div className="profil__foto">
                        <img src="public/img/Me.png" alt="My foto" />
                    </div>
                </div>
            </section>
        </>
    );
}