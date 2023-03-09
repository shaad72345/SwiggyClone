function navbar(){
    return `
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png" alt="" id="logo">
      <span class="ml-3 text-xl">
          <div id="nav-location">
                <span id="other">
                    <span class="other">Other</span>
                </span>
                <span id="town">
                    Berhampur,Ganjam,Odisha
                </span>
                <span >
                    <i id="nav-down" class="fa-solid fa-chevron-down"></i>
                </span>
            </div>
      </span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 ">
         <i class="fa-solid fa-magnifying-glass"></i>
          <span id="search-text" style="margin-left: 7px;">Search</span>
      </a>
      <a class="mr-5 ">
        <i class="fa-solid fa-percent"></i>
        <span id="discount-text" style="margin-left: 7px;" >Discount</span>
        <sup class="discount-text" style="color: darkorange;">NEW</sup>
      </a>
      <a class="mr-5 ">
        <i class="fa-solid fa-circle-info"></i>
        <span id="help-text" style="margin-left: 7px;" >Help</span>
      </a>
      <div class="UserName dropdown">
      <a class="mr-5 dropbtn">
        <i class="fa-solid fa-user-plus"></i>
         <span id="Profile" style="margin-left: 7px;">UserName</span>
     </a>
     <div class="dropdown-content">
      <a href="#">Profile</a>
      <a href="#">Order</a>
      <a href="#">Swiggy One</a>
      <a href="#">Favourites</a>
      <a href="#" id="logout">Logout</a>
    </div> 
    </div>

         <div>
      <a class="mr-5 signin-nav" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <i class="fa-solid fa-user-plus"></i>
        <span id="signin-text" style="margin-left: 7px;" >Sign in</span>
        </a>
     
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h3 class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></h3>
  </div>
  <!-- Offcavbas -->
  <div class="offcanvas-body" id="offcanvas-body">

    <!-- canvas form for login form -->
      <div class="login-div">

        <div id="login-text">
          Login
        </div>
        <div class="blank"></div>
        <div class="create">
          or <span id="create">create an account</span>
        </div>
        <img class="_2tuBw _12_oN jdo4W" width="100" height="105" style="margin-right: 30px;" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r">
      </div>
      <form action="" id="login-form">
        <div>
          <div id="phone-box">
            <input class="_381fS" type="tel"  id="mobile" tabindex="1" maxlength="10" autocomplete="off" value="">
            <div></div>
            <label class="_1Cvlf _2tL9P " for="mobile">Phone number</label>
          </div>
        </div>
        <div class="login-button">
          <a class="a-ayg"><input type="submit" value="LOGIN" id="log" ></a>
        </div>
        <div class="additional">
          By clicking on Login, I accept the 
          <a class="Terms" href="#" >Terms &amp; Conditions</a>
          &
          <a class="Policy" href="/privacy-policy">Privacy Policy</a>
        </div>
      </form>

    <!-- canvas form for signup form -->

      <div class="signup-div">

        <div id="signup-text">
          Sign up
        </div>
        <div class="blank"></div>
        <div class="already">
          or <span id="already">login to your account</span>
        </div>
        <img class="_2tuBw _12_oN jdo4W" width="100" height="105" style="margin-right: 30px;" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r">
      </div>
      <form action="" id="signup-form">
        <div>
          <div id="phone-box">
            <input class="_381fS mobile" type="number"  id="mobile"tabindex="1" maxlength="10" autocomplete="off">
            <div></div>
            <label class="_1Cvlf _2tL9P " for="mobile">Phone number</label>
          </div>
        </div>
        <div>
          <div id="name-box">
            <input class="_381fS" type="text"  id="name" tabindex="1"  autocomplete="off" value="">
            <div></div>
            <label class="_1Cvlf _2tL9P " for="name">Name</label>
          </div>
        </div>
        <div>
          <div id="email-box">
            <input class="_381fS" type="email"  id="email" tabindex="1"  autocomplete="off" value="">
            <div></div>
            <label class="_1Cvlf _2tL9P " for="email">Email</label>
          </div>
        </div>
        <div class="signup-button">
          <a class="a-ayg"><input type="submit"  value="CONTINUE" id="sign"></a>
        </div>
        <div class="additional">
          By creating an account, I accept the 
          <a class="Terms" href="#" >Terms &amp; Conditions</a>
          &
          <a class="Policy" href="#">Privacy Policy</a>
        </div>
      </form>

    </div>
</div>
        </div>
      <a class="mr-5 ">
        <i class="fa-solid fa-cart-shopping"></i>
        <span id="cart-text" style="margin-left: 7px;" >Cart</span>
      </a>
    </nav>
  </div>

  <!-- toast alert -->
  <div class="toast-container position-fixed bottom-10 end-0 p-3" >
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close">Ok</button>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
    `
}

export {navbar}