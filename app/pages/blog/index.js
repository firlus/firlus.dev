import { getAllPosts } from "../../common/blog.js";
import Frame from "../../components/frame.js";

export default function Blog(props) {
  return (
    <Frame>
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="row mt-5 mb-3">
            <div className="col-auto">
              <h1>personal blog</h1>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-auto">
              An unsorted collections of thoughts, articles, pictures and videos
              that I find of interest. Focus is mostly on technology, traveling
              and left-wing politics.
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6">{props.posts}</div>
        <div className="col-2"></div>
      </div>
    </Frame>
  );
}

export const getStaticProps = async () => ({
  props: {
    posts: getAllPosts(),
  },
});
