import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, CircularProgress } from '@mui/material';

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/blogs.json')
      .then(response => {
        const post = response.data.find(b => b.id.toString() === id);
        setBlog(post);
        setLoading(false);
      })
      .catch(error => {
        console.log(error)
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!blog) {
    return <Typography variant="h5" component="h2">Error loading blogs</Typography>;
  }

  return (
    <Container>
      <img src={blog.imageUrl} alt={blog.title} style={{ width: '20%', height: '20%' }} />
      <Typography variant="h4" component="h1" gutterBottom>
        {blog.title}
      </Typography>
      <Typography variant="body1" component="p" paragraph>
        {blog.content}
      </Typography>
    </Container>
  );
}

export default Blog;
