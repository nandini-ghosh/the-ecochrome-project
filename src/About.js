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
        const creditText = document.getElementById('credit-text');
        const lightBulbWrapper =  document.getElementById('light-bulb-wrapper');

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
            creditText.style.color = '';
            lightBulbWrapper.style.borderColor = '';
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
            creditText.style.color = '#267DFF';
            lightBulbWrapper.style.borderColor = 'black';
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
                    <Link className='menu-item' id="item-3" to="/resources">Resources</Link>
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

                    <div className='subheader' id="subheader-1"> WHAT IS THIS???</div>
                    The Echochrome Project is a web-based interactive experience that helps graphic designers, web developers and UI/UX designers visualise how their creative decisions (like picking a colour palette) can have an impact on the environment.
                    <br></br>
                    <br></br>
                    This project is based on the research presented by Google that highlighted how using different colours on OLED screens can impact the power usage of the device and thereby contribute to the overall eco-friendliness of the device.

                    <div className='subheader' id="subheader-2">WHAT IS THAT PAINT TOOL?</div>
                    The Paint tool was a way to visualise and spread awareness about how visual designers and developers can help contribute towards a greener future.
                    <br></br>
                    <br></br>
                    This web project is intended to help you think about the role of environment in digital design. Just like guidelines like WCAG exist for accessibility, how can we imagine and create a future were the environment is also a factor that designers consider while creating the next big mobile app, or a cool new web service?

                    <div className='credit-text' id="credit-text">
                        Created by Nandini Ghosh (2024) for Touching Grass: Topics in Interaction Design at Northeastern University, Boston, taught by Sonia Ralston.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;