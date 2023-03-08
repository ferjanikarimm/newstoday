import React from "react";
import { Box, Image, Loader } from "@mantine/core";

function LoadingPage() {
  return (
    <Box
      /*sx={{
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
      }}*/
    >
      <Box
        style={{
          width: 200,
          textAlign: "center",
        }}
      >
        <Image
          src="https://scontent.ftun14-1.fna.fbcdn.net/v/t1.15752-9/331660205_725855115713634_6851562038351684894_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Vrd6QWJ0kWYAX_gRB95&_nc_ht=scontent.ftun14-1.fna&oh=03_AdRWv3iA--NA5XK8VJ2zzR_6E5LHebpPvK_Uh7p6yWMNow&oe=641C4372"
          alt="Random unsplash image"
        />
        <Loader
          color="red"
          variant="dots"
          sx={{ position: "relative", top: -50 }}
        />
      </Box>
    </Box>
  );
}

export default LoadingPage;
