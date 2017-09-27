import styled from 'styled-components';


export const NavBarStyle = styled.div`
  height: 70px;
  background-color: #3d3d3d;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  a {
    padding: 25px;
    
    color: white;
    text-decoration: none;
  }
`;

export const NavBarStyle2 = styled.div`
  height: 70px;
  background-color: #3d3d3d;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 25px;
  a {
    padding: 25px;
    
    color: white;
    text-decoration: none;
  }
`;

export const HomeStyle = styled.div`
    background: url(../styles/images/high_one.png); 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-size: 2112px 1206px;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`;

export const TextStyle = styled.p`
        color: #3d3d3d;
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        `;


export const LinkStyle = styled.a`
        color: white;

  `;

export const Button = styled.button`
        padding: 1px 40px 10px 40px;
        border-radius: 4px;
        font-size: 45px;
        background-color: #23b6c4;
        color: #f4f4f4;
        border: none;
        text-align: center;
  `;

export const Button2 = styled.button`
        padding: 10px;
        border-radius: 4px;
        background-color: #f4f4f4;
        
        color: #23b6c4;
        border: none;
        text-align: center;
  `;

export const FlexStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const UserListStyle = styled.div`
    text-align: left;
    margin: 10px auto;
    padding: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    a {
        color: #23b6c4;
        font-size: 20px;
        text-decoration: none;
    }
`;

export const UserStyle = styled.div`
    text-align: left;
    margin: 30px auto;
    padding: 0px 30px;
    background-color: #23b6c4;    
    a {
        color: #f4f4f4;
        font-size: 20px;
        text-decoration: none;
    }
`;

export const ItineraryListStyle = styled.div`
    text-align: left;
    max-width: 35%;
    min-width: 20%;
    margin-left: 75px;
    padding-left: 50px;
    padding-right: 100px;
    padding-top: 10px;
    padding-bottom: 50px;
    font-family: 'Lato', sans-serif;
    line-height: 2;
    background-color: #23b6c4;
    border-radius: 5px;
    p {
        font-size: 18px;
    }
    a {
        color: white;
        font-size: 20px;
        text-decoration: none;
    }
`;

export const EventListStyle = styled.div`
    text-align: left;
    max-width: 35%;
    min-width: 20%;

    margin-left: 75px;
    padding-left: 50px;
    padding-right: 100px;
    padding-top: 10px;
    font-family: 'Lato', sans-serif;
    line-height: 2;
    background-color: #23b6c4;
    border-radius: 5px;
    p {
        font-size: 18px;
    }
    a {
        color: white;
        text-decoration: none;
    }
    
`;

export const FooterStyle = styled.div`
  height: 70px;
  background-color: #3d3d3d;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

`;
