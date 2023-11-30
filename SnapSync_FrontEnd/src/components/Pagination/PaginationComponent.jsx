import { Stack, Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';

const PaginationComponent = ({ currentPage, numberOfPages }) => {
  return (
    <Stack style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 5px 0px rgba(0, 0, 0, 0.1)', marginTop: '12px' }}>
      <Pagination
        style={{ display: 'flex', justifyContent: 'center' }}
        count={numberOfPages}
        page={currentPage}
        renderItem={(item) => <PaginationItem {...item} component={Link} to={`/posts?page=1`} />}
        size="large"
      />
    </Stack>
  );
};

export default PaginationComponent;
