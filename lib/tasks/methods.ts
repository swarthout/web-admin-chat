import {Tasks} from './tasks';

Meteor.methods({
    'tasks.addTask': function(text) {
        Tasks.insert({
            text: text,
            checked: false,
            private: false
        });
    },

    'tasks.deleteTask': function(taskId) {
        Tasks.remove(taskId);
    },

    'tasks.setChecked': function(taskId, setChecked) {
        let task = Tasks.findOne(taskId);
        Tasks.update(taskId, {
            $set: {checked: setChecked}
        });
    },

    'tasks.setPrivate': function(taskId, setToPrivate) {
        let task = Tasks.findOne(taskId);
        Tasks.update(taskId, {
            $set: {private: setToPrivate}
        });
    }
});