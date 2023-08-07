import React from "react";
import StatusProdukTable from "../components/StatusProdukTable";
import StatusPengambilanTable from "../components/StatusPengambilanTable";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Home() {
  const [statusProdukData, setStatusProdukData] = useState([""]);
  const [statusPengambilanData, setStatusPengambilanData] = useState([""]);
  const [showStatusProduk, setShowStatusProduk] = useState(true); // Default to showing StatusProdukTable

  const toggleTable = () => {
    setShowStatusProduk(!showStatusProduk);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/Status_Produk");
      setStatusProdukData(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      const response = await axios.get("http://localhost:8000/Status_Pengambilan");
      setStatusPengambilanData(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white text-center py-3 ">
        <div className="container">
          <div className="row">
            <div className="col">{/* <img src="path_to_your_logo.png" alt="Logo" className="img-fluid" /> */}</div>
            <div className="col">
              <h1 className="h4">Sistem pengecekan status produk pengadilan</h1>
            </div>
            <div className="col">
              <div className="d-flex justify-content-end">
                <span className="me-2">Welcome, Ibuk Neny</span>
                <img src="path_to_user_avatar.png" alt="User" className="img-fluid rounded-circle" style={{ width: "30px", height: "30px" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container py-4">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row ">
                  <div className="col">
                    <div className="divbtn">
                      <button className="btn btn-success mb-2" onClick={toggleTable}>
                        {showStatusProduk ? "Table Status Pengambilan" : "Table Status Produk"}
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <div className="divbtn">
                      <Link to="employee/create" className="btn btn-success ">
                        Add New (+)
                      </Link>
                    </div>
                  </div>
                </div>
                <h5 className="card-title">{showStatusProduk ? "Data Status Produk" : "Data Status Pengambilan"}</h5>
                {showStatusProduk ? <StatusProdukTable data={statusProdukData} pagination /> : <StatusPengambilanTable data={statusPengambilanData} pagination />}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p> made by Balya Ground © {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
