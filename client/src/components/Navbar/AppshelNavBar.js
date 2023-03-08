import { Box, NavLink } from "@mantine/core";
import { useParams } from "react-router-dom";
import {
  IconNews,
  IconAugmentedReality2,
  IconBallFootball,
  IconPlant,
  IconActivity,
  IconBusinessplan,
  IconDeviceTv,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function AppshelNavBar() {
  const { category } = useParams();

  return (
    <Box width={{ sm: 180, lg: 250 }}>
      <NavLink
        icon={<IconNews size="1rem" stroke={1.5} color="red" />}
        label="Latest"
        component={Link}
        to="/all"
        color="red"
        active={category === "all"}
      />
      <NavLink
        icon={<IconAugmentedReality2 size="1rem" stroke={1.5} color="red" />}
        label="Technology"
        component={Link}
        to="/technology"
        color="red"
        active={category === "technology"}
      />
      <NavLink
        icon={<IconBallFootball size="1rem" stroke={1.5} color="red" />}
        label="Sports"
        component={Link}
        to="/sports"
        color="red"
        active={category === "sports"}
      />
      <NavLink
        icon={<IconPlant size="1rem" stroke={1.5} color="red" />}
        label="Science"
        component={Link}
        to="/science"
        color="red"
        active={category === "science"}
      />
      <NavLink
        icon={<IconActivity size="1rem" stroke={1.5} color="red" />}
        label="Health"
        component={Link}
        to="/health"
        color="red"
        active={category === "health"}
      />
      <NavLink
        icon={<IconDeviceTv size="1rem" stroke={1.5} color="red" />}
        label="Entertainment"
        component={Link}
        to="/entertainment"
        color="red"
        active={category === "entertainment"}
      />
      <NavLink
        icon={<IconBusinessplan size="1rem" stroke={1.5} color="red" />}
        label="Business"
        component={Link}
        to="/business"
        color="red"
        active={category === "business"}
      />
    </Box>
  );
}
