import React from 'react'
import htmlLogo from '../../assests/img/skillsBadge/html.png'
import cssLogo from '../../assests/img/skillsBadge/css.png'
import bootstrapLogo from '../../assests/img/skillsBadge/bootstrap.png'
import javascriptLogo from '../../assests/img/skillsBadge/javascript.png'
import reactLogo from '../../assests/img/skillsBadge/react.png'
import phpLogo from '../../assests/img/skillsBadge/php.png'
import mysqlLogo from '../../assests/img/skillsBadge/mysql.png'
import angularLogo from '../../assests/img/skillsBadge/angular.png'
import wordpressLogo from '../../assests/img/skillsBadge/wordpress.png'
import javaLogo from '../../assests/img/skillsBadge/java.png'
import nextjsLogo from '../../assests/img/skillsBadge/nextjs.png'
import flutterLogo from '../../assests/img/skillsBadge/flutter.png'
import pythonLogo from '../../assests/img/skillsBadge/python.png'
import laravelLogo from '../../assests/img/skillsBadge/laravel.svg'
import gitLogo from '../../assests/img/skillsBadge/git.png'


const Index = () => {
    return (

        <section className="technologySection" id="sillBadgeContainer">
            <div className="container">
                <div className="row text-center">
                    <h2>Technologies we use </h2>
                    <p className='text-center subHeading'> Empowering Innovation with Advanced Tools</p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="skillBadgeCont py-4">
                            <div className="skillbadge">
                                <img
                                    src={htmlLogo}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="skillbadge">
                                <img
                                    src={cssLogo}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="skillbadge">
                                <img
                                    src={bootstrapLogo}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="skillbadge">
                                <img
                                    src={javascriptLogo}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="skillbadge">
                                <img
                                    src={reactLogo}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="skillbadge">
                                <img
                                    src={nextjsLogo}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="skillbadge">
                                <img
                                    src={angularLogo}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="skillbadge">
                                <img
                                    src={flutterLogo}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="skillbadge">
                                <img
                                    src={javaLogo}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>

                            <div className="skillbadge">
                                <img
                                    src={wordpressLogo}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="skillbadge">
                                <img
                                    src={phpLogo}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="skillbadge">
                                <img
                                    src={mysqlLogo}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="skillbadge">
                                <img
                                    src={laravelLogo}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="skillbadge">
                                <img
                                    src={pythonLogo}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>

                            <div className="skillbadge">
                                <img
                                    src={gitLogo}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Index
