import "../style.css";
import React from "react";
import { Button, Grid, Image, Item } from "semantic-ui-react";
import { useState } from "react";
import imageCompression from "browser-image-compression";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Compresspage() {
  const [oImage, setoImage] = useState("");
  const [oImageFile, setoImageFile] = useState("");
  const [CompressedImage, setCompressedImage] = useState("");
  const [FileName, setFileName] = useState("");

  const handle = (e) => {
    const imageFile = e.target.files[0];
    setoImage(imageFile);
    setoImageFile(URL.createObjectURL(imageFile));
    setFileName(imageFile.name);
  };

  const handleCompressImage = (e) => {
    e.preventDefault();

    const options = {
      maxSizeMB: 1,
      maxWidthorHeight: 500,
      useWebWorker: true,
    };

    if (options.maxSizeMB >= oImage / 1024) {
      alert("Image is too small and cannot be compressed");
      return 0;
    }

    let output;

    imageCompression(oImage, options).then((x) => {
      output = x;
      const downloadLink = URL.createObjectURL(output);
      setCompressedImage(downloadLink);
    });
  };

  return (
    <div className="App">
      <Navbar></Navbar>

      <section className="image_section">
        <Grid>
          <Grid.Column width={6}>
            <Item>
              {oImageFile ? (
                <Image src={oImageFile}></Image>
              ) : (
                <Image src="assets/images/image.png"></Image>
              )}
            </Item>
          </Grid.Column>

          <Grid.Column width={4}>
            <input
              type="file"
              accept="image/*"
              className="mt-2 btn btn-dark w-75"
              onChange={(e) => handle(e)}
            />

            {oImage && (
              <Button
                onClick={(e) => {
                  handleCompressImage(e);
                }}
              >
                {" "}
                Compress Image
              </Button>
            )}

            {CompressedImage && (
              <Button>
                <a href={CompressedImage} download={FileName}>
                  {" "}
                  Download Image
                </a>
              </Button>
            )}
          </Grid.Column>

          <Grid.Column width={6}>
            <Item>
              {CompressedImage ? (
                <Image src={CompressedImage}></Image>
              ) : (
                <Image src="assets/images/image.png"></Image>
              )}
            </Item>
          </Grid.Column>
        </Grid>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Compresspage;
