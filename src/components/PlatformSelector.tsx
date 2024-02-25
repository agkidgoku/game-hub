import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../entities/Platform";
import usePlatform from "../hooks/usePlatform";
import platforms from "../data/platforms";
import useGameQuery from "../hooks/store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameQuery((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQuery((s) => s.setPlatform);
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {/* <MenuItem onClick={() => onSelectPlatform()}>All</MenuItem> */}
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
