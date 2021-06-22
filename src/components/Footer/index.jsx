import React from 'react'
import './Footer.css'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import { RightOutlined } from "@ant-design/icons";
import { CustomButton } from '../CustomButton';

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="subscribtion-block">
                    <p>Get Started Within Minutes</p>
                    <h1>Are You Ready to Protect Your Business?</h1>
                    <p>Sign up for our account packages and start generating
                        <br />
                    legal agreements suited to your business needs.</p>
                    <div>
                        <CustomButton primary>Get started for free</CustomButton>
                        <Button>Learn more <span><RightOutlined /></span></Button>
                    </div>
                </div>
                <div className="footer-nav">
                    <div>
                        <div className="iterm-footer__title">iTerms</div>
                        <p className="iterm-footer__text">More than 140,000 businesses use iTerms. Join our community.</p>
                    </div>
                    <div className="links-block">
                        <ul>
                            <li className='li-title'>Company</li>
                            <li>How It Works</li>
                            <li>Reviews</li>
                            <li>Contact us</li>
                            <li>Blog</li>
                        </ul>
                        <ul>
                            <li className='li-title'>Products</li>
                            <li>Solutions</li>
                            <li>Trust & Safety</li>
                            <li>Payment</li>
                            <li>Help</li>
                        </ul>
                        <ul>
                            <li className='li-title'>Support</li>
                            <li>Help</li>
                            <li>Pricing</li>
                            <li>Payment</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright-block">
                    <div>© 2021 Terms Inc. All rights reserved</div>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Disclaimer</li>
                        <li>English version</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}