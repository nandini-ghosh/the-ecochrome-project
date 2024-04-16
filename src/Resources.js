import './App.css';
import { Link } from "react-router-dom";

function Resources() {
    return (
        <div>
            <div className='menu-bar'>
                <div className='menu-logo'>
                    The Ecochrome Project
                </div>
                <div className='menu-items'>
                    <Link className='menu-item' to="/paint">paint!</Link>
                    <Link className='menu-item' to="/about">about</Link>
                    <Link className='menu-item' to="/resources">resources</Link>
                </div>
            </div>
            <div className='home-content'>
                <div className='text-block'>
                    <svg width="100" viewBox="0 0 200 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M127.69 62.4428C185.55 -4.72255 242.015 94.6264 155.574 110.718C242.015 127.509 184.853 226.159 127.69 158.993C156.968 242.949 43.3391 242.25 72.6179 158.993C14.7575 226.159 -41.7084 127.509 44.7333 110.718C-42.4055 94.6264 14.7575 -4.02293 72.6179 62.4428C42.642 -20.8142 156.968 -20.8142 127.69 62.4428ZM99.8048 98.1246C106.776 98.1246 113.05 103.722 113.05 110.718C113.05 117.714 106.776 124.011 99.8048 124.011C92.834 124.011 87.2566 117.714 87.2566 110.718C87.2566 103.722 92.834 98.1246 99.8048 98.1246Z" fill="#EA89E6" />
                    </svg>

                    <div className='subheader large pink'>BLOOMING BUDS</div>
                    <div className='caption pink'>The inspiration.</div>
                    <div className='paragraph-text'>
                        I was inspired by several articles and projects that aimed to discuss the role of
                        designers and developers as environmental allies. The Ecochrome project's main tool was
                        inspired by the idea of click-to-paint flash games and tools like Microsoft's Paint to show
                        the users how different colours impact the overall energy being consumed by their canvas.
                    </div>

                    <svg width="100" viewBox="0 0 201 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100.818 0.499954C74.2798 0.499954 52.7664 22.0135 52.7664 48.5519C52.7664 50.7036 51.022 52.448 48.8703 52.448C22.3319 52.448 0.818359 73.9614 0.818359 100.5C0.818359 127.038 22.3319 148.552 48.8703 148.552C51.022 148.552 52.7664 150.296 52.7664 152.448C52.7664 178.986 74.2798 200.5 100.818 200.5C127.357 200.5 148.871 178.986 148.871 152.448C148.871 150.296 150.615 148.552 152.766 148.552C179.305 148.552 200.818 127.038 200.818 100.5C200.818 73.9614 179.305 52.448 152.766 52.448C150.615 52.448 148.871 50.7036 148.871 48.5519C148.871 22.0135 127.357 0.499954 100.818 0.499954Z" fill="#F2FF59" />
                    </svg>

                    <div className='subheader large'>BRANCHING OUT</div>
                    <div className='caption'>The design.</div>
                    <div className='paragraph-text'>
                        Several design decisions drove the creation of this simple website!
                        <ul>
                            <li>The font I chose to use is <b>Lucida Console</b>. This font
                                was designed to be extremely legible on a low-resolution display, and
                                one of the font designers was a woman. This font is also a system font and
                                is an ode to the text style of CRT monitors.
                            </li>

                            <li>I've only used six colours on this website to maintain a simple
                                dark mode theme. While dark mode is great for being energy efficient,
                                it's important to never use white text on a pure black background (to be gentle on the eyes).
                                For this reason, I chose to use a deep green-grey background instead, with a bamboo green highlight colour
                                and a fuschia pink for accents.
                            </li>

                            <li>The code used on this website is entirely my own, but I did use several open-source references which are
                                linked below! Feel free to inspect this website's code!
                            </li>

                            <li>
                                The energy bar's math is calculated using approximations derived from the Google
                                research chart. All white is considered 100%, and all black is considered 0% (although keep in mind
                                that black will never be fully 0%, and would be closer to 10%. This was changed for ease of uniform calculations
                                in the tool). In comparision, the R, G, B values are weighted at 0.25, 0.3 and 0.6 respectively. This is 
                                because according to the chart, red consumes about 25%, green about 30% and blue about 60% (if white is 100%).
                            </li>

                            <li>This site was prototyped on <a href="https://www.figma.com/file/tytFa2L0y8gD4eiCNhyo1f/Assignment-4-Mockup?type=design&node-id=0%3A1&mode=design&t=8VtjYcAFBHsWL0oC-1">Figma</a></li>
                        </ul>
                    </div>

                    <svg width="100" viewBox="0 0 201 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M166.468 44.2721C166.89 42.033 167.111 39.7227 167.111 37.3602C167.111 17.0522 150.807 0.589333 130.694 0.589333C118.388 0.589333 107.508 6.75255 100.916 16.1889C94.5877 10.8243 86.4252 7.59332 77.5156 7.59332C57.5963 7.59332 41.4124 23.7415 41.1037 43.7801H41.0992C18.7522 43.7801 0.636719 62.0721 0.636719 84.6368C0.636719 107.202 18.7522 125.494 41.0992 125.494H160.175C182.521 125.494 200.637 107.202 200.637 84.6368C200.637 64.2338 185.826 47.325 166.468 44.2721Z" fill="#7E9AFF" />
                    </svg>

                    <div className='subheader large blue'>WATERING MY GARDEN</div>
                    <div className='caption blue'>The references and resources.</div>
                    <div className='paragraph-text'></div>
                    Articles
                    <ul>
                        <li><a href="https://consider.digital/low-carbon-web-colour-palettes/">Low-Carbon Web Colour Palettes: Why Black Is The New Green</a></li>
                        <li><a href="https://www.fastcompany.com/90605005/these-are-the-worlds-most-sustainable-fonts">Sustainable Fonts</a></li>
                        <li><a href="https://greentheweb.com/energy-efficient-color-palette-ideas/">Energy Efficient Color Palettes</a></li>
                    </ul>
                    <br></br>
                    <br></br>
                    Projects
                    <ul>
                        <li><a href="https://sustainablewebdesign.org/calculating-digital-emissions/">Sustainable Web Design: Calculating Digital Emissions</a></li>
                        <li><a href="https://api.websitecarbon.com/#site-endpoint">Website Carbon API</a></li>
                        <li><a href="https://cyberfeminismindex.com">Cyberfeminism Index</a></li>
                        <li><a href="https://illuminating-radioactivity.com/">Illuminating Radioactivity</a></li>
                    </ul>
                    <br></br>
                    <br></br>
                    Books
                    <ul>
                        <li>Japanese Color Harmony Dictionary - Traditional Colors of Japan: The Complete Guide for Designers and Graphic Artists
                            <br></br>
                            <i>By Teruko Sakurai (2021)</i>
                        </li>
                    </ul>
                    <br></br>
                    <br></br>
                    Coding resources
                    <ul>
                        <li><a href="https://learnersbucket.com/examples/interview/convert-hex-color-to-rgb-in-javascript/">Hexadecimal to RGB</a></li>
                        <li>Mozilla Web Docs</li>
                        <li>W3Schools</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Resources;
