import { useState } from 'react';

export const useTable = <T>(data: T[]) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const paginatedData = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return { paginatedData, page, setPage, rowsPerPage, setRowsPerPage };
};