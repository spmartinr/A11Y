<template>
	<div class='container'>
		<h1 tabindex='-1' v-focus>Accessibility</h1>
		<ul class="nav nav-tabs" id='a11ytab' role='tablist'>
			<li class='nav-item'>
				<a class='nav-link active' id='WCAGtab' data-toggle='tab' href="#WCAG" role='tab' aria-controls='WCAG' aria-selected='true'>WCAG</a>
			</li>
			<li class='nav-item'>
				<a class='nav-link' id='section508' data-toggle='tab' href="#508" role='tab' aria-controls='508' aria-selected='false'>Section 508</a>
			</li>
			<li class='nav-item'>
				<a class='nav-link' id='cvaatab' data-toggle='tab' href="#cvaa" role='tab' aria-controls='cvaa' aria-selected='false'>CVAA</a>
			</li>
			<li class='nav-item'>
				<a class='nav-link' id='officetab' data-toggle='tab' href="#office" role='tab' aria-controls='office' aria-selected='false'>Microsoft Office</a>
			</li>
			<li class='nav-item'>
				<a class='nav-link' id='proto' data-toggle='tab' href="#prototypes" role='tab' aria-controls='prototypes' aria-selected='false'>Prototypes</a>
			</li>
		</ul>
		<div class="tab-content">
		  <div class="tab-pane active" id="WCAG" role="tabpanel" aria-labelledby="WCAGtab">
		  	<router-link to='/WCAG'>Web Content Accessibility Guidelines</router-link>
		  </div>
		  <div class="tab-pane" id="508" role="tabpanel" aria-labelledby="section508">
		  	<router-link to='/section'>Section 508</router-link>
		  </div>
		  <div class="tab-pane" id="cvaa" role="tabpanel" aria-labelledby="cvaatab">
		  	<router-link to='CVAA'>CVAA</router-link>
		  </div>
		  <div class="tab-pane" id="office" role="tabpanel" aria-labelledby="officetab">
		  	<router-link to='/office'>Microsoft Office</router-link>
		  </div>
		  <div class="tab-pane" id="prototypes" role="tabpanel" aria-labelledby="proto">
		  	<ul>
				<li>
					<router-link to='/accordion'>Accordions</router-link>
				</li>
				<li>
					<router-link to='/alerts'>Alerts & Notifications</router-link>
				</li>
				<li>
					<router-link to='bgimages'>Background Images</router-link>
				</li>
				<li>
					<router-link to='badges'>Badges & Indicators</router-link>
				</li>
				<li>
					<router-link to='buttons'>Buttons</router-link>
				</li>
				<li>
					<router-link to='cards'>Cards</router-link>
				</li>
				<li>
					<router-link to='contextmenu'>Contextual Menu</router-link>
				</li>
				<li>
					<router-link to='datatable'>Data Tables</router-link>
				</li>
				<li>
					<router-link to='datep'>Datepicker</router-link>
				</li>
				<li>
					<router-link to='hints'>Dynamic Hints</router-link>
				</li>
				<li>
					<router-link to='expanel'>Expansion Panels</router-link>
				</li>
				<li>
					<router-link to='links'>Links</router-link>
				</li>
				<li>
					<router-link to='listiles'>List Tiles</router-link>
				</li>
				<li>
					<router-link to='/modal'>Modals</router-link>
				</li>
				<li>
					<router-link to='pageheader'>Page Headers</router-link>
				</li>
				<li>
					<router-link to='pagination'>Pagination</router-link>
				</li>
				<li>
					<router-link to='playercontrols'>Player Controls</router-link>
				</li>
				<li>
					<router-link to='selectioncontrols'>Selection Controls</router-link>
				</li>
				<li>
					<router-link to='segcontrols'>Segmented Controls</router-link>
				</li>
				<li>
					<router-link to='/spinner'>Spinners</router-link>
				</li>
				<li>
					<router-link to='/tabs'>Tabs</router-link>
				</li>
				<li>
					<router-link to='formz'>Forms</router-link>
				</li>
				<li>
					<router-link to='textlist'>Text Lists</router-link>
				</li>
				<li>
					<router-link to='toast'>Toasts</router-link>
				</li>
				<li>
					<router-link to='tooltip'>Tooltips</router-link>
				</li>
				<li>
					<router-link to='browsercontrol'>Browser Controls</router-link>
				</li>
				<li>
					<router-link to='responsecodes'>HTTP Response Codes</router-link>
				</li>
				<li>
					<router-link to='loadmore'>Load More</router-link>
				</li>
				<li>
					<router-link to='navigation'>Navigation</router-link>
				</li>
				<li>
					<router-link to='session'>Session Timeout</router-link>
				</li>
			</ul>
		  </div>
		</div>
	</div>
</template>