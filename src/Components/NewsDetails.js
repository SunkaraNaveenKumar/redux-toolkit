import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addSearchText, getNewsDetails } from "../Store/Slices/hnSearchSlice";
import Loading from "./Loading";
import parse from "html-react-parser";
const NewsDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { newsDetails } = useSelector((state) => {
    return state.hnSearchData;
  });
  const { isLoading } = useSelector((state) => {
    return state.hnSearchData;
  });
  const { author, title, type, points, children } = newsDetails;
  useEffect(() => {
    dispatch(getNewsDetails(id));
    dispatch(addSearchText(""));
  }, [id]);
  console.log("newsDetails", newsDetails);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col">
          <h2 className="font-bold text-lg">{title}</h2>
          <p>points: {points}</p>
          <p>type: {type}</p>
          <p>Author: {author}</p>
          <p className="text-red-500 font-bold text-lg">
            Authors and there comments
          </p>
          <div className="flex flex-col gap-y-10">
            {children?.map((child, i) => {
              const { url, title, text, type, points, author } = child;
              return (
                <>
                  <div className="flex flex-col ">
                    <div className="flex flex-row items-center gap-10">
                      {title ? (
                        <p className="font-bold text-md">{title}</p>
                      ) : (
                        <p className="font-bold text-md">No title</p>
                      )}
                      {url ? (
                        <p className="text-md opacity-60">{url}</p>
                      ) : (
                        <p className="text-md opacity-60">No Url</p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      {author ? (
                        <p>Author:{author}</p>
                      ) : (
                        <p>Author: No Author</p>
                      )}
                      {points ? (
                        <p>Points: {points} points</p>
                      ) : (
                        <p>Points: No Points</p>
                      )}
                      {type ? <p>Type: {type}</p> : <p>Type: No type</p>}
                      {text ? (
                        <p>
                          Text :<br /> {parse(text)}
                        </p>
                      ) : (
                        <p>Text: No Text</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full border border-black"></div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default NewsDetails;
