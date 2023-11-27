import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  createStudentRequest,
  studentByIdRequest,
  updateStudentRequest,
} from "../apiRequest/apiRequest";

const SaveForm = () => {
  let navigate = useNavigate();

  let [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    nationality: "",
    address: "",
    email: "",
    phone: "",
    courses: "",
    admissionDate: "",
  });

  let [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    setUpdateId(id);
    (async () => {
      if (id !== null) {
        await fillform(id);
      }
    })();
  }, []);

  const fillform = async (id) => {
    let res = await studentByIdRequest(id);
    setFormValue({
      firstName: res["firstName"],
      lastName: res["lastName"],
      gender: res["gender"],
      dateOfBirth: res["dateOfBirth"],
      nationality: res["nationality"],
      address: res["address"],
      email: res["email"],
      phone: res["phone"],
      admissionDate: res["admissionDate"],
      courses: res["courses"],
    });
  };

  const inputOnChange = (name, value) => {
    setFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };

  const save = async () => {
    if (formValue.firstName.length === 0) {
      toast.error("FirstName Required !");
    } else if (formValue.lastName.length === 0) {
      toast.error("LastName Required !");
    } else if (formValue.gender.length === 0) {
      toast.error("Gender Required !");
    } else if (formValue.dateOfBirth.length === 0) {
      toast.error("Date Of Birth Required !");
    } else if (formValue.nationality.length === 0) {
      toast.error("Nationality Required !");
    } else if (formValue.address.length === 0) {
      toast.error("Address Required !");
    } else if (formValue.email.length === 0) {
      toast.error("Email Required !");
    } else if (formValue.phone.length === 0) {
      toast.error("Phone Required !");
    } else if (formValue.courses.length === 0) {
      toast.error("Courses Required !");
    } else if (formValue.admissionDate.length === 0) {
      toast.error("Admission Date Required !");
    } else {
      if (updateId === null) {
        let res = await createStudentRequest(formValue);
        if (res) {
          toast.success("Create Request completed");
          navigate("/");
        } else {
          toast.error("Create Request failed !");
        }
      } else {
        let res = await updateStudentRequest(formValue, updateId);
        if (res) {
          toast.success("Update Request completed");
          navigate("/");
        } else {
          toast.error("Update Request failed !");
        }
      }
    }
  };

  return (
    <div className='container mx-auto pb-20'>
      <div>
        <div className='flex font-bold text-2xl items-center justify-center font-mono'>
          {updateId ? <h1>Edit Profile</h1> : <h1>Registration</h1>}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            First Name:
          </label>
          <input
            value={formValue.firstName}
            onChange={(e) => {
              inputOnChange("firstName", e.target.value);
            }}
            type='text'
            className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Last Name:
          </label>
          <input
            value={formValue.lastName}
            onChange={(e) => {
              inputOnChange("lastName", e.target.value);
            }}
            type='text'
            className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Gender:
          </label>
          <input
            value={formValue.gender}
            onChange={(e) => {
              inputOnChange("gender", e.target.value);
            }}
            type='text'
            className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
          />
        </div>

        {/* <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Gender:
          </label>
          <select
            id='gender'
            name='gender'
            className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
        </div> */}

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Date Of Birth:
          </label>
          <input
            value={formValue.dateOfBirth}
            onChange={(e) => {
              inputOnChange("dateOfBirth", e.target.value);
            }}
            type='text'
            className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Nationality:
          </label>
          <input
            value={formValue.nationality}
            onChange={(e) => {
              inputOnChange("nationality", e.target.value);
            }}
            type='text'
            className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='address'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Address:
          </label>
          <input
            value={formValue.address}
            onChange={(e) => {
              inputOnChange("address", e.target.value);
            }}
            type='text'
            className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Email:
          </label>
          <input
            value={formValue.email}
            onChange={(e) => {
              inputOnChange("email", e.target.value);
            }}
            type='email'
            className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='firstName'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Phone:
          </label>
          <input
            value={formValue.phone}
            onChange={(e) => {
              inputOnChange("phone", e.target.value);
            }}
            type='text'
            className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Admission Date:
          </label>
          <input
            value={formValue.admissionDate}
            onChange={(e) => {
              inputOnChange("admissionDate", e.target.value);
            }}
            type='text'
            className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Courses:
          </label>
          <input
            value={formValue.courses}
            onChange={(e) => {
              inputOnChange("courses", e.target.value);
            }}
            type='text'
            className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
          />
        </div>

        <div>
          <button
            onClick={save}
            type='submit'
            className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700'
          >
            Submit
          </button>
        </div>
      </div>
      <Toaster position='bottom-center' />
    </div>
  );
};

export default SaveForm;
