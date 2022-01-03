import styled from "styled-components";

export const Wrapper = styled.div`
   display:flex;
   justify-content:space-between;
   border-bottm:1px slid lightblue;
   padding-bottom:20px;

   div{
      flex:1;

   }

   .information, .buttons{
      display:flex;
      justify-content:space-between;

   }

   img{
      max-width:80px;
      object-fit:cover;
      margin-left:40px; 
   }
`;