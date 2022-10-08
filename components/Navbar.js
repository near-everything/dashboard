import Link from "next/link";

function Navbar() {
  // const { user, isLoading } = useUser();

  return (
    <div className="navbar">
      <div className="flex-1">
        <Link href="/" passHref>
          <button className="btn btn-ghost">
            <div className="flex flex-col text-right">
              <p className="normal-case text-4xl">everything</p>
              <p className="text-sm justify-end">DASHBOARD</p>
            </div>
          </button>
        </Link>
      </div>
      {/* {isLoading ? null : (
        <>
          {user ? (
            <>
              <span className="flex flex-row items-center gap-4">
                <p>{user.nickname}</p>
                <Link href="/api/auth/logout">
                  <button className="btn normal-case">logout</button>
                </Link>
              </span>
            </>
          ) : (
            <>
              <Link href="/api/auth/login">
                <button className="btn normal-case">login</button>
              </Link>
            </>
          )}
        </>
      )} */}
    </div>
  );
}

export default Navbar;
