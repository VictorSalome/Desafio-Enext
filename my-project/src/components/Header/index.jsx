import { TextField } from "@mui/material";
import Logo from "../../assets/Logo.png";
import Line from "../../assets/Line.png";
import Idiomas from "../../assets/Idiomas.png";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import MaisUm from "../../assets/+1.png";

export const Header = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="py-3 flex pr-20 ">
        <img src={Logo} className="w-full" alt="LogoHeader" />
      </div>

      <div className="w-full max-w-md flex  ">
        <TextField
          id="standard-basic"
          label="O que está procurando?"
          variant="standard"
          className="w-full "
        />

        <SearchIcon className="mt-3  cursor-pointer" />
      </div>

      <div className="flex flex-row mt-4 pr-2">
        <div className="flex items-center mb-2 p-4 ">
          <AccountCircleIcon className="mr-2" />
          <span>Minha Conta</span>
        </div>

        <div className="flex items-center mb-2">
          <LocalGroceryStoreOutlinedIcon />
          <img src={MaisUm} alt="mais um " className="py-7 " />
        </div>
      </div>

      <div className="p-3">
        <img src={Line} alt="LineImg" />
      </div>

      <div className="p-3 ">
        <img src={Idiomas} alt="idiomasimg" />
      </div>
    </div>
  );
};
