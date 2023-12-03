import { Grid, Grow } from '@mui/material';
import FormComponent from '../../components/FormComponent/FormComponent';
import PostsComponent from '../PostPage/PostsComponent';
import PaginationComponent from '../../components/Pagination/PaginationComponent';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/actions/postActions';

export default function HomePage() { 
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const numberOfPages = useSelector((state) => state.posts.numberOfPages);
  
    useEffect(() => {
      dispatch(getPosts(currentPage));
    }, [currentPage, dispatch]);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
   
    };
  
    return (
        <Grow in>

            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} md={8}>
                    <div className='posts1' >
                        <PostsComponent />
                    </div>
                </Grid>
                <Grid item xs={12} md={3.5}>
                    <FormComponent />
                     <PaginationComponent currentPage={currentPage} numberOfPages={numberOfPages} onPageChange={handlePageChange} />
                </Grid>
            </Grid>

        </Grow>
    )
}
