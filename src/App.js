import { Routes,Route } from "react-router-dom";
import { lazy } from "react";

import SharedLayout from "./components/SharedLayout/SharedLayout";

const AddPetPage = lazy(()=>import('pages/AddPetPage/AddPetPage'))
const LoginPage = lazy(()=>import('pages/LoginPage/LoginPage'));
const MainPage = lazy(()=>import('pages/MainPage/MainPage'));
const NewsPage = lazy(()=>import('pages/NewsPage/NewsPage'));
const NotFoundPage = lazy(()=>import('pages/NotFoundPage/NotFoundPage'));
const NoticesPage = lazy(()=>import('pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(()=>import('pages/OurFriendsPage/OurFriendsPage'));
const RegisterPage = lazy(()=>import('pages/RegisterPage/RegisterPage'));
const UserPage = lazy (()=>import('pages/UserPage/UserPage'));





const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<SharedLayout/>}>
        <Route index element = {<MainPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="add-pet" element={<AddPetPage/>}/>
        <Route path = "news" element={<NewsPage/>}/>
        <Route path="notices/:categoryName" element={<NoticesPage/>}/>
        <Route path="friends" element={<OurFriendsPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
        <Route path="user" element={<UserPage/>}/>
        <Route path="*" element = {<NotFoundPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;