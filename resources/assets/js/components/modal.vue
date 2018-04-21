<template>
	<div class="container">
		<h1 tabindex='-1' v-focus>Accessible Modal</h1>
		<table class='table table-bordered table-hover'>
			<thead class='thead-dark'>
				<tr>
					<th scope='col'>Version</th>
					<th scope='col'>Release Date</th>
					<th scope='col'>Changelog</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1.0</td>
					<td>4/18/18</td>
					<td>Initial Build</td>
				</tr>
			</tbody>
		</table>
		<div class="container">
			<button type='button' class='btn' data-toggle='modal' data-target='#mymodal' :class='success'>
				Launch Accessible Modal
			</button>
		<div class='modal fade' id='mymodal' tabindex='-1' role='dialog' aria-labelledby='mymodallabel' aria-hidden='true'>
			<div class="modal-dialog" role='document'>
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id='mymodallabel'>Accessibility in a Modal</h5>
						<button type='button' class='close' data-dismiss='modal' aria-label='close'>
							<span aria-hidden='true'>&times;</span>
						</button>
					</div>
					<div class="modal-body">
						Lorem ipsum text belonging in a modal body
					</div>
					<div class="modal-footer">
						<button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
						<button type='button' class='btn btn-primary'>Save Changes</button>
					</div>
				</div>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
	export default {

		props:['success']

	}
</script>