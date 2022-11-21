import { useUser } from "@auth0/nextjs-auth0";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { Importer, ImporterField } from "react-csv-importer";
import { PulseLoader } from "react-spinners";
import { useThingsByOwner } from "../graphql/queries";
import BulkUploadModal from "./BulkUploadModal";
import DetailsModal from "./DetailsModal";
import UploadModal from "./UploadModal";
const Table = dynamic(() => import("./Table"), { ssr: false });

function ThingTable() {
  const [details, setDetails] = useState({});
  const [upload, setUpload] = useState({});
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
            <input type="checkbox" className="checkbox" />
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
        <th />
        <th />
      </>
    );
  };
  const renderTableBody = () => {
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
                    <div className="relative mask mask-squircle w-12 h-12">
                      {thing.node.medias?.edges.length === 0 ? null : (
                        <Image
                          src={thing.node.medias?.edges[0]?.node.mediaUrl}
                          layout="fill"
                          objectFit="cover"
                          alt=""
                        />
                      )}
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
                  htmlFor="upload-modal"
                  className="btn btn-xs modal-button"
                  onClick={() => setUpload(thing.node)}
                >
                  <FontAwesomeIcon icon={faUpload} />
                </label>
              </th>
              <th>
                <label
                  htmlFor="thing-details"
                  className="btn btn-xs modal-button"
                  onClick={() => setDetails(thing.node)}
                >
                  details
                </label>
              </th>
              <th>
                <label className="btn btn-xs">more</label>
              </th>
            </tr>
          );
        })}
      </tbody>
    );
  };

  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center h-full w-full">
        <p>please login</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-full w-full">
        <PulseLoader
          size={10}
          color={"#e5e7eb"}
          loading={isLoading}
          speedMultiplier={1.5}
        />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center h-full w-full">
        <h1>{error.message}</h1>
      </div>
    );
  }
  if (data) {
    return (
      <div className="flex flex-col flex-1 mx-4 py-4 h-full">
        <div className="flex w-full justify-end p-2">
          <label htmlFor="bulk-upload-modal" className="btn modal-button">
            <span>
              <FontAwesomeIcon icon={faUpload} />
              {" bulk upload"}
            </span>
          </label>
        </div>
        <Table
          data={data}
          isLoading={isLoading}
          isError={isError}
          error={error}
          renderTableHeaders={renderTableHeaders}
          renderTableBody={renderTableBody}
        />
        <DetailsModal thing={details} />
        <UploadModal thing={upload} />
        <BulkUploadModal />
        <div>
        <Importer
              chunkSize={10000}
              assumeNoHeaders={false} // optional, keeps "data has headers" checkbox off by default
              restartable={false} // optional, lets user choose to upload another file when import is complete
              // onStart={({ file, preview, fields, columnFields }) => {
              //   // optional, invoked when user has mapped columns and started import
              //   console.log("starting import of file", file, "with fields", fields);
              // }}
              processChunk={async (rows, { startIndex }) => {
                // required, may be called several times
                // receives a list of parsed objects based on defined fields and user column mapping;
                // (if this callback returns a promise, the widget will wait for it before parsing more data)
                console.log("received batch of rows", rows);
                await new Promise((resolve) => setTimeout(resolve, 500));
                // for (const [i, row] of rows.entries()) {
                //   await processRow(row);
                // }
              }}
              onComplete={({ file, preview, fields, columnFields }) => {
                // optional, invoked right after import is done (but user did not dismiss/reset the widget yet)
                // showMyAppToastNotification();
                console.log("finished import of file", file, "with fields", fields);
              }}
              onClose={({ file, preview, fields, columnFields }) => {
                // optional, if this is specified the user will see a "Finish" button after import is done,
                // which will call this when clicked
                console.log("importer dismissed");
              }}

              // CSV options passed directly to PapaParse if specified:
              // delimiter={...}
              // newline={...}
              // quoteChar={...}
              // escapeChar={...}
              // comments={...}
              // skipEmptyLines={...}
              // delimitersToGuess={...}
              // chunkSize={...} // defaults to 10000
              // encoding={...} // defaults to utf-8, see FileReader API
            >
              {/* could dynamically create importer fields by querying accepted attributes */}
              <ImporterField name="1" label="1" />
              <ImporterField name="2" label="2" />
              <ImporterField name="3" label="3" />
              <ImporterField name="4" label="4" />
              <ImporterField name="5" label="5" />
              <ImporterField name="6" label="6" />
              <ImporterField name="7" label="7" />
            </Importer>
        </div>
      </div>
    );
  }
}

export default ThingTable;
