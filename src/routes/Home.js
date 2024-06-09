import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, CircularProgress } from '@mui/material';
import BlogCard from '../components/BlogCard';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/blogs.json')
      .then(response => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the blog data!", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Blog Page
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={4}>
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <BlogCard
                id={blog.id}
                title={blog.title}
                excerpt={blog.excerpt}
                imageUrl={blog.imageUrl}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Blog;
