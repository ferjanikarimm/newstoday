import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Avatar,
} from "@mantine/core";
import { NavLink } from "react-router-dom";

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
          width={{ sm: 200, lg: 300 }}
        >
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/sign">Sign</NavLink>
              </li>
              <li>
                <NavLink to="/loading">Loading</NavLink>
              </li>
              <li>
                <NavLink to="/carousel">Carousel</NavLink>
              </li>
            </ul>
          </nav>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
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
              size={80}
              src="https://scontent.ftun14-1.fna.fbcdn.net/v/t1.15752-9/331660205_725855115713634_6851562038351684894_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Vrd6QWJ0kWYAX_gRB95&_nc_ht=scontent.ftun14-1.fna&oh=03_AdRWv3iA--NA5XK8VJ2zzR_6E5LHebpPvK_Uh7p6yWMNow&oe=641C4372"
              alt="logo"
            />
          </div>
        </Header>
      }
    >
      <Text></Text>
    </AppShell>
  );
}
;