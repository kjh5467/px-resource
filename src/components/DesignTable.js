import React, { Fragment, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link,
  Collapse
} from "@material-ui/core";

import Icon from "@material-ui/core/Icon";

import design from "../data/design";

export default function DesignTable() {
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
          <TableCell>Status</TableCell>
          <TableCell>Example</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {design.map((repo, i) => {
          return (
            <Fragment>
              <TableRow>
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
                  {repo.status.map(img => {
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
                  {repo.example.map(link => {
                    return (
                      <Fragment>
                        <Link
                          href={link.link1}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Angular
                        </Link>
                        <br />
                        <Link
                          href={link.link2}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          React
                        </Link>
                      </Fragment>
                    );
                  })}
                </TableCell>
                <TableCell button onClick={() => handleClick(i)}>
                  {expanded[i] ? (
                    <Icon>expand_less</Icon>
                  ) : (
                    <Icon>expand_more</Icon>
                  )}
                </TableCell>
              </TableRow>
              <Collapse in={expanded[i]} timeout="auto" unmountOnExit>
                <TableHead>
                  <TableCell align="left">Updated</TableCell>
                  <TableCell align="left">Issues</TableCell>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      {repo.updated.map(img => {
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
                      {repo.issues.map(img => {
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
