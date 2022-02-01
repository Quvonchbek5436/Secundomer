import styled from 'styled-components'
import colors from "./Color";

const BtnStyle = styled.div`
    button{
        color: ${colors.textColor};
        border-color: ${colors.textColor};
        border-radius:30px;
        padding:10px 50px;
    }
    
    div Button:nth-child(1){
            border: 1px solid ${colors.textColor};
        }
    
`

export default BtnStyle