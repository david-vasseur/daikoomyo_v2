"use server";

import type IComment from "@/types/comment";

interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
}


export const getLastComments = async (): Promise<IComment[]> => {
  try {
    const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GOOGLE_BUSINESS_ID}&fields=reviews&key=${process.env.GOOGLE_API}`);

    if (!res.ok) {
      console.error("Google API fetch failed:", res.statusText);
      return [];
    }

    const data = await res.json();

    if (data.status !== "OK" || !data.result?.reviews) {
      console.warn("Google API responded with an error:", data.status);
      return [];
    }

    const comments: IComment[] = data.result.reviews.map((review: GoogleReview) => ({
      id: review.author_url + review.time,
      name: review.author_name,
      message: review.text,
      rate: review.rating,
      date: new Date(review.time * 1000), 
      avatar: review.profile_photo_url,
      authorUrl: review.author_url,
    }));

    return comments;
  } catch (error) {
    console.error("Unexpected error while fetching reviews:", error);
    return [];
  }
};
