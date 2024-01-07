// import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { DetailContainer } from './style'
import useQuery from '../../hooks/useQuery';
import { useEffect } from 'react';

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
    <div>useQuery</div>
  )
  return (
    <DetailContainer></DetailContainer>
  )
}
