export default function Profil() {
    return (
        <section className="section-home" id="Home">
                <div className="home display-flex">
                    <div className="home__info display-flex">
                        <h1>Full-stack Worlds <span className="violet" id="typed"></span></h1>
                        <p>As a developer and designer, my mission is to craft immersive digital worlds out of words, design,
                            and code—worlds that drift effortlessly through the vast galaxy of the Internet, captivating and inspiring their visitors.</p>
                        <button id="link-about">About me</button>
                    </div>
                    <div className="home__foto">
                        {/* <img src="./src/assets/img/Me.png" alt="My foto"> */}
                    </div>
                </div>
            </section>
    );
}