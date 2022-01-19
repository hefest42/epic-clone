import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top__socials">
                    <div>SOCIAL MEDIA</div>
                    <button>&lsaquo;</button>
                </div>
                <div className="footer-top__resources">
                    <ul>
                        <li className="footer-top__resources-acent">Resources</li>
                        <li>Support-A-Creator</li>
                        <li>Publish on Epic Games</li>
                        <li>Careers</li>
                        <li>Company</li>
                    </ul>

                    <ul>
                        <li></li>
                        <li>Fan Art policy</li>
                        <li>UX Research</li>
                        <li>Store EULA</li>
                        <li></li>
                    </ul>

                    <ul>
                        <li></li>
                        <li>Online Services</li>
                        <li>Community Rules</li>
                        <li>Epic Newsroom</li>
                        <li></li>
                    </ul>

                    <ul>
                        <li className="footer-top__resources-acent">Made By Epic Games</li>
                        <li>Battle Breakers</li>
                        <li>Fortnite</li>
                        <li>Infinity Blade</li>
                        <li></li>
                    </ul>

                    <ul>
                        <li></li>
                        <li>Robo Recall</li>
                        <li>Shadow Complex</li>
                        <li>Unreal Tournament</li>
                        <li></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom__rights">
                    {
                        "© 2022, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Epic Games International, S.à r.l.  "
                    }
                </div>

                <div className="footer-bottom__policy">
                    <div>
                        <span>Terms of Service</span>
                        <span>Privacy Policy</span>
                        <span>Store Refund Policy</span>
                    </div>

                    <div>LOGOS</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
