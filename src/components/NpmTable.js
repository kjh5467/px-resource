import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link
} from "@material-ui/core";

const NpmTable = () => {
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
        <TableRow>
          <TableCell>
            <Link
              href="https://github.com/pxblue/colors/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              colors
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://www.npmjs.com/package/@pxblue/colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/npm/v/@pxblue/colors.svg?label=@pxblue/colors&amp;style=flat"
                alt=""
              />
            </Link>
            <Link
              href="https://www.npmjs.com/package/@pxblue/colors-branding"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/npm/v/@pxblue/colors-branding.svg?label=@pxblue/colors-branding&amp;style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            This repository contains definitions for various colors used
            throughout PX Blue applications.
          </TableCell>
          <TableCell>
            <Link
              href="https://circleci.com/gh/pxblue/colors/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/circleci/project/github/pxblue/colors/master.svg?style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell align="left">
            <Link
              href="https://github.com/pxblue/colors/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/github/last-commit/pxblue/colors.svg?style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell align="left">
            <Link
              href="https://github.com/pxblue/colors/issues?utf8=✓&amp;q=is%3Aissue+is%3Aopen+label%3Abug"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/github/issues/pxblue/colors/bug.svg?style=flat&amp;label=bugs"
                alt=""
              />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Link
              href="https://github.com/pxblue/highcharts/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              highcharts
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://www.npmjs.com/package/@pxblue/highcharts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/npm/v/@pxblue/highcharts.svg?label=@pxblue/highcharts&amp;style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            This package contains basic support for basic HighCharts line, pie,
            bar, and donut graphs for use with PX Blue.
          </TableCell>
          <TableCell>
            {" "}
            <Link
              href="https://circleci.com/gh/pxblue/highcharts/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/circleci/project/github/pxblue/highcharts/master.svg?style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://github.com/pxblue/highcharts/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/github/last-commit/pxblue/highcharts.svg?style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://github.com/pxblue/highcharts/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/github/last-commit/pxblue/highcharts.svg?style=flat"
                alt=""
              />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Link
              href="https://github.com/pxblue/icons/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              icons
            </Link>
          </TableCell>
          <TableCell>
            {" "}
            <Link
              href="https://www.npmjs.com/package/@pxblue/icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/npm/v/@pxblue/icons.svg?label=@pxblue/icons&amp;style=flat"
                alt=""
              />
            </Link>{" "}
            <Link
              href="https://www.npmjs.com/package/@pxblue/icons-svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/npm/v/@pxblue/icons-svg.svg?label=@pxblue/icons-svg&amp;style=flat"
                alt=""
              />
            </Link>
            <Link
              href="https://www.npmjs.com/package/@pxblue/ng-progress-icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/npm/v/@pxblue/ng-progress-icons.svg?label=@pxblue/ng-progress-icons&amp;style=flat"
                alt=""
              />
            </Link>
            <Link
              href="https://www.npmjs.com/package/@pxblue/react-progress-icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/npm/v/@pxblue/react-progress-icons.svg?label=@pxblue/react-progress-icons&amp;style=flat"
                alt=""
              />
            </Link>
            <Link
              href="https://www.npmjs.com/package/@pxblue/symbols"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/npm/v/@pxblue/symbols.svg?label=@pxblue/symbols&amp;style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            This is a library of supplemental icons, to be used in conjunction
            with the standard Material Design icons in PX Blue applications.
          </TableCell>
          <TableCell>
            <Link
              href="https://circleci.com/gh/pxblue/icons/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/circleci/project/github/pxblue/icons/master.svg?style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://github.com/pxblue/icons/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/github/last-commit/pxblue/icons.svg?style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://github.com/pxblue/icons/issues?utf8=✓&amp;q=is%3Aissue+is%3Aopen+label%3Abug"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/github/issues/pxblue/icons/bug.svg?style=flat&amp;label=bugs"
                alt=""
              />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Link
              href="https://github.com/pxblue/icons-mui/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              icons-mui
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://www.npmjs.com/package/@pxblue/icons-mui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/npm/v/@pxblue/icons-mui.svg?label=@pxblue/icons-mui&amp;style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            {" "}
            This library contains componentized svg icons from{" "}
            <Link href="https://github.com/pxblue/icons">
              @pxblue/icons
            </Link>{" "}
            for use in React applications using Material UI. The icons are made
            available in the same way that Material UI exposes the{" "}
            <Link
              href="https://material-ui.com/style/icons/#svg-material-icons"
              rel="nofollow"
            >
              Material Icons
            </Link>
            .
          </TableCell>
          <TableCell>
            <Link
              href="https://circleci.com/gh/pxblue/icons-mui/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/circleci/project/github/pxblue/icons-mui/master.svg?style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://github.com/pxblue/icons-mui/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/github/last-commit/pxblue/icons-mui.svg?style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://github.com/pxblue/icons-mui/issues?utf8=✓&amp;q=is%3Aissue+is%3Aopen+label%3Abug"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/github/issues/pxblue/icons-mui/bug.svg?style=flat&amp;label=bugs"
                alt=""
              />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Link
              href="https://github.com/pxblue/mapbox/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              mapbox
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://www.npmjs.com/package/@pxblue/mapbox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/npm/v/@pxblue/mapbox.svg?label=@pxblue/mapbox&amp;style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            This package contains various Mapbox themes for use with PX Blue.
          </TableCell>
          <TableCell>
            <Link
              href="https://circleci.com/gh/pxblue/mapbox/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/circleci/project/github/pxblue/mapbox/master.svg?style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://github.com/pxblue/mapbox/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/github/last-commit/pxblue/mapbox.svg?style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://github.com/pxblue/mapbox/issues?utf8=✓&amp;q=is%3Aissue+is%3Aopen+label%3Abug"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/github/issues/pxblue/mapbox/bug.svg?style=flat&amp;label=bugs"
                alt=""
              />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Link
              href="https://github.com/pxblue/symbols-mui/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              symbols-mui
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://www.npmjs.com/package/@pxblue/symbols-mui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/npm/v/@pxblue/symbols-mui.svg?label=@pxblue/symbols-mui&amp;style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            This library contains componentized svg symbols from{" "}
            <Link href="https://github.com/pxblue/symbols">
              @pxblue/symbols
            </Link>{" "}
            for use in React applications using Material UI. The symbols are
            made available in the same way that Material UI exposes the{" "}
            <Link
              href="https://material-ui.com/style/icons/#svg-material-icons"
              rel="nofollow"
            >
              Material Icons
            </Link>
            .
          </TableCell>
          <TableCell>
            <Link
              href="https://circleci.com/gh/pxblue/symbols-mui/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/circleci/project/github/pxblue/symbols-mui/master.svg?style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://github.com/pxblue/symbols-mui/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/github/last-commit/pxblue/symbols-mui.svg?style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://github.com/pxblue/symbols-mui/issues?utf8=✓&amp;q=is%3Aissue+is%3Aopen+label%3Abug"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/github/issues/pxblue/symbols-mui/bug.svg?style=flat&amp;label=bugs"
                alt=""
              />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Link
              href="https://github.com/pxblue/themes/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              themes
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://www.npmjs.com/package/@pxblue/themes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/npm/v/@pxblue/themes.svg?label=@pxblue/themes&amp;style=flat"
                alt=""
              />
            </Link>
          </TableCell>

          <TableCell>
            This package provides theming support for Eaton applications using
            the PX Blue design system. It includes resources for developers
            using: Angular w/{" "}
            <Link
              href="https://www.npmjs.com/package/@angular/material"
              rel="nofollow"
            >
              Angular Material
            </Link>
            React w/{" "}
            <Link
              href="https://www.npmjs.com/package/@material-ui/core"
              rel="nofollow"
            >
              Material UI
            </Link>
            The PX Blue themes package comes with two theme options: a Blue
            theme (standard) and a Dark theme.
          </TableCell>
          <TableCell>
            <Link
              href="https://circleci.com/gh/pxblue/themes/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/circleci/project/github/pxblue/themes/master.svg?style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://github.com/pxblue/themes/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/github/last-commit/pxblue/themes.svg?style=flat"
                alt=""
              />
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href="https://github.com/pxblue/themes/issues?utf8=✓&amp;q=is%3Aissue+is%3Aopen+label%3Abug"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/github/issues/pxblue/themes/bug.svg?style=flat&amp;label=bugs"
                alt=""
              />
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default NpmTable;
