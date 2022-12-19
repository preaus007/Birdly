import React, { useState } from "react";
import { set } from "react-hook-form";
import Canvas from "../Canvas/Canvas";
import Upload from "../Upload/Upload";

const Classification = () => {
  const [src, setSrc] = useState('');
  const [file, setFile] = useState("");

  const handleChange = (e) => {
    let files = [];
   

    if(e.target.files.length !==0)
    {
      const url = URL.createObjectURL(e.target.files[0])

      setSrc(url)

    }
  };
  const handleUpload = (e) => {
    e.preventDefault();
    setFile(src)
  };

  const handleClassified = (url) =>
  {
    console.log(file);
    fetch(`http://localhost:8000/classification/${url}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }
  return (
    <div>
      <article className="container ml-auto mr-auto p-16">
        <h2 className="text-xl font-bold text-center mt-16 mb-10 ">
          Uplaod Your Bird Image
        </h2>

        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow h-32 card  rounded-box place-items-center">
            <Upload onUpload={handleUpload} change={handleChange}></Upload>
          </div>
          <div className="divider lg:divider-horizontal">OR</div>
          <div className="grid flex-grow h-32 card rounded-box place-items-center">
            <Canvas image={file}></Canvas>
          </div>
        </div>
      </article>


      <article>
        <button className ="btn btn-success" onClick={()=> handleClassified(src)}>CLassify</button>
      </article>
    </div>
  );
};

export default Classification;
