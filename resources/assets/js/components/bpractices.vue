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
						<div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
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
						<div id="collapse11" class="collapse" aria-labelledby="heading11" data-parent="#accordion">
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
						<div class="card-header" id="heading12">
							<h5 class="mb-0">
							<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
							Data Tables
							</button>
							</h5>
						</div>
						<div id="collapse12" class="collapse" aria-labelledby="heading12" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure table headers are used in a valid fashion</router-link>
									</li>
									<li>
										<router-link to=''>Ensure headers and cells are properly associated</router-link>
									</li>
									<li>
										<router-link to=''>Ensure data table headers are properly identified</router-link>
									</li>
									<li>
										<router-link to=''>Ensure data tables are formatted using table elements</router-link>
									</li>
									<li>
										<router-link to=''>Ensure implicit row header cells use th elements</router-link>
									</li>
									<li>
										<router-link to=''>Ensure table captions are provided explicitly</router-link>
									</li>
									<li>
										<router-link to=''>Provide an abbreviation for table headers with more than three words</router-link>
									</li>
									<li>
										<router-link to=''>Provide a table summary when a description of the table structure is needed</router-link>
									</li>
									<li>
										<router-link to=''>Avoid using sub-tables in header elements</router-link>
									</li>
									<li>
										<router-link to=''>Ensure data table header elements are provided in the same table as content</router-link>
									</li>
									<li>
										<router-link to=''>Ensure data tables do not contain blank rows or columns for presentation purposes</router-link>
									</li>
									<li>
										<router-link to=''>Ensure table data/headers in separate columns is rendered in separate table cells</router-link>
									</li>
									<li>
										<router-link to=''>Ensure data table headers cells are not blank</router-link>
									</li>
									<li>
										<router-link to=''>Avoid using nested data tables</router-link>
									</li>
									<li>
										<router-link to=''>Ensure distinct tabular data is provided in separate data tables</router-link>
									</li>
									<li>
										<router-link to=''>Ensure data tables are not used to also layout content which is unrelated to the data</router-link>
									</li>
									<li>
										<router-link to=''>Ensure complex data table headers are properly identified</router-link>
									</li>
									<li>
										<router-link to=''>Ensure complex data table's implicit row header cells define scope or use th</router-link>
									</li>
									<li>
										<router-link to=''>Ensure complex data table headers are used in a valid fashion</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading13">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
								Embedded Media and Object Elements
								</button>
							</h5>
						</div>
						<div id="collapse13" class="collapse" aria-labelledby="heading13" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure embedded and linked non-HTML media provide a link to an accessible plug-in</router-link>
									</li>
									<li>
										<router-link to=''>Provide text equivalents for object elements</router-link>
									</li>
									<li>
										<router-link to=''>Ensure applets provide valid text equivalents</router-link>
									</li>
									<li>
										<router-link to=''>Ensure embedded objects are device-independent</router-link>
									</li>
									<li>
										<router-link to=''>Ensure embedded objects are directly accessible</router-link>
									</li>
									<li>
										<router-link to=''>Ensure embedded elements and canvas elements provide a meaningful text equivalent</router-link>
									</li>
									<li>
										<router-link to=''>Ensure video, multimedia or animations that play automatically can be controlled within the containing page</router-link>
									</li>
									<li>
										<router-link to=''>Ensure the keyboard can be used to navigate through or past the embedded content</router-link>
									</li>
									<li>
										<router-link to=''>Embed Flash Player content in a manner that exposes accessibility</router-link>
									</li>
									<li>
										<router-link to=''>Provide a text transcript for audio only presentations</router-link>
									</li>
									<li>
										<router-link to=''>Provide text transcript or audio track of video only presentations</router-link>
									</li>
									<li>
										<router-link to=''>Ensure audio that plays automatically can be controlled within the containing page</router-link>
									</li>
									<li>
										<router-link to=''>Ensure there is low or no background audio for prerecorded audio only content</router-link>
									</li>
									<li>
										<router-link to=''>Provide an alternative text equivalent to live audio only content</router-link>
									</li>
									<li>
										<router-link to=''>Provide accessible alternatives when a required plug-in is not available</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading14">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
								Focus Control
								</button>
							</h5>
						</div>
						<div id="collapse14" class="collapse" aria-labelledby="heading14" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure new windows or frames do not open without a warning</router-link>
									</li>
									<li>
										<router-link to=''>Ensure interactive elements can be visually distinguished from non-actionable ones</router-link>
									</li>
									<li>
										<router-link to=''>Avoid using event handlers that trigger focus or context changes on user input</router-link>
									</li>
									<li>
										<router-link to=''>Ensure keyboard focus is indicated visually</router-link>
									</li>
									<li>
										<router-link to=''>Ensure new windows do not open without user control</router-link>
									</li>
									<li>
										<router-link to=''>Ensure keyboard focus is only assigned to elements that are defined as keyboard focusable without setting a tabindex</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading15">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
								Forms
								</button>
							</h5>
						</div>
						<div id="collapse15" class="collapse" aria-labelledby="heading15" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Provide a valid label for form fields</router-link>
									</li>
									<li>
										<router-link to=''>Provide fieldsets for groups of form controls</router-link>
									</li>
									<li>
										<router-link to=''>Ensure option elements in large lists are grouped</router-link>
									</li>
									<li>
										<router-link to=''>Provide valid, concise, and meaningful alternative text for image buttons</router-link>
									</li>
									<li>
										<router-link to=''>Ensure accessible usage of time based sessions and timed responses</router-link>
									</li>
									<li>
										<router-link to=''>Ensure labels are immediately before or after input element</router-link>
									</li>
									<li>
										<router-link to=''>Ensure form fields are laid out in an intuitive order</router-link>
									</li>
									<li>
										<router-link to=''>Provide a consistent implementation of error and alert mechanisms</router-link>
									</li>
									<li>
										<router-link to=''>Ensure elements with multiple labels are rendered appropriately</router-link>
									</li>
									<li>
										<router-link to=''>Ensure error messages are explicitly indicated at the beginning of a form after submit</router-link>
									</li>
									<li>
										<router-link to=''>Provide a method to skip past forms to reach search/submit results</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that instructive text is placed at the beginning of a form</router-link>
									</li>
									<li>
										<router-link to=''>Provide an indication of current location in search results</router-link>
									</li>
									<li>
										<router-link to=''>Ensure form field constraints are clearly indicated</router-link>
									</li>
									<li>
										<router-link to=''>Ensure form field labels are unique</router-link>
									</li>
									<li>
										<router-link to=''>Provide alternatives for audio cues</router-link>
									</li>
									<li>
										<router-link to=''>Ensure radio button groups are properly formed</router-link>
									</li>
									<li>
										<router-link to=''>Ensure form component hierarchy is indicated in a textual manner</router-link>
									</li>
									<li>
										<router-link to=''>Ensure CAPTCHAs are accessible both visually and audibly</router-link>
									</li>
									<li>
										<router-link to=''>Avoid improper nesting of form elements and links</router-link>
									</li>
									<li>
										<router-link to=''>Ensure checkboxes and radio buttons are positioned to the left of the labels</router-link>
									</li>
									<li>
										<router-link to=''>Ensure expired sessions can be re-authenticated without loss of data</router-link>
									</li>
									<li>
										<router-link to=''>Provide visual labels or instructions for user input</router-link>
									</li>
									<li>
										<router-link to=''>Provide suggestions for error messages when known</router-link>
									</li>
									<li>
										<router-link to=''>Provide error prevention for legal commitments and financial data</router-link>
									</li>
									<li>
										<router-link to=''>Provide context-sensitive help</router-link>
									</li>
									<li>
										<router-link to=''>Provide error prevention for information that is submitted</router-link>
									</li>
									<li>
										<router-link to=''>Ensure rich edit entry fields are directly accessible or provide an alternative entry method</router-link>
									</li>
									<li>
										<router-link to=''>Provide a clear indication of fields in error for information that is submitted</router-link>
									</li>
									<li>
										<router-link to=''>Avoid use of placeholder values to label or explain input</router-link>
									</li>
									<li>
										<router-link to=''>Are all features of the product or service available to users of AT that provide voice command and control?</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading16">
							<h5 class="mb-0">
								<button class="btn btn-link" data-toggle="collapse" data-target="#collapse16" aria-expanded="true" aria-controls="collapse16">
								Frames
								</button>
							</h5>
						</div>
						<div id="collapse16" class="collapse" aria-labelledby="heading16" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure frameset elements define noframes alternatives</router-link>
									</li>
									<li>
										<router-link to=''>Ensure frames do not use absolute sizing</router-link>
									</li>
									<li>
										<router-link to=''>Ensure complex framesets provide long descriptions</router-link>
									</li>
									<li>
										<router-link to=''>Ensure relationships between frames are properly indicated</router-link>
									</li>
									<li>
										<router-link to=''>Ensure frames utilize markup files as their source</router-link>
									</li>
									<li>
										<router-link to=''>Ensure blank frames set text appropriately</router-link>
									</li>
									<li>
										<router-link to=''>Ensure frame titles are meaningful</router-link>
									</li>
									<li>
										<router-link to=''>Ensure the use of frames is limited</router-link>
									</li>
								</ul>	
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading17">
							<h5 class="mb-0">
							<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
							Image Maps
							</button>
							</h5>
						</div>
						<div id="collapse17" class="collapse" aria-labelledby="heading17" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure area alternative text is meaningful and concise</router-link>
									</li>
									<li>
										<router-link to=''>Provide alternatives for server-side image maps</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading18">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
								Images
								</button>
							</h5>
						</div>
						<div id="collapse18" class="collapse" aria-labelledby="heading18" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure charts and graphs provide an informative and visible alternative description</router-link>
									</li>
									<li>
										<router-link to=''>Ensure complex images provide sufficient descriptions</router-link>
									</li>
									<li>
										<router-link to=''>Provide alternative text for images</router-link>
									</li>
									<li>
										<router-link to=''>Ensure images provide informative alternative text</router-link>
									</li>
									<li>
										<router-link to=''>Avoid redundant alt text for images with adjacent text or links</router-link>
									</li>
									<li>
										<router-link to=''>Provide mathematical formulas in appropriate markup</router-link>
									</li>
									<li>
										<router-link to=''>Ensure image buttons provide alternative text</router-link>
									</li>
									<li>
										<router-link to=''>Ensure CSS background images that convey meaning have textual and visible equivalents</router-link>
									</li>
									<li>
										<router-link to=''>Ensure alternative text for images is spelled and spaced correctly</router-link>
									</li>
									<li>
										<router-link to=''>Ensure text is used instead of images of text unless decorative or essential</router-link>
									</li>
									<li>
										<router-link to=''>Ensure text is used instead of images of text when technology allows unless it is essential</router-link>
									</li>
									<li>
										<router-link to=''>Do not use images to produce absolute positioning</router-link>
									</li>
									<li>
										<router-link to=''>Provide accessible names for progress bars and meters</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading19">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
								Keyboard Accessibility
								</button>
							</h5>
						</div>
						<div id="collapse19" class="collapse" aria-labelledby="heading19" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Avoid the sole use of device-dependent event handlers</router-link>
									</li>
									<li>
										<router-link to=''>Ensure all active elements receive keyboard focus</router-link>
									</li>
									<li>
										<router-link to=''>Ensure JavaScript functionality is accessible from the keyboard</router-link>
									</li>
									<li>
										<router-link to=''>Avoid placing inactive elements in the focus order</router-link>
									</li>
									<li>
										<router-link to=''>Ensure the focus order of interactive elements on the page is logical</router-link>
									</li>
									<li>
										<router-link to=''>Ensure all read-only edit elements can receive keyboard focus</router-link>
									</li>
									<li>
										<router-link to=''>Ensure accelerator/shortcut keys do not conflict with standard browser keystrokes</router-link>
									</li>
									<li>
										<router-link to=''>Ensure keyboard focus is not trapped</router-link>
									</li>
									<li>
										<router-link to=''>Provide access keys for frequently used functions</router-link>
									</li>
									<li>
										<router-link to=''>Avoid the sole use of the title attribute on elements</router-link>
									</li>
									<li>
										<router-link to=''>Ensure functionality provided by JavaScript that is not accessible to assistive technology is available without JavaScript</router-link>
									</li>
									<li>
										<router-link to=''>Provide documentation for non-standard or alternative keyboard commands that are required for access</router-link>
									</li>
									<li>
										<router-link to=''>Ensure accelerator/shortcut keys are unique and consistent within a set of pages</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading20">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
								Language and Content
								</button>
							</h5>
						</div>
						<div id="collapse20" class="collapse" aria-labelledby="heading20" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure changes in natural language are identified inline</router-link>
									</li>
									<li>
										<router-link to=''>Ensure the language of a document is set</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that abbreviations use proper markup</router-link>
									</li>
									<li>
										<router-link to=''>Ensure acronyms are wrapped in acronym elements</router-link>
									</li>
									<li>
										<router-link to=''>Ensure clear language is used in documents</router-link>
									</li>
									<li>
										<router-link to=''>Avoid line breaks within words</router-link>
									</li>
									<li>
										<router-link to=''>Ensure pages that provide alternatives for non-accessible pages provide equivalent functionality</router-link>
									</li>
									<li>
										<router-link to=''>Ensure instructions do not rely solely on sensory characteristics</router-link>
									</li>
									<li>
										<router-link to=''>Provide a method to identify definitions of unusual words or phrases</router-link>
									</li>
									<li>
										<router-link to=''>Provide a method to identify pronunciations of words where the meaning is ambiguous</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that elements with the same functionality are consistently identified across pages</router-link>
									</li>
									<li>
										<router-link to=''>Ensure WCAG Level A or Level AA conformance is met in full </router-link>
									</li>
									<li>
										<router-link to=''>Ensure alternative pages are not used unless absolutely necessary</router-link>
									</li>
									<li>
										<router-link to=''>Ensure text direction changes are indicated inline</router-link>
									</li>
									<li>
										<router-link to=''>Ensure non-interference of non-conforming or non-accessibility supported technology</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading21">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse21" aria-expanded="false" aria-controls="collapse21">
								Layout Tables
								</button>
							</h5>
						</div>
						<div id="collapse21" class="collapse" aria-labelledby="heading21" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure layout tables linearize properly</router-link>
									</li>
									<li>
										<router-link to=''>Ensure layout tables do not contain structural markup</router-link>
									</li>
									<li>
										<router-link to=''>Ensure absolute sizing in tables is avoided</router-link>
									</li>
									<li>
										<router-link to=''>Avoid using tables for layout</router-link>
									</li>
									<li>
										<router-link to=''>	Ensure layout tables indicate their use for presentation purposes</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading22">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse22" aria-expanded="false" aria-controls="collapse22">
								Links
								</button>
							</h5>
						</div>
						<div id="collapse22" class="collapse" aria-labelledby="heading22" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure alternative text for image links is informative</router-link>
									</li>
									<li>
										<router-link to=''>Ensure link text is meaningful when taken out of context</router-link>
									</li>
									<li>
										<router-link to=''>Ensure the same link text for links with different targets is avoided</router-link>
									</li>
									<li>
										<router-link to=''>Ensure links do not directly target images</router-link>
									</li>
									<li>
										<router-link to=''>Ensure link text is short and concise</router-link>
									</li>
									<li>
										<router-link to=''>Ensure links that target content requiring a plug-in indicate the content type</router-link>
									</li>
									<li>
										<router-link to=''>Ensure anchor element contains a valid hypertext reference</router-link>
									</li>
									<li>
										<router-link to=''>Ensure link text is meaningful within context</router-link>
									</li>
									<li>
										<router-link to=''>Ensure related links are grouped</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading23">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse23" aria-expanded="false" aria-controls="collapse23">
								Lists
								</button>
							</h5>
						</div>
						<div id="collapse23" class="collapse" aria-labelledby="heading23" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure sub-lists are marked up properly</router-link>
									</li>
									<li>
										<router-link to=''>Ensure lists for indentation are not used</router-link>
									</li>
									<li>
										<router-link to=''>Ensure bullet type is declared in style sheets</router-link>
									</li>
									<li>
										<router-link to=''>Ensure list items are found in a list container</router-link>
									</li>
									<li>
										<router-link to=''>Ensure utilizing tables to provide lists of information is avoided</router-link>
									</li>
									<li>
										<router-link to=''>Ensure implicit list markup is avoided</router-link>
									</li>
									<li>
										<router-link to=''>Ensure lists are not used inappropriately for unrelated items or for items that are not actual list items</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading24">
							<h5 class="mb-0">
								<button class="btn btn-link" data-toggle="collapse" data-target="#collapse24" aria-expanded="true" aria-controls="collapse24">
								Mobile
								</button>
							</h5>
						</div>
						<div id="collapse24" class="collapse" aria-labelledby="heading24" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure site has a universal URI for all mobile devices</router-link>
									</li>
									<li>
										<router-link to=''>Ensure site URIs are short and easy to enter</router-link>
									</li>
									<li>
										<router-link to=''>Ensure site takes advantage of features (including accessibility) of mobile devices </router-link>
									</li>
									<li>
										<router-link to=''>Provide simplified direct navigation</router-link>
									</li>
									<li>
										<router-link to=''>Avoid the use of frames</router-link>
									</li>
									<li>
										<router-link to=''>Limit the number of external resources required to display a page</router-link>
									</li>
									<li>
										<router-link to=''>Ensure content is clear, concise and specific to the user's request</router-link>
									</li>
									<li>
										<router-link to=''>Ensure page HTML size does not exceed 10k</router-link>
									</li>
									<li>
										<router-link to=''>Ensure all page assets are under 20k in size</router-link>
									</li>
									<li>
										<router-link to=''>Ensure image size is not larger than the screen.</router-link>
									</li>
									<li>
										<router-link to=''>Ensure compatibility between different mobile browsers</router-link>
									</li>
								</ul>	
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading25">
							<h5 class="mb-0">
							<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse25" aria-expanded="false" aria-controls="collapse25">
							Multimedia
							</button>
							</h5>
						</div>
						<div id="collapse25" class="collapse" aria-labelledby="heading25" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Provide alternatives for time-based content such as video, audio, embed, or object elements</router-link>
									</li>
									<li>
										<router-link to=''>Ensure sign language interpretation is provided in multimedia</router-link>
									</li>
									<li>
										<router-link to=''>Ensure visual multimedia content is sufficiently described in the audio portion of the multimedia</router-link>
									</li>
									<li>
										<router-link to=''>Provide an alternative text equivalent to prerecorded synchronized multimedia and video content</router-link>
									</li>
									<li>
										<router-link to=''>Provide an extended audio description for multimedia where audio description can not be inserted</router-link>
									</li>
									<li>
										<router-link to=''>Provide synchronized equivalent for multimedia (audio and video)</router-link>
									</li>
									<li>
										<router-link to=''>Ensure auditory multimedia content is sufficiently described in the captions</router-link>
									</li>
									<li>
										<router-link to=''>Provide synchronized audio description for video (which includes audio) or other multimedia</router-link>
									</li>
									<li>
										<router-link to=''>Ensure audio is not played automatically on load</router-link>
									</li>
									<li>
										<router-link to=''>Ensure multimedia playback can be controlled</router-link>
									</li>
									<li>
										<router-link to=''>Provide shortcut keystrokes for media playback controls</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading26">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse26" aria-expanded="false" aria-controls="collapse26">
								Navigation
								</button>
							</h5>
						</div>
						<div id="collapse26" class="collapse" aria-labelledby="heading26" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Provide a mechanism for skipping past repetitive navigation links</router-link>
									</li>
									<li>
										<router-link to=''>Ensure pages do not automatically refresh</router-link>
									</li>
									<li>
										<router-link to=''>Ensure event handlers that trigger navigation or form submission are avoided</router-link>
									</li>
									<li>
										<router-link to=''>Provide meta information about alternative documents</router-link>
									</li>
									<li>
										<router-link to=''>Ensure meta-redirects are avoided</router-link>
									</li>
									<li>
										<router-link to=''>Ensure pages use a consistent navigation structure</router-link>
									</li>
									<li>
										<router-link to=''>Ensure a valid skip link target is present and is located appropriately</router-link>
									</li>
									<li>
										<router-link to=''>Indicate the current site hierarchy location to users</router-link>
									</li>
									<li>
										<router-link to=''>Ensure speech is not the only means to access content</router-link>
									</li>
									<li>
										<router-link to=''>Ensure there is more than one way to locate a web page in a set of pages</router-link>
									</li>
									<li>
										<router-link to=''>Ensure WCAG Level A or Level AA conformance is met on full pages</router-link>
									</li>
									<li>
										<router-link to=''>Ensure WCAG Level A or Level AA conformance is met in full for all pages within a process</router-link>
									</li>
									<li>
										<router-link to=''>Provide a mechanism for skipping past repetitive links by means of visible links. </router-link>
									</li>
									<li>
										<router-link to=''>Ensure a visible mechanism for skipping past repetitive links is provided when CSS is disabled</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading27">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse27" aria-expanded="false" aria-controls="collapse27">
								Page Structure
								</button>
							</h5>
						</div>
						<div id="collapse27" class="collapse" aria-labelledby="heading27" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure pages use the title element</router-link>
									</li>
									<li>
										<router-link to=''>Ensure documents validate to formal grammars</router-link>
									</li>
									<li>
										<router-link to=''>Ensure heading level matches the heading's visual importance/level</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that proper quotation markup is used</router-link>
									</li>
									<li>
										<router-link to=''>Ensure the use of deprecated elements is avoided</router-link>
									</li>
									<li>
										<router-link to=''>Ensure the use of ASCII layouts is avoided</router-link>
									</li>
									<li>
										<router-link to=''>Provide a means to skip past ASCII art or layouts</router-link>
									</li>
									<li>
										<router-link to=''>Ensure pages provide a Document Type Definition</router-link>
									</li>
									<li>
										<router-link to=''>Ensure short quotations are wrapped in q elements</router-link>
									</li>
									<li>
										<router-link to=''>Ensure the b element is avoided</router-link>
									</li>
									<li>
										<router-link to=''>Ensure the i element is avoided</router-link>
									</li>
									<li>
										<router-link to=''>Avoid the use of implicit headings</router-link>
									</li>
									<li>
										<router-link to=''>Ensure standards compliant technologies are used whenever possible</router-link>
									</li>
									<li>
										<router-link to=''>Ensure blockquote is used for long quotes</router-link>
									</li>
									<li>
										<router-link to=''>Ensure hr elements utilize relative sizing</router-link>
									</li>
									<li>
										<router-link to=''>Ensure using ASCII art to simulate markup is avoided</router-link>
									</li>
									<li>
										<router-link to=''>Provide an informative context-sensitive page title</router-link>
									</li>
									<li>
										<router-link to=''>Avoid unnecessary use of heading elements</router-link>
									</li>
									<li>
										<router-link to=''>Ensure shape and location are not the sole methods used to communicate information or hierarchy</router-link>
									</li>
									<li>
										<router-link to=''>Ensure content that is intended to be hidden from all users is not rendered by assistive technology</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that the reading order of content is logical</router-link>
									</li>
									<li>
										<router-link to=''>Provide an alternative to scrollable div areas</router-link>
									</li>
									<li>
										<router-link to=''>Ensure page reading order coincides with the focus order of the page</router-link>
									</li>
									<li>
										<router-link to=''>Ensure combined text elements contain proper spacing</router-link>
									</li>
									<li>
										<router-link to=''>Ensure page width is no more than 80 characters or glyphs </router-link>
									</li>
									<li>
										<router-link to=''>Ensure proper markup is used to mark emphasized or special text</router-link>
									</li>
									<li>
										<router-link to=''>Ensure headings and labels are descriptive and unique</router-link>
									</li>
									<li>
										<router-link to=''>Provide section headings to organize content</router-link>
									</li>
									<li>
										<router-link to=''>Provide information about general site and application layout</router-link>
									</li>
									<li>
										<router-link to=''>Ensure markup documents contain well formed elements</router-link>
									</li>
									<li>
										<router-link to=''>Ensure content is visible to assistive technologies</router-link>
									</li>
									<li>
										<router-link to=''>Ensure bugs and limitations on the target platform are compensated for</router-link>
									</li>
									<li>
										<router-link to=''>Ensure use of technology in accessibility supported methods.</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="heading28">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse28" aria-expanded="false" aria-controls="collapse28">
								Typography
								</button>
							</h5>
						</div>
						<div id="collapse28" class="collapse" aria-labelledby="heading28" data-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>
										<router-link to=''>Ensure text can be resized</router-link>
									</li>
									<li>
										<router-link to=''>Limit the amount of horizontal scrolling required</router-link>
									</li>
									<li>
										<router-link to=''>Ensure text is not justified (aligned to both the left and the right margins).</router-link>
									</li>
									<li>
										<router-link to=''>Ensure that line spacing is at least a space and a half</router-link>
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