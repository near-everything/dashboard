
function Table({ renderTableHeaders, renderTableBody }) {
  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          <thead>
            <tr>
              {renderTableHeaders()}
            </tr>
          </thead>
          {renderTableBody()}
        </table>
      </div>
    </>
  );
}

export default Table;
