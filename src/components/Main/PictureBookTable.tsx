import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { PictureBook } from "../../API";
import PictureBookRow from "./TableRow/PictureBookTableRow";

interface PictureBookTable {
  booksBySeriesTitle: Array<PictureBook>;
}

export default function CollapsibleTable(props: PictureBookTable) {
  const { booksBySeriesTitle } = props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
        </TableHead>
        <TableBody>
          {booksBySeriesTitle.map((book) => (
            <PictureBookRow key={book.id} pictureBook={book} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}