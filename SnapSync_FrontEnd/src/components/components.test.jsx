import { describe, it, expect } from 'vitest';
import { render, screen ,fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import PostComponent from '../pages/PostPage/PostComponent';
import store from '../redux/store';


describe('PostComponent', () => {
  const post = {
    _id: '655e04433c009094d2ab4fa0',
    title: 'Dolor incidunt aliq',
    description: 'Ullamco ullamco id',
    auteur: 'Irure ex tempor offi',
    "tags": [
      "Voluptas inventore l"
    ],
    likes: 37,
    createdAt: "2023-11-22T09:49:11.377Z",
  };

  it('renders post information correctly', () => {
    render(
      <Provider store={store}>
        <PostComponent post={post} />
      </Provider>
    );
   const div = screen.getByTestId('nabil');
    expect(div).toBeInTheDocument();
    // expect(screen.getByText('Dolor incidunt aliq')).toBeInTheDocument();
    // expect(screen.getByText('Ullamco ullamco id')).toBeInTheDocument();
    // expect(screen.getByText('like 0')).toBeInTheDocument();
  });

  it('calls likePostHandler when like button is clicked', () => {
    render(
      <Provider store={store}>
        <PostComponent post={post} />
      </Provider>
    );

    const likeButton = screen.getByText('like 0');
    fireEvent.click(likeButton);

    // You might need to wait for the state to update (e.g., use waitFor)
    // Check if the likePost action is dispatched
    // Expectations related to the updated state can also be added
  });

  it('calls deletePostHandler when delete button is clicked', () => {
    render(
      <Provider store={store}>
        <PostComponent post={post} />
      </Provider>
    );

    const deleteButton = screen.getByLabelText('Delete');
    fireEvent.click(deleteButton);

  });
});