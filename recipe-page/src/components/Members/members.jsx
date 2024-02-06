import React, { useState } from 'react';
import './Accordion.css';

export default function Accordion({ header_Image, title, description}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="App">
            <div className="accordion">
                <div onClick={() => setIsOpen(!isOpen)} className="accordion-header">
                    <h2>{title}</h2>
                    <img className="header-image" src={header_Image} alt='Photo of the member' />
                    <div className="accordion-indicator">
                        {isOpen ? '-' : '+'}
                    </div>
                </div>
                {isOpen && (
                    <div className="accordion-body">
                        <div className="accordion-body-content">
                            <div className="accordion-body-content-left">
                            </div>
                            <div className="accordion-body-content-right">
                                <h3>Description</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="App">
            <div className="accordion">
                <div onClick={() => setIsOpen(!isOpen)} className="accordion-header">
                    <h2>{title}</h2>
                    <img className="header-image" src={header_Image} alt='Photo of the member' />
                    <div className="accordion-indicator">
                        {isOpen ? '-' : '+'}
                    </div>
                </div>
                {isOpen && (
                    <div className="accordion-body">
                        <div className="accordion-body-content">
                            <div className="accordion-body-content-left">
                            </div>
                            <div className="accordion-body-content-right">
                                <h3>Description</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
    return (
        <div className="App">
            <div className="accordion">
                <div onClick={() => setIsOpen(!isOpen)} className="accordion-header">
                    <h2>{title}</h2>
                    <img className="header-image" src={header_Image} alt='Photo of the member' />
                    <div className="accordion-indicator">
                        {isOpen ? '-' : '+'}
                    </div>
                </div>
                {isOpen && (
                    <div className="accordion-body">
                        <div className="accordion-body-content">
                            <div className="accordion-body-content-left">
                            </div>
                            <div className="accordion-body-content-right">
                                <h3>Description</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
    return (
        <div className="App">
            <div className="accordion">
                <div onClick={() => setIsOpen(!isOpen)} className="accordion-header">
                    <h2>{title}</h2>
                    <img className="header-image" src={header_Image} alt='Photo of the member' />
                    <div className="accordion-indicator">
                        {isOpen ? '-' : '+'}
                    </div>
                </div>
                {isOpen && (
                    <div className="accordion-body">
                        <div className="accordion-body-content">
                            <div className="accordion-body-content-left">
                            </div>
                            <div className="accordion-body-content-right">
                                <h3>Description</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}