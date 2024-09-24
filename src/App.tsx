import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import Blog  from './pages/Blog'
import BlogDescription from './pages/BlogDescription'
import PublishBlog from './pages/publish'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path ="/blogs/:id" element={<BlogDescription />} />
          <Route path ="/publish" element={<PublishBlog/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App