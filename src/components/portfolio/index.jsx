import React from 'react'

const Index = () => {
    // Array of project data
    const projects = [
        {
            img: './assets/img/hsb-web.png',
            liveLink: 'https://bhadraraj.github.io/hsb-foods',
            title: 'Restaurant Website',
            figmaLogo: './assets/img/figmaLogo.png',
            htmlLogo: './assets/img/htmlTag.svg',
            alt: 'Restaurant Website',
        },
        {
            img: './assets/img/another-project.png',
            liveLink: 'https://example.com/project-link',
            title: 'E-Commerce Website',
            figmaLogo: './assets/img/figmaLogo.png',
            htmlLogo: './assets/img/htmlTag.svg',
            alt: 'E-Commerce Website',
        },
        // Add more projects here as needed
    ];

    return (
        <section className="portfolioSection">
            <div className="container">
                <h2 className="text-center mb-0">Project Gallery</h2>
                <p className="text-center subHeading mb-4">
                    Showcasing Web Mastery
                </p>
                <div className="row g-4">
                    {projects.map((project, index) => (
                        <div key={index} className="col-xl-3 col-md-4 col-sm-6">
                            <div className="projectOuterCard">
                                <div className="projectcard">
                                    <div className="projectImg">
                                        <img
                                            src={project.img}
                                            alt={project.alt}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="projectContent">
                                        <div className="row">
                                            <div className="col-6 text-start">
                                                <div className="mb-0 liveCont">
                                                    <a href={project.liveLink} className="">
                                                        <span className="Live">
                                                            <span className="circle"></span>
                                                        </span>
                                                        <span className="liveTxt">
                                                            Live
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-6 d-flex justify-content-end align-items-center">
                                                <img
                                                    src={project.figmaLogo}
                                                    alt="Figma Logo"
                                                    height="15px"
                                                />
                                                <img
                                                    src={project.htmlLogo}
                                                    className="ms-2"
                                                    alt="HTML Logo"
                                                    height="15px"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <p className="projectTitle mb-0">
                                                {project.title}
                                            </p>
                                            <p className="exploreFurther mb-0">
                                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                                    Click here to Explore Further..
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Index;
