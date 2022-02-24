import Image from "next/image";
import Frame from "../components/frame";
import portrait from "../public/portrait.jpg";

export default function Home() {
  return (
    <>
      <Frame>
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-auto">
            <div className="name">
              <div className="display-1">
                hi, i&apos;m
                <br />
                michael firlus
              </div>
              <div className="display-2 description mt-3">
                student &middot; web developer &middot; wannabe politican
                &middot; traveller &middot; music enthusiast
              </div>
            </div>

            <Image
              src={portrait}
              className="portrait"
              width="256px"
              height="256px"
            ></Image>
          </div>
        </div>
      </Frame>
    </>
  );
}
