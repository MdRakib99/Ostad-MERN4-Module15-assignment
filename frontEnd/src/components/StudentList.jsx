import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import {
  deleteStudentRequest,
  studentListRequest,
} from "../apiRequest/apiRequest";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const StudentList = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(0);
  useEffect(() => {
    (async () => {
      let res = await studentListRequest();
      setData(res);
    })();
  }, [change]);

  const onDelete = async (id) => {
    let res = await deleteStudentRequest(id);
    if (res) {
      toast.success("Successfully Deleted");
      setChange(new Date().getTime());
    } else {
      toast.error("Delete failed");
    }
  };
  if (data.length === 0) {
    return <Loader />;
  } else {
    return (
      <div className='h-screen'>
        <div className='overflow-x-auto '>
          <h1 className='flex items-center justify-center font-mono font-bold pb-3 text-3xl text-[#000000]'>
            Students List
          </h1>
          <table className='table'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Date Of Birth</th>
                <th>Nationality</th>
                <th>Address</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Admission Date</th>
                <th>Courses</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item["firstName"]}</td>
                    <td>{item["lastName"]}</td>
                    <td>{item["gender"]}</td>
                    <td>{item["dateOfBirth"]}</td>
                    <td>{item["nationality"]}</td>
                    <td>{item["address"]}</td>
                    <td>{item["email"]}</td>
                    <td>{item["phone"]}</td>
                    <td>{item["admissionDate"]}</td>
                    <td>{item["courses"]}</td>

                    <td className=''>
                      <button
                        onClick={() => {
                          onDelete(item["_id"]);
                        }}
                        className='btn  btn-warning'
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link
                        className='btn btn-secondary '
                        to={"/save?id=" + item["_id"]}
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Toaster position='bottom-center' />
      </div>
    );
  }
};

export default StudentList;
