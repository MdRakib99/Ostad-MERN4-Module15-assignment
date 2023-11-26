import axios from "axios";
export async function studentListRequest() {
  try {
    let res = await fetch("http://localhost:5080/api/v1/studentList");
    let JSONData = await res.json();
    return JSONData["data"];
  } catch (error) {
    return [];
  }
}

export async function createStudentRequest(postBody) {
  try {
    let res = await axios.post(
      "http://localhost:5080/api/v1/createStudent",
      postBody
    );
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export async function updateStudentRequest(postBody, id) {
  try {
    let res = await axios.post(
      "http://localhost:5080/api/v1/updateStudent/" + id,
      postBody
    );
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export async function deleteStudentRequest(id) {
  try {
    let res = await fetch("http://localhost:5080/api/v1/deleteStudent/" + id);
    let JSONData = await res.json();
    if (JSONData["status"] === "success") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export async function studentByIdRequest(id) {
  try {
    let res = await fetch("http://localhost:5080/api/v1/student-by-id/" + id);
    let JSONData = await res.json();
    return JSONData["data"][0];
  } catch (error) {
    return [];
  }
}
