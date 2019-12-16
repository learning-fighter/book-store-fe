import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import Login from './pages/login/Login'
import Register from './pages/login/Register'
import Books from './pages/user/Book/Books'
import BookDetail from './pages/user/Book/BookDetail'
import Navigation from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/user/Home/Home'
import Cart from './pages/user/Cart/Cart'
import Categories from './pages/admin/Categories/Categories'
import AddCategory from './pages/admin/Categories/AddCategory'
import BookList from './pages/admin/Books/Books'
import AddBook from './pages/admin/Books/AddBook'
import Users from './pages/admin/Users/Users'
import AddUser from './pages/admin/Users/AddUser'

  function getUser() {
    return localStorage.getItem('userData')
      ? JSON.parse(localStorage.getItem('userData'))
      : null
  }

  function App(props) {
    const userData = getUser()

  return (
    <div className="App">
        <Navigation userData={userData}/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          
          {/* LOGIN PAGES */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          {/* USER PAGES */}
          <Route path="/books" component={Books} />
          <Route path="/cart" component={Cart} />
          <Route path="/detail/:id" component={BookDetail} />

          {/* ADMIN PAGES */}
          <Route path="/categories" component={Categories} />
          <Route path="/addCategory" component={AddCategory} />
          <Route path="/bookList" component={BookList} />
          <Route path="/addBook" component={AddBook} />
          <Route path="/users" exact component={Users} />
          <Route path="/addUser" component={AddUser} />
        </Switch>
        <Footer />
    </div>
  );
}

export default withRouter(App);
