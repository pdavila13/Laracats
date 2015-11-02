new Vue({
	el: '#tasks',

	data: {
		tasks: [
			{ body: 'Go to the store', completed: false }
		]
	},

	methods: {
		addTask: function() {
			alert('adding a task');
		}
	}

})