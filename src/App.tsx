import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { EarnPage, HomePage, RewardPage } from "./page";

function App() {

  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="/reward" element={<RewardPage />} />
        <Route path="/earn" element={<EarnPage />} />
      </Route>
    )
  );
  return (
    <div className="bg-black h-screen !overflow-hidden flex justify-center">
      <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App;
