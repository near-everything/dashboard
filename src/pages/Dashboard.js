import { collection, limit, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useFirestoreQuery } from "@react-query-firebase/firestore";

import { db } from "../app/firebase";
import Avatar from "../components/Avatar";
import Badge from "../components/Badge";
import InfoCard from "../components/Cards/InfoCard";
import Delete from "../components/Create/Delete";
import CTA from "../components/CTA";
import Pagination from "../components/Pagination";
import RoundIcon from "../components/RoundIcon";
import Table from "../components/Table";
import TableBody from "../components/TableBody";
import TableCell from "../components/TableCell";
import TableContainer from "../components/TableContainer";
import TableFooter from "../components/TableFooter";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import PageTitle from "../components/Typography/PageTitle";
import { useItems } from "../hooks/useItems";
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from "../icons";
import response from "../utils/demo/tableData";
import { categories } from "../utils/categories";

function Dashboard() {
  const [page, setPage] = useState(1);
  const ref = query(collection(db, "items"));
  const items = useFirestoreQuery(["items"], ref, {
    subscribe: true,
  });
  // const { isLoading, items } = useItems(query(collection(db, "items"), limit(20)));

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
    // items.fetchNextPage();
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  // useEffect(() => {
  //   items.fetchNextPage();
  // }, [items]);

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      {/* <CTA /> */}
      {/* <!-- Cards --> */}
      {/* <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total clients" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Account balance" value="$ 46,760.89">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="New sales" value="376">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Pending contacts" value="35">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div> */}

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Item</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Subcategory</TableCell>
              <TableCell>Created Timestamp</TableCell>
              <TableCell>Delete</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {!items.isLoading &&
              items.data.docs.map((item, i) => {
                const data = item.data();
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Avatar
                          className="hidden mr-3 md:block"
                          src={data.media.length > 0 && data.media[0]}
                          alt="item image"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {
                          categories.find((it) => it.value === data.category)
                            .name
                        }
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{data.subcategory}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                      {/* {data.createdTimestamp._date} */}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge type="danger">
                        <Delete id={item.id} />
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>
    </>
  );
}

export default Dashboard;
