var headerData = {
    'headerData1': {
        'logo': {
            'src': '/images/logo.png'
        },
        'input': {
            'placeholder': 'Seach for components or whatever'
        },
        'navItems': [{
            'url': '/',
            'item': 'UI base',
            'class': 'divider'
        }, {

            'url': '#',
            'item': 'UI components',
            'class': 'nav--active'
        }]
    },
    'headerData2': {
        'styleguide': true,
        'logo': {
            'src': '/images/logo.png'
        },
        'input': {
            'placeholder': 'Search bar..'
        },
        'dropdown': [{
            'icon': 'icon-naked-settings',
            // 'dropdownItem': 'Settings',
            'dropdownOptions': [{
                'option': 'Profile',
                'href': '#'
            }, {
                'option': 'Company',
                'href': '#',
                'class': 'divider'
            }, {
                'option': 'Log out',
                'href': '#'
            }]
        }, 
        {
            'icon': 'icon-naked-bell',
            'badge': true,
            // 'dropdownItem': 'Notifs',
            'dropdownOptions': [{
                'option': 'You rock',
                'href': '#',
                'class': 'divider'
            }, {
                'option': 'Freddie invited you to lunch party',
                'href': '#',
                'class': 'divider'
            }, {
                'option': 'Hans commented on your post-it',
                'href': '#',
                'class': 'divider'
            }]
        }]
    }
}
