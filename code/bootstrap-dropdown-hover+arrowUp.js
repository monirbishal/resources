.menu-icon {
	background: url('../assets/images/menuicons/down-arrow.png');
    background-size: cover;
    background-position: center;
    width: 15px;
	height: 8px;
	margin-left: 5px;
	transform: translateY(8px);
	position: absolute;
}
.arrow-up {
	transform: rotate(180deg) translateY(-5px);
}
// css 


// new scripts 
jQuery(document).on('click', '.mega-dropdown', function (e) {
  e.stopPropagation()
})

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($('.menu-icon')).addClass('arrow-up');
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($('.menu-icon')).removeClass('arrow-up');
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});
// js

//$(function(){
//  $(".dropdown").on("show.bs.dropdown hide.bs.dropdown", function(){
//    $(this).find(".menu-icon").toggleClass("arrow-up");
//  });
//});

<header>
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container">
					<a class="navbar-brand" href="index.html">
						<img src="assets/images/HeaderLogo_102318.svg" height="50" alt="Logo">
					</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse letterspace2" id="navbarSupportedContent">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item dropdown mega-dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
									data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span>Why Pretty Books?</span>
									<span class="menu-icon"></span>
								</a>
								<ul class="dropdown-menu mega-dropdown-menu row menu-item-box-area ">
									<li class="menu-item-box">
										<img src="assets/images/menuicons/001-process.png" alt="">
										<h3><a href="#">Experience</a></h3>
										<p>what we have done</p>
									</li>
									<li class="menu-item-box">
										<img src="assets/images/menuicons/002-people.png" alt="">
										<h3><a href="#">Experience</a></h3>
										<p>what we have done</p>
									</li>
									<li class="menu-item-box">
										<img src="assets/images/menuicons/003-routine.png" alt="">
										<h3><a href="#">Experience</a></h3>
										<p>what we have done</p>
									</li>
									<li class="menu-item-box">
										<img src="assets/images/menuicons/004-workflow.png" alt="">
										<h3><a href="#">Experience</a></h3>
										<p>what we have done</p>
									</li>
									<li class="menu-item-box">
										<img src="assets/images/menuicons/005-briefcase.png" alt="">
										<h3><a href="#">Experience</a></h3>
										<p>what we have done</p>
									</li>
								</ul>
							</li>
							<li class="nav-item dropdown mega-dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
									data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span>What we do</span>
								</a>
								<ul class="dropdown-menu mega-dropdown-menu row menu-item-box-area ">
									<li class="menu-item-box col-md-5">
										<h4>INDUSTRY</h4>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
									</li>

									<li class="menu-item-box col-md-5">
										<h4>INDUSTRY</h4>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
									</li>
									<li class="menu-item-box col-md-2 more-menu-item-box">
										<h4>More</h4>
										<h3><a href="#">Manufacturing </a></h3>
										<h3><a href="#">Manufacturing </a></h3>
										<h3><a href="#">Manufacturing </a></h3>
										<h3><a href="#">Manufacturing </a></h3>
									</li>
								</ul>
							</li>
							
							<li class="nav-item">
								<a class="nav-link " href=""><span>Get Started</span></a>
							</li>
							<li class="nav-item dropdown mega-dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
									data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span>Solutions</span>
									<span class="menu-icon"></span>
								</a>
								<ul class="dropdown-menu mega-dropdown-menu row menu-item-box-area ">
									<li class="menu-item-box col-md-5">
										<h4>INDUSTRY</h4>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
									</li>

									<li class="menu-item-box col-md-5">
										<h4>INDUSTRY</h4>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
									</li>
									<li class="menu-item-box col-md-2 more-menu-item-box">
										<h4>More</h4>
										<h3><a href="#">Manufacturing </a></h3>
										<h3><a href="#">Manufacturing </a></h3>
										<h3><a href="#">Manufacturing </a></h3>
										<h3><a href="#">Manufacturing </a></h3>
									</li>
								</ul>
							</li>
							<li class="nav-item dropdown mega-dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
									data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span>Resources</span>
									<span class="menu-icon"></span>
								</a>
								<ul class="dropdown-menu mega-dropdown-menu row menu-item-box-area ">
									<li class="menu-item-box col-md-5">
										<h4>INDUSTRY</h4>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
									</li>

									<li class="menu-item-box col-md-5">
										<h4>INDUSTRY</h4>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
										<div class="menu-item-link">
											<h3><a href="#">Manufacturing </a></h3>
											<p>You manu facture and sell goods, working to streamline production and
												track your inventory</p>
										</div>
									</li>
									<li class="menu-item-box col-md-2 more-menu-item-box">
										<h4>More</h4>
										<h3><a href="#">Manufacturing </a></h3>
										<h3><a href="#">Manufacturing </a></h3>
										<h3><a href="#">Manufacturing </a></h3>
										<h3><a href="#">Manufacturing </a></h3>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
    // html
