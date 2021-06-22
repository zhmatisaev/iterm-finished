import React from 'react'
import './Home.css'
import { Switch, Link, Route } from 'react-router-dom'
import { CustomCollapse } from '../../components/CustomCollapse'
import { CustomButton } from '../../components/CustomButton'

import 'antd/dist/antd.css'
import { Button } from 'antd'
import { CheckCircleTwoTone ,RightOutlined} from '@ant-design/icons'

// data
import { icons } from '../../data'
import { faq } from '../../data'
// img
import main2 from '../../images/main2.png'
import Group825 from '../../images/Group 825.png'
import Group826 from '../../images/Group 826.png'
import Group4 from '../../images/Group4.png'
import Group3 from '../../images/Group3.png'
import Ai from '../../images/AI.png'
import circle from '../../images/circle.png'
import card from '../../images/card.png'
import marker from '../../images/img/marker.png'

export const Home = () => {

    return (
        <div>
            {/* header section */}
            <section className="header-section">
                <div className="container">
                    <div className='header-item'>
                        <p className="sub-title">Powered By AI</p>
                        <h1>The smartest, <br /> fastest way to <br /> Legal Aggrements</h1>
                        <p className="text">
                            Generate your
                            <b> Privacy Policy, Terms of Use</b> <br /> or
                            <b> Cookie Policy</b>for
                            <a href=""> free</a>
                        </p>
                        <div>
                            <CustomButton primary>Generate for free</CustomButton>
                            <Button text className='btn-learn-more'>Learn more <RightOutlined/></Button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section second */}
            <section>
                <div className="container">
                    <div className="second-section">
                        <img className="AI" src={Ai} alt="AI" />
                <div>
                    <img className="second-section__img" src={main2} alt="" />
              </div>
                <div className='second-section_main'>
                            
                    <p className='second-section_title'>Discover Possibilities</p>
                    <div className="second-section__item">Streamline Your<br/> Purpose with AI</div>
                    <div className="second-section__text">Streamline cost-effective solutions for your business. Generate legally compliant documents seamlessly with customizable agreements and policies for your website or mobile app anytime, anywhere with iTerms.</div>
                    <div className="second-section__p">
                        <p><CheckCircleTwoTone twoToneColor="#52c41a" /> {" "} Unlimited downloads for 9.95 a one-time fee  </p>
                        <p><CheckCircleTwoTone twoToneColor="#52c41a" /> {" "} All legal agreements confirmed by a practicing lawyer</p>
                        <p><CheckCircleTwoTone twoToneColor="#52c41a" /> {" "} EU/US and main privacy laws covered</p>
                        <p><CheckCircleTwoTone twoToneColor="#52c41a" /> {" "} Automatic legal updates powered by AI</p>
                        <p><CheckCircleTwoTone twoToneColor="#52c41a" /> {" "} Industry-leading competitive pricing </p>
                        <p><CheckCircleTwoTone twoToneColor="#52c41a" /> {" "} Securely host your policies on our platform</p>
                        <p><CheckCircleTwoTone twoToneColor="#52c41a" /> {" "} Easy embed policy on your domain</p>
                        <p><CheckCircleTwoTone twoToneColor="#52c41a" /> {" "} Suitable for most Web/Mobile apps</p>
                    </div>
                    <div className="second-section__btns">
                        <CustomButton primary>Generate</CustomButton>
                        <Button text className="btn-learn-more">Learn more <span className="icon-right"><RightOutlined /></span></Button>
                    </div>
                    </div>
                    </div>
                    </div>
            </section>

            {/* Third section */}
            <div className="third-section__img">
                <div className="container">
                    <img src={Group825} alt="Group825" />
                </div>
            </div>
            {/* <div>
                <div className="container">
                    <div className="solutions">
                        <div>
                            <p>Intuitively Made For Your Business</p>
                            <p>Explore iTerms Solutions </p>
                        </div>
                        <div>
                            <p>Regardless of your requirements, iTerms has a solution ready for you to utilize.</p>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Fourth section */}
            
            <div className="fourth-section__img">
                <div className="container">
                    <img src={Group826} alt="Group825" />
                </div>
            </div>
                {/* Fifth section */}
                <div className='all-sections'>
            <div className="fifth-section__img">
                <div className="container">
                    <img className='circle' src={circle} alt="Circle" />
                    <img className='marker' src={marker} alt="marker" />
                </div>
            </div>
            
            {/* icons */}
            <div className='icon-container'>
                <div className="container">
                    <div className='icons'>
                    <div className="icon">
                        {icons.map((el, id) => {
                            return (
                                <div className='icon-card'>
                                    <img className='icon-img' src={el.img} alt="" />
                                    <div className="icon-text">{el.title}</div>
                                </div>
                            )
                        })}
                   </div>
                    </div>
                    </div>
            </div>
            </div>
             {/* blue section */}
            <section>
                <div className="blue-section">
                    <div className="container">
                        <img className="blue-img" src={Group4} alt="" />
                    </div>
                </div>
            </section>

            {/* card section */}
            <section>
                <div className="card-section">
                    <div className="container">
                        <img src={Group3} alt="" className="card-img" />
                    </div>
                </div>
            </section>

            {/* card */}
            <div className="card-section2">
            <div className="container">
                <img className="card-img2" src={card} alt="card" />
            </div>
            </div>
            {/* faq section */}
            <section className="faq-section">
                <div className="container">

                    <p className="sub-title">Solutions to Your Problems</p>
                    <h2>Do You Have any Questions?</h2>
                    <p>Take a look through our answers! Still, have questions? Please don't be afraid to contact our team at any time.</p>

                    <div className="collapse-block">

                        <div className="sidebar">
                            <h3>Table of Contents</h3>
                            {faq.map((el, id) => {
                                return <Link key={id} to={`/${el.title}`}>
                                    {el.title}
                                </Link>
                            })}
                        </div>

                        <div className="collapse">
                            <Switch>
                                {faq.map((el, id) => {
                                    return <Route path={`/${el.title}`} key={id}>
                                        <CustomCollapse el={el} />
                                    </Route>
                                })}
                            </Switch>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}
