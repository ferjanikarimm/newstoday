import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Avatar,
  Box,
} from "@mantine/core";
import { Link, Outlet } from "react-router-dom";

import AppshelNavBar from "../Navbar/AppshelNavBar";

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 180, lg: 250 }}
        >
          <AppshelNavBar />
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <Box
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Avatar
              component={Link}
              to="/all"
              size={80}
              src="https://scontent.ftun14-1.fna.fbcdn.net/v/t1.15752-9/331660205_725855115713634_6851562038351684894_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Vrd6QWJ0kWYAX_gRB95&_nc_ht=scontent.ftun14-1.fna&oh=03_AdRWv3iA--NA5XK8VJ2zzR_6E5LHebpPvK_Uh7p6yWMNow&oe=641C4372"
              alt="logo"
            />
          </Box>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
}
