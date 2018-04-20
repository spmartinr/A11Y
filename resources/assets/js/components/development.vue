<template>
	<div class='container'>
		<h1 tabindex='-1' v-focus>Web Development</h1>
		<ul>
			<li>Frameworks</li>
			<ul>
				<li>VueJS</li>
				<li>AngularJS</li>
				<li>Ember</li>
				<li>ReactJS</li>
			</ul>
			<li>Languages</li>
			<ul>
				<li>HTML5</li>
				<li>CSS3</li>
				<li>JavaScript</li>
			</ul>
		</ul>
	<div class='container'>
		<h2>Instructions to create a fresh Laravel Instance on Mac OS</h2>
			<h3>Install Brew</h3>
				<p>Open terminal and paste the following code:</p>
					<p><code>/usr/bin/ruby</code></p>
					<p><code>-e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code></p>
			<h3>Install Composer</h3>
				<p>To install Compser locally, run the installer in the project directory.</p>
				<p>For example:</p> 
				<p><code>cd /Users/shane/Documents/A11Y</code></p>
				<p>Then, install composer with brew:</p>
				<p><code>brew install composer</code></p>
				<p>After install, test it with:</p>
				<p><code>composer --version</code></p>
				<p>Assuming a version number shows up, everything is good.</p>
				<p>Specify <code>bash</code> path:</p>
				<p><code>nano ~/.bash_profile</code></p>
				<p><code>export PATH=~/.composer/vendor/bin:$PATH</code></p>
				<p>Save bash profile</p>
			<h3>Install Laravel</h3>
				<p>Laravel utilizes Composer to manage its dependencies.  So, before using Laravel, make sure Composer is installed locally. Change directory into the directory Composer was previously installed.</p>
				<p>For example: <code>cd /Users/shane/Documents/A11Y</code></p>
				<p>Install Laravel with laravel installer:</p>
				<p><code>composer global require "laravel/installer"</code></p>
				<p>When finished, the <code>laravel new</code> command will create a fresh Laravel installation in the specified directory.</p>
				<p><code>laravel new A11Y</code></p>
			<h3>Install Node</h3>
				<p>Change directory into project directory:</p>
				<p><code>cd /Users/shane/Documents/A11Y</code></p>
				<p>Install Node via Homebrew</p>
				<p><code>brew install node</code></p>
				<p>Check Node install success and version:</p>
				<p><code>node -v</code></p>
			<h3>Install Dependencies</h3>
				<p>Install all prepopulated dependencies with node, for example:</p>
				<p><code>cd /Users/shane/Documents/A11Y</code></p>
				<p><code>npm install</code></p>
				<p>Install specific dependencies such as:</p>
				<p><code>npm install vue-router --save</code></p>
				<p><code>npm install vue-focus --save</code></p>
			<h3>Start Laravel Dev Server</h3>
				<p>Change directory into the project directory and start the dev server.</p>
				<p><code>cd /Users/shane/Documents/A11Y</code></p>
				<p><code>php artisan serve</code></p>
			<h3></h3>>Start Node Compiler</h3></h3>>
				<p>Change directory into the project directory and start node.</p>
				<p><code>cd /Users/shane/Documents/A11Y</code></p>
				<p><code>npm run watch</code></p>
		<h2>Instructions to sync project to GitHub and upload</h2>
			<h3>Sync local to github repo:</h3>
				<p><code></code></p>
			<h3>Push changes to github master</h3>
				<p><code>git status</code></p>
				<p><code>git add . </code></p>
				<p><code>git commit -m "message"</code></p> 
				<p><code>git push origin master</code></p>
		<h2>Instructions to create a fresh Laravel Instance on Windows 10</h2>
			<h3>Install XAMPP</h3>
				<p><a href="https://www.apachefriends.org/index.html">XAMPP Download</a></p>
			<h3>Install Composer</h3>
				<p><a href="https://getcomposer.org">Composer Download</a></p>
			<h3>Verify Installation</h3>
				<p>Open Command Line and check PHP version:</p>
				<p><code>php -v</code></p>
				<p>Check Composer</p>
				<p><code>composer</code></p>
			<h3>Install Laravel</h3>
				<p><a href="https://laravel.com/docs/5.6/installation">Laravel Installation</a></p>
				<p>In the open cmd line paste:</p>
				<p><code>composer global require "laravel/installer"</code></p>
				<p>Verify installation with the following command:</p>
				<p><code>laravel</code></p>
				<p>Change directory into the desired folder and create a new instance of Laravel with:</p>
				<p><code>laravel new name</code> Where "name" is the name of the project</p>
			<h3>Open XAMPP and start Apache and MySQL</h3>
			<h3>Start the Dev Server</h3>
				<p>Open command line, cd into the project directory then:</p>
				<p><code>php artisan serve</code></p>
				<p>May need to generate a key:</p>
				<p><code>php artisan key:generate</code></p>
				<p>If still not working, make the port public via:</p>
				<p><code>php -S localhost:8000 -t public</code></p>
			<h3>Install NodeJS</h3>
				<p><a href="https://nodejs.org/en">NodeJS Install</a></p>
				<p>Change directory into the current project and install dependencies:</p>
				<p><code>npm install</code></p>
	</div>
	</div>
</template>