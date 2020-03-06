import styled from 'styled-components';

const Table = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr 2fr 2fr 2fr 2fr;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    align-items: center;
    padding: 20px;
    margin: 10px;
    border-radius: 4px;
    background-color: #fffafa;
    ${({ sorter }) => `#${sorter} {
        border-color: #ececec;
    }`};
    p {
        margin: 0;
        font-size: 18px;
        font-weight: bold;
        border-bottom: 1px solid #000;
        cursor: pointer;
    }
    span {
        font-size: 14px;
    }
    @media only screen and (max-width: 630px) {
        padding: 10px;
        margin: 5px;
        p {
            font-size: 16px;
        }
        overflow-x: scroll;
    }
`;
const Status = styled.span`
    color: ${({ status }) => (status === 'Active' ? 'green' : 'red')};
`;

export { Table, Status };
