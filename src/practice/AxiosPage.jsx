import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import Table from '../components/Table';


const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function AxiosPage() {
    const [post, setPost] = useState(null);
    // const [inputValue, setInputValue] = useState();
    const [change, setChange] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        axios.get(`${baseURL}`).then((response) => {
            setPost(response.data);
            console.log("response",response)
        }).catch(error => {
            setError(error);
        });
    },[change]);

    axios.patch(`${baseURL}`, {
        id : 3,
        title : "hello world",
        body : "this is an patch method example"
    })
        .then(response => console.log(response.data))
        .catch(err => console.error("err",err));

    console.log("post?.[1]",post?.[1]);

    const handleFilter = (value,e) => {
        console.log("value", value)
        console.log("change", change)
        if(value === ""){
            setChange(!change);
        } 
        else{
            e.preventDefault();  
            const filteredData = post?.filter(data =>{ 
                console.log("data", data);
                return data.id==parseInt(value)});
            setPost(filteredData);
            console.log("filteredData", filteredData);
        }
    }
    // console.log(data);

    return (
        <div >
            <input onChange={(e) => handleFilter(e.target.value,e)} className='border border-slate-950 mx-5 my-4 p-2 rounded-md text-black' placeholder='search id' type="text" />
            <button > Search </button>
            <div className='flex flex-wrap justify-evenly'>
                <Table tableData={post} />
                {
                    post?.map((postdata)=>{
                        return(
                                <Card key={postdata.id}
                                    id = {postdata.id}
                                    title = {postdata.title}
                                    body = {postdata.body}
                                />
                        );
                    })
                }
            </div>
        </div>
        
    );
}
