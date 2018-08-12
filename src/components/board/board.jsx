import React from 'react'
import { Header, Image, Table, Icon, Label } from 'semantic-ui-react'
import { StyleSheet, css } from 'aphrodite';

class Board extends React.Component {
  render() {
    const { totals } = this.props;
    let totalArr = [];

    for(let user in totals) {
      totalArr.push([totals[user], user])
    }

    totalArr = totalArr.sort( (a, b) => {
      return a[0] - b[0]
    })

    const allTotals = totalArr.reverse().map((total, idx) => {
      return (
        <Table.Row>
          <Table.Cell>{idx + 1}</Table.Cell>
          <Table.Cell>{total[1]}</Table.Cell>
          <Table.Cell>{total[0]}</Table.Cell>
        </Table.Row>
      );
    });

    return (
      <div className={css(styles.tableContainer)}>
        <div>
          <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>Leaderboard</Header.Content>
          </Header>
        </div>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Ranking</Table.HeaderCell>
              <Table.HeaderCell>User</Table.HeaderCell>
              <Table.HeaderCell>Points</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {allTotals}
          </Table.Body>
        </Table>
    </div>
  );
  }
}

const styles = StyleSheet.create({
  tableContainer: {
    marginTop: '50px',
    marginLeft: '100px',
    marginRight: '100px'
  }
})

export default Board;
