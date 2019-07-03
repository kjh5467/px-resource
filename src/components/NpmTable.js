import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link
} from "@material-ui/core";

const NpmTable = ({ data }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Repository</TableCell>
          <TableCell align="left">NPM</TableCell>
          <TableCell align="left">Description</TableCell>
          <TableCell align="left">Status</TableCell>
          <TableCell align="left">Updated</TableCell>
          <TableCell align="left">Issues</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((repo, i) => {
          return (
            <TableRow>
              <TableCell>
                <Link href={data.repository}>{data.id}</Link>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default NpmTable;
