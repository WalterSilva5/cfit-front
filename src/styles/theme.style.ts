import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

const anyStyle = {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: "border-box",
    fontFamily: "Roboto, sans-serif",
}


const bodyStyle = {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    backgroundColor: "red",
}

const submitBtn = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
        backgroundColor: "blue",
    },
}

export const StyledBtn = styled.button`${submitBtn.toString().replace(/,/g, ";")}`


export const theme = createGlobalStyle`
    * {
        ${anyStyle.toString().replace(/,/g, ";")}
    }
    body {
        ${bodyStyle.toString().replace(/,/g, ";")}
    }
    #root {
        margin: 0 auto;
    }
    
    .submitBtn {
        ${submitBtn.toString().replace(/,/g, ";")}
    }

`

