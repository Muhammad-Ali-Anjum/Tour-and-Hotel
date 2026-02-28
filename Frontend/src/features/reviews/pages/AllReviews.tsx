import { Table } from '../../../components/common/Table';

// Define the Review type (adjust fields as needed)
interface Review {
  id: number;
  user: string;
  item: string;
  rating: number;
  comment: string;
  status: string;
}

const reviews: Review[] = [
  { id: 1, user: 'Ali', item: 'Skardu Explorer', rating: 4, comment: 'Great!', status: 'Published' },
];

const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'User', accessor: 'user' },
  { header: 'Item', accessor: 'item' },
  { header: 'Rating', accessor: 'rating' },
  { header: 'Comment', accessor: 'comment' },
  { header: 'Status', accessor: 'status' },
  {
    header: 'Actions',
    accessor: 'id',
    // Explicitly type the parameters
    cell: (_value: number, _row: Review) => (
      <button className="text-red-600 hover:underline">Delete</button>
    ),
  },
];

export const AllReviews = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Reviews</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <Table data={reviews} columns={columns} />
      </div>
    </div>
  );
};