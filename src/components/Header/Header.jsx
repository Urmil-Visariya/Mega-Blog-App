import React, { useState } from 'react';
import { Container, LogoutBtn, Logo } from '../index';
import { useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation();
  const [par, setPar] = useState('/');

  console.log(location.pathname.split('/').at(-1));

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ];

  return (
    <header className='text-white shadow bg-black border-b-1 border-white flex items-center px-12'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'>
            <NavLink to='/'>
              <Logo width='50px' />
            </NavLink>
          </div>

          <ul className='flex justify-end items-center w-full gap-2'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <NavLink
                    to={item.slug}
                    className={({ isActive }) =>
                      `inline-block px-6 py-2 duration-200 font-bold rounded-full ${
                        isActive ?'bg-yellow-600' : 'hover:bg-yellow-500'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
