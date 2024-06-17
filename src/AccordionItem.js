// src/Accordion.js
import React from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="border-b">
            <button className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={onClick}
                >
                {title}
            </button>
            {isOpen && (
                <div className="p-4">
                    {content}
                </div>
            )}
        </div>
    );
};

export default AccordionItem;
