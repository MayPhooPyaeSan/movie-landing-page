import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import TopCartoons from "./components/TopCartoons";
import Beauty from "./components/cartoons/Beauty";
import WALLE from "./components/cartoons/WALLE";
import Elemental from "./components/cartoons/Elemental";
import FindingNemo from "./components/cartoons/FindingNemo";
import Frozen from "./components/cartoons/Frozen";
import Minions from "./components/cartoons/Minions";
import Stitch from "./components/cartoons/Stitch";
import Pooh from "./components/cartoons/Pooh";
import Hotel from "./components/cartoons/Hotel";
import BlueSmurfs from "./components/cartoons/BlueSmurfs ";
import Zootopia from "./components/cartoons/Zootopia";
import Barbie from "./components/cartoons/Barbie";
import TopMovies from "./components/TopMovies";
import ToAllTheBrightPlaces from "./components/movies/ToAllTheBrightPlaces";
import LoveRosie from "./components/movies/LoveRosie";
import Holidate from "./components/movies/Holidate";
import NottingHill from "./components/movies/NottingHill";
import Summer from "./components/movies/Summer";
import PrideAndPrejudice from "./components/movies/PrideAndPrejudice";
import Cassiopeia from "./components/movies/Cassiopeia";
import Sunset from "./components/Thaidramas/Sunset";
import TheHandmaiden from "./components/movies/TheHandmaiden";
import Monster from "./components/movies/Monster";
import Ourseason from "./components/movies/Ourseason";
import TheReader from "./components/movies/TheReader";
import TopCdramas from "./components/TopCdramas";
import LighterAndPrincess from "./components/Cdramas/LighterAndPrincess";
import HiddenLove from "./components/Cdramas/HiddenLove";
import TheRationaLlife from "./components/Cdramas/TheRationaLlife";
import WhyWomenLove from "./components/Cdramas/WhyWomenLove";
import LessonInLove from "./components/Cdramas/LessonInLove";
import SheAndHerPerfectHusband from "./components/Cdramas/SheAndHerPerfectHusband";
import Findyourself from "./components/Cdramas/Findyourself";
import BeginAgain from "./components/Cdramas/BeginAgain";
import TopThaidramas from "./components/TopThaidramas";
import Sowayree from "./components/Thaidramas/Sowayree";
import MyAmbulance from "./components/Thaidramas/MyAmbulance";
import MyHusbandInLaws from "./components/Thaidramas/MyHusbandInLaws";
import Krachao from "./components/Thaidramas/Krachao";
import MyForeverSunshine from "./components/Thaidramas/MyForeverSunshine";
import Devilsister from "./components/Thaidramas/Devilsister";
import GameSanaeha from "./components/Thaidramas/GameSanaeha";
import TheNoteBook from "./components/movies/TheNoteBook";
import TopKdramas from "./components/TopKdramas";
import Whyher from "./components/Koreadramas/Whyher";
import OurBelovedSummmer from "./components/Koreadramas/OurBelovedSummmer";
import SomethingInTheRain from "./components/Koreadramas/SomethingInTheRain";
import Watermelon from "./components/Koreadramas/Watermelon";
import TemperatureOfLove from "./components/Koreadramas/TemperatureOfLove";
import Theglory from "./components/Koreadramas/Theglory";
import YouAreMySpring from "./components/Koreadramas/YouAreMySpring";
import Mother from "./components/Koreadramas/Mother";
import MyLoveFromStar from "./components/Koreadramas/MyLoveFromStar";
import Startup from "./components/Koreadramas/Startup";
import ToSamdalri from "./components/Koreadramas/ToSamdalri";
import Romancebook from "./components/Koreadramas/Romancebook";
import Itsokay from "./components/Koreadramas/Itsokay";
import ChaChaCha from "./components/Koreadramas/ChaChaCha";
import AngleMission from "./components/Koreadramas/AngleMission";
import Playbook from "./components/Koreadramas/Playbook";
import TwentyFIveTwentyOne from "./components/Koreadramas/TwentyFIveTwentyOne";
import GoodMotherBadMother from "./components/Koreadramas/GoodMotherBadMother";
import Byemama from "./components/Koreadramas/Byemama";
import Melancholia from "./components/Koreadramas/Melancholia";
import Best from "./components/TredingNow";
import MeetMeAfterSchool from "./components/TrendingNow/MeetMeAfterSchool";
import Dickinson from "./components/TrendingNow/Dickinson";
import StangerThings from "./components/TrendingNow/StangerThings";
import Exchange from "./components/TrendingNow/Exchange";
import Moving from "./components/TrendingNow/Moving";
import FallenLeaf from "./components/TrendingNow/FallenLeaf";
import Mebeforeyou from "./components/TrendingNow/Mebeforeyou";
import Snowdrop from "./components/TrendingNow/Snowdrop";
import Footer from "./components/Footer";
import ScrollUpBtn from "./components/ScrollUpBtn";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Layout />
                <Home />
                <TopCartoons />
                <TopMovies />
                <TopCdramas />
                <TopThaidramas />
                <TopKdramas />
                <Best />
                <ScrollUpBtn />
                <Footer />
              </>
            }
          />
          <Route path="/Pooh" element={<Pooh />} />
          <Route path="/FindingNemo" element={<FindingNemo />} />
          <Route path="/Elemental" element={<Elemental />} />
          <Route path="/WALLE" element={<WALLE />} />
          <Route path="/Barbie" element={<Barbie />} />
          <Route path="/Beauty" element={<Beauty />} />
          <Route path="/Frozen" element={<Frozen />} />
          <Route path="/Minions" element={<Minions />} />
          <Route path="/Stitch" element={<Stitch />} />
          <Route path="/Hotel" element={<Hotel />} />
          <Route path="/Smurfs" element={<BlueSmurfs />} />
          <Route path="/zootopia" element={<Zootopia />} />

          <Route
            path="/ToAllTheBrightPlaces"
            element={<ToAllTheBrightPlaces />}
          />
          <Route path="/loverosie" element={<LoveRosie />} />
          <Route path="/holidate" element={<Holidate />} />
          <Route path="/nottingHill" element={<NottingHill />} />
          <Route path="/500Summer" element={<Summer />} />
          <Route path="/PrideAndPrejudice" element={<PrideAndPrejudice />} />
          <Route path="/Cassiopeia" element={<Cassiopeia />} />
          <Route path="/handmaiden" element={<TheHandmaiden />} />
          <Route path="/thenotebook" element={<TheNoteBook />} />
          <Route path="/monster" element={<Monster />} />
          <Route path="/ourseason" element={<Ourseason />} />
          <Route path="/theReader" element={<TheReader />} />
          <Route path="/lighterAndPrincess" element={<LighterAndPrincess />} />
          <Route path="/hiddenLove" element={<HiddenLove />} />
          <Route path="/therationallife" element={<TheRationaLlife />} />
          <Route path="/whywomenlove" element={<WhyWomenLove />} />
          <Route path="/lessonInLove" element={<LessonInLove />} />
          <Route
            path="/sheandherperfecthusband"
            element={<SheAndHerPerfectHusband />}
          />
          <Route path="/findyourself" element={<Findyourself />} />
          <Route path="/beginAgain" element={<BeginAgain />} />
          <Route path="/sowayree" element={<Sowayree />} />
          <Route path="/myambulance" element={<MyAmbulance />} />
          <Route path="/myhusbandinlaws" element={<MyHusbandInLaws />} />
          <Route path="/Krachao" element={<Krachao />} />
          <Route path="/myforeversunshine" element={<MyForeverSunshine />} />
          <Route path="/devilsister" element={<Devilsister />} />
          <Route path="/GameSanaeha" element={<GameSanaeha />} />
          <Route path="/sunset" element={<Sunset />} />
          <Route path="/whyher" element={<Whyher />} />
          <Route path="/ourbelovedsummmer" element={<OurBelovedSummmer />} />
          <Route path="/somethingintherain" element={<SomethingInTheRain />} />
          <Route path="/watermelon" element={<Watermelon />} />
          <Route path="/temperatureoflove" element={<TemperatureOfLove />} />
          <Route path="/theglory" element={<Theglory />} />
          <Route path="/youaremyspring" element={<YouAreMySpring />} />
          <Route path="/mother" element={<Mother />} />
          <Route path="/mylovefromstar" element={<MyLoveFromStar />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/samdalri" element={<ToSamdalri />} />
          <Route path="/romancebook" element={<Romancebook />} />
          <Route path="/itsokay" element={<Itsokay />} />
          <Route path="/chachacha" element={<ChaChaCha />} />
          <Route path="/anglemission" element={<AngleMission />} />
          <Route path="/playbook" element={<Playbook />} />
          <Route path="/melancholida" element={<Melancholia />} />
          <Route path="/2521" element={<TwentyFIveTwentyOne />} />
          <Route
            path="/goodmotherbadmother"
            element={<GoodMotherBadMother />}
          />
          <Route path="/byemama" element={<Byemama />} />
          <Route path="/meetmeafterschool" element={<MeetMeAfterSchool />} />
          <Route path="/stangerthings" element={<StangerThings />} />
          <Route path="/dickinson" element={<Dickinson />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/moving" element={<Moving />} />
          <Route path="/fallenleaf" element={<FallenLeaf />} />
          <Route path="/mebeforeyou" element={<Mebeforeyou />} />
          <Route path="/snowdrop" element={<Snowdrop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
