import React, { Component } from "react";
import Task from "../components/Task";
import AddNew from "../components/AddNew";
import SwitchButton from "../components/SwitchButton";

import { connect } from "react-redux";

const renderSwitchButton = tasks => {
  const finishedTasks = tasks.filter(task => task.isFinished === true);

  if (finishedTasks.length > 0)
    return <SwitchButton onMain={true} text="finished tasks" />;
};
const renderTasks = tasks => {
  const tasksToRender = tasks.filter(task => task.isFinished === false);
  return tasksToRender;
};

class Home extends Component {
  render() {
    return (
      <div className="main">
        {renderSwitchButton(this.props.tasks)}
        {renderTasks(this.props.tasks).map(task => (
          <Task
            id={task.id}
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            isFinished={task.isFinished}
          />
        ))}
        <AddNew />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};
export default connect(mapStateToProps)(Home);
