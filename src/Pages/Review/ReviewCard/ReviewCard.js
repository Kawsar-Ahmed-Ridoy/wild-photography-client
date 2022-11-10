import React from "react";


const ReviewCard = ({ review, handleDelete }) => {

  const {
    _id,
    names,
    email,
    message,
    servicePicture,
    serviceName,
    serviceTitle,
    servicePrice
  } = review;

  return (
    <div className=" w-full border h-28 flex  justify-between items-center flex-wrap px-4">
      <div className="flex items-center space-x-3">
        <div className="flex flex-row-reverse">
          <button onClick={() => handleDelete(_id)} className="btn btn-outline">
            x
          </button>
        </div>
        <div className="avatar">
          <div className="mask mask-squircle w-24 h-24">
            <img src={servicePicture} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{serviceName}</div>
          <div className="text-sm opacity-80">{serviceTitle}</div>
          <div className="">Price: ${servicePrice}</div>
        </div>
      </div>

      <div>
        <h5 className="font-bold">Review</h5>
        <p>{message}</p>
      </div>

      <div>
        <h4 className="capitalize">
          Name: {names ? names : <small>anonymous</small>}
        </h4>
        <br />
        <span className="badge badge-ghost badge-sm">Email: {email}</span>
      </div>

      <div className="avatar">
        <div className="rounded-full w-12 h-12">
          <img src={servicePicture} alt="Avatar Tailwind CSS Component" />
        </div>
      </div>
      {/* The button to open modal */}
      <label htmlFor="my-modal" className="btn">
        edit
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Edit Review</h3>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Edit Review"
          ></textarea>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Update
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
