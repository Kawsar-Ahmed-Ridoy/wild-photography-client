import React from 'react';

const Review = () => {
    return (
        <div>
            <div className="mb-12">
    <div className="mb-8">
        <h2 className="text-center text-4xl font-bold ">My Reviews</h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>

      <div  className="overflow-x-auto w-full">
  <table className="table w-full border">
    <tbody>

      <tr>
        <th>

        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>

    </tbody>
    
  </table>
</div>
</div>
        </div>
    );
};

export default Review;