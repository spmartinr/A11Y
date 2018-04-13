<template>
	<nav class='navbar navbar-expand-lg navbar-dark bg-primary'>
		<a class='navbar-brand' href='#'>
			<span>
				<i class='fa fa-book' aria-hidden='true'>Shane Martin</i>
			</span>
		</a>
		
		<button class='navbar-toggler collapsed' type='button' data-toggle='collapse' data-target='navbar'>
				<i class='fas fa-bars' aria-hidden='true'></i>
		</button>

		<div class='collapse navbar-collapse' id='navbar'>
			<ul class='navbar-nav ml-auto'>
				<li class='nav-item'>
					<router-link to='/home' class='nav-link'>
						Home
					</router-link>
				</li>
				<li class='nav-item'>
					<router-link to='/about' class='nav-link'>
						About
					</router-link>
				</li>
				<li class='nav-item dropdown'>
					<a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' data-toggle='dropdown'>
						Projects
					</a>
					<div class='dropdown-menu'>
						<router-link to='/project0' class='dropdown-item'>
							Project 1
						</router-link>
						<router-link to='/project1' class='dropdown-item'>
							Project 2
						</router-link>
						<router-link to='/project2' class='dropdown-item'>
							Project 3
						</router-link>
					</div>
				</li>
				<li class='nav-item'>
					<a class='nav-link' href='#'>
						Contact
					</a>
				</li>
			</ul>
		</div>
	</nav>
</template>