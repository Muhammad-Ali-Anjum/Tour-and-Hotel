import React from 'react';

interface TableActionsProps {
  onEdit?: () => void;
  onDelete?: () => void;
  onView?: () => void;
}

export const TableActions: React.FC<TableActionsProps> = ({ onEdit, onDelete, onView }) => {
  return (
    <div className="flex space-x-2">
      {onView && <button onClick={onView} className="text-blue-600 hover:underline">View</button>}
      {onEdit && <button onClick={onEdit} className="text-green-600 hover:underline">Edit</button>}
      {onDelete && <button onClick={onDelete} className="text-red-600 hover:underline">Delete</button>}
    </div>
  );
};