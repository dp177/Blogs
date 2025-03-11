import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"
export const AppContext=createContext();

export default function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);

    async function fetchBlogPosts(page=1,tag=null,category=null) {
      setLoading(true);
      let url=`${baseUrl}`;
      if(page){
        url+=`?page=${page}` 
      }
      if(tag){
        url+=`?page=${page}&tag=${tag}`
      }
      if(category){
        url+=`?page=${page}&category=${category}`;
      }
      try{
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
        setPage(data.page);
        setPosts(data.posts);
        setTotalPages(data.totalPages);
      }
      catch(error)
      {
        console.log("error");
        setPage(1);
        setPosts([]);
        setTotalPages(null);
      }
      setLoading(false);
    }
    
    function handlePageChange(page){
      setPage(page);
      fetchBlogPosts(page);
    }
    const value = {
      posts,
      setPosts,
      loading,
      setLoading,
      page,
      setPage,
      totalPages,
      setTotalPages,
      handlePageChange,
      fetchBlogPosts

    };

    return <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
}