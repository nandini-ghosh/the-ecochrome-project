import './App.css';
import { Link } from "react-router-dom";

function About() {
    let isColorChanged = false;

    const changeColors = () => {
        const homeContent = document.getElementById('home-content');
        const menuBar = document.getElementById('menu-bar');
        const item1 = document.getElementById('item-1');
        const item2 = document.getElementById('item-2');
        const item3 = document.getElementById('item-3');
        const subheader1 = document.getElementById('subheader-1');
        const subheader2 = document.getElementById('subheader-2');
        const subheader3 = document.getElementById('subheader-3');
        const creditText = document.getElementById('credit-text');
        const lightBulbWrapper = document.getElementById('light-bulb-wrapper');
        const plantIcon = document.getElementById('plant-icon');

        if (isColorChanged) {
            // Reset to original colors
            homeContent.style.backgroundColor = ''; // This will remove the inline style and revert to the CSS-defined style
            homeContent.style.color = ''; // Same here
            menuBar.style.backgroundColor = '';
            menuBar.style.color = '';
            item1.style.color = '';
            item2.style.color = '';
            item3.style.color = '';
            subheader1.style.color = '';
            subheader2.style.color = '';
            subheader3.style.color = '';
            creditText.style.color = '';
            lightBulbWrapper.style.borderColor = '';
            plantIcon.style.fill = '';
        } else {
            // Change to new colors
            homeContent.style.backgroundColor = '#FFFDFA';
            homeContent.style.color = 'black';
            menuBar.style.backgroundColor = '#FFFDFA';
            menuBar.style.color = '#267DFF';
            item1.style.color = '#267DFF';
            item2.style.color = '#267DFF';
            item3.style.color = '#267DFF';
            subheader1.style.color = '#267DFF';
            subheader2.style.color = '#267DFF';
            subheader3.style.color = '#267DFF';
            creditText.style.color = '#267DFF';
            lightBulbWrapper.style.borderColor = 'black';
            plantIcon.style.fill = '#267DFF';
        }
        // Toggle the state
        isColorChanged = !isColorChanged;
    };

    return (
        <div>
            <div className='menu-bar' id="menu-bar">
                <div className='menu-logo'>The Ecochrome Project</div>
                <div className='menu-items'>
                    <Link className='menu-item' id="item-1" to="/paint">paint!</Link>
                    <Link className='menu-item' id="item-2" to="/about">about</Link>
                    <Link className='menu-item' id="item-3" to="/resources">resources</Link>
                </div>
            </div>
            <div className='home-content' id="home-content">
                <div className='text-block'>
                    <div className='light-bulb-wrapper' id="light-bulb-wrapper">
                        <button className="light-bulb" onClick={changeColors}>💡</button>
                        Turn the light on to see this page in a high-energy colour palette.
                        <br></br>
                        Turn it off to see it in the low-energy colour palette.
                    </div>

                    <svg width="140" height="111" viewBox="0 0 140 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="plant-icon" fill-rule="evenodd" clip-rule="evenodd" d="M100 0.571426H90V10.5714H80V20.5714H70V30.5714V40.5714V50.5714H60V40.5714H50V30.5714H40H30H20V40.5714H10V50.5714H0V60.5714V70.5714H10V60.5714H20H30H40H50V50.5714H60V60.5714H70V70.5714V80.5714V90.5714V100.571V110.571H80V100.571V90.5714V80.5714V70.5714V60.5714V50.5714V40.5714H90H100H110V30.5714H120H130V20.5714V10.5714H140V0.571426H130H120H110H100Z" fill="#F2FF59" />
                    </svg>

                    <div className='subheader' id="subheader-1">WHAT IS THIS???</div>
                    <div className='paragraph-text'>The Echochrome Project is a web-based interactive experience
                        that helps graphic designers, web developers and UI/UX designers visualise how
                        their creative decisions (like picking a colour palette) can have an impact on the environment.
                        <br></br>
                        <br></br>
                        This project is based on <a href="https://youtu.be/N_6sPd0Jd3g?si=IMa5PkQMsuTYxTMa">the research presented by Google</a> that highlighted how
                        using different colours on OLED screens can impact the power usage of the device
                        and thereby contribute to the overall eco-friendliness of the device.
                    </div>

                    <div className='subheader' id="subheader-2">MY INSPIRATION</div>
                    <div className='paragraph-text'>
                        As an aspiring UI/UX developer, I wondered how designers and visual creators
                        could play their part in driving an effort against today's environmental crisis
                        and spread awareness about the impact of the technological industries on the climate.
                        As a designer and developer, I love being able to harness the power of cool new tech,
                        but I didn't realise the part it plays in the global environment, and the ways in which
                        our small actions can lead to larger consequences.
                        <br></br>
                        <br></br>
                        So, I decided to create the <b>Ecochrome Project</b> as a <i>Speculative Future tool</i>,
                        that can help us visualise ways in which designers and front-end developers can be more
                        aware of the decisions they make and the ecological impact it can have.
                        <br></br>
                        <br></br>
                        This project focuses on <b>colour</b>! Because that's where most creatives will start when
                        they begin a project. My tool aims to help you see how a seemingly small decision; like what
                        colour palette you should use for your fun new app, can equate to something more... In this case
                        that's energy consumption on an OLED screen.
                        <br></br>
                        <br></br>
                        While not all screens are OLED, most modern day phones
                        and laptops are shifting towards this kind of screen-based technology to help optimise power usage.
                        I hope this tool can help you learn something new today, and can be a small part in creating a
                        larger conversation about environmental activism in design and development!
                    </div>

                    <div className='subheader' id="subheader-3">WHAT IS THAT PAINT TOOL?</div>
                    <div className='paragraph-text'>The <Link to="/paint">Paint tool</Link> was a way to visualise and spread awareness
                        about how visual designers and developers can help contribute towards a greener future.
                        <br></br>
                        <br></br>
                        This web project is intended to help you think about the role of environment in digital
                        design. Just like guidelines such as <a href="https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines">WCAG</a> exist for accessibility, how can we imagine and create a future were the environment is also a factor that designers consider while
                        creating the next big mobile app, or a cool new web service?
                    </div>

                    <div className='credit-text' id="credit-text">
                        Created by Nandini Ghosh (2024) for Touching Grass: Topics in Interaction Design at Northeastern University, Boston, taught by Sonia Ralston.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;