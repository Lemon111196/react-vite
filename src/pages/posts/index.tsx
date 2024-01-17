import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { IPost } from "./interface";
import { apiService } from "../../services";
import { useNavigate } from "react-router-dom";


export default function Posts() {
  const [postList, setPostList] = useState<IPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPostList()
  }, [])

  const getPostList = async () => {
    try {
      const response = await apiService.get('/posts');
      console.log(response);
      if (response.status === 200) {
        setPostList(response.data)
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleClick = (id: number) => {
    console.log(id);
    navigate(`/post/${id}`)
  }
  return (
    <div>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Title</TableCell>
            <TableCell >Body</TableCell>
            <TableCell >Button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {postList.map((item, index) => (
            <TableRow
              key={item.id}>
              <TableCell >{index + 1}</TableCell>
              <TableCell >{item.title}</TableCell>
              <TableCell>{item.body}</TableCell>
              <TableCell><Button className="btn" onClick={() => handleClick(item.id)} variant="outlined">Click</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
