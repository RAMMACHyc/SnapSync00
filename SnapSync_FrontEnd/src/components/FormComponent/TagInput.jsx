import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  const handleInputChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleTagAdd = () => {
    if (tagInput.trim() !== '') {
      setTags((prevTags) => [...prevTags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleTagDelete = (tagToDelete) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Box>
      <TextField
        label="Tags"
        type="text"
        name="tags"
        value={tagInput}
        fullWidth
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleTagAdd();
          }
        }}
        InputProps={{
          startAdornment: (
        <Box mt={1}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onDelete={() => handleTagDelete(tag)}
            style={{ margin: '4px' }}
          />
        ))}
      </Box>
          ),
        }}
      />
      
    </Box>
  );
};

export default TagInput;
