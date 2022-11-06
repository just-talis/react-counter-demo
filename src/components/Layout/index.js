
function Layout({children}) {
  return (
    <>
      <span className="nav">
      <a href="/">home</a>
      <a href="/counter-with-reducer">with Reducer</a>
      <a href="/lost">404</a>
      <a href="/error">error trigger</a>
      </span>
      {children}
    </>
  );
}

export default Layout;
