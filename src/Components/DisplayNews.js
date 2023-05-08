import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "./Loading";
const DisplayNews = () => {
  const { hits: hitsList } = useSelector((state) => {
    return state.hnSearchData.list;
  });
  const { isLoading } = useSelector((state) => {
    return state.hnSearchData;
  });
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-10">
          {hitsList?.map((hit, index) => {
            const { title, objectID, author, url, points, num_comments } = hit;
            return (
              <div key={objectID} className="flex flex-col">
                <div className="flex flex-row items-center gap-10">
                  <Link
                    className="font-bold text-lg"
                    to={`/details/${objectID}`}
                  >
                    {title}
                  </Link>
                  <a className="opacity-60" target="_blank" href={url} rel="noreferrer">
                    {url}
                  </a>
                </div>
                <div className="flex flex-row">
                  <p>{points} points</p> |<p>{author}</p> |
                  <p>{num_comments} comments</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default DisplayNews;
