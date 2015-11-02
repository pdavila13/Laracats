new Vue({
	el: '#tasks',

	data: {
		tasks: [],

		newTask: ''
	},

	computed: {
		completions: function(){
			return this.tasks.filter(function(task){
				return task.completed;
			});
		},

		remaining: function(){
			return this.tasks.filter(function(task){
				return task.completed;
			});
		}
	},

	filters: {
		inProcess: function(tasks){
			return tasks.filter(function(task) {
				return ! task.completed;
			});
		}
	},

	methods: {
		addTask: function(e){

			e.preventDefault();

			if ( ! this.newTask) return;

			this.tasks.push({
				body: this.newTask,

				completed: false
			});

			this.newTask = '';
		},

		/*
		completeTask: function(task){
			task.completed = true;
		},
		*/

		toggleTaskCompletion: function(task){
			task.completed = ! task.completed;
		},

		completeAll: function(task){
			this.tasks.forEach(function(task){
				task.completed = true;
			});
		},

		editTask: function(task){
			//remove the task
			this.removeTask(task);

			//update the newTask input
			this.newTask = task.body;

			//focus the newTask input
			this.$$.newTask.focus();
		},

		removeTask: function(task){
			
			//remove task
			this.tasks.$remove(task);
		},

		clearCompleted: function(){
			this.tasks = this.tasks.filter(function(task){
				return ! task.completed;
			});
		}
	}

})