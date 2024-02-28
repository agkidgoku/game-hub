import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameQuery from "../hooks/store";

const NavBar = () => {
  const setSelectedGenre = useGameQuery((s) => s.setGenre);
  const setSelectedPlatformId = useGameQuery((s) => s.setPlatform);

  return (
    <HStack padding="10px">
      <Link
        to={"/"}
        onClick={() => {
          setSelectedGenre();
          setSelectedPlatformId();
        }}
      >
        <Image src={logo} boxSize="60px" objectFit={"cover"} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
