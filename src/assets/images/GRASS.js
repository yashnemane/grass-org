import React from 'react';

const Logo = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150">
            <path 
                d="M20 70 C40 65, 60 75, 80 70 S100 65, 120 70 S140 75, 160 70 S180 65, 200 70 S220 75, 240 70 S260 65, 280 70" 
                fill="none" 
                stroke="#4CAF50" 
                strokeWidth="2" 
                opacity="0.5"
            />
            <defs>
                <linearGradient id="grassGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "#2E7D32" }} />
                    <stop offset="100%" style={{ stopColor: "#43A047" }} />
                </linearGradient>
            </defs>
            
            <text x="40" y="60" fontFamily="Arial" fontSize="45" fontWeight="bold" fill="url(#grassGradient)">
                <tspan>G</tspan>
            </text>
            <text x="85" y="60" fontFamily="Arial" fontSize="45" fontWeight="bold" fill="url(#grassGradient)">
                <tspan>R</tspan>
            </text>
            <text x="130" y="60" fontFamily="Arial" fontSize="45" fontWeight="bold" fill="url(#grassGradient)">
                <tspan>A</tspan>
            </text>
            <text x="175" y="60" fontFamily="Arial" fontSize="45" fontWeight="bold" fill="url(#grassGradient)">
                <tspan>S</tspan>
            </text>
            <text x="220" y="60" fontFamily="Arial" fontSize="45" fontWeight="bold" fill="url(#grassGradient)">
                <tspan>S</tspan>
            </text>
            
            <text x="40" y="85" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333333">
                Gajanan
            </text>
            <text x="85" y="85" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333333">
                Research
            </text>
            <text x="130" y="85" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333333">
                in Agricultural
            </text>
            <text x="175" y="85" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333333">
                Education &amp;
            </text>
            <text x="220" y="85" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333333">
                Social Services
            </text>
            
            <path 
                d="M30 65 Q40 55, 50 65" 
                fill="none" 
                stroke="#4CAF50" 
                strokeWidth="1.5" 
                opacity="0.6"
            />
            <path 
                d="M250 65 Q260 55, 270 65" 
                fill="none" 
                stroke="#4CAF50" 
                strokeWidth="1.5" 
                opacity="0.6"
            />
        </svg>
    );
};

export default Logo;
