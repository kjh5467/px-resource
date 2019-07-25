/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link,
  Typography,
  Collapse
} from "@material-ui/core";

import Icon from "@material-ui/core/Icon";

//Data for tables
import npm from "../data/npm.json";

export default function NpmTable() {
  const [expanded, setExpanded] = useState(false);

  function handleClick(index) {
    const c = { ...expanded };
    c[index] = !c[index];
    setExpanded(c);
  }
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Repository</TableCell>
          <TableCell align="left">Description</TableCell>
          <TableCell align="left">NPM</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {npm.map((repo, i) => {
          return (
            <Fragment>
              <TableRow button onClick={() => handleClick(i)}>
                <TableCell>
                  <Link
                    href={repo.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.id}
                  </Link>
                </TableCell>
                <TableCell>
                  <Typography variant="p">{repo.description}</Typography>
                </TableCell>
                <TableCell>
                  {repo.npm.map((img, i) => {
                    return (
                      <Link
                        href={img.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={img.img} alt="" />
                      </Link>
                    );
                  })}
                </TableCell>
                <TableCell>
                  {" "}
                  {expanded[i] ? (
                    <Icon>expand_less</Icon>
                  ) : (
                    <Icon>expand_more</Icon>
                  )}
                </TableCell>
              </TableRow>

              <Collapse in={expanded[i]} timeout="auto" unmountOnExit>
                <TableHead>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Updated</TableCell>
                  <TableCell align="left">Issues</TableCell>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      {repo.status.map((img, i) => {
                        return (
                          <Link
                            href={img.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={img.img} alt="" />
                          </Link>
                        );
                      })}
                    </TableCell>
                    <TableCell>
                      {repo.updated.map((img, i) => {
                        return (
                          <Link
                            href={img.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={img.img} alt="" />
                          </Link>
                        );
                      })}
                    </TableCell>
                    <TableCell>
                      {repo.issues.map((img, i) => {
                        return (
                          <Link
                            href={img.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={img.img} alt="" />
                          </Link>
                        );
                      })}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Collapse>
            </Fragment>
          );
        })}
      </TableBody>
    </Table>
  );
}
