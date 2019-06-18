import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto:300i,400,500|Work+Sans:700,800,900&display=swap');

    :root {
        --highlight: #F9D52F;
        --black: #231F20;
        --white: #fff;
        --gray: #BDBDBD;
    };

    html {
        font-size: 16px;
    };

    body {
        background-color: var(--white);
        color: var(--black);
        display: flex;
        flex-direction: column;

    };

    header {
        /* header styling here */
    };

    main {
        /* main styling here */
    };

    footer {
        /* footer styling here */
    };

    h1 {
        font-family: 'Work Sans', sans-serif;
        font-weight: 800;
        font-size: 3rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        display: inline;
    };

    h2 {
        font-family: 'Work Sans', sans-serif;
        font-weight: 700;
        font-size: 3em;
        letter-spacing: 0.1rem;
    };

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        line-height: 1.1rem;
    };

    h4 {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        letter-spacing: 0.1rem;
        line-height: 1.1rem;
    }; 

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-style: italic;
        letter-spacing: 0.1rem;
        line-height: 1.1rem;
    };

    a {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        letter-spacing: 0.1rem;
        line-height: 1.1em;
        text-decoration: underline;
    };

    label {
        color: var(--black);
        font-family: 'Work Sans', sans-serif;
        font-weight: 900;
        letter-spacing: 0.1rem;
    }
`;
