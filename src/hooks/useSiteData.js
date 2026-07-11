import { useEffect, useState } from "react";
import { sanityClient } from "../lib/sanityClient";

const QUERY = `{
  "settings": *[_type == "siteSettings"][0]{
    ...,
    cvFile{asset->{url}},
    profileImage
  },
  "socials": *[_type == "socialLink"] | order(order asc),
  "skillGroups": *[_type == "skillGroup"] | order(order asc){
    ...,
    "skills": *[_type == "skill" && references(^._id)] | order(order asc)
  },
  "projects": *[_type == "project"] | order(order asc),
  "experience": *[_type == "experience"] | order(order asc),
  "education": *[_type == "education"] | order(order asc),
  "achievements": *[_type == "achievement"] | order(order asc)
}`;

export function useSiteData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(QUERY)
      .then(setData)
      .catch((err) => setError(err));
  }, []);

  return { data, loading: !data && !error, error };
}