import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { apiService } from "../../services";
import { IPost } from "./interface";
import { useParams } from "react-router-dom";
import { DetailContainer } from "./style";

export default function Detail() {
  const [detail, setDetail] = useState<IPost>();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDetail, setEditedDetail] = useState<string>("");
  const { id } = useParams();

  useEffect(() => {
    getPostListDetail();
  }, [id]);

  const getPostListDetail = async () => {
    try {
      const response = await apiService.get(`posts/${id}`);
      if (response.status === 200) {
        setDetail(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };


  const handleEditClick = () => {
    setIsEditing(true);
    setEditedDetail(detail?.body || "");
  };

  const handleSaveClick = () => {
    // Save the edited detail to localStorage or your backend API
    // For simplicity, I'm using localStorage here
    localStorage.setItem(`post_${id}_body`, editedDetail);

    // Update the state with the edited detail
    setDetail((prevDetail) => ({
      ...prevDetail,
      body: editedDetail,
    }));

    setIsEditing(false);
  };
  
  const getDataFromLS = () => {
    const storedData = localStorage.getItem(`post_${id}_body`);
    if(storedData){
        setEditedDetail(storedData)
    }
  }

  return (
    <DetailContainer>
      {detail ? (
        <div>
          <h2>{detail.title}</h2>
          {isEditing ? (
            <TextField
              label="Edit Detail"
              variant="outlined"
              value={editedDetail}
              onChange={(e) => setEditedDetail(e.target.value)}
            />
          ) : (
            <p>{detail.body}</p>
          )}
        </div>
      ) : (
        <p>Oh noooooooo just wait!!!!!</p>
      )}

      {isEditing ? (
        <Button variant="contained" onClick={handleSaveClick}>
          Save
        </Button>
      ) : (
        <Button variant="contained" onClick={handleEditClick}>
          Edit
        </Button>
      )}
      <Button variant="contained">Get</Button>

    </DetailContainer>
  );
}
