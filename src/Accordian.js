import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordian = ({ items }) => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleItemClick = index => 
        {
            // setting open index null to close the item
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-md mx-auto border rounded-md">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordian;
