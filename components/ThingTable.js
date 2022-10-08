import { useUser } from "@auth0/nextjs-auth0";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import { useThingsByOwner } from "../graphql/queries";
import DetailsModal from "./DetailsModal";
const Table = dynamic(() => import("./Table"), { ssr: false });

function ThingTable() {
  const [details, setDetails] = useState({});
  const { user } = useUser();
  const { data, isLoading, isError, error } = useThingsByOwner(
    user && user.sub,
    {
      enabled: !!user,
    }
  );

  const renderTableHeaders = () => {
    return (
      <>
        <th>
          <label>
            <input type="checkbox" className="checkbox"/>
          </label>
        </th>
        <th>Image</th>
        <th className="w-16">Qty</th>
        <th className="w-16">
          <div className="flex flex-col items-center">
            <span>Category</span>
            <span className="badge badge-ghost badge-sm">Subcategory</span>
          </div>
        </th>
        <th className="w-16">Type</th>
        <th className="w-16">
          <div className="flex flex-col items-center">
            <span>Brand</span>
            <span className="badge badge-ghost badge-sm">Collection</span>
          </div>
        </th>
        <th className="w-16">Branding</th>
        <th>Material(s)</th>
        <th className="w-16">Made in</th>
        <th />
      </>
    );
  };
  const renderTableBody = () => {
    if (isLoading) {
      return (
        <PulseLoader
          size={10}
          color={"#e5e7eb"}
          loading={isLoading}
          speedMultiplier={1.5}
        />
      );
    }
    if (isError) {
      return <h1>{error.message}</h1>;
    }
    if (data) {
      return (
        <tbody>
          {data.map((thing) => {
            return (
              <tr key={thing.node.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          src={thing.node.medias?.edges[0]?.node.mediaUrl}
                          layout="fill"
                          objectFit="cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="w-16 ">
                  {
                    thing.node.characteristics.edges.find(
                      (it) => it.node.attribute.id === 8
                    )?.node.option.value
                  }
                </td>
                <td className="w-16">
                  {
                    thing.node.characteristics.edges.find(
                      (it) => it.node.attribute.id === 3
                    )?.node.option.value
                  }
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {
                      thing.node.characteristics.edges.find(
                        (it) => it.node.attribute.id === 4
                      )?.node.option.value
                    }
                  </span>
                </td>
                <td className="w-16">
                  {
                    thing.node.characteristics.edges.find(
                      (it) => it.node.attribute.id === 10
                    )?.node.option.value
                  }
                </td>
                <td className="w-16">
                  {
                    thing.node.characteristics.edges.find(
                      (it) => it.node.attribute.id === 2
                    )?.node.option.value
                  }
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {
                      thing.node.characteristics.edges.find(
                        (it) => it.node.attribute.id === 11
                      )?.node.option.value
                    }
                  </span>
                </td>
                <td className="w-16">
                  {
                    thing.node.characteristics.edges.find(
                      (it) => it.node.attribute.id === 7
                    )?.node.option.value
                  }
                </td>
                <td>
                  {
                    thing.node.characteristics.edges.find(
                      (it) => it.node.attribute.id === 5
                    )?.node.option.value
                  }
                </td>
                <td>
                  {
                    thing.node.characteristics.edges.find(
                      (it) => it.node.attribute.id === 6
                    )?.node.option.value
                  }
                </td>
                <th>
                  <label
                    htmlFor="thing-details"
                    className="btn btn-xs modal-button"
                    onClick={() => setDetails(thing.node)}
                  >
                    details
                  </label>
                </th>
              </tr>
            );
          })}
        </tbody>
      );
    }
  };

  return (
    <>
      <Table
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
        renderTableHeaders={renderTableHeaders}
        renderTableBody={renderTableBody}
      />
      <DetailsModal thing={details} />
    </>
  );
}

export default ThingTable;
