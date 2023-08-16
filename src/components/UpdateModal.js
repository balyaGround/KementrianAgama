import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

function UpdateModal({ row, tableName, onUpdate }) {
  const [show, setShow] = useState(false);
  const [updatedData, setUpdatedData] = useState({ ...row });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    const endpoint = `http://localhost:8000/${tableName}/${row.No}`; // Use row.No
    axios
      .put(endpoint, updatedData)
      .then((response) => {
        onUpdate(response.data);
        handleClose();
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };
  return (
    <>
      <button className="btn btn-info btn-sm" onClick={handleShow}>
        Update
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {tableName === "Status_Produk" && (
              <>
                <Form.Group controlId="formNomorPerkara">
                  <Form.Label>Nomor Perkara</Form.Label>
                  <Form.Control type="text" name="Nomor_Perkara" value={updatedData.Nomor_Perkara} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formNomorAktaCerai">
                  <Form.Label>Nomor Akta Cerai</Form.Label>
                  <Form.Control type="text" name="Nomor_Akta_Cerai" value={updatedData.Nomor_Akta_Cerai} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formTanggalPutusan">
                  <Form.Label>Tanggal Putusan </Form.Label>
                  <Form.Control type="text" name="Tanggal_Putusan" value={updatedData.Tanggal_Putusan} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formStatus">
                  <Form.Label>Status </Form.Label>
                  <Form.Control type="text" name="Status" value={updatedData.Status} onChange={handleInputChange} />
                </Form.Group>
                {/* Add other fields specific to Status_Produk */}
              </>
            )}
            {tableName === "Status_Pengambilan" && (
              <>
                <Form.Group controlId="formPihak">
                  <Form.Label>Pihak</Form.Label>
                  <Form.Control type="text" name="Pihak" value={updatedData.Pihak} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formTanggalAmbil">
                  <Form.Label>Tanggal Ambil</Form.Label>
                  <Form.Control type="text" name="Tanggal_Ambil" value={updatedData.Tanggal_Ambil} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formJamAmbil">
                  <Form.Label>Jam Ambil</Form.Label>
                  <Form.Control type="text" name="Jam_Ambil" value={updatedData.Jam_Ambil} onChange={handleInputChange} /> {/* Change 'Tanggal_Ambil' to 'Jam_Ambil' */}
                </Form.Group>
                <Form.Group controlId="formKeterangan">
                  <Form.Label>Keterangan</Form.Label>
                  <Form.Control type="text" name="Keterangan" value={updatedData.Keterangan} onChange={handleInputChange} /> {/* Change 'Tanggal_Ambil' to 'Keterangan' */}
                </Form.Group>
                {/* Add other fields specific to Status_Pengambilan */}
              </>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;
