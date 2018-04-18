<template>
	<nav class='navbar navbar-expand-lg navbar-dark bg-dark' aria-label='primary'>
		<a class='navbar-brand' href='#'>Shane Martin</a>
		<button class='navbar-toggler collapsed expansion' type='button' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='#navbar'>
			<span class='sr-only'>Toggle Navigation</span>
			<span class='navbar-toggler-icon'></span>
		</button>
		<div class='collapse navbar-collapse' id='navbar'>
			<ul class='navbar-nav ml-auto'>
				<li class='nav-item dropdown'>
					<a class='nav-link dropdown-toggle expansion' href='#' id='navbarDropdown0' data-toggle='dropdown' aria-expanded='false' aria-haspopup='true' role='button'>Professional Development</a>
					<div class='dropdown-menu' aria-labelledby='navbarDropdown0' role='menu'>
						<router-link to='/accessibility' class='dropdown-item' role='menuitem'>Accessibility</router-link>
						<div class='dropdown-divider'></div>
						<router-link to='/development' class='dropdown-item' role='menuitem'>Web Development</router-link>
						<div class='dropdown-divider'></div>
						<router-link to='/management' class='dropdown-item' role='menuitem'>Management</router-link>
					</div>
				</li>
				<li class='nav-item dropdown'>
					<a class='nav-link dropdown-toggle expansion' href='#' id='navbarDropdown1' data-toggle='dropdown' aria-expanded='false' aria-haspopup='true' role='button'>Personal Projects</a>
					<div class='dropdown-menu' aria-labelledby='navbarDropdown1' role='menu'>
						<router-link to='/realestate' class='dropdown-item' role='menuitem'>Real Estate</router-link>
						<div class='dropdown-divider'></div>
						<router-link to='/automotive' class='dropdown-item' role='menuitem'>Automotive</router-link>
						<div class='dropdown-divider'></div>
						<router-link to='/hiking' class='dropdown-item' role='menuitem'>Hiking</router-link>
					</div>
				</li>
				<li class='nav-item'>
					<router-link to='/peers' class='nav-link'>Peer Resources</router-link>
				</li>
				<li class='nav-item'>
					<router-link to='/contact' class='nav-link' href='#'>Contact</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>