
function Navbar() {
  // const { user, isLoading } = useUser();

  return (
    <div className="navbar">
      <div className="flex-1">
        <a href="https://about.everything.dev">
          <button className="btn btn-ghost">
            <div className="flex flex-col text-right">
              <h1 className="normal-case text-4xl">everything</h1>
              <p className="text-sm justify-end">DASHBOARD</p>
            </div>
          </button>
        </a>
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
