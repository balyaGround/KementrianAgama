import React from "react";
import { Link } from "react-router-dom";
function TabbleData() {
  return (
    <>
      <div className="container mt-5 ">
        <div className="card">
          <div className="card-title d-flex justify-content-center align-items-center">
            <h2>List Akta Cerai</h2>
          </div>
          <div className="card-body">
            <div className="divbtn">
              <Link to="employee/create" className="btn btn-success mx-2">
                Add New (+)
              </Link>
            </div>
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <td>No</td>
                  <td>Nomor Perkara</td>
                  <td>Nomor Akta Cerai</td>
                  <td>Tanggal Putusan</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>123/Pdt.G/2023/PA.Mdn</td>
                  <td>194/AC/2023/PA.Mdn</td>
                  <td>16 Januari 2023</td>
                  <td>Akta cerai sudah dapat diambil</td>
                  <td>
                    <a className="btn btn-success mx-2 ">Edit</a>
                    <a className="btn btn-danger mx-2">Remove</a>
                    <a className="btn btn-primary">Details</a>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>123/Pdt.G/2023/PA.Mdn</td>
                  <td>194/AC/2023/PA.Mdn</td>
                  <td>16 Januari 2023</td>
                  <td>Akta cerai sudah dapat diambil</td>
                  <td>
                    <a className="btn btn-success mx-2">Edit</a>
                    <a className="btn btn-danger mx-2">Remove</a>
                    <a className="btn btn-primary">Details</a>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>123/Pdt.G/2023/PA.Mdn</td>
                  <td>194/AC/2023/PA.Mdn</td>
                  <td>16 Januari 2023</td>
                  <td>Akta cerai sudah dapat diambil</td>
                  <td>
                    <a className="btn btn-success mx-2">Edit</a>
                    <a className="btn btn-danger mx-2">Remove</a>
                    <a className="btn btn-primary">Details</a>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>123/Pdt.G/2023/PA.Mdn</td>
                  <td>194/AC/2023/PA.Mdn</td>
                  <td>16 Januari 2023</td>
                  <td>Akta cerai sudah dapat diambil</td>
                  <td>
                    <a className="btn btn-success mx-2">Edit</a>
                    <a className="btn btn-danger mx-2">Remove</a>
                    <a className="btn btn-primary">Details</a>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>123/Pdt.G/2023/PA.Mdn</td>
                  <td>194/AC/2023/PA.Mdn</td>
                  <td>16 Januari 2023</td>
                  <td>Akta cerai sudah dapat diambil</td>
                  <td>
                    <a className="btn btn-success mx-2">Edit</a>
                    <a className="btn btn-danger mx-2">Remove</a>
                    <a className="btn btn-primary">Details</a>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>123/Pdt.G/2023/PA.Mdn</td>
                  <td>194/AC/2023/PA.Mdn</td>
                  <td>16 Januari 2023</td>
                  <td>Akta cerai sudah dapat diambil</td>
                  <td>
                    <a className="btn btn-success mx-2">Edit</a>
                    <a className="btn btn-danger mx-2">Remove</a>
                    <a className="btn btn-primary">Details</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default TabbleData;
