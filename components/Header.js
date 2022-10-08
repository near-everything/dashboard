import { useUser } from "@auth0/nextjs-auth0";

function Header() {
  const { user, isLoading } = useUser();
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-4xl">everything</a>
      </div>
      <div className="flex-none mt-2 mr-2">
        {isLoading ? null : (
          <>
            {user ? (
              <>
              <span className="flex flex-row items-center gap-4">
                <p className="">{user.nickname}</p>
                <a className="btn normal-case" href="/api/auth/logout">
                  logout
                </a>
                </span>
              </>
            ) : (
              <>
                <a className="btn normal-case" href="/api/auth/login">
                  login
                </a>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
