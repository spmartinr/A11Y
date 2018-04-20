<template>
	<div class='container'>
		<h1 tabindex='-1' v-focus>Best Practices</h1>
		<ul class="nav nav-tabs" id='practicestab' role='tablist'>
			<li class='nav-item'>
				<a class='nav-link active' id='webtab' data-toggle='tab' href="#web" role='tab' aria-controls='web' aria-selected='true'>Web</a>
			</li>
			<li class='nav-item'>
				<a class='nav-link' id='adobetab' data-toggle='tab' href="#adobe" role='tab' aria-controls='adobe' aria-selected='false'>Adobe PDF</a>
			</li>
			<li class='nav-item'>
				<a class='nav-link' id='androidtab' data-toggle='tab' href="#android" role='tab' aria-controls='android' aria-selected='false'>Android OS</a>
			</li>
			<li class='nav-item'>
				<a class='nav-link' id='delphitab' data-toggle='tab' href="#delphi" role='tab' aria-controls='delphi' aria-selected='false'>Delphi</a>
			</li>
			<li class='nav-item'>
				<a class='nav-link' id='embeddedtab' data-toggle='tab' href="#embedded" role='tab' aria-controls='embedded' aria-selected='false'>Embedded Software</a>
			</li>
			<li class='nav-item'>
				<a class='nav-link' id='hardtab' data-toggle='tab' href="#hard" role='tab' aria-controls='hard' aria-selected='false'>Hardware, Telecommunications, and ACS</a>
			</li>
			<li class='nav-item'>
				<a class='nav-link' id='iostab' data-toggle='tab' href="#ios" role='tab' aria-controls='ios' aria-selected='false'>iOS</a>
			</li>
			<li class='nav-item'>
				<a class='nav-link' id='javatab' data-toggle='tab' href="#java" role='tab' aria-controls='java' aria-selected='false'>Java Software</a>
			</li>	
			<li class='nav-item'>
				<a class='nav-link' id='kioskstab' data-toggle='tab' href="#kiosks" role='tab' aria-controls='kiosks' aria-selected='false'>Kiosks</a>
			</li>	
			<li class='nav-item'>
				<a class='nav-link' id='mactab' data-toggle='tab' href="#mac" role='tab' aria-controls='mac' aria-selected='false'>Macintosh Software</a>
			</li>
			<li class='nav-item'>
				<a class='nav-link' id='mathtab' data-toggle='tab' href="#math" role='tab' aria-controls='math' aria-selected='false'>Math and Science</a>
			</li>		
			<li class='nav-item'>
				<a class='nav-link' id='officetab' data-toggle='tab' href="#office" role='tab' aria-controls='office' aria-selected='false'>Microsoft Office</a>
			</li>	
			<li class='nav-item'>
				<a class='nav-link' id='multitab' data-toggle='tab' href="#multi" role='tab' aria-controls='multi' aria-selected='false'>Multimedia and Video Programming</a>
			</li>	
			<li class='nav-item'>
				<a class='nav-link' id='signtab' data-toggle='tab' href="#sign" role='tab' aria-controls='sign' aria-selected='false'>Signage</a>
			</li>	
			<li class='nav-item'>
				<a class='nav-link' id='supportab' data-toggle='tab' href="#support" role='tab' aria-controls='support' aria-selected='false'>Support Information, Documentation, and Employee Training</a>
			</li>	
			<li class='nav-item'>
				<a class='nav-link' id='softab' data-toggle='tab' href="#soft" role='tab' aria-controls='soft' aria-selected='false'>Windows Native Software</a>
			</li>	
		</ul>
		<div class="tab-content">
		  <div class="tab-pane active" id="web" role="tabpanel" aria-labelledby="webtab">
		  	<div>Web Best Practice Buckets</div>
		  		<div id="accordion">
  					<div class="card">
						<div class="card-header" id="headingOne">
							<h5 class="mb-0">
								<button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								Animation
								</button>
							</h5>
						</div>
						<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure blinking or flashing elements are avoided</router-link>
									</li>
									<li>
										<router-link to=''>Ensure scripts that cause moving or slow blinking are avoided</router-link>
									</li>
									<li>
										<router-link to=''>Ensure the blink element is avoided</router-link>
									</li>
									<li>
										<router-link to=''>Ensure the marquee element is avoided</router-link>
									</li>
									<li>
										<router-link to=''>Provide a non-animated equivalent or method to step through animation</router-link>
									</li>
									<li>
										<router-link to=''>Ensure decorative animations are played a limited number of times</router-link>
									</li>
									<li>
										<router-link to=''>Ensure screen transition animation settles within 5 seconds</router-link>
									</li>
									<li>
										<router-link to=''>Ensure alternatives to animation provide equivalent functionality</router-link>
									</li>
									<li>
										<router-link to=''>Ensure animated content is sufficiently described in text</router-link>
									</li>
									<li>
										<router-link to=''>Ensure elements blink or flash in a safe threshold</router-link>
									</li>
								</ul>	
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingTwo">
							<h5 class="mb-0">
							<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							ARIA and Dynamic Content
							</button>
							</h5>
						</div>
						<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure ARIA roles, states, and properties are valid</router-link>
									</li>
									<li>
										<router-link to=''>Avoid inappropriate use of ARIA roles, states, and properties</router-link>
									</li>
									<li>
										<router-link to=''>Ensure elements that use ARIA provide non-ARIA fallback accessible content when not accessibility supported</router-link>
									</li>
									<li>
										<router-link to=''>Ensure ARIA regions, landmarks and HTML sections are identifiable</router-link>
									</li>
									<li>
									<router-link to=''>Ensure content updates define focus updates appropriately</router-link>
									</li>
									<li>
										<router-link to=''>Provide a means for quickly navigating to frequently updated areas</router-link>
									</li>
									<li>
										<router-link to=''>Avoid forced focus changes that are not user-initiated</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that textual equivalent information is updated appropriately when an element's state changes</router-link>
									</li>
									<li>
										<router-link to=''>Inform assistive technologies of changes in content</router-link>
									</li>
									<li>
										<router-link to=''>Provide an accessible alert method for content changes that occur without explicit user knowledge</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that dynamic content is rendered in-line with the controls that change it</router-link>
									</li>
									<li>
										<router-link to=''>Ensure auto-updating dynamic content can be paused, stopped, or hidden</router-link>
									</li>
									<li>
										<router-link to=''>Provide a method to stop all dynamic content updates/interruptions except emergency alerts</router-link>
									</li>
									<li>
										<router-link to=''>Indicate live regions for dynamically changing content</router-link>
									</li>
									<li>
										<router-link to=''>Ensure live regions define atomicness unless they are not atomic</router-link>
									</li>
									<li>
										<router-link to=''>Ensure relevant changes for live regions are explicitly defined if the change is not text or a node addition</router-link>
									</li>
									<li>
										<router-link to=''>Ensure live regions define controlling elements when present</router-link>
									</li>
									<li>
										<router-link to=''>Provide long descriptions for complex live regions</router-link>
									</li>
									<li>
										<router-link to=''>Ensure non-uniformly updated live regions use the ARIA busy attribute</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingThree">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								Authoring Tools
								</button>
							</h5>
						</div>
						<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure authoring tools preserve the information required for accessibility when converting content from one format to another or saving content in different formats</router-link>
									</li>
									<li>
										<router-link to=''>Ensure authoring tools capable of exporting to PDF 1.7 allow for the author to create PDF/UA conformant documents</router-link>
									</li>
									<li>
										<router-link to=''>Ensure authoring tools are capable of prompting authors to create content that conforms to WCAG 2 Level A/AA and conformance requirements</router-link>
									</li>
									<li>
										<router-link to=''>Ensure when templates are provided a variety of accessibility conformant templates are available</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingFour">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
								Color and Contrast
								</button>
							</h5>
						</div>
						<div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure text and images of text provide sufficient contrast</router-link>
									</li>
									<li>
										<router-link to=''>Ensure color is not the sole means of communicating information</router-link>
									</li>
									<li>
										<router-link to=''>Ensure color is not used as the sole method of indicating selection</router-link>
									</li>
									<li>
										<router-link to=''>Ensure color is not the sole means of indicating error messages</router-link>
									</li>
									<li>
										<router-link to=''>Ensure content with color conveys the same meaning without color, directly in the content, on-screen, and without additional user interaction</router-link>
									</li>
									<li>
										<router-link to=''>Ensure pages are coded in such a way that the user can select custom foreground and background colors</router-link>
									</li>
									<li>
										<router-link to=''>Ensure text and images of text provide enhanced color contrast</router-link>
									</li>
									<li>
										<router-link to=''>Ensure sufficient contrast is provided when background images are not available.</router-link>
									</li>
									<li>
										<router-link to=''>Ensure text and images of text provide sufficient color contrast when CSS is disabled.</router-link>
									</li>
									<li>
										<router-link to=''>Ensure link text provides sufficient contrast</router-link>
									</li>
									<li>
										<router-link to=''>Ensure text background color is specified when the foreground is specified and vice versa</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingFive">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
								CSS
								</button>
							</h5>
						</div>
						<div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure documents are readable without style sheets</router-link>
									</li>
									<li>
										<router-link to=''>Ensure containing elements allow text resize</router-link>
									</li>
									<li>
										<router-link to=''>Ensure style sheets are used to style text</router-link>
									</li>
									<li>
										<router-link to=''>Ensure the reading order of content and elements are correct when viewed without style sheets</router-link>
									</li>
									<li>
										<router-link to=''>Ensure screen reader specific content is rendered off-screen rather than hidden or not displayed</router-link>
									</li>
									<li>
										<router-link to=''>Avoid use of the before, after, pseudo elements for non-decorative content</router-link>
									</li>
									<li>
										<router-link to=''>Ensure content that is hidden stays hidden when CSS is disabled. </router-link>
									</li>
									<li>
										<router-link to=''>Provide text equivalents for icon fonts</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingSix">
							<h5 class="mb-0">
								<button class="btn btn-link" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
								Calendar Controls
								</button>
							</h5>
						</div>
						<div id="collapseSix" class="collapse show" aria-labelledby="headingSix" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure calendar components are keyboard accessible</router-link>
									</li>
									<li>
										<router-link to=''>Ensure calendar components do not use color alone to convey selection/meaning</router-link>
									</li>
									<li>
										<router-link to=''>Ensure calendar components include data tables that properly identify header and data cells</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that when calendars are activated and deactivated focus moves appropriately</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that non-modal calendars are rendered inline with the controls that activate them</router-link>
									</li>
								</ul>	
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingSeven">
							<h5 class="mb-0">
							<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
							Dialogs
							</button>
							</h5>
						</div>
						<div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure dialogs use proper structure</router-link>
									</li>
									<li>
										<router-link to=''>Ensure links that spawn dialogs indicate the fact</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that dialogs can be closed via the keyboard</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that when dialogs are activated focus moves appropriately</router-link>
									</li>
									<li>
										<router-link to=''>Ensure non-modal dialogs are rendered inline with the controls that activate them</router-link>
									</li>
									<li>
										<router-link to=''>Ensure keyboard focus returns properly from dialogs</router-link>
									</li>
									<li>
										<router-link to=''>Provide a descriptive dialog title</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that keyboard focus remains within modal dialogs</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingEight">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
								Multi-Column List View Controls
								</button>
							</h5>
						</div>
						<div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure sortable headers include proper text alternatives</router-link>
									</li>
									<li>
										<router-link to=''>Ensure selectable rows are keyboard accessible</router-link>
									</li>
									<li>
										<router-link to=''>Ensure sortable headers can be triggered from the keyboard</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingNine">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
								Page Tabs
								</button>
							</h5>
						</div>
						<div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure page tabs contain proper textual descriptions indicating state and role</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingTen">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
								Standalone, Attached, and Context Menus
								</button>
							</h5>
						</div>
						<div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure fields indicate attached menus</router-link>
									</li>
									<li>
										<router-link to=''>Ensure keyboard and programmatic focus moves to opened menus</router-link>
									</li>
									<li>
										<router-link to=''>Ensure keyboard focus returns properly when menus are closed</router-link>
									</li>
									<li>
										<router-link to=''>Ensure menus can be opened from the keyboard</router-link>
									</li>
									<li>
										<router-link to=''>Ensure sub-menu items are keyboard accessible and contain text equivalents</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that menus are rendered inline with the controls that activate them</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading11">
							<h5 class="mb-0">
								<button class="btn btn-link" data-toggle="collapse" data-target="#collapse11" aria-expanded="true" aria-controls="collapse11">
								Trees and Outlines
								</button>
							</h5>
						</div>
						<div id="collapse11" class="collapse show" aria-labelledby="heading11" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure tree and outline components provide a textual name and type</router-link>
									</li>
									<li>
										<router-link to=''>Ensure tree and outline components provide textual state information</router-link>
									</li>
									<li>
										<router-link to=''>Ensure tree and outline components provide textual level information</router-link>
									</li>
									<li>
										<router-link to=''>Ensure tree and outline components provide textual position information</router-link>
									</li>
									<li>
										<router-link to=''>Ensure tree and outline node components are provided in the same link</router-link>
									</li>
									<li>
										<router-link to=''>Ensure tree and outline node components are accessible from the keyboard</router-link>
									</li>
								</ul>	
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingTwo">
							<h5 class="mb-0">
							<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							ARIA and Dynamic Content
							</button>
							</h5>
						</div>
						<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure ARIA roles, states, and properties are valid</router-link>
									</li>
									<li>
										<router-link to=''>Avoid inappropriate use of ARIA roles, states, and properties</router-link>
									</li>
									<li>
										<router-link to=''>Ensure elements that use ARIA provide non-ARIA fallback accessible content when not accessibility supported</router-link>
									</li>
									<li>
										<router-link to=''>Ensure ARIA regions, landmarks and HTML sections are identifiable</router-link>
									</li>
									<li>
									<router-link to=''>Ensure content updates define focus updates appropriately</router-link>
									</li>
									<li>
										<router-link to=''>Provide a means for quickly navigating to frequently updated areas</router-link>
									</li>
									<li>
										<router-link to=''>Avoid forced focus changes that are not user-initiated</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that textual equivalent information is updated appropriately when an element's state changes</router-link>
									</li>
									<li>
										<router-link to=''>Inform assistive technologies of changes in content</router-link>
									</li>
									<li>
										<router-link to=''>Provide an accessible alert method for content changes that occur without explicit user knowledge</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that dynamic content is rendered in-line with the controls that change it</router-link>
									</li>
									<li>
										<router-link to=''>Ensure auto-updating dynamic content can be paused, stopped, or hidden</router-link>
									</li>
									<li>
										<router-link to=''>Provide a method to stop all dynamic content updates/interruptions except emergency alerts</router-link>
									</li>
									<li>
										<router-link to=''>Indicate live regions for dynamically changing content</router-link>
									</li>
									<li>
										<router-link to=''>Ensure live regions define atomicness unless they are not atomic</router-link>
									</li>
									<li>
										<router-link to=''>Ensure relevant changes for live regions are explicitly defined if the change is not text or a node addition</router-link>
									</li>
									<li>
										<router-link to=''>Ensure live regions define controlling elements when present</router-link>
									</li>
									<li>
										<router-link to=''>Provide long descriptions for complex live regions</router-link>
									</li>
									<li>
										<router-link to=''>Ensure non-uniformly updated live regions use the ARIA busy attribute</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingThree">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								Authoring Tools
								</button>
							</h5>
						</div>
						<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure authoring tools preserve the information required for accessibility when converting content from one format to another or saving content in different formats</router-link>
									</li>
									<li>
										<router-link to=''>Ensure authoring tools capable of exporting to PDF 1.7 allow for the author to create PDF/UA conformant documents</router-link>
									</li>
									<li>
										<router-link to=''>Ensure authoring tools are capable of prompting authors to create content that conforms to WCAG 2 Level A/AA and conformance requirements</router-link>
									</li>
									<li>
										<router-link to=''>Ensure when templates are provided a variety of accessibility conformant templates are available</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingFour">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
								Color and Contrast
								</button>
							</h5>
						</div>
						<div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure text and images of text provide sufficient contrast</router-link>
									</li>
									<li>
										<router-link to=''>Ensure color is not the sole means of communicating information</router-link>
									</li>
									<li>
										<router-link to=''>Ensure color is not used as the sole method of indicating selection</router-link>
									</li>
									<li>
										<router-link to=''>Ensure color is not the sole means of indicating error messages</router-link>
									</li>
									<li>
										<router-link to=''>Ensure content with color conveys the same meaning without color, directly in the content, on-screen, and without additional user interaction</router-link>
									</li>
									<li>
										<router-link to=''>Ensure pages are coded in such a way that the user can select custom foreground and background colors</router-link>
									</li>
									<li>
										<router-link to=''>Ensure text and images of text provide enhanced color contrast</router-link>
									</li>
									<li>
										<router-link to=''>Ensure sufficient contrast is provided when background images are not available.</router-link>
									</li>
									<li>
										<router-link to=''>Ensure text and images of text provide sufficient color contrast when CSS is disabled.</router-link>
									</li>
									<li>
										<router-link to=''>Ensure link text provides sufficient contrast</router-link>
									</li>
									<li>
										<router-link to=''>Ensure text background color is specified when the foreground is specified and vice versa</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingFive">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
								CSS
								</button>
							</h5>
						</div>
						<div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure documents are readable without style sheets</router-link>
									</li>
									<li>
										<router-link to=''>Ensure containing elements allow text resize</router-link>
									</li>
									<li>
										<router-link to=''>Ensure style sheets are used to style text</router-link>
									</li>
									<li>
										<router-link to=''>Ensure the reading order of content and elements are correct when viewed without style sheets</router-link>
									</li>
									<li>
										<router-link to=''>Ensure screen reader specific content is rendered off-screen rather than hidden or not displayed</router-link>
									</li>
									<li>
										<router-link to=''>Avoid use of the before, after, pseudo elements for non-decorative content</router-link>
									</li>
									<li>
										<router-link to=''>Ensure content that is hidden stays hidden when CSS is disabled. </router-link>
									</li>
									<li>
										<router-link to=''>Provide text equivalents for icon fonts</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingSix">
							<h5 class="mb-0">
								<button class="btn btn-link" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
								Calendar Controls
								</button>
							</h5>
						</div>
						<div id="collapseSix" class="collapse show" aria-labelledby="headingSix" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure calendar components are keyboard accessible</router-link>
									</li>
									<li>
										<router-link to=''>Ensure calendar components do not use color alone to convey selection/meaning</router-link>
									</li>
									<li>
										<router-link to=''>Ensure calendar components include data tables that properly identify header and data cells</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that when calendars are activated and deactivated focus moves appropriately</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that non-modal calendars are rendered inline with the controls that activate them</router-link>
									</li>
								</ul>	
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingSeven">
							<h5 class="mb-0">
							<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
							Dialogs
							</button>
							</h5>
						</div>
						<div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure dialogs use proper structure</router-link>
									</li>
									<li>
										<router-link to=''>Ensure links that spawn dialogs indicate the fact</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that dialogs can be closed via the keyboard</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that when dialogs are activated focus moves appropriately</router-link>
									</li>
									<li>
										<router-link to=''>Ensure non-modal dialogs are rendered inline with the controls that activate them</router-link>
									</li>
									<li>
										<router-link to=''>Ensure keyboard focus returns properly from dialogs</router-link>
									</li>
									<li>
										<router-link to=''>Provide a descriptive dialog title</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that keyboard focus remains within modal dialogs</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingEight">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
								Multi-Column List View Controls
								</button>
							</h5>
						</div>
						<div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure sortable headers include proper text alternatives</router-link>
									</li>
									<li>
										<router-link to=''>Ensure selectable rows are keyboard accessible</router-link>
									</li>
									<li>
										<router-link to=''>Ensure sortable headers can be triggered from the keyboard</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingNine">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
								Page Tabs
								</button>
							</h5>
						</div>
						<div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure page tabs contain proper textual descriptions indicating state and role</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingTen">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
								Standalone, Attached, and Context Menus
								</button>
							</h5>
						</div>
						<div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure fields indicate attached menus</router-link>
									</li>
									<li>
										<router-link to=''>Ensure keyboard and programmatic focus moves to opened menus</router-link>
									</li>
									<li>
										<router-link to=''>Ensure keyboard focus returns properly when menus are closed</router-link>
									</li>
									<li>
										<router-link to=''>Ensure menus can be opened from the keyboard</router-link>
									</li>
									<li>
										<router-link to=''>Ensure sub-menu items are keyboard accessible and contain text equivalents</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that menus are rendered inline with the controls that activate them</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>	
		  </div>
		  <div class="tab-pane" id="adobe" role="tabpanel" aria-labelledby="adobetab">
	
		  </div>
		  <div class="tab-pane" id="android" role="tabpanel" aria-labelledby="androidtab">

		  </div>
		  <div class="tab-pane" id="delphi" role="tabpanel" aria-labelledby="delphitab">

		  </div>
		  <div class="tab-pane" id="embedded" role="tabpanel" aria-labelledby="embeddedtab">

		  </div>
		  <div class="tab-pane" id="hard" role="tabpanel" aria-labelledby="hardtab">

		  </div>
		  <div class="tab-pane active" id="ios" role="tabpanel" aria-labelledby="iostab">
		  	
		  </div>
		  <div class="tab-pane" id="java" role="tabpanel" aria-labelledby="javatab">
	
		  </div>
		  <div class="tab-pane" id="kiosks" role="tabpanel" aria-labelledby="kioskstab">

		  </div>
		  <div class="tab-pane" id="mac" role="tabpanel" aria-labelledby="mactab">

		  </div>
		  <div class="tab-pane" id="math" role="tabpanel" aria-labelledby="mathtab">

		  </div>
		  <div class="tab-pane" id="office" role="tabpanel" aria-labelledby="officetab">

		  </div>	  
		  <div class="tab-pane" id="multi" role="tabpanel" aria-labelledby="multitab">

		  </div>
		  <div class="tab-pane" id="sign" role="tabpanel" aria-labelledby="signtab">

		  </div>
		  <div class="tab-pane" id="support" role="tabpanel" aria-labelledby="supportab">

		  </div>
		  <div class="tab-pane" id="soft" role="tabpanel" aria-labelledby="softab">

		  </div>		  
		</div>
	</div>
</template>