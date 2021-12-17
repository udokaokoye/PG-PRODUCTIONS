import React from 'react'
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Home.css'
import {
    faArrowRight,
  } from "@fortawesome/free-solid-svg-icons";
  import {
    faFacebookF,
    faInstagram,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
    return (
        <div>
            <div className="showcase">
            {/* <Particles id="particles-js" 
            params={{
                "fps_limit": 60,
                "particles": {
                    "number": {
                      "value": 80,
                      "density": {
                        "enable": true,
                        "value_area": 800
                      }
                    },
                    "color": {
                      "value": "#ffffff"
                    },
                    "shape": {
                      "type": "circle",
                      "stroke": {
                        "width": 0,
                        "color": "#1439b1"
                      },
                      "polygon": {
                        "nb_sides": 3
                      },
                      "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    },
                    "opacity": {
                      "value": 0.5,
                      "random": false,
                      "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 2,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": false,
                      "distance": 1420.5330155548368,
                      "color": "#ffffff",
                      "opacity": 0.3393495537158777,
                      "width": 0
                    },
                    "move": {
                      "enable": true,
                      "speed": 2,
                      "direction": "none",
                      "random": false,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "repulse"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true,
                "interactivity": {
                    "detect_on": "window",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 100,
                            "duration": 1
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            }}
             /> */}
                <div className="inner">
                    <div className="cont">
                        <h1>PG PRODUCTION</h1>
                        <h4>Eligthen Your <span className='c-action'>Vision</span></h4>
                        <p><span>VIDEO STRATEGY</span> . <span>VIDEO PRODUCTION</span> . <span>VIDEO MARKETING</span></p>
                        <button>Learn More</button>
                    </div>
                    
                </div>
            </div>
        
        <div className="features">
          <hr className='hr' />
            <div className="inner">
                <div className="feature">Live Stream</div>
                <div className="feature">Documentaries</div>
                <div className="feature">Photography</div>
                <div className="feature">Commercials</div>
                <div className="feature">Events</div>
                <div className="feature">Marketing Videos</div>
            </div>
            <hr className='hr' />
        </div>
        
        <div className="what_we_do">
            <div className="inner">
                <div className="left"></div>
                <div className="right">
                    <h1>WHAT WE DO</h1>

                    <div className="content">
                        <div className="do do_1">
                            <div className="img"></div>
                            <div className="text">
                                <h3>Live Streaming</h3>
                                <p>we specialize in providing seamless live streaming services that will keep your audience engaged.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        </div>
    )
}

export default Home
