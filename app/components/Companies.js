import Apple from "./icons/Apple";
import SpaceX from "./icons/SpaceX";
import Binance from "./icons/Binance";
import Tesla from "./icons/Tesla";

const Companies = () => {
    return (
        <div className="flex items-center justify-between px-4">
          <Apple />
          <SpaceX />
          <Binance />
          <Tesla />
        </div>
      );
};

export default Companies;