import React from "react";
import DataTable from "react-data-table-component";
import UpdateModal from "./UpdateModal";

const StatusProdukTable = ({ data, onUpdate }) => {
  if (!data || data.length === 0) {
    return <p>No data to display</p>;
  }

  const handleDelete = (row) => {
    // Handle delete logic here
    console.log("Delete clicked for row:", row);
  };
  const columns = [
    // Define your columns here based on your data structure
    { name: "No.", selector: (row) => row.No, sortable: true },
    { name: "Nomor Perkara", selector: (row) => row.Nomor_Perkara },
    { name: "Nomor Akta Cerai", selector: (row) => row.Nomor_Akta_Cerai },
    { name: "Tanggal Putusan", selector: (row) => row.Tanggal_Putusan },
    { name: "Status", selector: (row) => row.Status },

    {
      name: "Actions",
      cell: (row) => (
        <div className="btn-group" role="group">
          <UpdateModal row={row} tableName="Status_Produk" onUpdate={onUpdate} />
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

export default StatusProdukTable;
