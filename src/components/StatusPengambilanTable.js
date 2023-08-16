import React from "react";
import DataTable from "react-data-table-component";
import UpdateModal from "./UpdateModal";
const StatusPengambilanTable = ({ data, onUpdate }) => {
  if (!data || data.length === 0) {
    return <p>No data to display</p>;
  }

  const handleUpdate = (row) => {
    // Handle update logic here
    console.log("Update clicked for row:", row);
  };

  const handleDelete = (row) => {
    // Handle delete logic here
    console.log("Delete clicked for row:", row);
  };
  const columns = [
    // Define your columns here based on your data structure
    { name: "No.", selector: (row) => row.No, sortable: true },
    { name: "Nomor Perkara", selector: (row) => row.Nomor_Perkara },
    { name: "Pihak", selector: (row) => row.Pihak },
    { name: "Tanggal Ambil", selector: (row) => row.Tanggal_Ambil },
    { name: "Jam Ambil", selector: (row) => row.Jam_Ambil },
    { name: "Keterangan", selector: (row) => row.Keterangan, cell: (row) => <div style={{ whiteSpace: "normal", textAlign: "center" }}>{row.Keterangan}</div> },

    {
      name: "Actions",
      cell: (row) => (
        <div className="btn-group" role="group">
          <UpdateModal row={row} tableName="Status_Pengambilan" onUpdate={onUpdate} />

          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(row)}>
            Delete
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];

  return <DataTable columns={columns} data={data} />;
};

export default StatusPengambilanTable;
