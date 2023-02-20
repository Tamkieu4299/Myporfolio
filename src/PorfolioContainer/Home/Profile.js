import React from 'react';
import Typical from 'react-typical';
import { VanillaTilt } from 'vanilla-tilt/dist/vanilla-tilt.js';
import './Profile.css'

export default function Profile(){
    const options = {max:25,speed:400}
    return(
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>

                            <a href='https://www.facebook.com/kieu.tam.1690/'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://github.com/Tamkieu4299'>
                                <i className='fa fa-github-square'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/kieu-cong-tam-a9a69b225/'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                        </ div>
                    </div>
    

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Welcome the World, I'm <span className='hightlighted-text'>Kieu Cong Tam</span>
                        </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "An Adventor 🌍",
                                    1400,
                                    "I love 🍜 Algorithms ",
                                    1400,
                                    "Fullstack 💻 Engineer",
                                    1400,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Softwares soft everywhere. 
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Visit Me{" "}
                        </button>
                        <a href='KieuCongTam_SE.pdf' dowload='KieuCongTam_SE.pdf'>
                            <button className='btn highlighted-btn'>Get My Resume</button>
                        </a>

                    </div>
                </div>
                <div className='profile-picture'>
                    <div className = 'profile-picture-background'>
                    </div>
                </div>
        </div>
        </div>

    );
}
