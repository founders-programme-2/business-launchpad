import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto:300i,400,500|Work+Sans:700,800&display=swap');

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
        background-color: #000;
        color: var(--black);
        display: flex;
        flex-direction: column;
        margin: 0.5em;
        overflow: hidden;



    };

    header {
        /* header styling here */
        background-color:var(--highlight);
        display: flex;
        flex-direction:column;
        height:5rem;

    };

    main {
        /* main styling here */
        background-color: pink;
        max-width: 500px;
        margin: 0 auto;
        min-height: 700px;
    };

    footer {
        /* footer styling here */
    };

    h1 {
        font-family: 'Work Sans', sans-serif;
        font-weight: 800;
        font-size: 3em;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        display: inline;
    };

    h2 {
        font-family: 'Work Sans', sans-serif;
        font-weight: 700;
        font-size: 3em;
        letter-spacing: 0.1em;
    };

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        line-height: 1.1em;
    };

    h4 {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        letter-spacing: 0.1em;
        line-height: 1.1em;
    };

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-style: italic;
        letter-spacing: 0.1em;
        line-height: 1.1em;
    };

    a {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        letter-spacing: 0.1em;
        line-height: 1.1em;
        text-decoration: underline;
    };
`;
