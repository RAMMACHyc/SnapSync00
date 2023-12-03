import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch } from 'react-redux';
import { deletePost, likePost, selectPost } from '../../redux/actions/postActions';
import moment from 'moment';
import ButtonPopup from '../../components/FormComponent/ButtonPopup';


const PostComponent = ({ post }) => {

  const dispatch = useDispatch();

  const selectedPostHandler = () => {
    dispatch(selectPost(post));
    return { selectedPostHandler };
  }

  const likePostHandler = () => {
    dispatch(likePost(post._id));
  };

  const deletePostHandler = () => {
    dispatch(deletePost(post._id));
  };
  const Auth = JSON.parse(localStorage.getItem('profile'));




  const { title, description, auteur, likes, file, createdAt } = post;
  const formattedDate = moment(createdAt).fromNow();

  return (

    <Card key={post._id} sx={{ maxWidth: 345, minHeight: 400, position: 'relative' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="190"
        src={file}
      />

      <div className='back' style={{ position: 'absolute', top: '23%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '49%' }} >
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: "20px" }}>
          <div>
            <h4>{auteur}</h4>
            <p>{formattedDate}</p>
          </div>

          <ButtonPopup selectedPostHandler={selectedPostHandler} />



        </div>
      </div>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="body2" color="text.secondary">
            #{title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {auteur}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          disabled={!Auth}
          onClick={likePostHandler}
        >
          <div style={{ display: 'flex', gap: '10px' }}>
            <ThumbUpOutlinedIcon />
            like {likes}
          </div>
        </Button>

        {Auth && (
          <Button onClick={deletePostHandler}>
            <DeleteOutlineOutlinedIcon />
          </Button>
        )}


      </CardActions>

    </Card>
  );
};

export default PostComponent;
