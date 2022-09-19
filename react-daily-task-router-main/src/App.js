import './App.css';
import {
  HashRouter,
  NavLink,
  Route,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { Fragment } from 'react';

const Todo = () => {
  return (
    // Fargment 為 Logout 的父層 (引入「子元件」時需有父層)
    <Fragment>
      <p>這是 Todo 頁面</p>
      <Logout />
    </Fragment>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Logout = () => {
  const nagivite = useNavigate();
  return (
    <button onClick={()=>{nagivite('/login')}} >登出</button>
  )
}
const Post = () => {
  return (
    <div>
      <p>這是 Post 頁面</p>
      <Outlet />
    </div>
  )
}
const PostId = () => {
  const params = useParams();
  return (
    <p>Post ID:{params.PostId}</p>
  );
}
// 另一種寫法
// const PostDetail = () => {
//   let { postId } = useParams();
//   return <p>Post ID: {postId}</p>
// }



function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
          <NavLink to="/post/post123">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/post" element={<Post/>}>
            <Route path="/:postId" element={<PostId/>}></Route>
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
