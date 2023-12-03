import { useEffect, useState } from 'react';
import { showToastError } from '../../utils/toast';
import { convertImageToBase64, emptyFileInput } from '../../utils/fileBase64';
import { TextField, Button, Box, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, selectPost, updatePost } from '../../redux/actions/postActions';

const FormComponent = () => {
  
  const Auth = JSON.parse(localStorage.getItem('profile'));
  console.log(Auth)
  const dispatch = useDispatch();
  const selectedPost = useSelector((state) => state.posts.selectedPost);

  const addPostHandler = () => {
    dispatch(addPost(formData));
  };

  const updateSelectedPostHandler = () => {
    dispatch(updatePost(formData));
  }
  const onClearHandler = () => {
    dispatch(selectPost(null));
  }
  const emptyFormData = {
    title: '',
    description: '',
    auteur: '',
    tags: '',
    file: ''
  }

  const [formData, setFormData] = useState(emptyFormData);

  const { title, description, auteur, tags, file } = formData;

  const handleInputChange = async (e) => {
    const { name, value, files } = e.target;


    if (name === 'file' && files && files.length > 0) {
      const selectedFile = files[0];
      try {
        const base64 = await convertImageToBase64(selectedFile);
        setFormData({
          ...formData,
          [name]: base64,
        });
      } catch (error) {
        console.error('Error converting image to base64:', error);
        showToastError('Error converting image. Please try again.');
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!file) {
        showToastError('Error: Please select a file!');
        return;
      }

      selectedPost ? updateSelectedPostHandler() : addPostHandler();
      setFormData({
        title: '',
        description: '',
        auteur: '',
        tags: '',
        file: ''
      });

      emptyFileInput('image');
      onClearHandler
    } catch (error) {
      console.error('Error submitting form:', error);
      showToastError('Error submitting form. Please try again.');
    }
  };
  


  useEffect(() => { setFormData(selectedPost ? selectedPost : emptyFormData) }, [selectedPost])

  if (!Auth) {
    return (
      <>
        <Paper >

          <Typography style={{ marginTop: "12px" }} variant="h6" align="center">
            Please Sign In to create your own posts and like other's posts.
          </Typography>

          {/* <img style={{ width: "50%", height: "200px" }} src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150696455.jpg?size=626&ext=jpg&ga=GA1.1.655197956.1701302003&semt=ais" alt="icon" /> */}

        </Paper>

      
      </>


    );
  }


  return (
    <form
      className="add-form"
      onSubmit={handleSubmit}
      style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        style={{ textAlign: 'center', marginBottom: '5px' }}
      >
        {selectedPost ? 'Editing a Memory' : 'Creating a Memory'}
        {/* Creating a Memory */}
      </Typography>
      <Box>
        <TextField required
          label="Title"
          type="text"
          name="title"
          value={title}
          fullWidth
          onChange={handleInputChange}
          variant="outlined"
          margin="normal"
        />
      </Box>
      <Box>
        <TextField required
          label="Auteur"
          type="text"
          name="auteur"
          value={auteur}
          fullWidth
          onChange={handleInputChange}
          variant="outlined"
          margin="normal"
        />
      </Box>
      <Box>
        <TextField required
          label="Tags"
          type="text"
          name="tags"
          value={tags}
          fullWidth
          onChange={handleInputChange}
          variant="outlined"
          margin="normal"
        />
      </Box>
      <Box>
        <TextField required
          label="Description"
          name="description"
          value={description}
          onChange={handleInputChange}
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          margin="normal"
        />
      </Box>
      <Box>
        <input required={selectedPost ? false : true}
          id="image"
          type="file"
          name="file"
          accept="image/*"
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }}
        />
      </Box>

      {/* <ToastContainer /> */}
      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginBottom: '10px' }}
      >
        Submit
      </Button>
      <Button fullWidth type="reset" variant="contained" color="error" onClick={onClearHandler}>
        Clear
      </Button>

    </form>

  );
};

export default FormComponent;
