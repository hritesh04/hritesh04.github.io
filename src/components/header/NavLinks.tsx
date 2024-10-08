import React from 'react';

export const NavLinks = () => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div className="hidden sm:flex space-x-4 md:space-x-12">
            {/* <a 
                href="#projects" 
                onClick={(e) => handleClick(e, 'projects')}
                className="text-sm md:text-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out"
            >
                Projects
            </a>
            <a 
                href="#links" 
                onClick={(e) => handleClick(e, 'links')}
                className="text-sm md:text-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out"
            >
                Links
            </a>
            <a 
                href="#blog" 
                onClick={(e) => handleClick(e, 'blog')}
                className="text-sm md:text-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out"
            >
                Blog
            </a> */}
        </div>
    );
}