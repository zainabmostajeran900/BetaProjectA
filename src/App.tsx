import { Navbar } from "./components/Navbar";
import { TopHeader } from "./components/TopHeader";
import { SearchInput } from "./components/SearchInput";
import { HotMagazine } from "./components/HotMagazine";
import { NewMagazine } from "./components/NewMagazine";

function App() {
  return (
    <>
      <Navbar />
      <div className="container max-w-[1400px] pt-30 lg:pt-19 mx-auto">
        <div className="hidden lg:block">
          <TopHeader />
        </div>
        <SearchInput />
        <div className="block lg:hidden">
          <TopHeader />
        </div>
        <HotMagazine />
        <NewMagazine />
      </div>
    </>
  );
}

export default App;
