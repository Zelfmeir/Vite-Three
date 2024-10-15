import React, { useState } from 'react';

const navLink = [
    { id: 1, href: '/home', name: 'Home' },
    { id: 2, href: '/about', name: 'About' },
    { id: 3, href: '/contact', name: 'Contact' },
];

const NavItems = () => {
    return (
        <ul className='nav-ul'>
            {navLink.map(({id, href, name}) => (
                <li key={id}>
                    <a href={href} className='nav-li'>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Nav = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-black-90'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center p-5 mx-auto c-space'>
                    <a href='/' className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                        Something Something Banana
                    </a>
                    <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='toggle menu'>
                        <img src={open ? '/assets/close.svg' : '/assets/menu.svg'} alt='toggle' className='w-6 h-6' />
                    </button>
                    <nav className={`sm:flex ${open ? 'block' : 'hidden'}`}>
                        <NavItems />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Nav;
