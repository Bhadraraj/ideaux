import React from 'react';

const Index = () => {
    const jobOpenings = [
        {
            title: 'Software Developer',
            description: 'Help build and scale innovative software solutions.',
        },
        {
            title: 'UX/UI Designer',
            description: 'Create user-centered designs that elevate the user experience.',
        },
        {
            title: 'Project Manager',
            description: 'Lead cross-functional teams and ensure successful project execution.',
        },
    ];

    return (
        <section className="careersSection">
            <div className="container">
                <h2 className="text-center mb-4">Join Our Team</h2>
                <p className="text-center mb-4">Be part of our dynamic team and shape the future of technology.</p>
                <div className="row g-4">
                    {jobOpenings.map((job, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="jobCard">
                                <h3>{job.title}</h3>
                                <p>{job.description}</p>
                                <a href="/apply" className="btn btn-primary">Apply Now</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Index;
