import styled from "styled-components";

export const Background = styled.div`
    background-color: #413f42;
    color: white;
    padding-top: 60px;
`;

export const FormDisplay = styled.div`
    font-family: "Kanit", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`;

export const NameTitle = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
`;

export const FullName = styled.h2`
    margin: 0.5rem;
    margin-right: 1rem;
`;

export const EditButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: white;
    height: 2.5rem;
    margin: 0;
    padding: 0;
`;

export const EditIcon = styled.i`
    font-size: 2rem;
`;

export const AccountName = styled.p`
    margin: 0;
    margin-top: 0.5rem;
`;

export const InputContents = styled.input`
    margin-right: 0.5rem;
    width: 10rem;
    height: 1.5rem;
    font-size: 1rem;
`;

export const SubmitButton = styled.button`
    height: 1.5rem;
    font-size: 1rem;
`;
