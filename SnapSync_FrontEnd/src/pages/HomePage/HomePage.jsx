import { Grid, Grow } from '@mui/material';
import FormComponent from '../../components/FormComponent/FormComponent';
import PostsComponent from '../PostPage/PostsComponent';
import PaginationComponent from '../../components/Pagination/PaginationComponent';



export default function HomePage() {
    
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
                     <PaginationComponent />
                </Grid>
            </Grid>

        </Grow>
    )
}
