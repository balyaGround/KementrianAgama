import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

function Add() {
  const [InputDataStatus, setInputDataStatus] = useState({
    Nomor_Perkara: "",
    Nomor_Akta_Cerai: "",
    Tanggal_Putusan: "",
    Status: "",
  });
  const [InputDataPengambilan, setInputDataPengambilan] = useState({
    Pihak: "",
    Tanggal_Ambil: "",
    Jam_Ambil: "",
    Keterangan: "",
  });
  const navigate = useNavigate();
  const { statusType } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Choose the correct input data based on statusType
    const inputData = statusType === "Status_Produk" ? InputDataStatus : InputDataPengambilan;

    axios
      .post(`http://localhost:8000/${statusType}`, inputData)
      .then((res) => {
        alert("Data Berhasil di Tambahkan!");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleInputChangeStatus = (event) => {
    const { name, value } = event.target;
    setInputDataStatus((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChangePengambilan = (event) => {
    const { name, value } = event.target;
    setInputDataPengambilan((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      {statusType === "statusProduk" && (
        <>
          <FormGroup controlId="formNomorPerkara">
            <Form.Label>Nomor Perkara</Form.Label>
            <FormControl type="text" name="Nomor_Perkara" value={InputDataStatus.Nomor_Perkara} onChange={handleInputChangeStatus} />
          </FormGroup>
          <Form.Group controlId="formNomorAktaCerai">
            <Form.Label>Nomor Akta Cerai</Form.Label>
            <Form.Control type="text" name="Nomor_Akta_Cerai" value={InputDataStatus.Nomor_Akta_Cerai} onChange={handleInputChangeStatus} />
          </Form.Group>
          <Form.Group controlId="formTanggalPutusan">
            <Form.Label>Tanggal Putusan </Form.Label>
            <Form.Control type="text" name="Tanggal_Putusan" value={InputDataStatus.Tanggal_Putusan} onChange={handleInputChangeStatus} />
          </Form.Group>
          <Form.Group controlId="formStatus">
            <Form.Label>Status </Form.Label>
            <Form.Control type="text" name="Status" value={InputDataStatus.Status} onChange={handleInputChangeStatus} />
          </Form.Group>
        </>
      )}
      {statusType === "statusPengambilan" && (
        <>
          <FormGroup controlId="formPihak">
            <Form.Label>Pihak</Form.Label>
            <FormControl type="text" name="Pihak" value={InputDataPengambilan.Pihak} onChange={handleInputChangePengambilan} />
          </FormGroup>
          <Form.Group controlId="formTanggalAmbil">
            <Form.Label>Tanggal Ambil</Form.Label>
            <Form.Control type="text" name="Tanggal_Ambil" value={InputDataPengambilan.Tanggal_Ambil} onChange={handleInputChangePengambilan} />
          </Form.Group>
          <Form.Group controlId="formJamAmbil">
            <Form.Label>Jam Ambil</Form.Label>
            <Form.Control type="text" name="Jam_Ambil" value={InputDataPengambilan.Jam_Ambil} onChange={handleInputChangePengambilan} /> {/* Change 'Tanggal_Ambil' to 'Jam_Ambil' */}
          </Form.Group>
          <Form.Group controlId="formKeterangan">
            <Form.Label>Keterangan</Form.Label>
            <Form.Control type="text" name="Keterangan" value={InputDataPengambilan.Keterangan} onChange={handleInputChangePengambilan} /> {/* Change 'Tanggal_Ambil' to 'Keterangan' */}
          </Form.Group>
          {/* Add more Status_Pengambilan fields */}
        </>
      )}
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  );
}

export default Add;
