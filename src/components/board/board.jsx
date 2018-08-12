import React from 'react'
import { Header, Image, Table, Icon, Label } from 'semantic-ui-react'
import { StyleSheet, css } from 'aphrodite';

class Board extends React.Component {
  render() {
    return (
      <div className={css(styles.tableContainer)}>
        ----leaderboard----
        <div>
          <Icon name='chess king' size='large' />
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
      <Table.Row>
        <Table.Cell>
          <Label ribbon><Icon name='digg' size='large' /></Label>
        </Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  tableContainer: {
    marginLeft: '100px'
  }
})

export default Board;
