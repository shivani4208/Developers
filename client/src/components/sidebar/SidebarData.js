import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as CgIcons from 'react-icons/cg'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as IoIcons from 'react-icons/io'
import * as GiIcons from 'react-icons/gi'

export const SidebarData = [
    {
        title: 'Components',
        // path: '/components',
        icon: <CgIcons.CgComponents />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        
        subNav: [
            {
                title: "A",
                path: '/components/a',
                icon: <RiIcons.RiRadioButtonLine />
            },
            {
                title: "B",
                path: '/components/b',
                icon: <IoIcons.IoMdCard />
            },
            {
                title: "C",
                path: '/components/c',
                icon: <FaIcons.FaSpinner />
            },
            {
                title: "D",
                path: '/components/d',
                icon: <FaIcons.FaWpforms />
            }
        ]
    },

    {
        title: 'Cart',
        path: '/cart',
        icon: <AiIcons.AiOutlineCode />,
    },

    {
        title: 'Chat',
        path: '/chat',
        icon: <GiIcons.GiSaveArrow />,
    }
];