import "./App.scss";
import Header from "./Components/Header";
import Curoser from "./Components/Curoser";
import "bootstrap/dist/css/bootstrap.min.css";
import Chordimages, {
  myntraExclusive,
  Catogieries,
  TopBrandsData,
  FooterShopping,
  UsefuLinks,
  CoustomerPolicies,
  AppOnMobile,
  apppPromises,
  mensTab1,
  mensTab2,
  mensTab3,
  mensTab4,
  mensTab5,
  mensTab6,
  mensTab7,
  mensTab8,
  mensTab9,
  products,
  dropDown,
  firstProfileData,
  secondProfileData,
  thirdProfileData,
  fourthProfileData
} from "./constFile";
import DealOfTheDay from "./Components/DealOfTheDay component";
import ExclusiveBrands from "./Components/ExclusiveBrands-component";
import CatogeriesOfBag from "./Components/Catogieries Of Bag";
import TopBrands from "./Components/Top Brands";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Products from "./Components/products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header
          mensTab1={mensTab1}
          mensTab2={mensTab2}
          mensTab3={mensTab3}
          mensTab4={mensTab4}
          mensTab5={mensTab5}
          mensTab6={mensTab6}
          mensTab7={mensTab7}
          mensTab8={mensTab8}
          mensTab9={mensTab9}
          firstProfileData={firstProfileData}
  secondProfileData={secondProfileData}
  thirdProfileData={thirdProfileData}
  fourthProfileData={fourthProfileData}
        /> 
        <Routes>
        <Route path='' element={
            <>  
      <Curoser />
      <DealOfTheDay Chordimages={Chordimages} />
      <ExclusiveBrands myntraExclusive={myntraExclusive} />
      <CatogeriesOfBag Catogieries={Catogieries} />
      <TopBrands TopBrandsData={TopBrandsData} />           
        </>} />
      <Route path='/products' element={
        <>
        <Products products={products} dropDown={dropDown} />
        
        </>
      }
      
      
      />

        </Routes>
       <Footer
        FooterShopping={FooterShopping}
        UsefuLinks={UsefuLinks}
        CoustomerPolicies={CoustomerPolicies}
        AppOnMobile={AppOnMobile}
        apppPromises={apppPromises}
      />
      </BrowserRouter>
      
     
      
      
      
      
      
    
    </div>
  );
}

export default App;
