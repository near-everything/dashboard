import { useUser } from "@auth0/nextjs-auth0";
import { useState } from "react";
import { Importer, ImporterField } from "react-csv-importer";
import { useCreateThingBulkUpload } from "../graphql/queries";

function BulkUploadModal() {
  const createThingBulkUpload = useCreateThingBulkUpload();
  const { user } = useUser();

  const processRow = async (row) => {
    createThingBulkUpload.mutate({
      characteristics: Object.entries(row).map((it) => ({
        attributeId: parseInt(it[0]),
        optionValue: it[1],
      })),
      ownerId: user.sub,
      privacyType: "PRIVATE",
    });
  };

  return (
    <>
      <input type="checkbox" id="bulk-upload-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle cursor-pointer">
        <div className="modal-box relative">
          <label
            htmlFor="bulk-upload-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <section className="container text-black">
            <Importer
              chunkSize={10000}
              assumeNoHeaders={false} // optional, keeps "data has headers" checkbox off by default
              restartable={false} // optional, lets user choose to upload another file when import is complete
              // onStart={({ file, preview, fields, columnFields }) => {
              //   // optional, invoked when user has mapped columns and started import
              //   console.log("starting import of file", file, "with fields", fields);
              // }}
              processChunk={async (rows, { startIndex }) => {
                for (const row of rows) {
                  await processRow(row);
                }
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
          </section>
        </div>
      </div>
    </>
  );
}

export default BulkUploadModal;
