import React from "react";
import { Box, Image, Loader } from "@mantine/core";

function LoadingPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "relative",
        backgroundImage:
          "url('https://scontent.ftun16-1.fna.fbcdn.net/v/t1.15752-9/330924836_734088141742824_7073126420847852937_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=whFU1IvDfrAAX92lZCt&_nc_ht=scontent.ftun16-1.fna&oh=03_AdSyx0h6XJJrVfFHHmAbdmi5E80AjHlDLj2pVhLPfo5dzw&oe=641A0AC8')",
        backgroundSize: "200px ",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left 0 bottom 0px",
      }}
    >
      <Box
        style={{
          width: 200,
          textAlign: "center",
        }}
      >
        <Image
          src="https://previews-te.wetransfer.net/file/wetransfer/p1ot/0a37ab7e2bc506619a4820a9d646c07720230218010604/hl-22453309577?width=512&height=512&source=storm&origin=transfer&url=https%3A%2F%2Fstorm-eu-west-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2pETlNzNkJRQT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--85b290bbbc0006f1000c8c5d0cce435454f719e0eddb8410e083b246c6cba28c%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMnBFVGxOek5rSlJRVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLTg1YjI5MGJiYmMwMDA2ZjEwMDBjOGM1ZDBjY2U0MzU0NTRmNzE5ZTBlZGRiODQxMGUwODNiMjQ2YzZjYmEyOGMiLCJleHAiOjE2NzY4MjAwMzksImlhdCI6MTY3NjgxNjQzOSwia2lkIjoiV1V0eCJ9.KnT6q-j6HqxtKbz_t9-aax91YF-FZ70w9WZxe5yGwBU&s=b536b3cd15cce39a20c76401d92eeace83da0249&Expires=1676820039&Signature=L0Mk0EGpWHD3P5FUUZEDZ3T0tHnhpu55GF77iGt5Tk5erHbsjetMKezpbx42qu7mzovCpx3Br2xGu~i28TEabEk14DHYZXnkXPVKde0d~~58lYKFg88SQKc0kquvv8CoaS9OZ2MOLZ7ORyXzhr1SVRf~lrAXvF2ZRL7tRI~Pk-jQYQnpwEC2QfUZjIY44zcY-fKgfH4p4Ovvrp9lpsuaz-TF5EXcIjo9iMN--ObSAUTBhM5v3ah3~lR55Mw7mDQTSfHzuNyU2L5cxhvjNunOurt4oG~F9xEsHzr9iX0xubdPs5ho0svP3SDF8Pqhdoumm9U7ZjdEpbMK9k7sxv~fOw__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ"
          alt="Random unsplash image"
        />
        <Loader color="red" variant="dots" sx={{ position: 'relative', top: -50 }} />
      </Box>
    </Box>
  );
}

export default LoadingPage;
