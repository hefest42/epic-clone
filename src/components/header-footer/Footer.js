import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top__socials">
                    <div></div>
                    <button onClick={() => window.scrollTo(0, 0)}>{"<"}</button>
                </div>
                <div className="footer-top__resources">
                    <div>
                        <span className="footer-top__resources-title">Resources</span>
                        <span className="footer-top__resources-link">Support-A-Creator</span>
                        <span className="footer-top__resources-link">Publish on Epic Games</span>
                        <span className="footer-top__resources-link">Careers</span>
                        <span className="footer-top__resources-link">Company</span>
                    </div>
                    <div>
                        <div className="footer-top__resources-dummy">
                            <span></span>
                        </div>
                        <span className="footer-top__resources-link">Fan Art Policy</span>
                        <span className="footer-top__resources-link">UX Research</span>
                        <span className="footer-top__resources-link">Store EULA</span>
                    </div>
                    <div>
                        <div className="footer-top__resources-dummy"></div>
                        <span className="footer-top__resources-link">Online Services</span>
                        <span className="footer-top__resources-link">Community Rules</span>
                        <span className="footer-top__resources-link">Epic Newsroom</span>
                    </div>
                    <div>
                        <span className="footer-top__resources-title">Made By Epic Games</span>
                        <span className="footer-top__resources-link">Battle Breakers</span>
                        <span className="footer-top__resources-link">Fortnite</span>
                        <span className="footer-top__resources-link">Infinity Blade</span>
                    </div>
                    <div>
                        <div className="footer-top__resources-dummy"></div>
                        <span className="footer-top__resources-link">Robo Recall</span>
                        <span className="footer-top__resources-link">Shadow Complex</span>
                        <span className="footer-top__resources-link">Unreal Tournament</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © 2022, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal
                    Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic
                    Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective
                    owners. Non-US transactions through Epic Games International, S.à r.l.{" "}
                </p>
                <div>
                    <div>
                        <span>Terms of Service</span>
                        <span>Privacy Policy</span>
                        <span>Store Refund Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
