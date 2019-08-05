const React = require("react");
const DefaultLayout = require('../layouts/default');


class Home extends React.Component {
  render() {

    let headerTitle = 'How To | Plannr';
    let user = this.props.user;

    return (

      <DefaultLayout title={headerTitle} user={user}>

        <p>
            https://blog.trello.com/eisenhower-matrix-productivity-tool-trello-board?source=post_page---------------------------
        </p>

      </DefaultLayout>
    );

  }
}

module.exports = Home;