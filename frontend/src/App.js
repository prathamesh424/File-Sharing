import logo from './logo.svg';
import './App.css';
import {Box, Button, styled } from '@mui/material' 
import { useEffect, useRef, useState } from 'react';
import { uploadFile } from './services/api';


const Container = styled(Box)`
    juistify-content:center; 
    display : flex;
    flex-direction : column ;
    border : 3px solid white ;
    margin: 10vh 15% 3vh 15%;
    padding:20px;
    border-radius:15px ;
    background-color:black;
    text-align : center ;
    contain: content;

    

    & h1 {
      color:white;
      font-family:Arial;
      padding  : 5vw ;
    }

    & h3 {
      color:white;
      font-family:Arial;
      font-size :30px;

    }


`
const StyleButton = styled(Button)`
    font-family:Arial;
    font-weight: bold;
    width:250px ;
    text-align : center;
    margin-left:auto;
    margin-right:auto;
    border : 6px bold  ;
    
`


function App() {

  const fileInput = useRef();
  const clickTogetInput =()=>{
      fileInput.current.click();
  } 


  const [file , setfile]= useState("");
  const SelectImage = (e) =>{
      setfile(e.target.files[0]);
  }


const [result , setResult] = useState('');


  useEffect (() => {
      const getDetails = async () =>{
        if (file){
            const data = new FormData();
            data.append("name" , file.name);
            data.append("file" , file);
            let response  = await uploadFile(data) ;
            setResult(response.path);
        }
      }

      getDetails();

    } , [file]
  )


  return (
      <Container>

        <Box >
            <h1>File Share App </h1>
        </Box>

        <h3>Upload the File and get the Download Link </h3>

        <a   href={result} target='_blank'  style={{fontSize : '20px'  , padding: "10px" , marginLeft : 'auto' , marginRight: 'auto'}}>{result}</a>

        <StyleButton color="error" variant='outlined' onClick={() => clickTogetInput()}>Select File</StyleButton>
        <input 
        style={{display:'none'}}type='file'  ref={fileInput}


        onChange={(e) => SelectImage(e)}
        
        />


      </Container>
  );
}

export default App;
