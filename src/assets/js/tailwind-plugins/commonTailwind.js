const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    '.btn': {
      display: 'inline-block',
      fontWeight: '400',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      userSelect: 'none',
      border: '1px solid transparent',
      padding: '0.375rem 0.75rem',
      fontSize: '1rem',
      lineHeight: '1.5',
      borderRadius: '0.25rem',
      transition:
        'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    },

    // Card components
    '.card': {
      display: 'flex',
      flexDirection: 'column',
      minWidth: '0',
      wordWrap: 'break-word',
      backgroundColor: '#fff',
      backgroundClip: 'border-box',
      border: '1px solid rgba(0,0,0,.125)',
      borderRadius: '0.25rem',
      '&[style*="width: 18rem"]': {
        width: '18rem',
      },
    },

    '.card-body': {
      flex: '1 1 auto',
      padding: '1.25rem',
    },

    '.card-title': {
      marginBottom: '0.75rem',
      fontSize: '1.25rem',
      fontWeight: '500',
      lineHeight: '1.2',
    },

    '.card-subtitle': {
      marginTop: '-0.375rem',
      marginBottom: '0',
      '&.text-muted': {
        color: '#6c757d',
      },
    },

    '.card-text': {
      marginTop: '0',
      marginBottom: '1rem',
    },

    '.card-link': {
      color: '#007bff',
      textDecoration: 'none',
      '&:hover': {
        color: '#0056b3',
        textDecoration: 'underline',
      },
      '& + .card-link': {
        marginLeft: '1.25rem',
      },
    },

    '.card-header': {
      padding: '0.75rem 1.25rem',
      marginBottom: '0',
      backgroundColor: 'rgba(0,0,0,.03)',
      borderBottom: '1px solid rgba(0,0,0,.125)',
      '&:first-child': {
        borderRadius: 'calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0',
      },
    },
    '.badge': {
      display: ' inline-block',
      padding: '.25em .4em',
      fontSize: '75%',
      fontWeight: '700',
      lineHeight: 1,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'baseline',
      borderRadius: '.25rem',
    },
    '[data-dropdown]': {
      position: 'relative',
      display: 'inline-block',
    },
    '.dropdown-item:hover': {
      color: '#62cbd7',
      background: 'rgba(98, 203, 215, 0.1411764706)',
    },

    '.dropdown-menu': {
      position: 'absolute',
      right: '0',
      borderRadius: '10px',
      zIndex: '1000',
      display: 'none',
      minWidth: '10rem',
      padding: '10px',
      margin: '0.125rem 0 0',
      backgroundColor: '#fff',
      backgroundClip: 'padding-box',
      border: '1px solid rgba(0,0,0,.15)',
      borderRadius: '0.25rem',
      boxShadow: '0 0.5rem 1rem rgba(0,0,0,.175)',
      '&[data-show="true"]': {
        display: 'block',
      },
    },

    '.dropdown-item': {
      display: 'block',
      width: '100%',
      padding: '0.25rem 1rem',
      clear: 'both',
      fontWeight: '400',
      marginBottom: '5px',
      color: '#212529',
      textAlign: 'inherit',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      backgroundColor: 'transparent',
      border: '0',
      cursor: 'pointer',
      '&:hover': {
        color: '#1e2125',
        backgroundColor: '#e9ecef',
      },
    },
  });
});
