import React, { useEffect } from 'react';
import { Divider, Typography } from '@mui/material';
import { ReviewCard } from './cards/ReviewCard';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useAsync } from '../utilities/hooks/useAsync';

export const ReviewSection = ({ movieId, user }) => {
  // TODO: Make sure to do a status based component approach (Already have seen it where they don't load)

  const { data, run, isLoading, isIdle, isSuccess, error } = useAsync();

  useEffect(() => {
    const movieReviewQuery = query(collection(db, 'movie-reviews'), where('movieId', '==', movieId));
    run(getDocs(movieReviewQuery));
  }, [run, movieId]);

  const currentUserIsAuthor = (authorUid) => authorUid === user.uid;
  const reviews = isSuccess
    ? data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        // Puts current users reviews at the top
        .sort((a, b) => (currentUserIsAuthor(a.authorUid) ? -1 : 1))
    : [];

  return (
    <>
      <Divider sx={{ paddingBottom: 2 }}>
        <Typography variant='h5'>Audience Reviews</Typography>
      </Divider>
      {isSuccess ? (
        reviews.length ? (
          reviews.map((review) => (
            <ReviewCard key={review.id} review={review} currentUserIsAuthor={currentUserIsAuthor(review.authorUid)} />
          ))
        ) : (
          // TODO: Once review posting is implemented, add a link here for the user to post one
          <Typography variant='subtitle1' sx={{ textAlign: 'center', fontSize: '1em' }}>
            This movie has no reviews, you should write one!
          </Typography>
        )
      ) : (
        <></>
      )}
    </>
  );
};
