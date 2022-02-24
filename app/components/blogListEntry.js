import Image from "next/image";

export default function BlogListEntry(props) {
  return (
    <>
      <div className="row mb-3">
        <div className="col-3">
          <Image src={props.image} className="mt-1"></Image>
        </div>
        <div className="col-9">
          <h2 className="h4 mb-0">{props.title}</h2>
          <div className="mb-2">
            {props.date}
            <span className="px-2"></span>
            {props.tags.map((tag) => (
              <>
                <span className="pill pill-politics px-2 py-1 bg-red">
                  {tag}
                </span>
                <span className="mx-1"></span>
              </>
            ))}
          </div>
          <p className="text-justify">{props.teaser}</p>
        </div>
      </div>
    </>
  );
}
