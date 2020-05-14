const theme = {
    colors: {
        font: '#000000',
        background: '#FFFFFF',
        primary: '#F07178',
        primaryDarker: '#C35C61',
        primaryOpaque: 'rgba(240,113,120, 0.8)',
        secondary: '#3F3D56',
        muted: '#666666',
        accent: '#e7e7e7',
    },
    font: {
        family: {
            main: "'Poppins', sans-serif",
        },
        size: {
            base: '16px',
            xs: '.7rem',
            s: '.8rem',
            m: '1rem',
            l: '1.4rem',
            xl: '2.2rem',
            xxl: '3rem',
            xxxl: '4rem',
        },
    },
    mediaQuery: {
        tablet: `min-width: 768px`,
        desktop: `min-width: 1024px`,
        large: `min-width: 1440px`,
    },
};

export default theme;
