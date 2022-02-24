import Link from "next/link";

export default function Frame(props) {
  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row justify-content-between h-100">
          <div className="col">{props.children}</div>
          <div className="col-auto">
            <div className="row h-100">
              <div className="col-auto bg-red menu-item">
                <div className="menu-item-text h3">
                  <Link href="/">home</Link>{" "}
                </div>
              </div>
              <div className="col-auto bg-orange menu-item">
                <div className="menu-item-text h3">
                  <Link href="/blog">personal blog</Link>{" "}
                </div>
              </div>
              <div className="col-auto bg-yellow menu-item">
                <div className="menu-item-text h3">about me</div>
              </div>
              <div className="col-auto bg-green menu-item">
                <div className="menu-item-text h3">portfolio</div>
              </div>
              <div className="col-auto bg-blue menu-item">
                <div className="menu-item-text h3">skills</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
