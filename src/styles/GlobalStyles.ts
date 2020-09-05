import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;    }

    html, body, #root{
        height: 100% !important;
        margin: 0;
        padding: 0;
    }

    body.swal2-height-auto{
        height: 100% !important;
    }

    *, button, input {
        font-family: 'Kumbh Sans', sans-serif;
        border: 0;
        outline: 0;
    }

    swal-container-class{
        background-color: #000;
    }

    swal-confirm-button-class, swal2-confirm, swal2-styled{
        background-color: #000 !important;
        width: 300px;
    }
    
`;