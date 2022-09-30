import styled from 'styled-components'

/*HEADER*/
export const Navbar = styled.div`
margin-top:100px;
background-color: #fff;
width: 100%;
padding: 10px 0;
display: flex;
justify-content: center;
color: black;
height: 40px;

a {
    text-decoration: none;
    padding-right: 50px;
}

div {
    font-size: 20px;
    color: white;
    background-color: gray;
    padding: 10px;
    border: none;
    border-radius: 10px;
    font-weight: bold;
}

div:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
}

@media (max-width: 768px) {
    margin-top: 50px;

    div {
        font-size: 12px;
    }

    a {
        padding-right: 10px;
    }

  }
`
/*HEADER*/

/*CREATE TASK*/
export const CreateContainer = styled.div`
    background-color: gray;
    padding: 40px 0;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px auto;
    border-radius: 20px;
    text-align: center;

    h2 {
        color: white;
        font-size: 40px
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        background-color: white;
        padding: 30px;
        border-radius: 20px;
    }

    input, textarea {
        padding: 5px;
        border: none;
        background-color: #C19B93;
        margin-bottom: 10px;
        border-radius: 5px;
        outline: none;
        width: 200px;
    }

    input::placeholder, textarea::placeholder {
        color: white;
        font-size: 15px;
    }

    button {
        padding: 10px;
        background-color: #B19690 ;
        border: none;
        border-radius: 10px;
        font-weight: bold;
        color: #F4DBD6;
        font-size: 20px;
    }

    button:hover {
        background-color: #CE968B ;
        color: #FAF0EE;
    }

    @media (max-width: 768px) {
      max-width: 400px;

      form {
        max-width: 300px;
      }

      textarea {
        height: 100px;
      }
  }

`
/*CREATE TASK*/

/*LISTAR TASK*/

export const Task = styled.div`
    background-color: #fff !important;
    color: gray;
    p:first-child {
        color: gray;
        font-size: 18px;
        margin: 0;
    }

    p:nth-child(2) {
        color: black;
        margin: 0;
    }

`

export const ListarContainer = styled.div`
    padding: 20px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    section {
        background-color: gray;
        display: flex;
        flex-direction: column;
        width: 70%;
        padding: 10px 20px;
        justify-content: space-around;
        border-radius: 10px;
        margin-bottom: 30px;

    }

    div {
        background-color: #B88A81;
        display: flex;
        flex-direction: column;
        padding: 10px 10px;
        border-radius: 10px;
        color: #F4DBD6; 
        margin-bottom: 20px;
    }

    button {
        padding: 10px;
        background-color: #B19690 ;
        border: none;
        width: 100%;
        border-radius: 10px;
        font-weight: bold;
        color: #F4DBD6;
        font-size: 20px;
        margin-bottom: 20px;
    }

    button:hover {
        background-color: #CE968B ;
        color: #FAF0EE;
    }

    td {
        background: white;
        width: 30px;
        padding: 5px;
        color: black;
    }
`