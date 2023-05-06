import React from "react";
import { useSelector } from "react-redux";
import Loading from '../assets/loading.svg'
const DisplayNews = () => {
  const { hits: hitsList } = useSelector((state) => {
    return state.hnSearchData.list;
  });
  const {isLoading} = useSelector((state)=>{
    return state.hnSearchData
  })
  console.log(hitsList);
  return (
    <>
{isLoading ? (
    <div className="w-full h-screen flex justify-center items-center">
    <img src={Loading}></img>
    </div>
):(
    <div className="flex flex-col gap-10">
    {hitsList?.map((hit, index) => {
      const { title, objectId, author, url, points, num_comments } = hit;
      return (
        <div key={objectId} className="flex flex-col">
          <div className="flex flex-row items-center gap-10">
            <h2 className="font-bold text-lg">{title}</h2>
            <a className="opacity-60" target="_blank" href={url}>
              {url}
            </a>
          </div>
          <div className="flex flex-row">
              <p>{points} points</p> |
              <p>{author}</p> |
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
