import React from "react";

const Upload = (props) => 
{

    const { onUpload , change } = props;
  return (
    <form onSubmit={onUpload}>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick a file</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
          name="file"
          onChange={change}
        />
        <label className="label">
          <span className="label-text-alt">Alt label</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>

      <div>
        <input type='submit' className="btn btn-success" value='Upload'/>
      </div>
    </form>
  );
};

export default Upload;
