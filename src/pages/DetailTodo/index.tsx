// import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { DetailContainer } from './style'
import useQuery from '../../hooks/useQuery';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';

export default function DetailTodo() {
    const location = useLocation()
    const params = useParams();
    const query = useQuery()
    useEffect(() => {
        console.log(params);
        console.log(location);
        console.log(query);
    },[])
  return (
    <DetailContainer>
      <Navbar></Navbar>
      
    </DetailContainer>
  )
}
